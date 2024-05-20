"use client";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import { Masonry } from "react-masonry/dist";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import ReviewContent from "./ReviewContent";
/**
 * Props for `Reviews`.
 */
export type ReviewsProps = SliceComponentProps<Content.ReviewsSlice>;

/**
 * Component for "Reviews" Slices.
 */
const Reviews = ({ slice }: ReviewsProps): JSX.Element => {
  return (
    <section
      className="bg-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 sm:text-xl lg:mb-16">
            {slice.primary.tagline}
          </p>
        </div>
        <Swiper
          //  slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slice.items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full py-1 ">
                <figure className="flex max-w-[98%] flex-col items-start justify-center overflow-hidden border-b border-gray-200 bg-gray-50 p-8 text-center md:p-12 lg:border-r">
                  <blockquote className="mx-auto mb-8 max-w-[96%] text-gray-500">
                    <h3 className="line-clamp-[1] max-w-[96%] truncate text-wrap text-left text-lg font-semibold text-gray-900 ">
                      {item.heading}
                    </h3>

                    <ReviewContent content={item.content} />
                  </blockquote>
                  <figcaption className="flex max-w-[96%] items-center justify-center space-x-3">
                    <PrismicImage
                      className="size-12 rounded-full object-cover"
                      field={item.author_image}
                    />
                    <div className=" z-10 space-y-0.5 overflow-hidden text-left font-medium ">
                      <div className="truncate">{item.author_name}</div>
                      <div className="truncate text-sm font-light text-gray-500">
                        {item.author_tagline}
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="absolute bottom-10 right-12 ">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z"
                      fill="#E2EDFC"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Masonry>
          <div className="grid-sizer" />

          {slice.items.map((item, idx) => (
            <div
              className="grid-item relative w-full py-1 lg:w-[48%] xl:w-[32%]"
              key={idx}
            >
              <figure className="flex max-w-[98%] flex-col items-start justify-center overflow-hidden border-b border-gray-200 bg-gray-50 p-8 text-center md:p-12 lg:border-r">
                <blockquote className="mx-auto mb-8 max-w-[96%] text-gray-500">
                  <h3 className="line-clamp-[1] max-w-[96%] truncate text-wrap text-left text-lg font-semibold text-gray-900 ">
                    {item.heading}
                  </h3>

                  <ReviewContent content={item.content} />
                </blockquote>
                <figcaption className="flex max-w-[96%] items-center justify-center space-x-3">
                  <PrismicImage
                    className="size-12 rounded-full object-cover"
                    field={item.author_image}
                  />
                  <div className=" z-10 space-y-0.5 overflow-hidden text-left font-medium ">
                    <div className="truncate">{item.author_name}</div>
                    <div className="truncate text-sm font-light text-gray-500">
                      {item.author_tagline}
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div className="absolute bottom-10 right-12 ">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z"
                    fill="#E2EDFC"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
          </Masonry>*/}
      </div>
      <style jsx global>{`
        body {
          --swiper-navigation-color:#279DD7 ;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
