import React from 'react'
import styleBanner from './banner.module.css'
import Image from 'next/image'

const Banner = () => {
  return (
    <div>
      <div className={styleBanner.bannerArea}>

        <div className={styleBanner.slider}>
          <div className={styleBanner["slider-track"]}>
            <div className={styleBanner.slide}>
              <div className="container">
                <div className={styleBanner.content}>
                  <h1 className={styleBanner["banner-title"]}>Donor Portal</h1>
                </div>
              </div>
              <div className={styleBanner["color-overlay"]}>
                <div className={styleBanner["banner-wrapper"]}>
                  <Image
                    src="/images/aboutpgbanner/banner-inner.jpg"
                    fill
                    alt="Photo"
                    className={styleBanner["banner-area-img"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
