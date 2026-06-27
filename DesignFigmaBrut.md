## Landing page : 
### index.tsx 
import { FaqSection } from "./FaqSection";
import { HeroSection } from "./HeroSection";
import { OperationalReachSection } from "./OperationalReachSection";
import { SpecializedServicesSection } from "./SpecializedServicesSection";

export const Main = (): JSX.Element => {
  return (
    <main
      className="relative mx-auto w-[390px] h-[3227px] bg-white overflow-hidden"
      data-id="main-screen"
    >
      <HeroSection />
      <SpecializedServicesSection />
      <OperationalReachSection />
      <FaqSection />
    </main>
  );
};

###FaqSection.tsx
import { useId, useState } from "react";
import icon3 from "./icon-3.svg";
import icon4 from "./icon-4.svg";
import icon5 from "./icon-5.svg";

const faqItems = [
  {
    id: "faq-fast",
    question: "How fast can equipment reach the site?",
    icon: icon3,
    answer:
      "Equipment availability and delivery timing depend on location, machine type, and scheduling, but we work to dispatch as quickly as possible for urgent jobsite needs.",
  },
  {
    id: "faq-operators",
    question: "Do you provide operators?",
    icon: icon4,
    answer:
      "Yes, operator availability can be arranged depending on the equipment type and your project requirements.",
  },
  {
    id: "faq-repairs",
    question: "What about emergency repairs?",
    icon: icon5,
    answer:
      "We can help coordinate emergency support and repair response for eligible equipment issues to minimize downtime.",
  },
];

