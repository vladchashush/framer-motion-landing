import About from './components/About/About'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'

export default function Home() {
	return (
		<main className='flex flex-col items-center pt-20 md:pt-28 px-4'>
			<Intro />
			<About />
			<Projects />
		</main>
	)
}
