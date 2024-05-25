"use client";
import { Content, asText } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/layout/Bounded";
import { PrismicNextImage } from "@prismicio/next";

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
            <div key={idx} className="p-5">
              <PrismicNextImage
                field={item.service_image}
                fallbackAlt=""
                className="m-auto"
              />
              <p className="pt-5 font-bold ">{item.service_name}</p>
            </div>
          ))}
        </div>
      </Bounded>
    </section>
  );
};

export default OurServices;
