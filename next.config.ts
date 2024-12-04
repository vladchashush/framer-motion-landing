import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	output: 'export',
	basePath: '/framer-motion-landing/docs/',
	distDir: '/docs',
	images: {
		unoptimized: true
	}
}

export default nextConfig
