import Link from "next/link";

export function CtaBanner() {
  return (
    <div className="cta">
      <div>
        <h2>Little tag. Big peace of mind.</h2>
        <p>Start with a free account. Keep your pet’s details close.</p>
      </div>
      <Link className="button yellow" href="/signup">
        Get started — it’s free <span>↗</span>
      </Link>
    </div>
  );
}
