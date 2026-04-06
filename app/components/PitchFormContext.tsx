"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const PitchFormContext = createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
}>({ open: false, setOpen: () => {} });

export function PitchFormProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <PitchFormContext.Provider value={{ open, setOpen }}>
      {children}
    </PitchFormContext.Provider>
  );
}

export function usePitchForm() {
  return useContext(PitchFormContext);
}
