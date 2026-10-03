/* =====================================================================
   MASOK prototype — app logic (routing, page templates, forms, banners)
   Text lives in content/en.js and content/sr.js — edit those first.
   Edit this file to change page LAYOUT or behaviour.
   ===================================================================== */
(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  var LANGS = ["sr", "en"];
  var LIVE_SITE = "https://masok.eu";
  // Images are loaded from the live site (read-only). Use a full URL or a
  // local path such as "images/photo.jpg" in the content files to override.
  var IMG_BASE = "https://impro.usercontent.one/appid/oneComWsb/domain/masok.eu/media/masok.eu/onewebmedia/";
  var STORE_SUBMISSIONS = "masok_prototype_submissions";
  var STORE_COOKIES = "masok_prototype_cookies";

  var T = null;         // current language content
  var state = { lang: "sr", page: "home", path: "/" };

  /* ---------------- helpers ---------------- */
  function img(name, width) {
    if (!name) return "";
    if (/^(https?:|\/|\.|images\/|data:)/.test(name)) return name;
    return IMG_BASE + name + "?quality=85" + (width ? "&resize=" + width : "");
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function link(page, lang) {
    var L = C[lang || state.lang];
    return "#" + (L.routes[page] || L.routes.home);
  }
  function store(key, value) {
    try {
      if (value === undefined) return JSON.parse(localStorage.getItem(key) || "null");
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(value));
    } catch (e) { return null; }
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* ---------------- icons ---------------- */
  var ICONS = {
    bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/><path d="M9 10l2 2 4-4"/>',
    star: '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
    article: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M7 8h4v4H7zM14 8h3M14 12h3M7 16h10"/>',
    language: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M8.5 16l3.5-9 3.5 9M9.8 13h4.4"/>',
    plusbox: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M12 7v10M7 12h10"/>',
    handshake: '<path d="M3 12l4-4 3 1.5L13 8l4 1 4 4"/><path d="M7 8v6l5 5 1.5-1 1.5 1 4-4-1-2"/><path d="M11 13l2 2M13 11.5l3 3"/>',
    tools: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
    stethoscope: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/>',
    spray: '<rect x="7" y="9" width="8" height="12" rx="1"/><path d="M9 9V6h4v3M13 6h3l2-2M18 7h2M18 10h2"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    plane: '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',
    groups: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0M14 20a4.5 4.5 0 0 1 7.5-3.4"/>',
    chat: '<path d="M4 4h16v12H8l-4 4z"/><path d="M8 9h8M8 12h5"/>',
    network: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M12 11.5l-5.5 5.5M12 11.5l5.5 5.5"/>',
    check: '<path d="M4 12l5 5L20 6"/>',
    checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
    chevron: '<path d="M6 9l6 6 6-6"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
    up: '<path d="M6 15l6-6 6 6"/>'
  };
  var FILLED = {
    facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5z"/>',
    linkedin: '<path d="M4 9h4v12H4zM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h3.8v1.7A4.2 4.2 0 0 1 17.5 9C21 9 22 11 22 14.5V21h-4v-5.8c0-1.6-.3-2.9-2-2.9s-2.2 1.3-2.2 2.8V21H10z"/>'
  };
  function icon(name) {
    if (FILLED[name]) return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' + FILLED[name] + "</svg>";
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------------- routing ---------------- */
  function norm(p) { return (p || "/").replace(/\/+$/, "") || "/"; }
  function resolve(path) {
    var target = norm(path);
    for (var i = 0; i < LANGS.length; i++) {
      var routes = C[LANGS[i]].routes;
      for (var page in routes) if (norm(routes[page]) === target) return { lang: LANGS[i], page: page };
    }
    // news articles: <news route>/<slug>
    for (var j = 0; j < LANGS.length; j++) {
      var base = C[LANGS[j]].routes.news && norm(C[LANGS[j]].routes.news);
      if (base && target.indexOf(base + "/") === 0) {
        var slug = target.slice(base.length + 1);
        if (findArticle(LANGS[j], slug)) return { lang: LANGS[j], page: "article", slug: slug };
      }
    }
    return { lang: /^\/en(\/|$)/.test(target) ? "en" : "sr", page: "404" };
  }
  /* ---------------- news helpers ---------------- */
  function articles(lang) {
    var N = C[lang || state.lang].news;
    return N ? N.articles.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }) : [];
  }
  function findArticle(lang, slug) { return articles(lang).filter(function (a) { return a.slug === slug; })[0]; }
  function articleLink(slug, lang) { return "#" + norm(C[lang || state.lang].routes.news) + "/" + slug; }
  function fmtDate(d) {
    try {
      return new Date(d + "T12:00:00").toLocaleDateString(state.lang === "en" ? "en-GB" : "sr-Latn-RS", { day: "numeric", month: "long", year: "numeric" });
    } catch (e) { return d; }
  }
  function newsCard(a) {
    var href = articleLink(a.slug);
    return '<article class="card news-card" data-cat="' + esc(a.category) + '">' +
      '<a class="news-img" href="' + href + '" tabindex="-1" aria-hidden="true"><img src="' + img(a.image, 700) + '" alt="" loading="lazy"></a>' +
      '<div class="body"><p class="news-meta"><span class="tag">' + a.category + '</span><time datetime="' + a.date + '">' + fmtDate(a.date) + "</time></p>" +
      '<h3><a href="' + href + '">' + a.title + '</a></h3><p class="excerpt">' + a.excerpt + "</p>" +
      '<a class="read-more" href="' + href + '">' + T.news.readMore + " →</a></div></article>";
  }

  function currentPath() {
    var h = location.hash.replace(/^#/, "");
    try { h = decodeURIComponent(h); } catch (e) {}
    return h || "/";
  }

  /* ---------------- layout pieces ---------------- */
  function header() {
    var navItems = T.nav.map(function (item) {
      var active = item.page === state.page || (item.page === "news" && state.page === "article") || (item.children || []).some(function (c) { return c.page === state.page; });
      if (item.children) {
        return '<li class="has-dropdown">' +
          '<div class="nav-row"><a href="' + link(item.page) + '"' + (active ? ' class="active"' : "") + ">" + item.label + "</a>" +
          '<button class="sub-toggle" type="button" aria-expanded="false" aria-label="' + esc(item.label) + '">' + icon("chevron") + "</button></div>" +
          '<ul class="dropdown">' + item.children.map(function (c) {
            return '<li><a href="' + link(c.page) + '"' + (c.page === state.page ? ' class="active"' : "") + ">" + c.label + "</a></li>";
          }).join("") + "</ul></li>";
      }
      return '<li><a href="' + link(item.page) + '"' + (active ? ' class="active"' : "") + ">" + item.label + "</a></li>";
    }).join("");

    var langs = LANGS.map(function (l) {
      var page = C[l].routes[state.page] ? state.page : "home";
      var href = link(page, l);
      if (state.page === "article") href = findArticle(l, state.slug) ? articleLink(state.slug, l) : link("news", l);
      return '<a href="' + href + '" hreflang="' + l + '"' + (l === state.lang ? ' class="current" aria-current="true"' : "") + ">" + C[l].code + "</a>";
    }).join("");

    return '<header class="site-header"><div class="container">' +
      '<a class="logo" href="' + link("home") + '"><img src="' + img("Logo%20sajt.png", 300) + '" alt="MASOK" width="150" height="44"></a>' +
      '<nav class="main-nav" aria-label="Main"><ul>' + navItems + "</ul></nav>" +
      '<div class="lang-switch">' + langs + "</div>" +
      '<button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false">' + icon("menu") + "</button>" +
      "</div></header>";
  }

  function footer() {
    var F = T.footer;
    var maps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent('"' + F.mapsQuery + '"');
    return '<footer class="site-footer"><div class="container"><div class="footer-grid">' +
      "<div><h2>" + F.contactTitle + '</h2><p class="sub">' + F.contactSubtitle + "</p>" +
      '<ul class="contact-lines">' +
      "<li>" + icon("phone") + '<a href="tel:' + F.phone.replace(/\s/g, "") + '">' + F.phone + "</a></li>" +
      "<li>" + icon("mail") + '<a href="mailto:' + F.email + '">' + F.email + "</a></li>" +
      "<li>" + icon("pin") + '<a href="' + maps + '" target="_blank" rel="noopener">' + F.address + "</a></li></ul>" +
      '<div class="socials">' +
      '<a href="' + F.facebook + '" target="_blank" rel="noopener" aria-label="Facebook">' + icon("facebook") + "</a>" +
      '<a href="' + F.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + icon("linkedin") + "</a></div>" +
      '<p class="copyright">' + F.copyright + "</p></div>" +
      "<div><h2>" + F.hoursTitle + '</h2><p class="sub">' + F.hoursSubtitle + '</p><dl class="hours">' +
      F.hours.map(function (h) { return "<dt>" + h[0] + "</dt><dd>" + h[1] + "</dd>"; }).join("") +
      "</dl></div></div></div></footer>";
  }

  // crumbs: [[label, page], [label, page], [label]]
  function pageHead(title, crumbs) {
    return '<section class="page-head"><h1>' + title + '</h1><p class="breadcrumb">' +
      crumbs.map(function (c) { return c[1] ? '<a href="' + link(c[1]) + '">' + c[0] + "</a>" : "<span>" + c[0] + "</span>"; }).join(" &gt; ") +
      "</p></section>";
  }

  function courseCards() {
    return '<div class="grid grid-4">' + T.courseCards.map(function (c) {
      return '<article class="card course-card"><div class="icon-box icon-navy">' + icon(c.icon) + "</div>" +
        "<h3>" + c.title + "</h3><p>" + c.text + "</p>" +
        '<a class="btn btn-navy btn-sm" href="' + link(c.page) + '">' + T.viewCourse + "</a></article>";
    }).join("") + "</div>";
  }

  /* ---------------- forms ---------------- */
  var formCounter = 0;
  function uid(n) { formCounter++; return "f" + formCounter + "-" + n; }
  function req(r) { return r ? ' <span class="req">*</span>' : ""; }
  function err() { return '<div class="error" aria-live="polite"></div>'; }

  function textField(name, label, type, required, extra) {
    var id = uid(name);
    var input = type === "textarea"
      ? '<textarea id="' + id + '" name="' + name + '"' + (required ? " required" : "") + "></textarea>"
      : '<input id="' + id + '" type="' + type + '" name="' + name + '"' + (required ? " required" : "") + (extra || "") + ">";
    return '<div class="field" data-label="' + esc(label) + '"><label for="' + id + '">' + label + req(required) + "</label>" + input + err() + "</div>";
  }
  function choiceField(name, label, options, type, required, checkedIndex) {
    return '<fieldset class="field" data-label="' + esc(label) + '" data-group="' + name + '"' + (required ? ' data-required="1"' : "") + ' style="border:0;padding:0;margin:0">' +
      '<legend class="label">' + label + req(required) + '</legend><div class="choices">' +
      options.map(function (o, i) {
        return '<label><input type="' + type + '" name="' + name + '" value="' + esc(o) + '"' + (i === checkedIndex ? " checked" : "") + "> " + o + "</label>";
      }).join("") + "</div>" + err() + "</fieldset>";
  }
  function fileField(name, label, required) {
    var id = uid(name);
    return '<div class="field" data-label="' + esc(label) + '" data-file="' + name + '"' + (required ? ' data-required="1"' : "") + ">" +
      '<span class="label">' + label + req(required) + "</span>" +
      '<div class="dropzone" tabindex="0" role="button" aria-controls="' + id + '">' + icon("upload") +
      "<strong>" + T.forms.upload + "</strong></div>" +
      '<input id="' + id + '" type="file" multiple hidden accept=".pdf,.doc,.docx,.jpg,.jpeg,.png">' +
      '<ul class="file-list"></ul><div class="file-count">' + T.forms.filesCount.replace("{n}", "0") + "</div>" + err() + "</div>";
  }
  function captcha() {
    return '<div class="field" data-captcha="1"><div class="captcha"><button type="button"><span class="box"></span><span class="captcha-label">' +
      T.forms.captcha + '</span></button><small><a href="https://friendlycaptcha.com" target="_blank" rel="noopener">Friendly Captcha</a></small></div>' + err() + "</div>";
  }
  function submitBtn() { return '<div><button class="btn btn-navy" type="submit">' + T.forms.submit + "</button></div>"; }
  function wrapForm(kind, inner) {
    return '<div class="form-wrap"><form class="form" data-form="' + kind + '" novalidate>' + inner + "</form>" +
      '<div class="form-success" hidden>' + icon("checkCircle") + "<p>" + T.forms.success + '</p><button class="btn btn-navy btn-sm" type="button" data-again>' + T.forms.sendAnother + "</button></div></div>";
  }

  function applyForm(courseIndex) {
    var F = T.forms;
    return wrapForm("course-application",
      textField("name", F.name, "text", true, ' autocomplete="name"') +
      textField("email", F.email, "email", true, ' autocomplete="email"') +
      textField("phone", F.phone, "tel", true, ' autocomplete="tel"') +
      choiceField("course", F.course, F.courseOptions, "radio", true, courseIndex) +
      fileField("cv", F.attachCv, false) + captcha() + submitBtn());
  }
  function mfaForm() {
    var F = T.forms;
    var steps = '<ol class="mfa-steps">' + F.mfaSteps.map(function (s) {
      return "<li><h3>" + s.text + "</h3>" + (s.button ? '<a class="btn btn-yellow btn-sm" href="' + s.href + '" target="_blank" rel="noopener">' + s.button + "</a>" : "") + "</li>";
    }).join("") + "</ol>";
    return steps + wrapForm("mfa-application",
      textField("name", F.name, "text", true, ' autocomplete="name"') +
      textField("email", F.email, "email", true, ' autocomplete="email"') +
      textField("phone", F.phone, "tel", true, ' autocomplete="tel"') +
      fileField("europass", F.attachEuropass, true) + captcha() + submitBtn());
  }
  function contactForm() {
    var F = T.forms;
    return wrapForm("contact",
      textField("name", F.name, "text", true, ' autocomplete="name"') +
      (F.contactHasPhone ? textField("phone", F.phone, "tel", true, ' autocomplete="tel"') : "") +
      textField("email", F.email, "email", true, ' autocomplete="email"') +
      choiceField("course", F.course, F.contactCourseOptions, "radio", true, -1) +
      textField("message", F.message, "textarea", false) +
      fileField("attachment", F.attachment, false) + captcha() + submitBtn());
  }
  function partnerForm() {
    var F = T.forms;
    return wrapForm("partner-inquiry",
      choiceField("interest", F.interest, F.interestOptions, "checkbox", true, -1) +
      '<div class="form-row">' + textField("company", F.company, "text", true, ' autocomplete="organization"') +
      textField("fullname", F.fullName, "text", true, ' autocomplete="name"') + "</div>" +
      '<div class="form-row">' + textField("email", F.email, "email", true, ' autocomplete="email"') +
      textField("phone", F.phoneShort, "tel", true, ' autocomplete="tel"') + "</div>" +
      '<div class="form-row">' + textField("participants", F.participants, "number", false, ' min="1"') +
      textField("date", F.date, "date", false) + "</div>" +
      textField("project", F.project, "textarea", false) + captcha() + submitBtn());
  }

  function initForms(root) {
    $$("form[data-form]", root).forEach(function (form) {
      var wrap = form.parentNode;
      form._files = {};
      form._captcha = false;

      // file uploads
      $$("[data-file]", form).forEach(function (field) {
        var key = field.getAttribute("data-file");
        var input = $("input[type=file]", field), zone = $(".dropzone", field);
        form._files[key] = [];
        function draw() {
          $(".file-list", field).innerHTML = form._files[key].map(function (f, i) {
            return "<li><span>" + esc(f.name) + " (" + Math.max(1, Math.round(f.size / 1024)) + ' KB)</span><button type="button" data-rm="' + i + '" aria-label="Remove">✕</button></li>';
          }).join("");
          $(".file-count", field).textContent = T.forms.filesCount.replace("{n}", form._files[key].length);
        }
        function add(list) {
          var files = Array.prototype.slice.call(list || []);
          var room = 5 - form._files[key].length;
          if (files.length > room) showError(field, T.forms.tooMany); else clearError(field);
          form._files[key] = form._files[key].concat(files.slice(0, Math.max(0, room)));
          draw();
        }
        zone.addEventListener("click", function () { input.click(); });
        zone.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); input.click(); } });
        input.addEventListener("change", function () { add(input.files); input.value = ""; });
        zone.addEventListener("dragover", function (e) { e.preventDefault(); zone.classList.add("drag"); });
        zone.addEventListener("dragleave", function () { zone.classList.remove("drag"); });
        zone.addEventListener("drop", function (e) { e.preventDefault(); zone.classList.remove("drag"); add(e.dataTransfer.files); });
        field.addEventListener("click", function (e) {
          var rm = e.target.closest("[data-rm]");
          if (rm) { form._files[key].splice(+rm.getAttribute("data-rm"), 1); draw(); }
        });
        field._reset = function () { form._files[key] = []; draw(); };
      });

      // simulated captcha
      var cap = $("[data-captcha] .captcha", form);
      if (cap) {
        $("button", cap).addEventListener("click", function () {
          if (form._captcha || cap.classList.contains("working")) return;
          cap.classList.add("working");
          $(".captcha-label", cap).textContent = T.forms.captchaWorking;
          setTimeout(function () {
            cap.classList.remove("working"); cap.classList.add("done");
            $(".box", cap).innerHTML = icon("check");
            $(".captcha-label", cap).textContent = T.forms.captchaDone;
            form._captcha = true;
            clearError(cap.parentNode);
          }, 1200);
        });
      }

      form.addEventListener("input", function (e) { var f = e.target.closest(".field"); if (f) clearError(f); });
      form.addEventListener("change", function (e) { var f = e.target.closest(".field"); if (f) clearError(f); });

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var firstBad = null;
        function bad(field, msg) { showError(field, msg); if (!firstBad) firstBad = field; }

        $$(".field", form).forEach(function (field) {
          var el = $("input:not([type=radio]):not([type=checkbox]):not([type=file]), textarea", field);
          if (el && !field.hasAttribute("data-group")) {
            var v = el.value.trim();
            if (el.required && !v) bad(field, T.forms.required);
            else if (el.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) bad(field, T.forms.invalidEmail);
          }
          if (field.hasAttribute("data-group") && field.getAttribute("data-required") && !$("input:checked", field))
            bad(field, field.querySelector("[type=checkbox]") ? T.forms.chooseOne : T.forms.required);
          if (field.hasAttribute("data-file") && field.getAttribute("data-required") && !form._files[field.getAttribute("data-file")].length)
            bad(field, T.forms.required);
          if (field.hasAttribute("data-captcha") && !form._captcha) bad(field, T.forms.captchaRequired);
        });

        if (firstBad) {
          firstBad.scrollIntoView({ block: "center" });
          var focusable = $("input, textarea, button, .dropzone", firstBad);
          if (focusable) focusable.focus({ preventScroll: true });
          return;
        }

        // collect & save locally (no email is sent from the prototype)
        var fields = {};
        $$(".field", form).forEach(function (field) {
          var label = field.getAttribute("data-label");
          if (!label) return;
          if (field.hasAttribute("data-group")) fields[label] = $$("input:checked", field).map(function (i) { return i.value; }).join(", ");
          else if (field.hasAttribute("data-file")) fields[label] = form._files[field.getAttribute("data-file")].map(function (f) { return f.name; }).join(", ");
          else { var el = $("input, textarea", field); if (el) fields[label] = el.value.trim(); }
        });
        var list = store(STORE_SUBMISSIONS) || [];
        list.unshift({ id: Date.now(), date: new Date().toLocaleString(), form: form.getAttribute("data-form"), page: state.path, lang: state.lang, fields: fields });
        store(STORE_SUBMISSIONS, list);
        refreshProtoPanel();

        form.hidden = true;
        var ok = $(".form-success", wrap);
        ok.hidden = false;
        ok.scrollIntoView({ block: "center" });
      });

      var again = $("[data-again]", wrap);
      if (again) again.addEventListener("click", function () {
        form.reset();
        $$("[data-file]", form).forEach(function (f) { f._reset && f._reset(); });
        form._captcha = false;
        if (cap) { cap.classList.remove("done"); $(".box", cap).innerHTML = ""; $(".captcha-label", cap).textContent = T.forms.captcha; }
        $(".form-success", wrap).hidden = true;
        form.hidden = false;
      });
    });
  }
  function showError(field, msg) { field.classList.add("invalid"); var e = $(".error", field); if (e) e.textContent = msg; }
  function clearError(field) { field.classList.remove("invalid"); }

  /* ---------------- pages ---------------- */
  var pages = {};

  pages.home = function () {
    var H = T.home;
    return '<section class="hero" style="background-image:url(\'' + img(H.heroImage, 1920) + '\')"><div class="container">' +
      "<h1>" + H.title + '</h1><h2 class="hero-sub">' + H.subtitle + "</h2>" +
      H.lines.map(function (l) { return '<h3 class="hero-line">' + l + "</h3>"; }).join("") +
      '<div class="btn-row"><a class="btn btn-white" href="' + link(H.primaryButton.page) + '">' + H.primaryButton.label + "</a>" +
      '<a class="btn btn-navy" href="' + link(H.secondaryButton.page) + '">' + H.secondaryButton.label + "</a></div></div></section>" +

      '<section class="section bg-soft"><div class="container"><h2 class="section-title">' + H.whyTitle + '</h2><div class="grid grid-6">' +
      H.why.map(function (w) { return '<div class="card why-card"><div class="icon-box icon-yellow">' + icon(w.icon) + "</div><h3>" + w.text + "</h3></div>"; }).join("") +
      "</div></div></section>" +

      '<section class="section"><div class="container"><h2 class="section-title">' + H.coursesTitle + "</h2>" + courseCards() + "</div></section>" +

      (articles().length
        ? '<section class="section bg-soft"><div class="container"><h2 class="section-title">' + T.news.latestTitle + '</h2><div class="grid grid-3">' +
          articles().slice(0, 3).map(newsCard).join("") +
          '</div><div class="center" style="margin-top:32px"><a class="btn btn-navy" href="' + link("news") + '">' + T.news.allNews + "</a></div></div></section>"
        : "") +

      '<section class="section bg-yellow highlight"><div class="container"><h2>' + H.highlightTitle + "</h2><p>" + H.highlightText + "</p></div></section>";
  };

  pages.courses = function () {
    var P = T.coursesPage;
    return pageHead(P.title, [[P.breadcrumb[0], "home"], [P.breadcrumb[1]]]) +
      '<section class="section bg-soft"><div class="container"><h2 class="section-title">' + P.heading + "</h2>" + courseCards() + "</div></section>";
  };

  function coursePage(key) {
    var P = T.coursePages[key], CP = T.coursesPage;
    var order = ["mechanic", "assistant", "technician", "german"];
    var side = '<ul class="side-menu">' + T.courseSidebar.map(function (s) {
      return '<li><a href="' + link(s.page) + '"' + (s.page === key ? ' class="active" aria-current="page"' : "") + ">" + s.label + "</a></li>";
    }).join("") + "</ul>";
    var formHtml = P.form === "mfa"
      ? '<div class="form-card side-form"><h2>' + T.forms.mfaTitle[0] + '</h2><p class="form-sub">' + T.forms.mfaTitle[1] + "</p>" + mfaForm() + "</div>"
      : '<div class="form-card side-form"><h2>' + T.forms.applyTitle[0] + '</h2><p class="form-sub">' + T.forms.applyTitle[1] + "</p>" + applyForm(order.indexOf(key)) + "</div>";
    var blocks = P.blocks.map(function (b) {
      return "<h3>" + b.title + '</h3><ul class="info-list">' + b.items.map(function (it) {
        return "<li>" + (Array.isArray(it) ? "<strong>" + it[0] + ":</strong> " + it[1] : it) + "</li>";
      }).join("") + "</ul>";
    }).join("");

    return pageHead(CP.title, [[CP.breadcrumb[0], "home"], [CP.breadcrumb[1], "courses"], [P.crumb]]) +
      '<section class="section"><div class="container course-layout">' +
      '<aside class="course-side">' + side + formHtml + "</aside>" +
      '<article class="course-main">' +
      (P.image ? '<img class="main-img" src="' + img(P.image, 1200) + '" alt="' + esc(P.title) + '">' : "") +
      "<h2>" + P.title + "</h2>" + P.intro.map(function (p) { return "<p>" + p + "</p>"; }).join("") + blocks +
      (P.why ? "<h3>" + P.whyTitle + "</h3><p>" + P.why + "</p>" : "") +
      (P.gallery.length ? '<div class="gallery">' + P.gallery.map(function (g) { return '<img src="' + img(g, 800) + '" alt="" loading="lazy">'; }).join("") + "</div>" : "") +
      "</article></div></section>";
  }
  ["mechanic", "assistant", "technician", "german"].forEach(function (k) { pages[k] = function () { return coursePage(k); }; });

  pages.about = function () {
    var A = T.about;
    return pageHead(A.title, [[A.breadcrumb[0], "home"], [A.breadcrumb[1]]]) +
      '<section class="section"><div class="container about-grid">' +
      "<div><h2>" + A.whoTitle + "</h2>" + A.paragraphs.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
      '<a class="btn btn-navy" href="' + link("contact") + '">' + A.contactButton + "</a></div>" +
      '<div class="card"><p>' + A.founderText + "</p><p>" + A.moreInfo + ' <a href="' + A.moreInfoLink + '" target="_blank" rel="noopener">' + A.moreInfoLabel + "</a></p></div>" +
      "</div></section>" +
      '<section class="team-band"><div class="container"><h2 class="section-title">' + A.teamTitle + '</h2><div class="team-grid">' +
      A.team.map(function (m) {
        return '<div class="flip"><button class="flip-btn" type="button" aria-label="' + esc(m.name) + '"></button><div class="flip-inner">' +
          '<div class="flip-face"><img src="' + img(m.photo, 600) + '" alt="' + esc(m.name) + '" loading="lazy"><div class="flip-caption"><h3>' + m.name + "</h3><p>" + m.role + "</p></div></div>" +
          '<div class="flip-face flip-back"><h3>' + m.name + '</h3><p class="role">' + (m.backRole || m.role) + "</p>" + (m.bio ? "<p>" + m.bio + "</p>" : "") + "</div>" +
          "</div></div>";
      }).join("") + "</div></div></section>";
  };

  pages.applicants = function () {
    var A = T.applicants;
    return pageHead(A.title, [[A.breadcrumb[0], "home"], [A.breadcrumb[1]]]) +
      '<section class="section bg-soft"><div class="container"><h2 class="section-title">' + A.overviewTitle + '</h2><div class="grid grid-4">' +
      A.overview.map(function (o) {
        return '<article class="card overview-card"><img src="' + img(o.image, 600) + '" alt="" loading="lazy"><div class="body"><h3>' + o.title + "</h3><ul>" +
          o.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul></div></article>";
      }).join("") + "</div></div></section>" +

      '<section class="section bg-navy"><div class="container center"><h2 class="section-title">' + A.stepsTitle + '</h2><ol class="steps-list">' +
      A.steps.map(function (s, i) { return '<li><span class="step-num">' + (i + 1) + '</span><h3 style="text-align:left">' + s + "</h3></li>"; }).join("") +
      '</ol><a class="btn btn-white" href="' + link(A.applyButton.page) + '">' + A.applyButton.label + "</a></div></section>" +

      '<section class="section bg-yellow"><div class="container"><h2 class="section-title">' + A.getTitle + '</h2><ul class="check-list">' +
      A.get.map(function (g) { return "<li>" + icon("check") + "<h3>" + g + "</h3></li>"; }).join("") + "</ul></div></section>" +

      '<section class="section"><div class="container"><h2 class="section-title" style="color:var(--navy);font-weight:400">' + A.faqTitle + '</h2><ul class="faq">' +
      A.faq.map(function (f, i) { return '<li><span class="n">' + (i + 1) + "</span><h3>" + f[0] + "</h3><p>" + f[1] + "</p></li>"; }).join("") +
      "</ul></div></section>";
  };

  pages.contact = function () {
    var K = T.contact;
    var maps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent('"' + T.footer.mapsQuery + '"');
    return pageHead(K.title, [[K.breadcrumb[0], "home"], [K.breadcrumb[1]]]) +
      '<section class="section"><div class="container contact-grid"><div>' +
      '<h2 class="contact-head">' + K.heading.join("<br>") + '</h2><div class="people">' +
      K.people.map(function (p) {
        return '<div class="person"><img src="' + img(p.photo, 600) + '" alt="' + esc(p.name) + '" loading="lazy"><h3>' + p.name + "</h3><p>" + p.role + "</p>" +
          '<p><a href="mailto:' + p.email + '">' + p.email + '</a></p><p><a href="tel:' + p.phone.replace(/\s/g, "") + '">' + p.phone + "</a></p></div>";
      }).join("") + '</div><ul class="contact-lines">' +
      "<li>" + icon("phone") + '<a href="tel:' + K.phone + '">' + K.phone + "</a></li>" +
      "<li>" + icon("mail") + '<a href="mailto:' + K.email + '">' + K.email + "</a></li>" +
      "<li>" + icon("pin") + '<a href="' + maps + '" target="_blank" rel="noopener">' + K.address.join("<br>") + "</a></li></ul></div>" +
      '<div class="form-card">' + contactForm() + "</div></div></section>";
  };

  pages.partners = function () {
    var P = T.partners;
    if (!P) return pages["404"]();
    var num = function (arr) {
      return '<div class="grid grid-4">' + arr.map(function (s, i) {
        return '<div class="card num-card"><div class="big">' + (i + 1) + "</div><h3>" + s[0] + "</h3><p>" + s[1] + "</p></div>";
      }).join("") + "</div>";
    };
    return '<section class="hero p-hero" style="background-image:url(\'' + img(P.heroImage, 1920) + '\')"><div class="container">' +
      "<h1>" + P.title + '</h1><h2 class="hero-sub">' + P.subtitle + "</h2>" +
      P.lines.map(function (l) { return '<h3 class="hero-line">' + l + "</h3>"; }).join("") +
      '<div class="btn-row"><a class="btn btn-navy" href="' + link("partners") + '" data-scroll="partner-form">' + P.buttons[0] + "</a>" +
      '<a class="btn btn-white" href="' + link("partners") + '" data-scroll="partner-form">' + P.buttons[1] + "</a></div></div></section>" +

      '<div class="container stats"><div class="grid grid-4">' + P.stats.map(function (s) {
        return '<div class="card stat"><div class="icon-box icon-yellow">' + icon(s.icon) + "</div><h3>" + s.title + "</h3>" + s.lines.map(function (l) { return "<p>" + l + "</p>"; }).join("") + "</div>";
      }).join("") + "</div></div>" +

      '<section class="section bg-navy"><div class="container"><h2 class="section-title">' + P.servicesTitle + "</h2>" +
      P.services.map(function (s, i) {
        return '<div class="service' + (i % 2 ? " reverse" : "") + '"><div class="service-text"><h3>' + s.title + "</h3><p>" + s.text + "</p>" +
          '<a class="btn btn-navy btn-sm" href="' + link("partners") + '" data-scroll="' + s.target + '">' + P.learnMore + '</a></div><img src="' + img(s.image, 900) + '" alt="" loading="lazy"></div>';
      }).join("") + "</div></section>" +

      '<section class="section bg-yellow" id="meetings"><div class="container"><h2 class="section-title">' + P.meetingsTitle + '</h2><div class="lead-text">' +
      P.meetingsText.map(function (t) { return "<p>" + t + "</p>"; }).join("") + '</div><div class="grid grid-3">' +
      P.packages.map(function (k) {
        return '<div class="package"><p class="tag">' + k.tag + "</p><h3>" + k.title + '</h3><p class="lead">' + k.lead + "</p><ul>" +
          k.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + '</ul><p class="price">' + k.price + "</p></div>";
      }).join("") + '</div><div class="grid grid-2 extras">' +
      P.extras.map(function (x) { return "<div><h3>" + x.title + "</h3><ul>" + x.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul></div>"; }).join("") +
      "</div></div></section>" +

      '<section class="section" id="consulting"><div class="container"><h2 class="section-title" style="margin-bottom:8px">' + P.consultingTitle[0] + '</h2><h2 class="section-title">' + P.consultingTitle[1] + '</h2><div class="lead-text">' +
      P.consultingText.map(function (t) { return "<p>" + t + "</p>"; }).join("") + "</div>" + num(P.consultingSteps) +
      '<h2 class="section-title" style="margin-top:56px;font-size:24px">' + P.includesTitle + '</h2><ul class="includes">' +
      P.includes.map(function (i) { return "<li>" + icon("check") + "<span>" + i + "</span></li>"; }).join("") + "</ul>" +
      '<div class="center"><p>' + P.includesNote + "</p><p><strong>" + P.includesPrice + '</strong></p><a class="btn btn-navy" href="' + link("partners") + '" data-scroll="partner-form">' + P.buttons[1] + "</a></div></div></section>" +

      '<section class="section bg-soft"><div class="container"><h2 class="section-title">' + P.whyTitle + '</h2><div class="grid grid-4">' +
      P.why.map(function (w) { return '<div class="card why-item"><h3>' + w[0] + "</h3><p>" + w[1] + "</p></div>"; }).join("") + "</div></div></section>" +

      '<section class="section bg-navy"><div class="container center"><h2 class="section-title">' + P.accessTitle + '</h2><div class="lead-text" style="margin-bottom:0">' +
      P.accessText.map(function (t) { return "<p>" + t + "</p>"; }).join("") + "</div></div></section>" +

      '<section class="section"><div class="container"><h2 class="section-title">' + P.processTitle + "</h2>" + num(P.process) + "</div></section>" +

      '<section class="section bg-soft" id="partner-form"><div class="container"><h2 class="section-title" style="margin-bottom:12px">' + P.formTitle + '</h2><p class="lead-text">' + P.formLead + "</p>" +
      '<div class="form-card partner-form">' + partnerForm() + "</div></div></section>";
  };

  pages.news = function () {
    var N = T.news, list = articles(), cats = [];
    list.forEach(function (a) { if (cats.indexOf(a.category) < 0) cats.push(a.category); });
    var chips = cats.length > 1
      ? '<div class="chips" role="group" aria-label="' + esc(N.title) + '">' +
        ['<button class="chip active" type="button" data-cat="" aria-pressed="true">' + N.all + "</button>"].concat(cats.map(function (c) {
          return '<button class="chip" type="button" data-cat="' + esc(c) + '" aria-pressed="false">' + c + "</button>";
        })).join("") + "</div>"
      : "";
    return pageHead(N.title, [[N.breadcrumb[0], "home"], [N.breadcrumb[1]]]) +
      '<section class="section bg-soft"><div class="container"><h2 class="section-title">' + N.heading + "</h2>" + chips +
      (list.length ? '<div class="grid grid-3 news-grid">' + list.map(newsCard).join("") + "</div>" : '<p class="center">' + N.empty + "</p>") +
      "</div></section>";
  };

  pages.article = function () {
    var N = T.news, a = findArticle(state.lang, state.slug);
    if (!a) return pages["404"]();
    var others = articles().filter(function (x) { return x.slug !== a.slug; }).slice(0, 3);
    return pageHead(N.title, [[N.breadcrumb[0], "home"], [N.breadcrumb[1], "news"], [a.title]]) +
      '<section class="section"><div class="container article-wrap"><article class="article">' +
      '<p class="news-meta"><span class="tag">' + a.category + '</span><time datetime="' + a.date + '">' + fmtDate(a.date) + "</time></p>" +
      '<h2 class="article-title">' + a.title + "</h2>" +
      (a.image ? '<img class="article-img" src="' + img(a.image, 1400) + '" alt="">' : "") +
      '<p class="article-lead">' + a.excerpt + "</p>" +
      a.body.map(function (p) { return /^## /.test(p) ? "<h3>" + p.slice(3) + "</h3>" : "<p>" + p + "</p>"; }).join("") +
      '<p style="margin-top:32px"><a class="btn btn-navy btn-sm" href="' + link("news") + '">← ' + N.back + "</a></p>" +
      "</article></div></section>" +
      (others.length
        ? '<section class="section bg-soft"><div class="container"><h2 class="section-title">' + N.moreTitle + '</h2><div class="grid grid-3">' + others.map(newsCard).join("") + "</div></div></section>"
        : "");
  };

  pages["404"] = function () {
    var N = T.notFound;
    return '<section class="page-head"><h1>' + N.title + '</h1></section><section class="section center"><div class="container"><p>' + N.text + '</p><a class="btn btn-navy" href="' + link("home") + '">' + N.back + "</a></div></section>";
  };

  /* ---------------- cookie banner ---------------- */
  function cookieBanner() {
    var old = $(".cookie-banner"); if (old) old.remove();
    if (store(STORE_COOKIES)) return;
    var K = T.cookies;
    var el = document.createElement("div");
    el.className = "cookie-banner"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Cookies");
    el.innerHTML = "<p>" + K.text + '</p><div class="btn-row">' +
      '<button class="btn btn-outline" data-c="prefs">' + K.preferences + '</button><button class="btn btn-dark" data-c="decline">' + K.decline +
      '</button><button class="btn btn-dark" data-c="accept">' + K.accept + "</button></div>";
    el.addEventListener("click", function (e) {
      var b = e.target.closest("[data-c]"); if (!b) return;
      var c = b.getAttribute("data-c");
      if (c === "accept") { store(STORE_COOKIES, { choice: "accept", analytics: true, marketing: true }); el.remove(); }
      if (c === "decline") { store(STORE_COOKIES, { choice: "decline", analytics: false, marketing: false }); el.remove(); }
      if (c === "prefs") cookiePrefs();
    });
    document.body.appendChild(el);
  }
  function cookiePrefs() {
    var K = T.cookies, cur = store(STORE_COOKIES) || {};
    var m = document.createElement("div");
    m.className = "modal-backdrop";
    m.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="cp-title"><h2 id="cp-title">' + K.prefsTitle + "</h2>" +
      '<label class="toggle-row"><span>' + K.essential + '</span><input type="checkbox" checked disabled></label>' +
      '<label class="toggle-row"><span>' + K.analytics + '</span><input type="checkbox" data-k="analytics"' + (cur.analytics ? " checked" : "") + "></label>" +
      '<label class="toggle-row"><span>' + K.marketing + '</span><input type="checkbox" data-k="marketing"' + (cur.marketing ? " checked" : "") + "></label>" +
      '<div class="btn-row" style="margin-top:20px"><button class="btn btn-navy" data-save>' + K.save + "</button></div></div>";
    function close() { m.remove(); document.removeEventListener("keydown", onKey); }
    function onKey(e) { if (e.key === "Escape") close(); }
    m.addEventListener("click", function (e) {
      if (e.target === m) close();
      if (e.target.closest("[data-save]")) {
        store(STORE_COOKIES, { choice: "custom", analytics: $("[data-k=analytics]", m).checked, marketing: $("[data-k=marketing]", m).checked });
        close(); var b = $(".cookie-banner"); if (b) b.remove();
      }
    });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(m);
    $("[data-save]", m).focus();
  }

  /* ---------------- prototype toolbar ---------------- */
  function protoToolbar() {
    if ($(".proto-fab")) return;
    var fab = document.createElement("button");
    fab.className = "proto-fab"; fab.type = "button";
    fab.innerHTML = '<span class="dot"></span>PROTOTYPE';
    var panel = document.createElement("div");
    panel.className = "proto-panel"; panel.hidden = true;
    fab.addEventListener("click", function () { panel.hidden = !panel.hidden; if (!panel.hidden) refreshProtoPanel(); });
    panel.addEventListener("click", function (e) {
      var a = e.target.closest("[data-p]"); if (!a) return;
      var act = a.getAttribute("data-p");
      if (act === "cookies") { store(STORE_COOKIES, null); cookieBanner(); }
      if (act === "clear" && confirm("Delete all test submissions saved in this browser?")) { store(STORE_SUBMISSIONS, null); refreshProtoPanel(); }
      if (act === "export") {
        var blob = new Blob([JSON.stringify(store(STORE_SUBMISSIONS) || [], null, 2)], { type: "application/json" });
        var url = URL.createObjectURL(blob), dl = document.createElement("a");
        dl.href = url; dl.download = "masok-prototype-submissions.json"; dl.click();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      }
      if (act === "close") panel.hidden = true;
    });
    document.body.appendChild(fab);
    document.body.appendChild(panel);
  }
  function refreshProtoPanel() {
    var panel = $(".proto-panel"); if (!panel || panel.hidden) return;
    var subs = store(STORE_SUBMISSIONS) || [];
    // News doesn't exist on the live site yet, so those pages link to its home page
    var live = LIVE_SITE + (/^(404|news|article)$/.test(state.page) ? (state.lang === "en" ? "/en/" : "/") : state.path);
    panel.innerHTML = "<h3>Local prototype</h3><p>This copy runs on your computer only. Changes here never affect masok.eu. Forms don't send email — submissions are saved in this browser so you can test them.</p>" +
      '<a class="pbtn" href="' + esc(live) + '" target="_blank" rel="noopener">Open this page on the live site ↗</a>' +
      '<button data-p="cookies">Show cookie banner again</button><button data-p="close">Close</button>' +
      "<h3>Test submissions (" + subs.length + ")</h3>" +
      (subs.length ? '<button data-p="export">Export JSON</button><button data-p="clear">Clear all</button>' : "<p>None yet — fill in any form on the site.</p>") +
      subs.map(function (s) {
        return '<div class="sub-item"><div class="meta">' + esc(s.date) + " · " + esc(s.form) + " · " + esc(s.page) + "</div><dl>" +
          Object.keys(s.fields).map(function (k) { return "<dt>" + esc(k) + "</dt><dd>" + (esc(s.fields[k]) || "—") + "</dd>"; }).join("") + "</dl></div>";
      }).join("");
  }

  /* ---------------- behaviours after each render ---------------- */
  function afterRender(root) {
    var body = document.body;
    var toggle = $(".menu-toggle", root);
    toggle.addEventListener("click", function () {
      var open = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.innerHTML = icon(open ? "close" : "menu");
    });
    $$(".sub-toggle", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var li = b.closest(".has-dropdown");
        var open = li.classList.toggle("open");
        b.setAttribute("aria-expanded", open);
      });
    });
    $$(".flip-btn", root).forEach(function (b) {
      b.addEventListener("click", function () { b.parentNode.classList.toggle("flipped"); });
    });
    $$("[data-scroll]", root).forEach(function (a) {
      a.addEventListener("click", function (e) {
        var t = document.getElementById(a.getAttribute("data-scroll"));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth" }); }
      });
    });
    // news category filter
    $$(".chip", root).forEach(function (chip) {
      chip.addEventListener("click", function () {
        var cat = chip.getAttribute("data-cat");
        $$(".chip", root).forEach(function (c) { c.classList.toggle("active", c === chip); c.setAttribute("aria-pressed", c === chip); });
        $$(".news-grid .news-card", root).forEach(function (card) { card.hidden = !!cat && card.getAttribute("data-cat") !== cat; });
      });
    });
    initForms(root);

    // reveal-on-scroll
    var targets = $$(".section-title, .card, .service, .package, .flip, .steps-list li, .check-list li, .faq li, .course-main, .course-side", root);
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -40px 0px" });
      targets.forEach(function (t) { t.classList.add("reveal"); io.observe(t); });
    }
  }

  /* ---------------- main render ---------------- */
  function render() {
    var path = currentPath();
    var r = resolve(path);
    var samePage = r.page === state.page && r.lang === state.lang && r.slug === state.slug && state.rendered;
    state.lang = r.lang; state.page = r.page; state.slug = r.slug; state.path = path; state.rendered = true;
    T = C[state.lang];

    document.documentElement.lang = state.lang === "en" ? "en-GB" : "sr";
    var art = state.page === "article" && findArticle(state.lang, state.slug);
    document.title = art ? art.title + " | MASOK" : (T.titles && T.titles[state.page]) || (T.notFound.title + " | MASOK");
    document.body.classList.remove("nav-open");

    var app = document.getElementById("app");
    app.innerHTML = header() + '<main id="main">' + (pages[state.page] || pages["404"])() + "</main>" + footer();
    afterRender(app);
    cookieBanner();
    refreshProtoPanel();
    if (!samePage) window.scrollTo({ top: 0, behavior: "instant" });
  }

  // back-to-top
  function toTop() {
    var b = document.createElement("button");
    b.className = "to-top"; b.type = "button"; b.setAttribute("aria-label", "Back to top");
    b.innerHTML = icon("up");
    b.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    document.body.appendChild(b);
    window.addEventListener("scroll", function () { b.classList.toggle("show", window.scrollY > 400); }, { passive: true });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
      document.body.classList.remove("nav-open");
      var t = $(".menu-toggle"); if (t) { t.setAttribute("aria-expanded", "false"); t.innerHTML = icon("menu"); }
    }
  });
  window.addEventListener("hashchange", render);
  document.addEventListener("DOMContentLoaded", function () {
    toTop();
    protoToolbar();
    render();
  });
})();
