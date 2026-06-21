const CATEGORIES = [
  { label: "Drilling & Well Construction", active: true },
  { label: "Sustenance Services", active: false },
  { label: "Pipeline Services", active: false },
  { label: "Marine Specialty", active: false },
  { label: "24/7 Response", active: false },
];

export default function DirectorySidebar() {
  return (
    <aside className="sticky top-6">
      <div className="text-[11px] font-bold tracking-[1.6px] text-[#8a939d] mb-4.5">
        SERVICE CATEGORIES
      </div>

      <div className="flex flex-col gap-2.5">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.label}
            className={`border-l-[3px] px-4.5 py-3.75 text-sm ${
              cat.active
                ? "bg-[#eef1f4] border-pm-navy font-bold"
                : "bg-white border-[#cdd4db] font-semibold text-[#3f4954]"
            }`}
          >
            {cat.label}
          </div>
        ))}
      </div>

      <div className="bg-pm-navy-deeper text-white px-6 py-6.5 mt-6">
        <div className="text-[13px] text-pm-contact-gray leading-normal">
          Need immediate technical assistance?
        </div>
        <div className="text-[26px] font-bold tracking-[0.5px] mt-3">
          0800-PM-IND
        </div>
      </div>
    </aside>
  );
}
