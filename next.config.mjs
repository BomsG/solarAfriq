/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  images: {
    domains: ['placehold.co', 'res.cloudinary.com'],
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
  async rewrites() {
    return [
      {
        source: '/allcampaigns',
        destination: '/dashboard/allcampaigns',
      },
      {
        source: '/allcampaigns/:slug',
        destination: '/dashboard/allcampaigns/:slug',
      },
      {
        source: '/mycampaigns',
        destination: '/dashboard/mycampaigns',
      },
      {
        source: '/mycampaigns/:slug',
        destination: '/dashboard/mycampaigns/:slug',
      },
      {
        source: '/createcampaign',
        destination: '/dashboard/createcampaign',
      },
      {
        source: '/mycampaignbids',
        destination: '/dashboard/mycampaignbids',
      },
      {
        source: '/mycampaignbids/:slug',
        destination: '/dashboard/mycampaignbids/:slug',
      },
      {
        source: '/mycampaignstats',
        destination: '/dashboard/mycampaignstats',
      },
      {
        source: '/support',
        destination: '/dashboard/support',
      },
      {
        source: '/settings',
        destination: '/dashboard/settings',
      },
      {
        source: '/payment',
        destination: '/dashboard/payment',
      },
    ];
  },
};

export default nextConfig;
