"use client";
import { Separator } from "@/components/ui/separator";
import { Content, asText } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { motion } from "framer-motion";
/**
 * Props for `WhoWeAre`.
 */
export type WhoWeAreProps = SliceComponentProps<Content.WhoWeAreSlice>;

/**
 * Component for "WhoWeAre" Slices.
 */
const WhoWeAre = ({ slice }: WhoWeAreProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section>
        <div className="rc-container flex flex-col gap-10 duration-300 md:flex-row overflow-hidden">
          {/* CTA------------------------------------------------------------starts here */}
          <motion.div    initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          }}
          viewport={{ amount: 0.5 }} className="flex flex-col gap-5 md:w-1/2">
            <h6 className="text-[#279DD7] font-bold">WHO WE ARE</h6>
            <h2 className="text-5xl font-bold">
              {asText(slice.primary.heading)}
            </h2>
            <p className="">{asText(slice.primary.tagline)}</p>
            <div className="grid grid-cols-2">
              {slice.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="bg-[#279DD7] h-4 w-4 rounded-full"></span>
                  <span>{item.item}</span>
                </div>
              ))}
            </div>
            <Separator />
            <div className="flex items-center gap-3">
              <span className="bg-[#279DD7] grid h-14 w-14 place-items-center">
                <Image
                  src={"/contact-icon.png"}
                  alt="Contact Icon"
                  width={70}
                  height={70}
                />
              </span>
              <div>
                <p className="font-semibold text-black/50">
                  24/7 Emergency Towing
                </p>
                <h3 className="text-2xl text-[#14193C]">
                  {slice.primary.contact_phone_number}
                </h3>
              </div>
            </div>
          </motion.div>
          {/* CTA------------------------------------------------------------ends here */}

          {/* Image------------------------------------------------------------starts here */}
          <motion.div  initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          }}
          viewport={{ amount: 0.5 }} className="relative ml-4 mt-4 w-full duration-300 md:w-1/2">
            <div className="absolute -left-5 -top-5 bg-white p-1">
              <div className="bg-[#14193C] w-fit p-5 text-center">
                <h2 className="text-[#279DD7] text-3xl font-bold">
                  {slice.primary.featured_image_lable}
                </h2>
                <p className="text-white">YEARS OF EXPERIENCE</p>
              </div>
            </div>
            <PrismicImage field={slice.primary.featured_image} />
          </motion.div>
          {/* Image------------------------------------------------------------ends here */}
        </div>
      </section>
    </section>
  );
};

export default WhoWeAre;
