import Link from 'next/link'
import React from 'react'
import primaryStyle from './primary-btn.module.css'

const PrimaryButton = () => {
  return (
    <>
      <Link href="/about" className={primaryStyle["primary-btn"]}>Learn More</Link>
    </>
  )
}

export default PrimaryButton
