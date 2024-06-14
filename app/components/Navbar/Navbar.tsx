'use client'
import Link from 'next/link';
import { SafeUser } from '../../types'
import Container from '../Container'
import Categories from './Categories'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import Banner from '../Banner/Banner'
interface NavbarProps {
	currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
	return (
		<div className='w-full bg-white shadow-sm'>
			<div className='py-4 border-b-[1px]'>
				<Container>
					<div className='flex flex-row items-center justify-between gap-3 lg:gap-0'>
						<Logo />
						<Link href="/" passHref>
							<p className="hover:text-black font-bold cursor-pointer">Home</p>
						</Link>


						<Search />
						<Link href="/about" passHref>
							<p className="hover:text-blue font-bold cursor-pointer">About</p>
						</Link>

						<UserMenu currentUser={currentUser} />
					</div>
				</Container>
			</div>
			<Banner/>
			<Categories />
			
		</div>
	)
}

export default Navbar
