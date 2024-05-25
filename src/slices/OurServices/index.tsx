"use client";
import { Content, asText } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/layout/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";

/**
 * Props for `OurServices`....
 */
export type OurServicesProps = SliceComponentProps<Content.OurServicesSlice>;

/**
 * Component for "OurServices" Slices.
 */
const OurServices = ({ slice }: OurServicesProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="rc-container"
    >
      <Bounded>
        <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-gray-900">
          {asText(slice?.primary?.title)}
        </h2>
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 ">
          {slice?.items.map((item, idx) => (
            <motion.div key={idx} className="p-5"  initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2,
                delay: (idx+1) * 0.5,
              },
            }}
            viewport={{ once: true, amount: 0.2 }}>
              <PrismicNextImage
                field={item.service_image}
                fallbackAlt=""
                className="m-auto"
              />
              <p className="pt-5 font-bold ">{item.service_name}</p>
            </motion.div>
          ))}
        </div>
      </Bounded>
    </section>
  );
};

export default OurServices;
