"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Marquees from "react-fast-marquee";
/**
 * Props for `Marquee`.
 */
export type MarqueeProps = SliceComponentProps<Content.MarqueeSlice>;

/**
 * Component for "Marquee" Slices.
 */
const Marquee = ({ slice }: MarqueeProps): JSX.Element => {
  return (
    <section
      className="relative my-16 md:my-32"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Marquees
        autoFill={true}
        pauseOnHover={true}
        speed={slice?.primary?.speed ? slice?.primary?.speed : 70}
      >
        {slice?.items?.map((item, idx) => (
          <PrismicNextImage
            key={idx}
            field={item?.image}
            fallbackAlt=""
            style={{ maxHeight: 384, width: "auto" }}
          />
        ))}
      </Marquees>
    </section>
  );
};

export default Marquee;
