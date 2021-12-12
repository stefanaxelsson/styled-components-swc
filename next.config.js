/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/rewrite",
        destination: "/",
      },
    ];
  },
};
