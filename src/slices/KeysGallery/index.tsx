"use client";
import Bounded from "@/components/layout/Bounded";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `KeysGallery`...
 */
export type KeysGalleryProps = SliceComponentProps<Content.KeysGallerySlice>;

/**
 * Component for "KeysGallery" Slices.
 */
const KeysGallery = ({ slice }: KeysGalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="rc-container"
      
    >
      <Bounded className="bg-white shadow-xl pt-5" >
        <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-gray-900">
          {asText(slice?.primary?.title)}
        </h2>
        <PrismicNextImage
          field={slice?.primary?.gallery_image}
          fallbackAlt=""
          className="m-auto"
        />
      </Bounded>
    </section>
  );
};

export default KeysGallery;
