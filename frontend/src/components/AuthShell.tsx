import Link from "next/link";
import type { ReactNode } from "react";

type AuthShellProps = {
  title: ReactNode;
  description: string;
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
};

export function AuthShell({ title, description, children, backHref, backLabel }: AuthShellProps) {
  return (
    <div className="wrap">
      <section className="auth">
        <div className="auth-art">
          <div>
            <span className="eyebrow">A little tag. A lasting connection.</span>
            <h2>
              Because their
              <br />
              favourite place
              <br />
              is <em>with you.</em>
            </h2>
          </div>
          <img src="/dog.jpg" alt="Happy golden retriever outdoors" />
        </div>
        <div className="auth-form">
          {backHref ? (
            <Link className="back" href={backHref}>
              ← {backLabel || "Back to log in"}
            </Link>
          ) : null}
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
      </section>
    </div>
  );
}
