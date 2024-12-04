import type { NextConfig } from 'next'

const prod = process.env.NODE_ENV === 'production'

const baseUrl = process.env.BASE_URL

const nextConfig: NextConfig = prod
	? {
			output: 'export',
			basePath: baseUrl,
			images: {
				loader: 'custom',
				loaderFile: './customImageLoader.ts'
			}
		}
	: {}

export default nextConfig
