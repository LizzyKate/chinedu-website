import Image from "next/image";

const CAPABILITIES = [
  { label: "Corrosion Mgmt", value: "API 570" },
  { label: "Mechanical Ops", value: "LEVEL 3" },
  { label: "Asset Digitization", value: "REAL-TIME" },
];

export default function SustenanceCard() {
  return (
    <div
      className="grid gap-6 mt-6"
      style={{ gridTemplateColumns: "0.85fr 1fr" }}
    >
      <div className="relative w-full h-125">
        <Image
          src="/assets/dir-pipeline.png"
          alt="Pipeline interior"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-pm-navy-deeper text-white px-9 py-[34px]">
          <h2 className="m-0 text-[26px] font-bold tracking-[-0.5px] leading-[1.2]">
            Sustenance &amp; Asset Integrity
          </h2>
          <p className="mt-4 mb-0 text-sm leading-[1.65] text-pm-contact-gray">
            Extending the operational lifecycle of heavy assets through rigorous
            maintenance and predictive monitoring.
          </p>
          <button
            className="mt-6 bg-transparent text-white text-xs font-bold tracking-[1px] px-[22px] py-3.5 cursor-pointer"
            style={{ border: "1px solid rgba(255,255,255,0.30)" }}
          >
            View Full Manual
          </button>
        </div>

        <div className="bg-[#eef1f4] px-[30px] py-[26px]">
          <div className="text-[11px] font-bold tracking-[1.4px] text-[#8a939d] mb-2">
            CORE CAPABILITIES
          </div>
          <div className="font-mono text-sm">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.label}
                className={`flex justify-between py-3 ${
                  i < CAPABILITIES.length - 1 ? "border-b border-[#dde1e6]" : ""
                }`}
              >
                <span className="text-[#3f4954]">{cap.label}</span>
                <span className="font-bold">{cap.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
