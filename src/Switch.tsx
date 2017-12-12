import * as React from "react";

export interface SwitchProps {
  on?: boolean;
  className?: string;
  onClick?(): void;
}

export default function Switch({ on, className = "", ...props }: SwitchProps) {
  return (
    <div className="toggle">
      <input className="toggle-input" type="checkbox" />
      <button
        className={`${className} toggle-btn ${on ? "toggle-btn-on" : "toggle-btn-off"}`}
        {...props}
      />
    </div>
  );
}
