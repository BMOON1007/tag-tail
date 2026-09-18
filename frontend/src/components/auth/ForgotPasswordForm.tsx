"use client";

import { useState, type FormEvent } from "react";
import { forgotPassword } from "@/lib/api";

export function ForgotPasswordForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setPending(true);

    const form = new FormData(event.currentTarget);

    try {
      const result = await forgotPassword(String(form.get("email") || ""));
      setSuccess(result.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send a reset link.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email address</label>
      <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      <button className="button" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send reset link"} {!pending ? <span>↗</span> : null}
      </button>
      {error ? (
        <div className="form-feedback error" role="alert">
          {error}
        </div>
      ) : null}
      {success ? (
        <div className="form-feedback success" role="status">
          {success}
        </div>
      ) : null}
    </form>
  );
}
