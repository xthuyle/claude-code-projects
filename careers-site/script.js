(function () {
  "use strict";

  var form = document.getElementById("application-form");
  if (!form) return;

  var DRAFT_KEY = "tl-careers-application-draft";
  var summary = document.getElementById("error-summary");
  var status = document.getElementById("submit-status");
  var submitBtn = document.getElementById("submit-btn");

  // JS takes over validation; without JS the browser's native `required` checks still apply.
  form.noValidate = true;

  var MESSAGES = {
    "full-name": "Please enter your full name.",
    "email": "Please enter your email address.",
    "location": "Please enter your location or time zone.",
    "introduction": "Please add a brief introduction and your relevant experience.",
    "excites-you": "Please tell me what excites you most about this opportunity.",
    "initiative": "Please share an example of a time you took initiative.",
    "ai-usage": "Please describe how you use AI in your day-to-day work.",
    "creator-experience": "Please describe your experience with creators, social media, online businesses or digital products.",
    "availability": "Please share your availability and earliest start date.",
    "privacy-consent": "Please confirm you agree to the privacy notice."
  };

  var LABELS = {
    "full-name": "Full name",
    "email": "Email address",
    "location": "Location / time zone",
    "profile-link": "LinkedIn, portfolio or website",
    "introduction": "Brief introduction",
    "excites-you": "What excites you",
    "initiative": "Taking initiative",
    "ai-usage": "How you use AI",
    "creator-experience": "Creator and digital experience",
    "availability": "Availability",
    "cv-link": "CV or portfolio link",
    "video-link": "Introduction video link",
    "privacy-consent": "Privacy consent"
  };

  function fields() {
    return Array.prototype.filter.call(form.elements, function (el) {
      return el.id && el.name && el.name !== "bot-field" && el.type !== "hidden" && el.type !== "submit";
    });
  }

  function looksLikeUrl(value) {
    return /^(https?:\/\/)?[^\s.]+\.[^\s]{2,}$/i.test(value);
  }

  function emailValid(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }

  function validateField(el) {
    var value = el.type === "checkbox" ? el.checked : el.value.trim();
    var msg = "";

    if (el.required && !value) {
      msg = MESSAGES[el.name] || "This field is required.";
    } else if (el.type === "email" && value && !emailValid(value)) {
      msg = "Please enter a valid email address, like name@example.com.";
    } else if (el.dataset.type === "url" && value && !looksLikeUrl(value)) {
      msg = "Please enter a valid link, like https://example.com.";
    }

    setError(el, msg);
    return !msg;
  }

  function setError(el, msg) {
    var errorEl = document.getElementById(el.id + "-error");
    var described = (el.getAttribute("aria-describedby") || "").split(" ").filter(function (id) {
      return id && id !== el.id + "-error";
    });

    if (msg) {
      el.setAttribute("aria-invalid", "true");
      described.push(el.id + "-error");
      if (errorEl) { errorEl.textContent = msg; errorEl.hidden = false; }
    } else {
      el.removeAttribute("aria-invalid");
      if (errorEl) { errorEl.textContent = ""; errorEl.hidden = true; }
    }

    if (described.length) el.setAttribute("aria-describedby", described.join(" "));
    else el.removeAttribute("aria-describedby");
  }

  function showSummary(invalid) {
    if (!invalid.length) {
      summary.hidden = true;
      summary.innerHTML = "";
      return;
    }
    var html = "<h3>Please check " + (invalid.length === 1 ? "1 field" : invalid.length + " fields") + " before submitting:</h3><ul>";
    invalid.forEach(function (el) {
      html += '<li><a href="#' + el.id + '">' + (LABELS[el.name] || el.name) + "</a></li>";
    });
    html += "</ul>";
    summary.innerHTML = html;
    summary.hidden = false;
    summary.scrollIntoView({ block: "start", behavior: "auto" });
    summary.focus({ preventScroll: true });
  }

  summary.addEventListener("click", function (e) {
    var link = e.target.closest("a");
    if (!link) return;
    e.preventDefault();
    var target = document.getElementById(link.getAttribute("href").slice(1));
    if (target) {
      target.scrollIntoView({ block: "center" });
      target.focus({ preventScroll: true });
    }
  });

  // Re-validate as people correct errors, without nagging before they've tried to submit.
  form.addEventListener("input", function (e) {
    if (e.target.getAttribute("aria-invalid") === "true") validateField(e.target);
    saveDraft();
  });
  form.addEventListener("change", function (e) {
    if (e.target.getAttribute("aria-invalid") === "true") validateField(e.target);
  });
  form.addEventListener("focusout", function (e) {
    var el = e.target;
    if (el.value && (el.type === "email" || el.dataset.type === "url")) validateField(el);
  });

  // Draft autosave: in-app browsers (Instagram, TikTok) often reload when you switch apps.
  function saveDraft() {
    try {
      var data = {};
      fields().forEach(function (el) {
        if (el.type !== "checkbox") data[el.name] = el.value;
      });
      localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    } catch (err) { /* storage unavailable — ignore */ }
  }

  function restoreDraft() {
    try {
      var raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      fields().forEach(function (el) {
        if (el.type !== "checkbox" && typeof data[el.name] === "string" && !el.value) el.value = data[el.name];
      });
    } catch (err) { /* ignore */ }
  }

  function clearDraft() {
    try { localStorage.removeItem(DRAFT_KEY); } catch (err) { /* ignore */ }
  }

  restoreDraft();

  function normaliseUrls() {
    fields().forEach(function (el) {
      var v = el.value.trim();
      if (el.dataset.type === "url" && v && !/^https?:\/\//i.test(v)) el.value = "https://" + v;
    });
  }

  function setStatus(msg, isError) {
    status.textContent = msg;
    status.classList.toggle("is-error", !!isError);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var invalid = fields().filter(function (el) { return !validateField(el); });
    showSummary(invalid);
    if (invalid.length) {
      setStatus("", false);
      return;
    }

    normaliseUrls();
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting…";
    setStatus("Sending your application…", false);

    var body = new URLSearchParams(new FormData(form)).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body
    })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        clearDraft();
        window.location.assign("/thank-you");
      })
      .catch(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit application";
        setStatus("Sorry — your application didn't go through. Your answers are still here, so please check your connection and try again. If it keeps happening, email twe@xthuyleofficial.com.", true);
      });
  });
})();
