"use client";

import { ReactNode } from "react";
import { PitchFormProvider } from "./PitchFormContext";
import PitchFormModal from "./PitchFormModal";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <PitchFormProvider>
      {children}
      <PitchFormModal />
    </PitchFormProvider>
  );
}
