'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { Mail } from 'lucide-react'
import { useActiveSectionContext } from '@/app/providers/activeSection/useActiveSectionContext'
import { useSectionInView } from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
import { FaGithubSquare } from 'react-icons/fa'

const Intro = () => {
	const { ref } = useSectionInView('#home', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section
			ref={ref}
			id='home'
			className='my-28 max-w-[75rem] text-center sm:mb-0 scroll-mt-[100rem]'
		>
			<div className='flex items-center justify-center'>
				<div className='relative'>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							damping: 10,
							duration: 0.2
						}}
					>
						<Image
							src='/boy.png'
							width={480}
							height={480}
							alt='boy'
							quality='100'
							priority={true}
							className='rounded-full shadow-xl object-cover'
						/>
					</motion.div>

					<motion.span
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							damping: 10,
							duration: 0.2
						}}
						className='text-6xl absolute bottom-8 right-12'
					>
						👋
					</motion.span>
				</div>
			</div>
			<Fade
				direction='up'
				delay={400}
				cascade
				damping={1e-1}
				triggerOnce={true}
			>
				<h1>
					<span>Grown your business with a new website</span>
					<p className='text-[14px]'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
						sint cupiditate quia et quam! Consectetur
					</p>
				</h1>
			</Fade>
			<motion.div
				className='flex sm:flex-row items-center justify-center gap-4 px-4'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<Link
					href='#contact'
					className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition'
					onClick={() => {
						setActiveSection('#contact')
						setTimeOfLastClick(Date.now())
					}}
				>
					Contact <Mail color={'#9ca3af'} />
				</Link>
				<a
					className='bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
					href='#'
					target='_blank'
				>
					<BsLinkedin />
				</a>

				<a
					className='bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
					href='#'
					target='_blank'
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	)
}

export default Intro
