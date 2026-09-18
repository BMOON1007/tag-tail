import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthShell } from "@/components/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";
import { getCurrentUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Log in · Tag-Tails",
  description: "Log in to your Tag-Tails account.",
};

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/account");
  }

  return (
    <AuthShell title="Welcome back." description="A little closer to your favourite companion.">
      <LoginForm />
    </AuthShell>
  );
}