export const FaqSection = (): JSX.Element => {
  const baseId = useId();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <section
      aria-labelledby={`${baseId}-faq-heading`}
      className="flex flex-col w-full items-start gap-8 px-4 py-16 absolute top-[2845px] left-0 bg-[#f5fafc]"
    >
      <div className="items-center flex flex-col relative self-stretch w-full flex-[0_0_auto]">
        <h2
          id={`${baseId}-faq-heading`}
          className="flex items-center justify-center mt-[-1.00px] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold text-[#062025] text-2xl text-center tracking-[0] leading-8 whitespace-nowrap relative w-fit"
        >
          Common Questions
        </h2>
      </div>
      <div className="flex flex-col items-start gap-2 self-stretch w-full relative flex-[0_0_auto]">
        {faqItems.map((item) => {
          const isOpen = openItem === item.id;
          const buttonId = `${baseId}-${item.id}-button`;
          const panelId = `${baseId}-${item.id}-panel`;

          return (
            <div
              key={item.id}
              className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg overflow-hidden border border-solid border-[#c2c7c9]"
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => handleToggle(item.id)}
                className="flex items-center justify-between p-4 self-stretch w-full relative flex-[0_0_auto] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#062025] focus-visible:ring-inset"
              >
                <span className="inline-flex flex-col items-start relative flex-[0_0_auto] min-w-0">
                  <span className="flex items-center mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#062025] text-sm tracking-[0.14px] leading-5 relative w-fit max-w-full">
                    {item.question}
                  </span>
                </span>
                <span className="inline-flex flex-col items-start relative flex-[0_0_auto] ml-4">
                  <img
                    className={`relative w-3 h-[7.4px] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    alt=""
                    aria-hidden="true"
                    src={item.icon}
                  />
                </span>
              </button>
              {isOpen ? (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="w-full px-4 pb-4 pt-0"
                >
                  <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#062025] text-sm tracking-[0.14px] leading-5">
                    {item.answer}
                  </p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};

### HeroSection.tsx
export const HeroSection = (): JSX.Element => {
  const actions = [
    {
      label: "Request Quote",
      variant: "primary" as const,
      type: "button" as const,
    },
    {
      label: "View Equipment",
      variant: "secondary" as const,
      type: "button" as const,
    },
  ];

  return (
    <section
      className="flex w-full h-[751px] items-center justify-center absolute top-0 left-0"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col w-full h-full items-start justify-center absolute top-0 left-0 bg-[#1d353a]">
        <div
          className="relative flex-1 self-stretch w-full grow mix-blend-multiply opacity-40 bg-[url(/ab6axucwseuppm9w-hf8phn48x3e3yuiih3snry1sjwanw4iipxhvznmvyt8ktd2ytmzrn9gatnbdhblhtkkbcr5brx9jpg-lakkmlv2zo6nudf16dbmrppevjirasojudqslanrfpa-6eaoi8-ompwuwoh6z0vvu8vpqx-cks-jeuq1-vcs4ox46yd4jxlczzvi4cbpfoti-4timyym42ekrmraf1cn1f58qnh3nrqvpigvxd7cwk3fkumjquob5gmbmtwrlqs9xvl-RY.png)] bg-cover bg-[50%_50%]"
          aria-hidden="true"
        />
      </div>
      <div className="inline-flex flex-col items-center px-4 py-0 relative flex-[0_0_auto] z-10">
        <div className="inline-flex items-start pt-0 pb-2 px-0 flex-col relative flex-[0_0_auto]">
          <div className="inline-flex items-center pl-[9.88px] pr-[9.89px] py-0 shadow-[0px_10px_8px_#0000000a,0px_4px_3px_#0000001a] flex-col relative flex-[0_0_auto]">
            <h1
              id="hero-heading"
              className="mt-[-1.00px] [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-white text-4xl text-center tracking-[-0.72px] leading-[44px] relative w-fit"
            >
              Industrial Power, On
              <br />
              Demand.
            </h1>
          </div>
        </div>
        <div className="inline-flex flex-col max-w-sm items-start pt-0 pb-8 px-0 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col max-w-sm items-center px-[26.28px] py-0 opacity-90 relative flex-[0_0_auto]">
            <p className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7 relative w-fit">
              Premium heavy machinery and
              <br />
              specialized logistics for the region&#39;s
              <br />
              largest infrastructure projects.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-xs w-80 items-start gap-4 relative flex-[0_0_auto]">
          {actions.map((action) => (
            <button
              key={action.label}
              type={action.type}
              className={
                action.variant === "primary"
                  ? "box-border pl-[108.56px] pr-[108.58px] py-4 bg-[#855300] inline-flex flex-col items-center justify-center relative flex-[0_0_auto] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d353a]"
                  : "box-border pl-[103.84px] pr-[103.86px] py-4 bg-[#1d353a] border border-solid border-white inline-flex flex-col items-center justify-center relative flex-[0_0_auto] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d353a]"
              }
              aria-label={action.label}
            >
              {action.variant === "primary" && (
                <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]" />
              )}
              <div
                className={
                  action.variant === "primary"
                    ? "flex items-center justify-center mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#334b50] text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit"
                    : "flex items-center justify-center [font-family:'Inter-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit"
                }
              >
                {action.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

###OperationalReachSection.tsx
export const HeroSection = (): JSX.Element => {
  const actions = [
    {
      label: "Request Quote",
      variant: "primary" as const,
      type: "button" as const,
    },
    {
      label: "View Equipment",
      variant: "secondary" as const,
      type: "button" as const,
    },
  ];

  return (
    <section
      className="flex w-full h-[751px] items-center justify-center absolute top-0 left-0"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col w-full h-full items-start justify-center absolute top-0 left-0 bg-[#1d353a]">
        <div
          className="relative flex-1 self-stretch w-full grow mix-blend-multiply opacity-40 bg-[url(/ab6axucwseuppm9w-hf8phn48x3e3yuiih3snry1sjwanw4iipxhvznmvyt8ktd2ytmzrn9gatnbdhblhtkkbcr5brx9jpg-lakkmlv2zo6nudf16dbmrppevjirasojudqslanrfpa-6eaoi8-ompwuwoh6z0vvu8vpqx-cks-jeuq1-vcs4ox46yd4jxlczzvi4cbpfoti-4timyym42ekrmraf1cn1f58qnh3nrqvpigvxd7cwk3fkumjquob5gmbmtwrlqs9xvl-RY.png)] bg-cover bg-[50%_50%]"
          aria-hidden="true"
        />
      </div>
      <div className="inline-flex flex-col items-center px-4 py-0 relative flex-[0_0_auto] z-10">
        <div className="inline-flex items-start pt-0 pb-2 px-0 flex-col relative flex-[0_0_auto]">
          <div className="inline-flex items-center pl-[9.88px] pr-[9.89px] py-0 shadow-[0px_10px_8px_#0000000a,0px_4px_3px_#0000001a] flex-col relative flex-[0_0_auto]">
            <h1
              id="hero-heading"
              className="mt-[-1.00px] [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-white text-4xl text-center tracking-[-0.72px] leading-[44px] relative w-fit"
            >
              Industrial Power, On
              <br />
              Demand.
            </h1>
          </div>
        </div>
        <div className="inline-flex flex-col max-w-sm items-start pt-0 pb-8 px-0 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col max-w-sm items-center px-[26.28px] py-0 opacity-90 relative flex-[0_0_auto]">
            <p className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7 relative w-fit">
              Premium heavy machinery and
              <br />
              specialized logistics for the region&#39;s
              <br />
              largest infrastructure projects.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-xs w-80 items-start gap-4 relative flex-[0_0_auto]">
          {actions.map((action) => (
            <button
              key={action.label}
              type={action.type}
              className={
                action.variant === "primary"
                  ? "box-border pl-[108.56px] pr-[108.58px] py-4 bg-[#855300] inline-flex flex-col items-center justify-center relative flex-[0_0_auto] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d353a]"
                  : "box-border pl-[103.84px] pr-[103.86px] py-4 bg-[#1d353a] border border-solid border-white inline-flex flex-col items-center justify-center relative flex-[0_0_auto] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d353a]"
              }
              aria-label={action.label}
            >
              {action.variant === "primary" && (
                <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]" />
              )}
              <div
                className={
                  action.variant === "primary"
                    ? "flex items-center justify-center mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#334b50] text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit"
                    : "flex items-center justify-center [font-family:'Inter-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit"
                }
              >
                {action.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

### SpecializedServicesSection.tsx
import icon from "./icon.svg";
import icon2 from "./icon-2.svg";
import image from "./image.svg";

const services = [
  {
    title: "Earthmoving Equipment",
    description: [
      "High-capacity excavators and loaders",
      "for massive site preparation and",
      "grading.",
    ],
    imageClass:
      "bg-[url(/ab6axudq7g6hn3rofbhkfeyanu9mj2jkmqppnygmau9pxykcead-ki2l0sixomj9ccvqeiume3-wazkz49d-qha7gqstwu54mrqlzx8vj73plhtcqrrums7fb4q2h-6p90kjfvcn-ahu2wrhuk4-af31kgjxx9225-c0jzvd6cwc2yevmzgrk1ch3h6uicukjaeiesbih-guaaudihnja2mg1ykzzwdxv0rioywdcsyr7vwrj3grbu7i2lyivbtv4bfarimi2ozz4t84bx8.png)]",
    iconSrc: icon,
    iconAlt: "",
  },
  {
    title: "Lifting Solutions",
    description: [
      "Crawler and mobile cranes designed for",
      "precision lifting in tight urban or open",
      "site conditions.",
    ],
    imageClass:
      "bg-[url(/ab6axudyexxmnfzuvbexcp7kcjjfdeft-yt63mhvksqe1sdpp-x0x5oqfvgztv7d3rsvcdsfafx-vqn8gra3dfmfsuqpv-qyqrqdg5iaylctifkzl4doseymis4puyse6bfdk75yxwnhhdjvvghz-t-nxt4klgj4-niq8e5apzxwg6xtbvrq65ndgbwilaiidyr2eu8k349ya2kgxgbitk1r71-p-ywsgcv4kr9ytecmn-68fycr-lo-cxnvqlhozffrahocmj19qxfiayo.png)]",
    iconSrc: image,
    iconAlt: "",
  },
  {
    title: "Power Generation",
    description: [
      "Mobile power plants and silent",
      "generators for off-grid operations and",
      "emergency backup.",
    ],
    imageClass:
      "bg-[url(/ab6axuapwsvwmfbgcsm1-hw7ljmnbicubtua2-qj-6tc9dvh7tnj6zjmzwvmuhvuvqinp53m8cw0h5wxo5g1-ym4vmids2-4xsy60ukcyofzlyshfrgpglna1cpkjpdfiejqqp70hpmetctahm2kwprej41xi12dh8eeevyck1jemdjgvig8raut20epmmk6dlymbjmxsscgnxxedsfedsnqlnczqjosdjubywfofw83vqhva54zvcwemourhwvu3ibg89j7gn7sgbd2mbm.png)]",
    iconSrc: icon2,
    iconAlt: "",
  },
];

export const SpecializedServicesSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col w-full items-start gap-10 px-4 py-16 absolute top-[751px] left-0"
      aria-labelledby="specialized-services-heading"
    >
      <header className="flex flex-col items-start gap-[8.5px] self-stretch w-full relative flex-[0_0_auto]">
        <div className="flex items-center mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#855300] text-xs tracking-[1.20px] leading-4 whitespace-nowrap relative w-fit">
          OUR FLEET
        </div>
        <div className="flex items-start self-stretch w-full flex-col relative flex-[0_0_auto]">
          <h2
            id="specialized-services-heading"
            className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold text-[#062025] text-2xl tracking-[0] leading-8"
          >
            Specialized Services
          </h2>
        </div>
      </header>
      <div className="flex flex-col items-start gap-6 self-stretch w-full relative flex-[0_0_auto]">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl overflow-hidden border border-solid border-[#c2c7c9] shadow-[0px_1px_2px_#0000000d]"
          >
            <div
              className={`relative self-stretch w-full h-48 ${service.imageClass} bg-cover bg-[50%_50%]`}
              role="img"
              aria-label={service.title}
            />
            <div className="flex flex-col items-start gap-2 p-6 self-stretch w-full relative flex-[0_0_auto]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold text-[#062025] text-2xl tracking-[0] leading-8">
                  {service.title}
                </h3>
              </div>
              <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424849] text-base tracking-[0] leading-6">
                  {service.description.map((line, index) => (
                    <span key={`${service.title}-line-${index}`}>
                      {line}
                      {index < service.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
              <button
                type="button"
                aria-label={`Explore fleet for ${service.title}`}
                className="flex items-center gap-2 pt-[7.5px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] text-left"
              >
                <span className="flex items-center mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#062025] text-sm tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                  Explore Fleet
                </span>
                <span className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <img
                    className="relative w-[9.33px] h-[9.33px]"
                    alt={service.iconAlt}
                    src={service.iconSrc}
                  />
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
### tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: { preflight: true },
  theme: { extend: {} },
  plugins: [],
};
### tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  button,
  input,
  select,
  textarea {
    @apply appearance-none bg-transparent border-0 outline-none;
  }
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  .all-unset {
    all: unset;
  }
}

:root {
  --animate-spin: spin 1s linear infinite;
}

.animate-fade-in {
  animation: fade-in 1s var(--animation-delay, 0s) ease forwards;
}

.animate-fade-up {
  animation: fade-up 1s var(--animation-delay, 0s) ease forwards;
}

.animate-marquee {
  animation: marquee var(--duration) infinite linear;
}

.animate-marquee-vertical {
  animation: marquee-vertical var(--duration) linear infinite;
}

.animate-shimmer {
  animation: shimmer 8s infinite;
}

.animate-spin {
  animation: var(--animate-spin);
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes image-glow {
  0% {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.74, 0.25, 0.76, 1);
  }

  10% {
    opacity: 0.7;
    animation-timing-function: cubic-bezier(0.12, 0.01, 0.08, 0.99);
  }

  to {
    opacity: 0.4;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    transform: none;
    opacity: 1;
  }
}

@keyframes shimmer {
  0%,
  90%,
  to {
    background-position: calc(-100% - var(--shimmer-width)) 0;
  }

  30%,
  60% {
    background-position: calc(100% + var(--shimmer-width)) 0;
  }
}

@keyframes marquee {
  0% {
    transform: translate(0);
  }

  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-vertical {
  0% {
    transform: translateY(0);
  }

  to {
    transform: translateY(calc(-100% - var(--gap)));
  }
}


## Shared basic components 
###Navbar
#### index.tsx 
import chatgptImage16Juin2026223008RemovebgPreview3 from "./chatgpt-image-16-juin-2026-22-30-08-removebg-preview-3.png";
import icon from "./icon.svg";

export const HeaderTopnavbar = (): JSX.Element => {
  return (
    <header className="relative w-[354px]" aria-label="Top navigation">
      <div className="absolute left-0 top-0 h-[51px] w-[354px] rounded-xl bg-[#1d353acc] shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]" />
      <div className="absolute left-0 top-0 h-[51px] w-[354px] rounded-xl border border-solid border-[#ffffff1a] bg-[#ffffff01]" />
      <nav
        className="relative flex h-[51px] w-[354px] items-center justify-between px-6"
        aria-label="Primary"
      >
        <a
          href="#"
          className="inline-flex shrink-0 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Homepage"
        >
          <img
            className="h-[38px] w-[38px] object-cover"
            alt="MYSH logo"
            src={chatgptImage16Juin2026223008RemovebgPreview3}
          />
        </a>
        <div className="inline-flex items-center gap-4">
          <button
            type="button"
            className="inline-flex items-center justify-center opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md"
            aria-label="Change language"
          >
            <span className="[font-family:'Inter-Medium',Helvetica] text-sm font-medium leading-5 tracking-[0.14px] text-white">
              EN/AR
            </span>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Open menu"
          >
            <img className="h-3 w-[18px]" alt="Menu icon" src={icon} />
          </button>
        </div>
      </nav>
    </header>
  );
};

#### tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: { preflight: true },
  theme: { extend: {} },
  plugins: [],
};

#### tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  button,
  input,
  select,
  textarea {
    @apply appearance-none bg-transparent border-0 outline-none;
  }

  .all-unset {
    all: unset;
  }
}

:root {
  --animate-spin: spin 1s linear infinite;
}

.animate-fade-in {
  animation: fade-in 1s var(--animation-delay, 0s) ease forwards;
}

.animate-fade-up {
  animation: fade-up 1s var(--animation-delay, 0s) ease forwards;
}

.animate-marquee {
  animation: marquee var(--duration) infinite linear;
}

.animate-marquee-vertical {
  animation: marquee-vertical var(--duration) linear infinite;
}

.animate-shimmer {
  animation: shimmer 8s infinite;
}

.animate-spin {
  animation: var(--animate-spin);
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes image-glow {
  0% {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.74, 0.25, 0.76, 1);
  }

  10% {
    opacity: 0.7;
    animation-timing-function: cubic-bezier(0.12, 0.01, 0.08, 0.99);
  }

  to {
    opacity: 0.4;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes shimmer {
  0%,
  90%,
  to {
    background-position: calc(-100% - var(--shimmer-width)) 0;
  }

  30%,
  60% {
    background-position: calc(100% + var(--shimmer-width)) 0;
  }
}

@keyframes marquee {
  0% {
    transform: translate(0);
  }

  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-vertical {
  0% {
    transform: translateY(0);
  }

  to {
    transform: translateY(calc(-100% - var(--gap)));
  }
}

### Footer 
#### index.tsx
import chatgptImage16Juin2026222814RemovebgPreview1 from "./chatgpt-image-16-juin-2026-22-28-14-removebg-preview-1.png";

const footerSections = [
  {
    title: "COMPANY",
    items: ["About Us", "Services", "Equipment"],
  },
  {
    title: "LEGAL",
    items: ["Privacy Policy", "Terms of Service"],
  },
];

export const FooterShared = (): JSX.Element => {
  return (
    <footer
      className="flex relative flex-col items-start bg-[#dee3e5] pt-12 pb-32 px-4"
      aria-label="Footer"
    >
      <div className="relative flex flex-col items-start gap-8 self-stretch w-full flex-[0_0_auto]">
        <div className="relative flex flex-col items-start gap-4 self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex flex-col items-start self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[62px] h-[62px] aspect-[1] object-cover"
              alt="MYSH logo"
              src={chatgptImage16Juin2026222814RemovebgPreview1}
            />
          </div>
          <div className="relative flex flex-col items-start self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424849] text-base tracking-[0] leading-6">
              Leading the industrial rental sector with
              <br />
              precision logistics and high-performance
              <br />
              equipment.
            </p>
          </div>
        </div>
        <nav
          className="grid grid-cols-2 grid-rows-[100px] h-fit gap-6"
          aria-label="Footer navigation"
        >
          {footerSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={`relative w-full h-fit flex flex-col items-start gap-2 ${
                sectionIndex === 1
                  ? "row-[1_/_2] col-[2_/_3] pt-0 pb-7 px-0"
                  : "row-[1_/_2] col-[1_/_2]"
              }`}
            >
              <div className="relative flex flex-col items-start self-stretch w-full flex-[0_0_auto] opacity-60">
                <h2 className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#062025] text-xs tracking-[0.60px] leading-4">
                  {section.title}
                </h2>
              </div>
              <ul className="relative flex flex-col items-start gap-2 self-stretch w-full flex-[0_0_auto] list-none p-0 m-0">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="relative flex flex-col items-start self-stretch w-full flex-[0_0_auto]"
                  >
                    <span className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#424849] text-sm tracking-[0.14px] leading-5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="relative flex flex-col items-start pt-8 pb-0 px-0 self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#c2c7c9]">
          <div className="relative flex flex-col items-start self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#424849] text-xs tracking-[0.60px] leading-4">
              © 2024 MYSH Industrial Equipment Rental. All rights
              <br />
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

#### tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: { preflight: true },
  theme: { extend: {} },
  plugins: [],
};

#### tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  button,
  input,
  select,
  textarea {
    @apply appearance-none bg-transparent border-0 outline-none;
  }

  .all-unset {
    all: unset;
  }
}

:root {
  --animate-spin: spin 1s linear infinite;
}

.animate-fade-in {
  animation: fade-in 1s var(--animation-delay, 0s) ease forwards;
}

.animate-fade-up {
  animation: fade-up 1s var(--animation-delay, 0s) ease forwards;
}

.animate-marquee {
  animation: marquee var(--duration) infinite linear;
}

.animate-marquee-vertical {
  animation: marquee-vertical var(--duration) linear infinite;
}

.animate-shimmer {
  animation: shimmer 8s infinite;
}

.animate-spin {
  animation: var(--animate-spin);
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes image-glow {
  0% {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.74, 0.25, 0.76, 1);
  }

  10% {
    opacity: 0.7;
    animation-timing-function: cubic-bezier(0.12, 0.01, 0.08, 0.99);
  }

  to {
    opacity: 0.4;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes shimmer {
  0%,
  90%,
  to {
    background-position: calc(-100% - var(--shimmer-width)) 0;
  }

  30%,
  60% {
    background-position: calc(100% + var(--shimmer-width)) 0;
  }
}

@keyframes marquee {
  0% {
    transform: translate(0);
  }

  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-vertical {
  0% {
    transform: translateY(0);
  }

  to {
    transform: translateY(calc(-100% - var(--gap)));
  }
}

### Floating WhatsApp Toggle 
#### index.tsx
export const FloatingWhatsapp = (): JSX.Element => {
  return (
    <button
      type="button"
      aria-label="Open WhatsApp"
      className="inline-flex items-center relative"
    >
      <span className="flex w-14 h-14 items-center justify-center relative bg-[#25d366] rounded-full">
        <span className="absolute top-[calc(50.00%_-_28px)] left-0 w-14 h-14 bg-[#ffffff01] rounded-full shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a]" />
        <span
          aria-hidden="true"
          className="relative w-[31.85px] h-8 bg-[url(/vector.svg)] bg-[100%_100%]"
        />
      </span>
    </button>
  );
};

#### tailwind.config.js

module.exports = {
content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
corePlugins: { preflight: true },
theme: { extend: { } },
plugins: []
};



