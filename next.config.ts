import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	output: 'export',
	basePath: '/framer-motion-landing',
	assetPrefix: '/framer-motion-landing',
	distDir: '/docs',
	images: {
		unoptimized: true
	}
}

export default nextConfig
