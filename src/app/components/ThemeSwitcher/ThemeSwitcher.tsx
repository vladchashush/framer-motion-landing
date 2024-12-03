'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import SwitchThemeButton from './SwitchThemeButton'
import { useTheme } from '@/app/providers/ThemeProviders/useTheme'

export default function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className='fixed bottom-5 right-5'>
			<SwitchThemeButton
				activeButton={theme === 'light' ? <Sun /> : <Moon />}
				hiddenButton={
					theme === 'light' ? <Moon size={14} /> : <Sun size={14} />
				}
				setActiveButton={toggleTheme}
			/>
		</div>
	)
}
