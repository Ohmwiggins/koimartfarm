let notified = false;

/**
 * Tells the parent wrapper page (koimartfarm.com embeds this app in an
 * iframe) that real content is rendered, so it can hide its splash screen.
 * Target origin is "*" because the payload carries no sensitive data and
 * the wrapper domain is shared across projects.
 */
export function notifyAppReady() {
  if (notified || typeof window === "undefined" || window.parent === window) {
    return;
  }
  notified = true;
  window.parent.postMessage("app-ready", "*");
}
