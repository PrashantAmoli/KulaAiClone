/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/photo/**',
				port: '',
			},
		],
	},
};

module.exports = nextConfig;
