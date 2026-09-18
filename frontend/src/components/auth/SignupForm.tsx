"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { PasswordField } from "@/components/PasswordField";
import { register } from "@/lib/api";
import { PLANS } from "@/lib/plans";
import type { PlanId } from "@/lib/types";

export function SignupForm({ plan }: { plan: PlanId }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const selected = PLANS[plan];

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);

    const form = new FormData(event.currentTarget);

    try {
      await register({
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        password: String(form.get("password") || ""),
        intended_plan: plan,
      });
      router.push("/account");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create your account.");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      {plan !== "basic" ? (
        <div className="note">
          You’ve chosen {selected.name} ({selected.price_label} {selected.interval_label}).
        </div>
      ) : null}
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" placeholder="e.g. Alex Taylor" required />
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        <PasswordField label="Password" autoComplete="new-password" placeholder="At least 8 characters" />
        <label className="agree">
          <input type="checkbox" name="terms" required />
          <span>
            I agree to the{" "}
            <Link className="textlink" href="/legal/terms">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link className="textlink" href="/legal/privacy">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        <button className="button" type="submit" disabled={pending}>
          {pending ? "Creating account…" : "Create account"} {!pending ? <span>↗</span> : null}
        </button>
        {error ? (
          <div className="form-feedback error" role="alert">
            {error}
          </div>
        ) : null}
      </form>
      <p className="switch">
        Already part of the family?{" "}
        <Link className="textlink" href="/login">
          Log in
        </Link>
      </p>
    </>
  );
}
