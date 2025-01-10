"use client";

const En_Services = () => {
  const services = [
    { icon: "/icons/bid.png", label: "ބީލަން" },
    { icon: "/icons/job.png", label: "ވަޒީފާ" },
    { icon: "/icons/group.png", label: "ރައްޔިތުންގެ ބައިވެރިވުން" },
    { icon: "/icons/auction.png", label: "ކައުންސިލްގެ ނިންމުން" },
    { icon: "/icons/news.png", label: "ޚަބަރު / ނޫސްބަޔާން" },
    { icon: "/icons/report.png", label: "ރިޕޯޓް" },
    { icon: "/icons/project.png", label: "ޕްރޮޖެކްޓް" },
    { icon: "/icons/megaphone.png", label: "އާންމު އިއުލާން" },
    { icon: "/icons/island.png", label: "އިންނަމާދޫ" },
    { icon: "/icons/plan.png", label: "ޕްލޭން" },
    { icon: "/icons/directory.png", label: "ޑިރެކްޓްރީ" },
    { icon: "/icons/guide.png", label: "ޤަވާއިދުތަކާއި އުސޫލުތައް" },
  ];
  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default En_Services;
