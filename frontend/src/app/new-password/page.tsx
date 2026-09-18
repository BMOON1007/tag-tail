import type { Metadata } from "next";
import { AuthShell } from "@/components/AuthShell";
import { NewPasswordForm } from "@/components/auth/NewPasswordForm";

export const metadata: Metadata = {
  title: "Choose a new password · Tag-Tails",
  description: "Set a new password for your Tag-Tails account.",
};

export default async function NewPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string; email?: string }>;
}) {
  const params = await searchParams;

  return (
    <AuthShell
      title="Choose a new password."
      description="Use at least 8 characters for your new password."
      backHref="/login"
    >
      <NewPasswordForm email={params.email || ""} token={params.token || ""} />
    </AuthShell>
  );
}
