"use client";

import { useState } from "react";
import { FAQ_GROUPS, FAQ_ITEMS } from "@/lib/faq";

export function FaqList() {
  const [group, setGroup] = useState<(typeof FAQ_GROUPS)[number]>("All questions");

  return (
    <div className="faq-layout">
      <div className="filters">
        {FAQ_GROUPS.map((item) => (
          <button
            key={item}
            className={`filter${group === item ? " active" : ""}`}
            type="button"
            onClick={() => setGroup(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {FAQ_ITEMS.filter((item) => group === "All questions" || item.group === group).map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
