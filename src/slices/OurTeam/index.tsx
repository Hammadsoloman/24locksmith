"use client";
import { Button } from "@/components/ui/button";
import { Content, asLink, asText } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { motion } from "framer-motion";
/**
 * Props for `OurTeam`.
 */
export type OurTeamProps = SliceComponentProps<Content.OurTeamSlice>;

/**
 * Component for "OurTeam" Slices.
 */
const OurTeam = ({ slice }: OurTeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section>
        <div className="rc-container flex flex-col gap-10 duration-300 md:flex-row">
          {/* CTA------------------------------------------------------------starts here */}
          <div className="flex flex-col gap-5 md:w-1/2">
            <h6 className="font-bold text-[#279DD7]">OUR TEAM</h6>
            <h2 className="text-5xl font-bold">
              {asText(slice.primary.heading)}
            </h2>
            <p className="">{asText(slice.primary.tagline)}</p>
            <Link href={asLink(slice.primary.button_navigates_to) || "#"}>
              <Button className="w-fit rounded-none bg-[#279DD7]">DISCOVER MORE</Button>
            </Link>
          </div>
          {/* CTA------------------------------------------------------------ends here */}

          {/* Cards------------------------------------------------------------starts here */}
          <div className="flex flex-col gap-5 overflow-hidden">
            {slice.items.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1,
                    delay:idx*0.2
                  },
                }}
                viewport={{ amount: 0.5 }}
                key={idx}
                className="relative ml-7 bg-[#14193C] p-5"
              >
                <div className="absolute -left-7 top-1/2 h-14 w-14 -translate-y-1/2 bg-[#279DD7]">
                  {item.icon.url && <img src={item.icon.url} />}
                </div>
                <div className="ml-7">
                  <h6 className="text-md font-bold text-[#279DD7]">
                    {asText(item.heading)}
                  </h6>
                  <p className="text-white">{asText(item.content)}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Cards------------------------------------------------------------ends here */}
        </div>
      </section>
    </section>
  );
};

export default OurTeam;
