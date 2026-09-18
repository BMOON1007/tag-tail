import type { Metadata } from "next";
import { AuthShell } from "@/components/AuthShell";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Reset password · Tag-Tails",
  description: "Request a Tag-Tails password reset link.",
};

export default function ResetPasswordPage() {
  return (
    <AuthShell
      title="Forgot your password?"
      description="Enter your email and we’ll help you get back in."
      backHref="/login"
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
