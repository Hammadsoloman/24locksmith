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
  const locations: LocationDocument[][] = chunkIntoN(
    await client.getAllByType("location"),
    4,
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-20"
    >
      <div
        className="flex w-full flex-col justify-items-center bg-white px-1 py-10 md:p-10 text-white"
        style={{
          backgroundImage: `url(${slice?.primary?.background_image?.url?.split("?")[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          //height: "300px",
        }}
      >
        <h2 className="pb-5 text-center text-4xl font-bold">
          {asText(slice?.primary?.title)}
        </h2>
        <ul className="m-auto grid grid-cols-2 md:grid-cols-4  list-inside list-disc gap-x-4 text-xl font-bold md:gap-x-2 lg:gap-x-10 ">
          {locations.map((groupLocations, idx) => (
            <div key={idx}>
              {groupLocations
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
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Locations;

const chunkIntoN = (
  arr: LocationDocument[],
  n: number,
): LocationDocument[][] => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (v, i) =>
    arr.slice(i * size, i * size + size),
  );
};
