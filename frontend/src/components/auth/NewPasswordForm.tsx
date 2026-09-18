"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { PasswordField } from "@/components/PasswordField";
import { resetPassword } from "@/lib/api";

export function NewPasswordForm({ email, token }: { email: string; token: string }) {
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
      const result = await resetPassword({
        email,
        token,
        password: String(form.get("password") || ""),
      });
      setSuccess(result.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to update your password.");
    } finally {
      setPending(false);
    }
  }

  if (!email || !token) {
    return (
      <div className="form-feedback error" role="alert">
        This reset link is missing details. Please request a new one from{" "}
        <Link className="textlink" href="/reset-password">
          the password reset page
        </Link>
        .
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <PasswordField label="New password" autoComplete="new-password" placeholder="At least 8 characters" />
      <button className="button" type="submit" disabled={pending}>
        {pending ? "Saving…" : "Save new password"} {!pending ? <span>↗</span> : null}
      </button>
      {error ? (
        <div className="form-feedback error" role="alert">
          {error}
        </div>
      ) : null}
      {success ? (
        <div className="form-feedback success" role="status">
          {success}{" "}
          <Link className="textlink" href="/login">
            Return to log in
          </Link>
        </div>
      ) : null}
    </form>
  );
}
