"use client";
import Bounded from "@/components/layout/Bounded";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { motion } from "framer-motion";
/**
 * Props for `Highlight`.
 */
export type HighlightProps = SliceComponentProps<Content.HighlightSlice>;

/**
 * Component for "Highlight" Slices.
 */
const Highlight = ({ slice }: HighlightProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 grid-rows-2 place-items-center gap-6 md:grid-cols-2 md:grid-rows-1 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          }}
          viewport={{ amount: 0.5 }}
          className="md:prose"
        >
          {isFilled.richText(slice.primary.heading) && (
            <h3 className="text-2xl font-medium md:text-4xl 2xl:text-5xl">
              <PrismicText field={slice.primary.heading} />
            </h3>
          )}
          {isFilled.richText(slice.primary.body) && (
            <p className="line-clamp-4 text-balance md:line-clamp-none">
              <PrismicText field={slice.primary.body} />
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          }}
          viewport={{ amount: 0.5 }}
          className={clsx(
            "-order-1",
            slice.variation === "reverse" ? "" : "md:order-1",
          )}
        >
          {isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              className={clsx(
                isFilled.image(slice.primary.mobile_image) &&
                  "hidden md:inline-block",
              )}
              field={slice.primary.image}
            />
          )}
          {isFilled.image(slice.primary.mobile_image) && (
            <PrismicNextImage
              className="rounded md:hidden"
              field={slice.primary.mobile_image}
            />
          )}
        </motion.div>
      </div>
    </Bounded>
  );
};

export default Highlight;
