'use client'
import { SectionName } from '@/app/lib/types'
import { createContext, ReactNode, useState } from 'react'

type ActiveSectionContextType = {
	activeSection: SectionName
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
	timeOfLastClick: number
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext =
	createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
	children
}: {
	children: ReactNode
}) {
	const [activeSection, setActiveSection] = useState('#home')
	const [timeOfLastClick, setTimeOfLastClick] = useState(0)

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	)
}
