"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { logout } from "@/lib/api";
import type { User } from "@/lib/types";

const links = [
  { href: "/features", label: "How it works" },
  { href: "/pricing", label: "Our plans" },
  { href: "/faq", label: "FAQs" },
];

export function Header({ user }: { user: User | null }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);

  async function handleLogout() {
    setLeaving(true);
    try {
      await logout();
      router.push("/");
      router.refresh();
    } finally {
      setLeaving(false);
      setOpen(false);
    }
  }

  return (
    <header className={open ? "open" : undefined}>
      <Link href="/" className="logo" aria-label="Tag-Tails home">
        tag<span>•</span>tails
      </Link>
      <nav aria-label="Main navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        {user ? (
          <Link href="/account" className={pathname === "/account" ? "active" : undefined} onClick={() => setOpen(false)}>
            Account
          </Link>
        ) : null}
      </nav>
      <div className="navright">
        {user ? (
          <>
            <Link href="/account" className="login account-link">
              Account
            </Link>
            <button className="button small" type="button" onClick={handleLogout} disabled={leaving}>
              {leaving ? "Logging out" : "Log out"}
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="login">
              Log in
            </Link>
            <Link href="/signup" className="button small">
              Get started <span>↗</span>
            </Link>
          </>
        )}
      </div>
      <button
        className="menu"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        type="button"
        onClick={() => setOpen((value) => !value)}
      >
        ☰
      </button>
    </header>
  );
}
