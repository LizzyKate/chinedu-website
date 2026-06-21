"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export default function ContactTransmission() {
  return (
    <section className="bg-pm-navy-deeper text-white px-14 py-16">
      <div className="grid grid-cols-2 gap-[70px]">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div>
      <h2 className="m-0 text-[34px] font-bold tracking-[-0.6px]">Contact Transmission</h2>
      <p className="mt-5 mb-0 text-[15px] leading-[1.7] text-pm-contact-gray max-w-[430px]">
        Initiate technical consultation or request rapid equipment deployment via our 24/7
        command center.
      </p>

      <div className="mt-10 flex flex-col gap-[26px]">
        <ContactInfoItem
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f6d9a9" strokeWidth="1.7">
              <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          }
          title="Regional Headquarters"
          description="42 Energy Plaza, Victoria Island, Lagos, NG"
        />
        <ContactInfoItem
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f6d9a9" strokeWidth="1.7">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
            </svg>
          }
          title="24/7 Service Desk"
          description="+234 (0) 1 234 5678"
        />
      </div>
    </div>
  );
}

function ContactInfoItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-[18px] items-start">
      <div
        className="w-[42px] h-[42px] shrink-0 flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        {icon}
      </div>
      <div>
        <div className="text-[15px] font-bold">{title}</div>
        <div className="text-[13.5px] text-pm-contact-gray mt-1">{description}</div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "Procurement",
    message: "",
  });

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.14)",
  };

  return (
    <div
      className="p-[38px]"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="grid grid-cols-2 gap-[22px]">
        <FormField label="FULL NAME">
          <input
            type="text"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="mt-[9px] w-full text-white text-[14px] px-[14px] py-[13px] outline-none font-sans"
            style={inputStyle}
          />
        </FormField>
        <FormField label="EMAIL ADDRESS">
          <input
            type="email"
            placeholder="j.doe@company.com"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="mt-[9px] w-full text-white text-[14px] px-[14px] py-[13px] outline-none font-sans"
            style={inputStyle}
          />
        </FormField>
      </div>

      <div className="mt-[22px]">
        <FormField label="DEPARTMENT">
          <div className="relative mt-[9px]">
            <select
              value={form.department}
              onChange={(e) => setForm((f) => ({ ...f, department: e.target.value }))}
              className="appearance-none w-full text-white text-[14px] px-[14px] py-[13px] outline-none font-sans"
              style={inputStyle}
            >
              <option>Procurement</option>
              <option>Engineering</option>
              <option>Logistics</option>
            </select>
            <span className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#8c98a5] pointer-events-none">
              ▾
            </span>
          </div>
        </FormField>
      </div>

      <div className="mt-[22px]">
        <FormField label="TECHNICAL BRIEF">
          <textarea
            placeholder="Detail your requirements..."
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="mt-[9px] w-full h-[120px] resize-none text-white text-[14px] px-[14px] py-[13px] outline-none font-sans"
            style={inputStyle}
          />
        </FormField>
      </div>

      <button className="mt-6 w-full bg-pm-gold text-[#1c2733] text-[13px] font-bold tracking-[1.2px] py-4 cursor-pointer border-none">
        SEND TRANSMISSION
      </button>
    </div>
  );
}

function FormField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="text-[11px] tracking-[1.2px] text-[#8c98a5] block">{label}</label>
      {children}
    </div>
  );
}
