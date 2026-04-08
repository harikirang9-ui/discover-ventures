"use client";

import { useState, useRef, useEffect } from "react";
import { usePitchForm } from "./PitchFormContext";

const SECTORS = [
  "Fintech",
  "SaaS",
  "Mobility",
  "Healthtech",
  "Consumer",
  "Deeptech",
  "Marketplace",
  "Other",
];

const STAGES = [
  "Idea",
  "MVP",
  "Pre-Seed",
  "Seed",
  "Pre-Series A",
  "Series A",
  "Series B+",
];

const STEPS = [
  "Company Information",
  "Founding Team",
  "Fundraising Details",
  "Financial Metrics",
];

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUrl(url: string) {
  if (!url) return true; // optional
  const u = url.trim();
  // Must contain at least one dot with valid TLD, no commas or spaces
  if (/[,\s]/.test(u)) return false;
  return /^(https?:\/\/)?(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]*(\.[a-zA-Z]{2,})+([/\w\-.~:?#[\]@!$&'()*+;=]*)?$/.test(u);
}

function normalizeUrl(url: string): string {
  if (!url) return url;
  let u = url.trim();
  // Add https:// if no protocol
  if (!/^https?:\/\//i.test(u)) {
    u = "https://" + u;
  }
  // Add www. if missing after protocol
  if (!/^https?:\/\/www\./i.test(u)) {
    u = u.replace(/^(https?:\/\/)/i, "$1www.");
  }
  return u;
}

export default function PitchFormModal() {
  const { open, setOpen } = usePitchForm();
  const [step, setStep] = useState(0);
  const [showFounder2, setShowFounder2] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    startupName: "",
    websiteUrl: "",
    sector: "",
    stage: "",
    overview: "",
    founder1Name: "",
    founder1Role: "",
    founder1Linkedin: "",
    founder1Email: "",
    founder1Mobile: "",
    founder2Name: "",
    founder2Role: "",
    founder2Linkedin: "",
    founder2Email: "",
    founder2Mobile: "",
    fundingAsk: "",
    pitchDeck: null as File | null,
    arr: "",
    runway: "",
  });

  const set = (key: string, value: string | File | null) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    // Clear error on change
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const close = () => {
    setOpen(false);
    setStep(0);
    setShowFounder2(false);
    setErrors({});
    setForm({
      startupName: "",
      websiteUrl: "",
      sector: "",
      stage: "",
      overview: "",
      founder1Name: "",
      founder1Role: "",
      founder1Linkedin: "",
      founder1Email: "",
      founder1Mobile: "",
      founder2Name: "",
      founder2Role: "",
      founder2Linkedin: "",
      founder2Email: "",
      founder2Mobile: "",
      fundingAsk: "",
      pitchDeck: null,
      arr: "",
      runway: "",
    });
  };

  const validateStep = (s: number): boolean => {
    const errs: Record<string, string> = {};

    if (s === 0) {
      if (!form.startupName.trim()) errs.startupName = "Startup name is required";
      if (!form.websiteUrl.trim()) errs.websiteUrl = "Website is required";
      else if (!isValidUrl(form.websiteUrl)) errs.websiteUrl = "Enter a valid URL";
      if (!form.sector) errs.sector = "Select a sector";
      if (!form.stage) errs.stage = "Select a stage";
      if (!form.overview.trim()) errs.overview = "Overview is required";
      if (form.overview.trim().length > 0 && form.overview.trim().length < 50)
        errs.overview = "Overview should be at least 50 characters";
    }

    if (s === 1) {
      if (!form.founder1Name.trim()) errs.founder1Name = "Founder name is required";
      if (!form.founder1Role.trim()) errs.founder1Role = "Role is required";
      if (!form.founder1Linkedin.trim()) errs.founder1Linkedin = "LinkedIn profile is required";
      if (!form.founder1Email.trim()) errs.founder1Email = "Email is required";
      else if (!isValidEmail(form.founder1Email)) errs.founder1Email = "Enter a valid email";
      if (!form.founder1Mobile.trim()) errs.founder1Mobile = "Mobile number is required";
      else if (form.founder1Mobile.replace(/\D/g, "").length !== 10)
        errs.founder1Mobile = "Enter a valid 10-digit number";

      if (showFounder2) {
        if (!form.founder2Name.trim()) errs.founder2Name = "Founder name is required";
        if (!form.founder2Role.trim()) errs.founder2Role = "Role is required";
        if (!form.founder2Linkedin.trim()) errs.founder2Linkedin = "LinkedIn profile is required";
        if (!form.founder2Email.trim()) errs.founder2Email = "Email is required";
        else if (!isValidEmail(form.founder2Email)) errs.founder2Email = "Enter a valid email";
        if (!form.founder2Mobile.trim()) errs.founder2Mobile = "Mobile number is required";
        else if (form.founder2Mobile.replace(/\D/g, "").length !== 10)
          errs.founder2Mobile = "Enter a valid 10-digit number";
      }
    }

    if (s === 2) {
      if (!form.fundingAsk.trim()) errs.fundingAsk = "Funding ask is required";
      else if (isNaN(Number(form.fundingAsk))) errs.fundingAsk = "Enter a valid number";
      if (!form.pitchDeck) errs.pitchDeck = "Pitch deck is required";
    }

    if (s === 3) {
      if (!form.arr.trim()) errs.arr = "ARR is required";
      if (!form.runway.trim()) errs.runway = "Runway is required";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      // Normalize URL before submission
      const submissionData = {
        ...form,
        websiteUrl: normalizeUrl(form.websiteUrl),
        founder1Mobile: form.founder1Mobile ? `+91${form.founder1Mobile}` : "",
        founder2Mobile: form.founder2Mobile ? `+91${form.founder2Mobile}` : "",
      };
      console.log("Pitch submission:", submissionData);
      alert("Thank you! Your pitch has been submitted. We will get back to you soon.");
      close();
    }
  };

  const handleMobileChange = (key: string, value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    set(key, digits);
  };

  const handleTextOnly = (key: string, value: string) => {
    // Allow letters, spaces, dots, hyphens only
    const clean = value.replace(/[^a-zA-Z\s.\-]/g, "");
    set(key, clean);
  };

  const handleNumberOnly = (key: string, value: string) => {
    // Allow digits and one decimal point
    const clean = value.replace(/[^0-9.]/g, "").replace(/(\..*?)\./g, "$1");
    set(key, clean);
  };

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!["pdf", "ppt", "pptx"].includes(ext || "")) {
      setErrors((prev) => ({ ...prev, pitchDeck: "Only PDF, PPT, or PPTX files are accepted" }));
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({ ...prev, pitchDeck: "File size must be less than 50MB" }));
      return;
    }
    set("pitchDeck", file);
  };

  // Lock background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-navy-dark focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-transparent transition-colors";
  const errorInputClass =
    "w-full border border-red-400 rounded-lg px-4 py-3 text-base text-navy-dark focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors";
  const labelClass = "block text-sm font-medium text-navy-dark mb-2";
  const selectClass =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-navy-dark bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-transparent transition-colors appearance-none";
  const errorSelectClass =
    "w-full border border-red-400 rounded-lg px-4 py-3 text-base text-navy-dark bg-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors appearance-none";
  const errorMsg = "text-red-500 text-xs mt-1";

  const getInputClass = (key: string) => (errors[key] ? errorInputClass : inputClass);
  const getSelectClass = (key: string) => (errors[key] ? errorSelectClass : selectClass);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-2xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto rounded-none md:rounded-2xl shadow-2xl overscroll-contain">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-6 md:px-8 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-serif text-navy-dark text-xl md:text-2xl">
              Share Your Pitch
            </h2>
            <button
              onClick={close}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Stepper */}
          <div className="flex items-center">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => {
                      if (i < step) {
                        setStep(i);
                      } else if (i > step) {
                        // Validate all steps up to current before jumping forward
                        for (let s = step; s < i; s++) {
                          if (!validateStep(s)) return;
                        }
                        setStep(i);
                      }
                    }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors shrink-0 cursor-pointer ${
                      i < step
                        ? "bg-blue-accent text-white hover:bg-blue-accent/80"
                        : i === step
                        ? "bg-blue-accent text-white ring-4 ring-blue-accent/20"
                        : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                    }`}
                  >
                    {i < step ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </button>
                  <p
                    className={`text-xs mt-2 text-center whitespace-nowrap ${
                      i === step
                        ? "text-blue-accent font-semibold"
                        : i < step
                        ? "text-navy-dark font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    {label}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`h-[2px] flex-1 mx-2 mt-[-20px] transition-colors ${
                      i < step ? "bg-blue-accent" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 md:px-8 py-6 space-y-5">
          {/* Step 1: Company Information */}
          {step === 0 && (
            <>
              <div>
                <label className={labelClass}>Startup Name *</label>
                <input
                  type="text"
                  className={getInputClass("startupName")}
                  placeholder="Your startup name"
                  value={form.startupName}
                  onChange={(e) => set("startupName", e.target.value)}
                />
                {errors.startupName && <p className={errorMsg}>{errors.startupName}</p>}
              </div>
              <div>
                <label className={labelClass}>Website *</label>
                <input
                  type="text"
                  className={getInputClass("websiteUrl")}
                  placeholder=""
                  value={form.websiteUrl}
                  onChange={(e) => set("websiteUrl", e.target.value)}
                />
                {errors.websiteUrl && <p className={errorMsg}>{errors.websiteUrl}</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Sector / Industry *</label>
                  <select
                    className={getSelectClass("sector")}
                    value={form.sector}
                    onChange={(e) => set("sector", e.target.value)}
                  >
                    <option value="">Select sector</option>
                    {SECTORS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.sector && <p className={errorMsg}>{errors.sector}</p>}
                </div>
                <div>
                  <label className={labelClass}>Stage *</label>
                  <select
                    className={getSelectClass("stage")}
                    value={form.stage}
                    onChange={(e) => set("stage", e.target.value)}
                  >
                    <option value="">Select stage</option>
                    {STAGES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.stage && <p className={errorMsg}>{errors.stage}</p>}
                </div>
              </div>
              <div>
                <label className={labelClass}>
                  Brief Overview *{" "}
                  <span className="font-normal text-gray-400">
                    ({form.overview.length}/400)
                  </span>
                </label>
                <textarea
                  className={`${getInputClass("overview")} resize-none h-28`}
                  placeholder="Tell us about your company in a few sentences..."
                  maxLength={400}
                  value={form.overview}
                  onChange={(e) => set("overview", e.target.value)}
                />
                {errors.overview && <p className={errorMsg}>{errors.overview}</p>}
              </div>
            </>
          )}

          {/* Step 2: Founding Team */}
          {step === 1 && (
            <>
              {[1, ...(showFounder2 ? [2] : [])].map((n) => {
                const prefix = `founder${n}` as "founder1" | "founder2";
                return (
                  <div key={n}>
                    <h3 className="font-semibold text-navy-dark text-sm mb-3">
                      Founder {n} {n === 1 && "*"}
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Name</label>
                          <input
                            type="text"
                            className={getInputClass(`${prefix}Name`)}
                            placeholder="Full name"
                            value={form[`${prefix}Name` as keyof typeof form] as string}
                            onChange={(e) => handleTextOnly(`${prefix}Name`, e.target.value)}
                          />
                          {errors[`${prefix}Name`] && <p className={errorMsg}>{errors[`${prefix}Name`]}</p>}
                        </div>
                        <div>
                          <label className={labelClass}>Role</label>
                          <input
                            type="text"
                            className={getInputClass(`${prefix}Role`)}
                            placeholder="e.g., CEO, CTO"
                            value={form[`${prefix}Role` as keyof typeof form] as string}
                            onChange={(e) => handleTextOnly(`${prefix}Role`, e.target.value)}
                          />
                          {errors[`${prefix}Role`] && <p className={errorMsg}>{errors[`${prefix}Role`]}</p>}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>LinkedIn Profile *</label>
                        <input
                          type="url"
                          className={getInputClass(`${prefix}Linkedin`)}
                          placeholder="https://linkedin.com/in/..."
                          value={form[`${prefix}Linkedin` as keyof typeof form] as string}
                          onChange={(e) => set(`${prefix}Linkedin`, e.target.value)}
                        />
                        {errors[`${prefix}Linkedin`] && <p className={errorMsg}>{errors[`${prefix}Linkedin`]}</p>}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Email</label>
                          <input
                            type="email"
                            className={getInputClass(`${prefix}Email`)}
                            placeholder="email@example.com"
                            value={form[`${prefix}Email` as keyof typeof form] as string}
                            onChange={(e) => set(`${prefix}Email`, e.target.value)}
                          />
                          {errors[`${prefix}Email`] && <p className={errorMsg}>{errors[`${prefix}Email`]}</p>}
                        </div>
                        <div>
                          <label className={labelClass}>Mobile Number</label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-sm text-navy-dark font-medium">
                              +91
                            </span>
                            <input
                              type="tel"
                              className={`${getInputClass(`${prefix}Mobile`)} rounded-l-none`}
                              placeholder="XXXXX XXXXX"
                              value={form[`${prefix}Mobile` as keyof typeof form] as string}
                              onChange={(e) => handleMobileChange(`${prefix}Mobile`, e.target.value)}
                            />
                          </div>
                          {errors[`${prefix}Mobile`] && <p className={errorMsg}>{errors[`${prefix}Mobile`]}</p>}
                        </div>
                      </div>
                    </div>
                    {n === 1 && <hr className="my-6 border-gray-200" />}
                  </div>
                );
              })}

              {/* Toggle for Founder 2 */}
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <button
                  type="button"
                  role="switch"
                  aria-checked={showFounder2}
                  onClick={() => setShowFounder2(!showFounder2)}
                  className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors ${
                    showFounder2 ? "bg-blue-accent" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform mt-0.5 ${
                      showFounder2 ? "translate-x-[22px]" : "translate-x-0.5"
                    }`}
                  />
                </button>
                <span className="text-sm text-navy-dark font-medium">
                  Add Co-founder
                </span>
              </label>
            </>
          )}

          {/* Step 3: Fundraising Details */}
          {step === 2 && (
            <>
              <div>
                <label className={labelClass}>Funding Ask (in Crores) *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                    ₹
                  </span>
                  <input
                    type="text"
                    className={`${getInputClass("fundingAsk")} pl-8`}
                    placeholder="e.g., 10"
                    value={form.fundingAsk}
                    onChange={(e) => handleNumberOnly("fundingAsk", e.target.value)}
                  />
                </div>
                {errors.fundingAsk && <p className={errorMsg}>{errors.fundingAsk}</p>}
              </div>
              <div>
                <label className={labelClass}>
                  Pitch Deck (PDF, PPT, PPTX — max 50MB) *
                </label>
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.ppt,.pptx"
                  className="hidden"
                  onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
                />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className={`w-full border-2 border-dashed rounded-lg px-4 py-8 text-sm hover:border-blue-accent hover:text-blue-accent transition-colors text-center ${
                    errors.pitchDeck
                      ? "border-red-400 text-red-400"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {form.pitchDeck ? (
                    <span className="text-navy-dark font-medium">
                      {form.pitchDeck.name}{" "}
                      <span className="text-gray-400 font-normal">
                        ({(form.pitchDeck.size / (1024 * 1024)).toFixed(1)} MB)
                      </span>
                    </span>
                  ) : (
                    <>
                      <svg
                        className="w-8 h-8 mx-auto mb-2 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      Click to upload your pitch deck
                    </>
                  )}
                </button>
                {errors.pitchDeck && <p className={errorMsg}>{errors.pitchDeck}</p>}
              </div>
            </>
          )}

          {/* Step 4: Financial Metrics */}
          {step === 3 && (
            <>
              <div>
                <label className={labelClass}>
                  ARR (Annual Recurring Revenue) *
                </label>
                <input
                  type="text"
                  className={getInputClass("arr")}
                  placeholder="e.g., ₹2 Cr or $500K"
                  value={form.arr}
                  onChange={(e) => handleNumberOnly("arr", e.target.value)}
                />
                {errors.arr && <p className={errorMsg}>{errors.arr}</p>}
              </div>
              <div>
                <label className={labelClass}>Runway (in months) *</label>
                <input
                  type="text"
                  className={getInputClass("runway")}
                  placeholder="e.g., 12"
                  value={form.runway}
                  onChange={(e) => handleNumberOnly("runway", e.target.value)}
                />
                {errors.runway && <p className={errorMsg}>{errors.runway}</p>}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 md:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => (step === 0 ? close() : setStep(step - 1))}
            className="text-sm text-navy-dark font-medium hover:text-blue-accent transition-colors"
          >
            {step === 0 ? "Cancel" : "Back"}
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-accent text-white font-semibold text-sm px-8 py-2.5 rounded-lg hover:bg-blue-accent/90 transition-colors"
          >
            {step === STEPS.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
