"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { PasswordField } from "@/components/PasswordField";
import { login } from "@/lib/api";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);

    const form = new FormData(event.currentTarget);

    try {
      await login({
        email: String(form.get("email") || ""),
        password: String(form.get("password") || ""),
        remember: form.get("remember") === "on",
      });
      router.push("/account");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to log in.");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        <PasswordField label="Password" autoComplete="current-password" placeholder="Enter your password" />
        <div className="form-row">
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
          <Link className="textlink" href="/reset-password">
            Forgot password?
          </Link>
        </div>
        <button className="button" type="submit" disabled={pending}>
          {pending ? "Logging in…" : "Log in"} {!pending ? <span>↗</span> : null}
        </button>
        {error ? (
          <div className="form-feedback error" role="alert">
            {error}
          </div>
        ) : null}
      </form>
      <p className="switch">
        New to Tag-Tails?{" "}
        <Link className="textlink" href="/signup">
          Create an account
        </Link>
      </p>
    </>
  );
}
