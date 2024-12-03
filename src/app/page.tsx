import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

export default function Home() {
	return (
		<main className='flex flex-col items-center pt-20 md:pt-28 px-4'>
			<Intro />
			<About />
			<Projects />
			<Skills />
			<Contacts />
		</main>
	)
}
