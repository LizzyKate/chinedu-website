export default function HeroSection() {
  return (
    <section className="relative h-140 sm:h-155 lg:h-170 overflow-hidden bg-[#11202f]">
      <div
        className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover h-full"
        style={{
          backgroundImage: 'url("/assets/hero.png")',
        }}
      />

      <div className="relative h-full px-6 sm:px-10 lg:px-14 flex flex-col justify-center">
        <span className="self-start bg-pm-gold text-[#3a2c12] text-[11px] sm:text-xs font-bold tracking-[1.4px] px-3 py-[6px] sm:px-[14px] sm:py-[7px]">
          OPERATIONAL EXCELLENCE
        </span>

        <h1 className="mt-4 sm:mt-5.5 mb-0 text-[34px] sm:text-[44px] lg:text-[62px] leading-[1.08] sm:leading-[1.06] lg:leading-[1.04] font-bold tracking-[-0.5px] sm:tracking-[-1px] lg:tracking-[-1.5px] text-white max-w-full sm:max-w-[480px] lg:max-w-[660px]">
          Unlocking <span className="text-pm-gold-dark">Sub-Saharan</span>{" "}
          Energy Potential
        </h1>

        <p className="mt-4 sm:mt-6 mb-0 text-sm sm:text-[15px] lg:text-[17px] leading-[1.6] text-[#b7c0ca] max-w-full sm:max-w-[420px] lg:max-w-[520px]">
          Providing precision engineering and integrated logistics for the next
          generation of offshore and onshore energy infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 sm:mt-9 lg:mt-9.5">
          <button className="flex items-center justify-center gap-2.5 bg-pm-gold text-[#1c2733] text-[13px] font-bold tracking-[0.8px] px-6 py-[14px] sm:px-[26px] sm:py-4 border-none cursor-pointer">
            VIEW CAPABILITIES <span className="text-[15px]">→</span>
          </button>
          <button
            className="bg-transparent text-white text-[13px] font-bold tracking-[0.8px] px-6 py-3.5 sm:px-7 sm:py-4 cursor-pointer"
            style={{ border: "1px solid rgba(255,255,255,0.45)" }}
          >
            OUR FOOTPRINT
          </button>
        </div>
      </div>

      <div className="absolute left-6 right-6 bottom-6 sm:left-auto sm:right-10 sm:bottom-10 lg:right-14 lg:bottom-14 flex pointer-events-none">
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
      className="flex-1 sm:flex-initial px-4 py-3 sm:px-7.5 sm:py-5"
      style={{
        background: `rgba(20,33,48,${opacity})`,
        backdropFilter: "blur(2px)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderLeft: borderLeft ? undefined : "none",
      }}
    >
      <div className="text-xl sm:text-2xl lg:text-[30px] font-bold text-pm-gold-dark">
        {value}
      </div>
      <div className="text-[10px] sm:text-[11px] tracking-[1.2px] text-[#aeb8c2] mt-1">
        {label}
      </div>
    </div>
  );
}
