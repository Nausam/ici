"use client";

import Link from "next/link";

const En_Services = () => {
  const services = [
    { icon: "/icons/bid.png", label: "ބީލަން", href: "/bids" },
    { icon: "/icons/job.png", label: "ވަޒީފާ", href: "/media/jobs" },
    {
      icon: "/icons/group.png",
      label: "ރައްޔިތުންގެ ބައިވެރިވުން",
      href: "/council/get-involved",
    },
    {
      icon: "/icons/auction.png",
      label: "ކައުންސިލްގެ ނިންމުން",
      href: "/council/general-meetings/resolutions",
    },
    { icon: "/icons/news.png", label: "ޚަބަރު / ނޫސްބަޔާން", href: "/news" },
    { icon: "/icons/report.png", label: "ރިޕޯޓް", href: "/reports" },
    { icon: "/icons/project.png", label: "ޕްރޮޖެކްޓް", href: "/projects" },
    {
      icon: "/icons/megaphone.png",
      label: "އާންމު އިއުލާން",
      href: "/announcements",
    },
    { icon: "/icons/island.png", label: "އިންނަމާދޫ", href: "/innamaadhoo" },
    { icon: "/icons/directory.png", label: "ޑިރެކްޓްރީ", href: "/directory" },
    { icon: "/icons/plan.png", label: "ޕްލޭން", href: "/plans" },
    {
      icon: "/icons/guide.png",
      label: "ޤަވާއިދުތަކާއި އުސޫލުތައް",
      href: "/guides",
    },
  ];
  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {services.map((service, index) => (
          <Link
            href={service.href}
            key={index + service.label}
            className="flex flex-col items-center justify-center p-6 bg-white border border-veryLightTeal/50 shadow-lg rounded-lg transition-transform hover:scale-105"
          >
            <img
              src={service.icon}
              alt={service.label}
              className="h-12 w-12 mb-4"
            />
            <p className="text-center font-dhivehi text-gray-800 text-lg">
              {service.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default En_Services;
