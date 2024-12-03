import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({
	subsets: ['latin'],
	variable: '--font-sora',
	weight: ['100', '200', '300', '400', '500', '700', '800']
})

export const metadata: Metadata = {
	title: 'Framer motion showcase',
	description: 'Frontend portfolio project'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${sora.variable} font-Sora flex flex-col bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
