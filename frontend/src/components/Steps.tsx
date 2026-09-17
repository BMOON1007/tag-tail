const steps = [
  ["01", "A profile, just for them.", "Add your pet’s photo and basic details, plus the contact information a finder needs."],
  ["02", "A little tag on their collar.", "Each QR tag has its own unique code, linked to one pet’s online profile."],
  ["03", "A scan. A connection.", "A finder scans the tag with their phone and opens your pet’s contact page. No app needed."],
] as const;

export function Steps() {
  return (
    <div className="steps">
      {steps.map(([number, title, copy]) => (
        <article className="step" key={number}>
          <span className="num">{number}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </div>
  );
}
