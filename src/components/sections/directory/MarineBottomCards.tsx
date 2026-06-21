import Image from "next/image";

const CARDS = [
  {
    src: "/assets/dir-tug.png",
    alt: "Tug boat at sea",
    title: "Tug & Barge Operations",
    desc: "Safe transport of equipment and raw materials across maritime logistics hubs.",
  },
  {
    src: "/assets/dir-rig.png",
    alt: "Vessel at shipyard at night",
    title: "Subsea Engineering",
    desc: "ROV-assisted underwater repairs and inspection of offshore assets.",
  },
];

export default function MarineBottomCards() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      {CARDS.map((card) => (
        <div key={card.title} className="bg-white border border-pm-border">
          <div className="relative w-full h-80">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="px-7 pt-6 pb-7">
            <h3 className="m-0 text-[18px] font-bold">{card.title}</h3>
            <p className="mt-2.5 mb-0 text-[13.5px] leading-[1.6] text-pm-text-muted">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
