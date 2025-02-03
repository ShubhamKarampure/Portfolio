import Image from "next/image";
import React from "react";
import { Timeline } from "../sub/timeline";

export function TimelineDemo() {
  const data = [
    {
  title: "2024",
  content: (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
        Third place in National Level Eduhacks1.0 organised by Vedaverse among 100+ teams
      </p>
      <div>
        <Image
          src="/eduhacks.jpg"
          alt="eduhacks certificate"
          width={400}
          height={600} 
          className="rounded-lg object-cover h-80 md:h-80 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    </div>
  ),
      },
{
  title: "2024",
  content: (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
        Winner of NIT Hacks 7.0 National Level Hackathon organised by NIT Silchar among 150+ teams.
      </p>
      <div>
        <Image
          src="/NIT-Hacks.jpg"
          alt="Nit hackathon certificate"
          width={400}
          height={600} 
          className="rounded-lg object-cover h-80 md:h-80 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    </div>
  ),
      },
{
  title: "2024",
  content: (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
        Finalist in Smart India Hackathon organised by the ministry of Education among 500+ teams.
      </p>
      <div>
        <Image
          src="/sih.jpg"
          alt="startup template"
          width={400}
          height={600} 
          className="rounded-lg object-cover h-80 md:h-80 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    </div>
  ),
      },
{
  title: "2025",
  content: (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal ">
        Runner ups in frontend Oddsey organised by ASCES S.P.I.T. among 60+ teams
      </p>
      <div>
        <Image
          src="/algograph.jpg"
          alt="startup template"
          width={400}
          height={600} 
          className="rounded-lg object-cover h-80 md:h-80 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    </div>
  ),
},
  ];
    return (
      <section id="certificates">      
    <div className="w-full">
      <Timeline data={data} />
    </div>
      </section>
  );
}
