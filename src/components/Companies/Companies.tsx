import Image from "next/image";

import logoAirtable from "@/images/logos/airtable.svg";
import logoUnity from "@/images/logos/unity.svg";

export const Companies = () => (
  <div className="pt-8 pb-16 text-center lg:pt-32">
    <div className="mt-16 lg:mt-16">
      <p className="font-display text-base text-slate-900">
        Trusted by these six companies so far
      </p>
      <ul
        role="list"
        className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
      >
        {[
          [
            { name: "Air Table", logo: logoAirtable },
            { name: "Unity", logo: logoUnity },
            { name: "StaticKit", logo: logoAirtable },
          ],
          [
            { name: "Mirage", logo: logoAirtable },
            { name: "Laravel", logo: logoAirtable },
            { name: "Statamic", logo: logoAirtable },
          ],
        ].map((group, groupIndex) => (
          <li key={groupIndex}>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              {group.map((company) => (
                <li key={company.name} className="flex">
                  <Image src={company.logo} alt={company.name} unoptimized />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
