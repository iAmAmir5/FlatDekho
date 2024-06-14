import { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser'
import Navbar from './components/Navbar/Navbar'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'
import './globals.css'
import ToasterProvider from './providers/ToasterProvider'
import Footer from './components/Footer/Footer'


const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL('https://flatdekho99.vercel.app/'),
	title: {
		default: 'flet dekho',
		template: '%s | flet dekho',
	},
	description: 'flet dekho clone built with Next.js 13 and Tailwind CSS',
	keywords: ['ftle dekho', 'Next.js', 'Tailwind CSS', 'TypeScript', 'React'],
	icons: {
		icon: '/images/logo.png',
	},
	creator: 'Amir',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const currentUser = await getCurrentUser()
	return (
		<html lang='en'>
			<body className={font.className}>
				<ToasterProvider />
				<SearchModal />
				
				<RentModal />
				<LoginModal />
				<RegisterModal />
				<Navbar currentUser={currentUser} />
				<div className=' pb-32'>{children}</div>

				<Footer/>
			</body>
		</html>
	)
}
