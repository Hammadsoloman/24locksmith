import Bounded from "@/components/layout/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import ContactUsBackground from "../../../public/assets/images/6afa024839fd19274156129e486eca70727249fa-1920x540.webp";
import { LocationDocument } from "../../../prismicio-types";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { Children } from "react";
/**
 * Props for `Locations`.
 */
export type LocationsProps = SliceComponentProps<Content.LocationsSlice>;

/**
 * Component for "Locations" Slices.
 */
const Locations = async ({ slice }: LocationsProps) => {
  console.log(slice?.primary?.background_image?.url?.split("?")[0]);
  const client = createClient();
  const locations: LocationDocument[] = await client.getAllByType("location");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-20"
    >
      <div
        className="text-white flex flex-col justify-items-center w-full bg-white p-10"
        style={{
          backgroundImage:`url(${slice?.primary?.background_image?.url?.split("?")[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          //height: "300px",
        }}
      >
      
          <h2 className="pb-5 text-4xl font-bold text-center">
            {asText(slice?.primary?.title)}
          </h2>
          <ul className="m-auto flex list-inside list-disc flex-row gap-5 md:gap-20 text-xl font-bold ">
            <div>
              {locations
                .slice(0, Math.ceil(locations.length / 2))
                .map((location) => {
                  return (
                    <li key={location.id} className="pb-2">
                      <Link
                        href={`/locations/${location.uid}`}
                        className="border-white hover:border-b"
                      >
                        {asText(location.data.title)}
                      </Link>
                    </li>
                  );
                })}
            </div>
            <div>
              {locations
                .slice(Math.ceil(locations.length / 2), locations.length)
                .map((location) => {
                  return (
                    <li key={location.id} className="pb-2">
                      <Link
                        href={`/locations/${location.uid}`}
                        className="border-white hover:border-b"
                      >
                        {asText(location.data.title)}
                      </Link>
                    </li>
                  );
                })}
            </div>
          </ul>
   
      </div>
    </section>
  );
};

export default Locations;
