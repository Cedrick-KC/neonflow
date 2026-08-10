import './SubscribeWidget.css';
import React, { useState } from "react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_6b0rbuc";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_bqijtya";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "QICH0i1piXaX-4Rtx";

function SubscribeWidget() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const loadEmailJS = () =>
    new Promise((resolve, reject) => {
      if (window.emailjs) return resolve(window.emailjs);

      const existing = document.getElementById("emailjs-sdk");
      if (existing) {
        existing.addEventListener("load", () => resolve(window.emailjs));
        return;
      }

      const script = document.createElement("script");
      script.id = "emailjs-sdk";
      script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.onload = () => resolve(window.emailjs);
      script.onerror = () => reject(new Error("Failed to load EmailJS"));
      document.head.appendChild(script);
    });

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const ejs = await loadEmailJS();
      await ejs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { subscriber_email: email, reply_to: email },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setMessage("Welcome to Vanguard Dispatch. Check your inbox soon!");
      setEmail("");
    } catch (err) {
      console.error("Subscription error:", err);
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <aside className="subscribe-widget">
      <div className="subscribe-inner">
        <span className="subscribe-badge">VANGUARD DISPATCH</span>
        <h3 className="subscribe-heading">Engineering Newsletter</h3>
        <p className="subscribe-sub">
          Receive curated engineering updates, performance techniques, and architectural insights.
        </p>

        <form className="subscribe-form" onSubmit={handleSubscribe} noValidate>
          <div className="subscribe-input-wrap">
            <input
              type="email"
              className="subscribe-input"
              placeholder="developer@domain.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              disabled={status === "loading" || status === "success"}
              aria-label="Email address"
            />

            <button
              type="submit"
              className={`subscribe-btn ${status}`}
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? (
                <span className="btn-spinner" aria-hidden="true" />
              ) : status === "success" ? (
                "✓ Joined"
              ) : (
                "Subscribe →"
              )}
            </button>
          </div>

          {message && (
            <p className={`subscribe-feedback ${status}`} role="alert">
              {message}
            </p>
          )}
        </form>

        <p className="subscribe-note">No noise. Unsubscribe at any time.</p>
      </div>
    </aside>
  );
}

export default SubscribeWidget;