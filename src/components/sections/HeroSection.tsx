import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[680px] overflow-hidden bg-[#11202f]">
      <Image
        src="/assets/hero.png"
        alt="Offshore platform"
        fill
        className="object-cover"
        priority
      />

      <div
        className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover h-full"
        style={{
          backgroundImage: 'url("/assets/hero.png")',
        }}
      />

      <div className="relative h-full px-14 flex flex-col justify-center">
        <span className="self-start bg-pm-gold text-[#3a2c12] text-xs font-bold tracking-[1.4px] px-[14px] py-[7px]">
          OPERATIONAL EXCELLENCE
        </span>

        <h1 className="mt-[22px] mb-0 text-[62px] leading-[1.04] font-bold tracking-[-1.5px] text-white max-w-[660px]">
          Unlocking <span className="text-pm-gold-dark">Sub-Saharan</span>{" "}
          Energy Potential
        </h1>

        <p className="mt-6 mb-0 text-[17px] leading-[1.6] text-[#b7c0ca] max-w-[520px]">
          Providing precision engineering and integrated logistics for the next
          generation of offshore and onshore energy infrastructure.
        </p>

        <div className="flex gap-4 mt-[38px]">
          <button className="flex items-center gap-[10px] bg-pm-gold text-[#1c2733] text-[13px] font-bold tracking-[0.8px] px-[26px] py-4 border-none cursor-pointer">
            VIEW CAPABILITIES <span className="text-[15px]">→</span>
          </button>
          <button
            className="bg-transparent text-white text-[13px] font-bold tracking-[0.8px] px-7 py-4 cursor-pointer"
            style={{ border: "1px solid rgba(255,255,255,0.45)" }}
          >
            OUR FOOTPRINT
          </button>
        </div>
      </div>

      <div className="absolute right-14 bottom-14 flex pointer-events-none">
        <StatBadge value="150+" label="ASSETS MANAGED" opacity="0.55" />
        <StatBadge
          value="99.8%"
          label="SAFETY UPTIME"
          opacity="0.40"
          borderLeft={false}
        />
      </div>
    </section>
  );
}

function StatBadge({
  value,
  label,
  opacity,
  borderLeft = true,
}: {
  value: string;
  label: string;
  opacity: string;
  borderLeft?: boolean;
}) {
  return (
    <div
      className="px-[30px] py-5"
      style={{
        background: `rgba(20,33,48,${opacity})`,
        backdropFilter: "blur(2px)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderLeft: borderLeft ? undefined : "none",
      }}
    >
      <div className="text-[30px] font-bold text-pm-gold-dark">{value}</div>
      <div className="text-[11px] tracking-[1.2px] text-[#aeb8c2] mt-1">
        {label}
      </div>
    </div>
  );
}
