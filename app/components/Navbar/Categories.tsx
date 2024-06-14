'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import { FaSkiing } from 'react-icons/fa'
import {
	
	GiBoatFishing,
	GiCactus,
	GiCastle,
	GiCaveEntrance,
	GiForestCamp,
	GiIsland,
	
} from 'react-icons/gi'

import { FaHouseDamage } from "react-icons/fa";
import { GiSpookyHouse } from "react-icons/gi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { GiFamilyHouse } from "react-icons/gi";
import { FaLaptopHouse } from "react-icons/fa";
import CategoryBox from '../CategoryBox'
import Container from '../Container'

export const categories = [
	
	{
		label: 'Flat',
		icon: FaHouseDamage,
		
		description: 'This property is located in the country side',
	},
	{
		label: 'Villa',
		icon: GiSpookyHouse ,
		description: 'This property has a pool',
	},
	{
		label: 'Appartment',
		icon: BiSolidBuildingHouse,
		description: 'This property is located on an island',
	},
	{
		label: 'Modern',
		icon: FaLaptopHouse,
		description: 'This property is located near a lake',
	},

	{
		label: 'Luxary',
		icon: GiFamilyHouse,
		description: 'This property is luxurious',
	},
]

const Categories = () => {
	const params = useSearchParams()

	const selectedCategory = params?.get('category')

	const pathname = usePathname()

	const isMainPage = pathname === '/'

	if (!isMainPage) {
		return null
	}

	return (
		<Container>
			<div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
				{categories.map(category => (
					<CategoryBox key={`category-` + category.label} {...category} selected={selectedCategory === category.label} />
				))}
			</div>
		</Container>
	)
}

export default Categories
