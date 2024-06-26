/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  // redirects: {
  //   redirects: async () => {
  //     return [
  //       {
  //         source: "/Blogs/:id",
  //         destination: "/Blogs",
  //         permanent: true,
  //       },
  //     ];
  //   },
  // },
};

export default nextConfig;
