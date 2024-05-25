import Bounded from "@/components/layout/Bounded";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CommercialServices`...
 */
export type CommercialServicesProps =
  SliceComponentProps<Content.CommercialServicesSlice>;

/**
 * Component for "CommercialServices" Slices.
 */
const CommercialServices = ({
  slice,
}: CommercialServicesProps): JSX.Element => {
  console.log(slice)
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
      <div className="grid grid-cols-2 gap-1 text-center md:grid-cols-3 ">
        {slice?.items.map((item, idx) => (
          <div key={idx} className="p-5">
            <PrismicNextImage
              field={item.service_image}
              fallbackAlt=""
              className="m-auto"
            />
            <p className="pt-5 font-bold ">{item.service_name}</p>
            <PrismicRichText field={item.service_description}/>
          </div>
        ))}
      </div>
    </Bounded>
  </section>
  );
};

export default CommercialServices;
