import Link from 'next/link'
import whiteBtnStyle from './white-btn.module.css'

const WhiteBgButton = () => {
  return (
     <div>
      <Link href="/" className={whiteBtnStyle["white-bg-btn"]}>View All</Link>
    </div>
  )
}

export default WhiteBgButton
