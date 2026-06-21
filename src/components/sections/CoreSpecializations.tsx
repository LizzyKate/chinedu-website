import type { ReactNode } from "react";

export default function CoreSpecializations() {
  return (
    <section className="px-14 pt-16 pb-14">
      <h2 className="m-0 text-[32px] font-bold tracking-[-0.6px] text-pm-navy">
        Core Specializations
      </h2>
      <div className="w-[54px] h-[3px] bg-pm-navy mt-[14px]" />

      <div className="grid gap-6 mt-[38px]" style={{ gridTemplateColumns: "1fr 0.62fr" }}>
        <div className="bg-white border border-pm-border p-10">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#16202b" strokeWidth="1.6">
            <circle cx="9" cy="8" r="3" />
            <path d="M2 20v-1a6 6 0 0 1 9-5.2" />
            <circle cx="17" cy="9" r="2.2" />
            <path d="M13.5 19v-.6a4 4 0 0 1 7 0v.6" />
          </svg>
          <h3 className="mt-6 mb-[14px] text-[24px] font-bold tracking-[-0.3px] text-pm-navy">
            Well Engineering
          </h3>
          <p className="m-0 text-[15px] leading-[1.7] text-pm-gray-mid max-w-[520px]">
            Complete lifecycle management from initial design to decommissioning. Our
            engineering team utilizes advanced predictive modeling to minimize downtime and
            maximize yield in complex geological formations.
          </p>
          <a href="#" className="inline-block mt-7 text-xs font-bold tracking-[1px] text-pm-navy no-underline">
            TECHNICAL SPECS ›
          </a>
        </div>

        <div className="bg-pm-procure text-white p-10 flex flex-col">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#f6d9a9" strokeWidth="1.6">
            <circle cx="9" cy="20" r="1.4" />
            <circle cx="18" cy="20" r="1.4" />
            <path d="M2 3h2.2l2.3 12.3a1.6 1.6 0 0 0 1.6 1.3h8.8a1.6 1.6 0 0 0 1.6-1.2L21.5 7H5.5" />
          </svg>
          <h3 className="mt-6 mb-[14px] text-[24px] font-bold tracking-[-0.3px]">Procurement</h3>
          <p className="m-0 text-[15px] leading-[1.7] text-[#aab4bf]">
            Global supply chain integration ensuring critical components reach site without delay.
          </p>
          <button
            className="mt-auto bg-transparent text-white text-xs font-bold tracking-[1px] py-[15px] w-full cursor-pointer"
            style={{ border: "1px solid rgba(255,255,255,0.30)" }}
          >
            INVENTORY PORTAL
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <SmallSpecCard
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16202b" strokeWidth="1.6">
              <path d="M18 10a4 4 0 0 0-7.7-1.5A3.5 3.5 0 1 0 8 16h9.5a3.5 3.5 0 0 0 .5-6z" />
            </svg>
          }
          title="Well Optimization"
          description="Real-time data analytics to boost production efficiency."
          linkText="DETAILS ↗"
        />
        <SmallSpecCard
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16202b" strokeWidth="1.6">
              <rect x="1" y="6" width="13" height="11" rx="1" />
              <path d="M14 9h4l3 3v5h-7z" />
              <circle cx="6" cy="18" r="1.6" />
              <circle cx="17" cy="18" r="1.6" />
            </svg>
          }
          title="Logistics"
          description="Complex freight forwarding across Sub-Saharan terrain."
          linkText="LOGISTICS HUB ↗"
        />
        <SmallSpecCard
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16202b" strokeWidth="1.6">
              <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-7 7L4.6 21l7-7a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-2.1z" />
            </svg>
          }
          title="Maintenance"
          description="Rigorous preventive maintenance and on-site repair."
          linkText="SERVICE STATUS ↗"
        />
      </div>
    </section>
  );
}

function SmallSpecCard({
  icon,
  title,
  description,
  linkText,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  linkText: string;
}) {
  return (
    <div className="bg-pm-card-bg border border-pm-border px-[30px] py-7">
      {icon}
      <h4 className="mt-[18px] mb-2 text-[16px] font-bold text-pm-navy">{title}</h4>
      <p className="m-0 text-[13.5px] leading-[1.6] text-pm-text-muted">{description}</p>
      <a href="#" className="inline-block mt-[18px] text-[11px] font-bold tracking-[1px] text-pm-navy no-underline">
        {linkText}
      </a>
    </div>
  );
}
