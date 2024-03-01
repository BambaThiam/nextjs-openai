/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.thecocktaildb.com',
          port: '',
          pathname: '/images/**',
        },
      ],
    },
  };
  
//   module.exports = nextConfig;

  export default nextConfig;
