"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { extraPagesEnabled } from "@/lib/site";

const STORAGE_KEY = "tag_tails_cookie_notice";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(STORAGE_KEY) !== "accepted");
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-notice" role="dialog" aria-label="Cookie notice">
      <p>
        We use essential cookies to keep you signed in and run Tag-Tails.
        {extraPagesEnabled ? (
          <>
            {" "}
            See our{" "}
            <Link className="textlink" href="/legal/cookies">
              Cookie Policy
            </Link>
            .
          </>
        ) : null}
      </p>
      <button
        className="button small"
        type="button"
        onClick={() => {
          window.localStorage.setItem(STORAGE_KEY, "accepted");
          setVisible(false);
        }}
      >
        OK
      </button>
    </div>
  );
}
