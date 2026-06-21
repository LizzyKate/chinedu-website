import Image from "next/image";

const SERVICES = [
  {
    title: "Extended Reach Drilling (ERD)",
    desc: "Advanced directional technology for maximum reservoir exposure.",
  },
  {
    title: "Casing & Cementing Services",
    desc: "ISO-standard zonal isolation and structural reinforcement.",
  },
  {
    title: "Managed Pressure Drilling (MPD)",
    desc: "Precision pressure control for narrow mud-weight windows.",
  },
];

export default function DrillingCard() {
  return (
    <div
      className="grid bg-white border border-pm-border mt-9.5"
      style={{ gridTemplateColumns: "0.85fr 1fr" }}
    >
      <div className="relative w-full h-133">
        <Image
          src="/assets/dir-ship.png"
          alt="Offshore drilling ship"
          fill
          className="object-cover"
        />
      </div>

      <div className="px-10.5 py-10">
        <div className="flex items-start gap-3.5">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16202b"
            strokeWidth="1.5"
            className="mt-1 shrink-0"
          >
            <path d="M12 2v20M5 8l7-4 7 4M5 8v8l7 4 7-4V8" />
          </svg>
          <h2 className="m-0 text-[28px] font-bold tracking-[-0.5px] leading-[1.15]">
            Drilling &amp; Well Construction
          </h2>
        </div>

        <p className="mt-5 mb-0 text-[14.5px] leading-[1.7] text-pm-text-muted">
          Engineered solutions for complex well architectures. We deliver
          precision drilling operations with a focus on structural integrity and
          pressure management.
        </p>

        <div className="flex gap-17.5 mt-6.5">
          <div>
            <div className="text-[11px] font-bold tracking-[1.2px] text-[#8a939d]">
              OPERATIONAL METRIC
            </div>
            <div className="font-mono text-[15px] font-bold mt-1.75">
              99.8% Uptime
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-[1.2px] text-[#8a939d]">
              SAFETY RATING
            </div>
            <div className="font-mono text-[15px] font-bold mt-1.75">
              TRIR &lt; 0.25
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-7.5">
          {SERVICES.map((svc) => (
            <div key={svc.title} className="border-l-2 border-[#d3d9df] pl-4.5">
              <div className="text-[15px] font-bold">{svc.title}</div>
              <div className="text-[13.5px] text-pm-text-muted mt-1 leading-[1.55]">
                {svc.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
