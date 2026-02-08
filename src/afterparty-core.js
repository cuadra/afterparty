(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.AfterParty = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const DEFAULTS = {
    selector: ".lazy-loading",
    rootMargin: "0px 0px 0px 0px"
  };

  function loadImage(node) {
    if (!node || !node.classList) {
      return;
    }

    node.classList.add("lazy-loaded");
    node.classList.remove("lazy-loading");
  }

  function initialize(userOptions = {}) {
    if (typeof document === "undefined") {
      return;
    }

    const options = { ...DEFAULTS, ...userOptions };
    const nodes = document.querySelectorAll(options.selector);

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: options.rootMargin });

      nodes.forEach((node) => observer.observe(node));
      return;
    }

    nodes.forEach((node) => loadImage(node));
  }

  function autoInitialize(userOptions = {}) {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("load", () => {
      initialize(userOptions);
    });
  }

  return {
    initialize,
    autoInitialize,
    loadImage,
    DEFAULTS
  };
});
