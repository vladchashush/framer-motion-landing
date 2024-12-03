'use client'

import { useSectionInView } from '@/hooks/useSectionInView'
import SectionHeading from '../SectionHeading'
import { projectsData } from '@/constants/data'
import ProjectCard from './ProjectCard'

const Projects = () => {
	const { ref } = useSectionInView('#projects', 0.1)

	return (
		<section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
			<SectionHeading>My works</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<ProjectCard {...project} key={index} />
				))}
			</div>
		</section>
	)
}

export default Projects
