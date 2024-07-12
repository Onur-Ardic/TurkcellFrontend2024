import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18.js");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
