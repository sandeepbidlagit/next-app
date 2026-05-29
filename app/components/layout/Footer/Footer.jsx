import Image from 'next/image'
import styleFooter from './footer.module.css'
import SubscribeBtn from '../../ui/SubscribeBtn'

const page = () => {
  return (
    <div>
      <div className={styleFooter.footer}>
        <div className="container">
          <div className={styleFooter["footer-container"]}>
            <div className={styleFooter["footer-contact"]}>
              <div className={styleFooter["address"]}>
                <h3 className={styleFooter["footer-title"]}>The Anchor Fund for</h3>
                <Image src="/next-app/images/footer/pmif-logo.svg"
                  alt="Pmi Logo"
                  width={167}
                  height={69}
                  className="pmif-logo"
                />

                <h3 className={styleFooter["footer-title"]}>Administered by</h3>
                <Image src="/next-app/images/footer/the-world-bank-logo.svg"
                  alt="Pmi Logo"
                  width={266}
                  height={53}
                  className="pmif-logo"
                />

              </div>
            </div>

            <div className={styleFooter["footer-links"]}>
              <div className={styleFooter["footer-menu-item"]}>
                <ul>
                  <li><a href="#">about</a></li>
                  <li><a href="#">COUNTRIES &amp; REGIONS </a></li>
                  <li><a href="#">OUR PROGRAMS</a></li>
                  <li><a href="#">COMPACT WITH AFRICA</a></li>
                </ul>
              </div>

              <div className={styleFooter["footer-menu-item"]}>
                <ul>
                  <li><a href="#">KNOWLEDGE CENTRE </a></li>
                  <li><a href="whats-new.html">BLOG </a></li>
                  <li><a href="#">NEWS &amp; EVENTS</a></li>
                  <li><a href="#">CONTACT </a></li>
                </ul>
              </div>
            </div>

            <div className={styleFooter["footer-newsletter"]}>
              <h2 className={styleFooter["footer-newsltr-title"]}>
                Subscribe to our newsletter
              </h2>
              <div className="input-group">
                <SubscribeBtn/>
              </div>
            </div>
          </div>
        </div>

        <div className={styleFooter["footer-bottom"]}>
          <div className="container">
            <div className={styleFooter["footer-items"]}>
              <p className={styleFooter["footer-bottom-title"]}>
                Copyright © 2021 Partnership for Market Implementation. All
                rights reserved. | Legal / Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
