import { links } from '@/constants/data'

export type Link = {
	nameEng: string
	hash: string
}

export type SectionName = (typeof links)[number]['hash']

export type ProjectInfo = {
	title: string
	description: string
	tags: string[]
	imageUrl: string
	link: string
}
