/* eslint-disable jsx-a11y/alt-text */
import {

    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline';

import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row sm:space-x-0 m-10 justify-content items-center h-auto'> 
    <div className='flex flex-grow space-x-4 justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLECTION' Icon={CollectionIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
    </div>
    <Image 
    className="object-contain"
    src='https://links.papareact.com/ua6'
    width={200}
    height={100} />
    </header>
  )
}

export default Header