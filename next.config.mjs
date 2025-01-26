/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  images: {
    domains: ['placehold.co', 'res.cloudinary.com', 'images.unsplash.com'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'placehold.co',
  //       pathname: '/**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com',
  //       pathname: '/**',
  //       port: '',
  //     },
  //   ],
  // },
};

export default nextConfig;
