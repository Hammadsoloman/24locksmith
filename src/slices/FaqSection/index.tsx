import { FaqSection as FaqSectionFC } from "@/components/faq-section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FaqSection`.
 */
export type FaqSectionProps = SliceComponentProps<Content.FaqSectionSlice>;

/**
 * Component for "FaqSection" Slices.
 */
const FaqSection = ({ slice }: FaqSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* @ts-ignore */}
      <FaqSectionFC slice={slice} />
    </section>
  );
};

export default FaqSection;
