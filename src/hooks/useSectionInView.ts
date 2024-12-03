'use client'

import { SectionName } from '@/app/lib/types'
import { useActiveSectionContext } from '@/app/providers/activeSection/useActiveSectionContext'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const useSectionInView = (
	sectionName: SectionName,
	threshold: number = 0.75
) => {
	const { ref, inView } = useInView({
		threshold
	})

	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName)
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionName])

	return { ref }
}
