"use client";

import { useState } from "react";

type PasswordFieldProps = {
  id?: string;
  name?: string;
  label: string;
  autoComplete?: string;
  placeholder?: string;
};

export function PasswordField({
  id = "password",
  name = "password",
  label,
  autoComplete = "current-password",
  placeholder = "Enter your password",
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="password-field">
        <input
          id={id}
          name={name}
          type={visible ? "text" : "password"}
          minLength={8}
          autoComplete={autoComplete}
          placeholder={placeholder}
          required
        />
        <button
          type="button"
          className="show-password"
          aria-label={visible ? "Hide password" : "Show password"}
          onClick={() => setVisible((value) => !value)}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
}
