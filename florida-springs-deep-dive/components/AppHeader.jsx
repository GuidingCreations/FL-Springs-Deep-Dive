import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import PrimaryButton from './PrimaryButton'

const AppHeader = () => {
  return (
    <div className='horizontal-container'>
        <Logo />
        <Link href='/sign-up' className=" float-right"><PrimaryButton className = 'bg-theme btn'>Sign up</PrimaryButton></Link>
    </div>
  )
}

export default AppHeader