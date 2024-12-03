import { links } from '@/constants/data'
import Navbar from './Navbar'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
	return (
		<div>
			<HamburgerMenu links={links} />
			<Navbar links={links} />
		</div>
	)
}

export default Header
