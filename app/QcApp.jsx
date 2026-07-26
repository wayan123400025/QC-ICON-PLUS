"use client";

import { useEffect, useRef } from "react";

export default function QcApp({ html }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Guard so the legacy script (which declares top-level consts/lets)
    // is never injected twice — important with fast refresh / re-mounts.
    if (window.__qcAppScriptLoaded) {
      if (typeof window.initQcApp === "function") {
        window.initQcApp();
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "/qc-app.js";
    script.async = false;
    script.onload = () => {
      window.__qcAppScriptLoaded = true;
      if (typeof window.initQcApp === "function") {
        window.initQcApp();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Keep the script/state alive across client-side navigations;
      // nothing to clean up here since this is a single-page app.
    };
  }, []);

  return (
    <div
      ref={containerRef}
      // The original app is a large vanilla HTML/CSS/JS single page app.
      // We preserve its markup exactly and boot its logic on mount so all
      // existing behaviour (stepper, tables, signature pads, print preview)
      // keeps working unchanged inside Next.js.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
