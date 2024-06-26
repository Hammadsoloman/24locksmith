import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/zxQaZGF30kw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export function FaqSection({
  slice,
}: SliceComponentProps<Content.FaqSectionSlice>) {
 
  return (
    <div className="mx-auto max-w-7xl bg-white p-10 py-16 md:py-32 my-20 ">
      <div className="mx-auto text-center">
        <h2 className="mb-3 text-4xl font-bold">{slice?.primary?.heading}</h2>
        <p className="mb-6 text-gray-600">{slice?.primary?.tagline}</p>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <div className="space-y-4">
            {slice?.items
              ?.slice(0, Math.ceil(slice?.items?.length / 2))
              .map((item, idx) => (
                <details key={idx} className="rounded-md bg-gray-100 p-4">
                  <summary className="cursor-pointer font-semibold">
                    {item?.trigger}
                    <ChevronUpIcon className="float-right" />
                  </summary>
                  <p className="mt-2 text-gray-600">{item?.content}</p>
                </details>
              ))}
          </div>
        </div>
        <div>
          <div className="space-y-4">
            {slice?.items
              ?.slice(Math.ceil(slice?.items?.length / 2), slice?.items.length)
              .map((item, idx) => (
                <details key={idx} className="rounded-md bg-gray-100 p-4">
                  <summary className="cursor-pointer font-semibold">
                    {item?.trigger}
                    <ChevronUpIcon className="float-right" />
                  </summary>
                  <p className="mt-2 text-gray-600">{item?.content}</p>
                </details>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
