import Image from "next/image";

const team = [
  {
    name: "Dr. Samuel Adebayo",
    title: "CHIEF OPERATIONS OFFICER",
    image: "/assets/team1.png",
  },
  {
    name: "Elena Rodriguez",
    title: "HEAD OF WELL ENGINEERING",
    image: "/assets/team2.png",
  },
  {
    name: "Capt. Marcus Thorne",
    title: "LOGISTICS DIRECTOR",
    image: "/assets/team3.png",
  },
];

export default function SteeringInnovation() {
  return (
    <section className="bg-pm-gray-light px-14 pt-14 pb-15">
      <div className="flex items-start justify-between gap-10">
        <div>
          <h2 className="m-0 text-[30px] font-bold tracking-[-0.5px] text-pm-navy">
            Steering Innovation
          </h2>
          <p className="mt-[14px] mb-0 text-[15px] leading-[1.6] text-pm-gray-mid max-w-110">
            Our executive team combines decades of international expertise with
            deep local market intelligence.
          </p>
        </div>
        <a
          href="#"
          className="bg-pm-navy text-white text-xs font-bold tracking-[1px] px-6.5 py-3.75 no-underline whitespace-nowrap shrink-0"
        >
          VIEW ALL LEADERSHIP
        </a>
      </div>

      <div className="grid grid-cols-3 gap-7 mt-9">
        {team.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}

function TeamMemberCard({
  name,
  title,
  image,
}: {
  name: string;
  title: string;
  image: string;
}) {
  return (
    <div>
      <div className="relative w-full">
        <img src={image} className="w-full h-auto object-cover" alt={name} />
      </div>
      <h3 className="mt-5.5 mb-1.25 text-[21px] font-bold tracking-[-0.3px] text-pm-navy">
        {name}
      </h3>
      <div className="text-xs font-semibold tracking-[1.2px] text-pm-text-muted">
        {title}
      </div>
    </div>
  );
}
