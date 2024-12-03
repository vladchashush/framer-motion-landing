import { links } from './data'

export type Link = {
	nameEng: string
	hash: string
}

export type SectionName = (typeof links)[number]['hash']
