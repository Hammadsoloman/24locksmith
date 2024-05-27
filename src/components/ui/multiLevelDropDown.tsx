import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { asText } from "@prismicio/client";

export default function MultiLevelDropDown({
  locations,
  carKeyReplacementPages,
}: any) {
  const [ishoverd, setIsHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(-1);
  const [isThirdHovered, setIsThirdHovered] = useState(false);

  return (
    <>
      <div
        className="relative hidden w-full justify-between px-4 hover:bg-gray-100 md:flex"
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
                  <Link
                    href={`/auto-locksmith`}
                    className="border-white pr-2 hover:border-b "
                  >
                    Car Key replacement
                  </Link>

                  {/*    <div
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
                </div>*/}
                </div>
              </li>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col  md:hidden">
        <div className="relative flex w-full gap-2 px-4 hover:bg-gray-100">
          <Image
            className="mt-1 -rotate-90 object-contain"
            src={"/assets/icons/downward-arrow.png"}
            alt="DropDownArrow"
            width={12}
            height={12}
          />
          <p>Auto Locksmith</p>
        </div>
        <div className="relative pl-7 pt-2 flex w-full gap-2 px-4 hover:bg-gray-100">
          <Image
            className="mt-1 -rotate-90 object-contain"
            src={"/assets/icons/downward-arrow.png"}
            alt="DropDownArrow"
            width={12}
            height={12}
          />
          <Link
            href={`/auto-locksmith`}
            className="border-white pr-2 hover:border-b "
          >
            Car Key replacement
          </Link>
        </div>
      </div>
    </>
  );
}
