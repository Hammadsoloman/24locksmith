import { cn } from "@/cn";
import Image from "next/image";
import {
  BlogPostDocument,
  PageDocument,
  SettingsDocument,
  LocationDocument,
  PageDocumentDataDropdownItemsItem,
  Simplify,
} from "../../../prismicio-types";
import { useState } from "react";
import Link from "next/link";
import { GroupField, asText } from "@prismicio/client";
const dropdown_items = [
  {
    url: "/",
    label: "hello",
  },
];
export default function MultiLevelDropDown({
  locations,
  carKeyReplacementPages,
}: any) { 
  const [ishoverd, setIsHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(-1);
  const [isThirdHovered, setIsThirdHovered] = useState(false);

  return (
    <div
      className="relative hidden md:flex w-full justify-between px-4 hover:bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>Auto Locksmith</p>
      <Image
        className="mt-1 -rotate-90 object-contain"
        src={"/assets/icons/downward-arrow.png"}
        alt="DropDownArrow"
        width={12}
        height={12}
      />
      <div
        className={`absolute -top-2 left-[100%] w-max  bg-white  md:shadow ${ishoverd ? "block" : "hidden"}`}
      >
        {locations.map((location: any, idx: number) => {
          return (
            <li
              key={location?.id}
              className="relative flex w-full justify-between px-4 py-2 hover:bg-gray-100"
              onMouseEnter={() => setIsSecondHovered(idx)}
              onMouseLeave={() => setIsSecondHovered(-1)}
            >
              <Link
                href={`/locations/${location?.uid}`}
                className="border-white pr-2 hover:border-b "
              >
                {asText(location?.data?.title)}
              </Link>
              <Image
                className="mt-1 -rotate-90 object-contain"
                src={"/assets/icons/downward-arrow.png"}
                alt="DropDownArrow"
                width={12}
                height={12}
              />
              <div
                className={`absolute -top-0 left-[100%] flex  w-max items-start gap-2 bg-white  px-4 py-2  ${isSecondHovered === idx ? "block" : "hidden"}`}
                onMouseEnter={() => setIsThirdHovered(true)}
                onMouseLeave={() => setIsThirdHovered(false)}
              >
                <Image
                  className="mt-1 -rotate-90 object-contain"
                  src={"/assets/icons/downward-arrow.png"}
                  alt="DropDownArrow"
                  width={12}
                  height={12}
                />
                <p>Car Key replacement</p>
                <div
                  className={`absolute -top-2 left-[100%] w-max  bg-white py-2 md:shadow ${isThirdHovered ? "block" : "hidden"}`}
                >
                  {carKeyReplacementPages.map((car: any) => {
                    return (
                      <li
                        key={car?.id}
                        className="relative flex w-full  px-4 py-2 hover:bg-gray-100 "
                      >
                        <Image
                          className="mt-1 -rotate-90 object-contain"
                          src={"/assets/icons/downward-arrow.png"}
                          alt="DropDownArrow"
                          width={12}
                          height={12}
                        />
                        <Link
                          href={`/services/auto-locksmith/${car?.uid}`}
                          className="border-white pl-2 hover:border-b "
                        >
                          {asText(car?.data?.title)}
                        </Link>
                      </li>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
