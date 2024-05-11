import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,

  images: {
    domains: ["images.prismic.io"],
  },
};

export default withPlaiceholder(nextConfig);
