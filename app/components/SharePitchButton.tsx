"use client";

import { usePitchForm } from "./PitchFormContext";

export default function SharePitchButton({ className }: { className?: string }) {
  const { setOpen } = usePitchForm();
  return (
    <button onClick={() => setOpen(true)} className={className}>
      Share your pitch
    </button>
  );
}
