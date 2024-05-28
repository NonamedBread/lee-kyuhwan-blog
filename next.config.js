/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  darkMode: 'class',
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
