const SERVICE_CARDS = [
  {
    title: "PIGG Services",
    desc: "Smart pigging technology for internal diameter inspection and cleaning.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#16202b"
        strokeWidth="1.6"
      >
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <circle cx="7" cy="12" r="1.5" />
        <circle cx="17" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Integrity Testing",
    desc: "Hydrostatic testing and ultra-sonic leak detection systems.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#16202b"
        strokeWidth="1.6"
      >
        <path d="M4 20 20 4M9 5 5 9M19 15l-4 4" />
      </svg>
    ),
  },
  {
    title: "Flow Assurance",
    desc: "Chemical injection and paraffin removal for optimal throughput.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#16202b"
        strokeWidth="1.6"
      >
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-7 7L4.6 21l7-7a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-2.1z" />
      </svg>
    ),
  },
];

const COMPLIANCE_ROWS = [
  {
    component: "Transmission Lines",
    standard: "ASME B31.8",
    status: "✓ VERIFIED",
  },
  {
    component: "Gathering Systems",
    standard: "API RP 1160",
    status: "✓ VERIFIED",
  },
  { component: "Valving Stations", standard: "API 6D", status: "✓ VERIFIED" },
];

export default function PipelineServices() {
  return (
    <div className="bg-white border border-pm-border border-t-[3px] border-t-pm-navy mt-10 px-10.5 py-10">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="m-0 text-[28px] font-bold tracking-[-0.5px]">
            Pipeline Services
          </h2>
          <p className="mt-2.5 mb-0 text-[14.5px] text-pm-gray-mid">
            Midstream logistics and infrastructure maintenance.
          </p>
        </div>
        <div className="font-mono text-xs tracking-[1px] text-[#9aa3ad]">
          LATEST REPORT: OCT 2023
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4.5 mt-7">
        {SERVICE_CARDS.map((card) => (
          <div
            key={card.title}
            className="bg-[#f7f8fa] border border-pm-border px-6.5 py-6"
          >
            {card.icon}
            <h3 className="mt-4 mb-2 text-[16px] font-bold">{card.title}</h3>
            <p className="m-0 text-[13px] leading-[1.6] text-pm-text-muted">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6.5 border border-pm-border">
        <div
          className="grid bg-[#5b6671] text-white text-[11px] font-bold tracking-[1.2px]"
          style={{ gridTemplateColumns: "2fr 1.4fr 1fr" }}
        >
          <div className="px-5.5 py-3.5">SYSTEM COMPONENT</div>
          <div className="px-5.5 py-3.5">STANDARD</div>
          <div className="px-5.5 py-3.5">COMPLIANCE STATUS</div>
        </div>
        {COMPLIANCE_ROWS.map((row, i) => (
          <div
            key={row.component}
            className={`grid font-mono text-[13.5px] ${
              i < COMPLIANCE_ROWS.length - 1 ? "border-b border-[#edf0f2]" : ""
            } ${i % 2 === 1 ? "bg-[#f7f8fa]" : ""}`}
            style={{ gridTemplateColumns: "2fr 1.4fr 1fr" }}
          >
            <div className="px-5.5 py-4">{row.component}</div>
            <div className="px-5.5 py-4">{row.standard}</div>
            <div className="px-5.5 py-4 text-[#1f9d57] font-bold">
              {row.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
