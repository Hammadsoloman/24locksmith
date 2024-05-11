import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="grid h-screen w-full place-items-center sm:h-[852px]"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "linear-gradient(0deg, rgba(6, 35, 76, 0.439), #06234C70), url(/error.jpg)",
      }}
    >
      <div
        className="mx-4 flex w-full max-w-sm flex-col gap-5 text-center text-white sm:m-0 sm:p-4 md:p-8 lg:p-16"
        style={{ backgroundColor: "rgba(6, 35, 76, 0.7)" }}
      >
        <div>
          <span className="text-[61px]">404</span>
        </div>
        <div>
          <span className="text-[31px]">Page Not Found</span>
        </div>
        <div>
          <p>
            The page you are looking for no longer exists. Perhaps you can
            return back to the site’s homepage and see if you can find what you
            are looking for.
          </p>
        </div>
        <div>
          <Link href={"/"}>
            <button className="bg-[#279DD7] p-3">Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
