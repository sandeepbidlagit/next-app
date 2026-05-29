import Link from 'next/link'
import subscribeStyle from './subscribe-btn.module.css'

const SubscribeBtn = () => {
  return (
     <div>
      <Link href="/about" className={subscribeStyle["footer-submit-btn"]}>Subscribe</Link>
    </div>
  )
}

export default SubscribeBtn
