(function () {
  const config = window.SITE_CONFIG || {};

  function fill(selector, value, attribute) {
    document.querySelectorAll(selector).forEach((node) => {
      if (attribute) {
        node.setAttribute(attribute, value || "");
      } else {
        node.textContent = value || "";
      }
    });
  }

  function initBanner() {
    const banner = document.querySelector("[data-placeholder-banner]");
    if (!banner) return;

    if (config.placeholdersPresent) {
      banner.hidden = false;
    } else {
      banner.remove();
    }
  }

  fill("[data-brand-name]", config.brandName);
  fill("[data-studio-name]", config.studioName);
  fill("[data-support-email]", config.supportEmail);
  fill("[data-business-address]", config.businessAddress);
  fill("[data-support-window]", config.supportResponseWindow);
  fill("[data-effective-date]", config.effectiveDate);
  fill("[data-support-url]", config.supportUrl, "href");
  fill("[data-privacy-url]", config.privacyUrl, "href");

  document.querySelectorAll("[data-support-url]").forEach((node) => {
    if (!node.textContent.trim()) {
      node.textContent = config.supportUrl || "";
    }
  });

  document.querySelectorAll("[data-privacy-url]").forEach((node) => {
    if (!node.textContent.trim()) {
      node.textContent = config.privacyUrl || "";
    }
  });

  document.querySelectorAll("[data-support-mailto]").forEach((node) => {
    node.setAttribute("href", "mailto:" + (config.supportEmail || ""));
  });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  initBanner();
})();
