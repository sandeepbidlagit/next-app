import Link from 'next/link'
import secondaryStyle from './secondary-btn.module.css'

const SecondaryButton = () => {
  return (
     <div>
      <Link href="/" className={secondaryStyle["secondary-btn"]}>Learn More</Link>
    </div>
  )
}

export default SecondaryButton
