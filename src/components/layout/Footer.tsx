export default function Footer() {
  return (
    <footer className="bg-pm-navy-dark text-white px-14 pt-[54px] pb-10">
      <div
        className="grid gap-10"
        style={{ gridTemplateColumns: "1.4fr 1fr 1fr 1.1fr" }}
      >
        <div>
          <div className="text-[18px] font-bold">Fort-Knox</div>
          <p className="mt-4.5 mb-0 text-[13.5px] leading-[1.7] text-pm-gray-footer max-w-60">
            Engineered for high-stakes environments. ISO 9001:2015 Certified
            equipment and logistics services.
          </p>
        </div>

        <FooterColumn
          title="Technical Resources"
          links={[
            "Technical Specifications",
            "Safety Manuals",
            "API Standards",
          ]}
        />
        <FooterColumn
          title="Core Solutions"
          links={[
            "Marine Engineering Resources",
            "Global Logistics",
            "Compliance",
          ]}
        />

        <div>
          <div className="text-[13px] font-bold mb-4.5">Legal</div>
          <p className="m-0 text-[13.5px] leading-[1.7] text-pm-gray-footer">
            © 2024 Fort-Knox Industrial. All rights reserved. ISO 9001:2015
            Certified.
          </p>
          <div className="flex gap-2.5 mt-4.5">
            <span
              className="text-[10px] tracking-[0.6px] text-[#aab4bf] px-2.75 py-1.75"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              PRIVACY POLICY
            </span>
            <span
              className="text-[10px] tracking-[0.6px] text-[#aab4bf] px-2.75 py-1.75"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              TERMS OF SERVICE
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-9 text-[#5d6a78]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
        </svg>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
        </svg>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
        </svg>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-[13px] font-bold mb-4.5">{title}</div>
      <ul className="list-none m-0 p-0 flex flex-col gap-3 text-[13.5px] text-pm-gray-footer">
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
}
