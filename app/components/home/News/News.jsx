import React from 'react'
import styleNews from './News.module.css'
import Image from 'next/image'
import WhiteBgButton from '../../ui/WhiteBgButton'

const News = () => {
  return (
    <div>
      <section className={styleNews.news}>
        <div className="container">
          <div className={styleNews["news-block"]}>
            <div className={styleNews["news-block-left"]}>
              <h2 className={styleNews["news-block-ttl-1"]}>News</h2>
              <h2 className={styleNews["news-block-ttl-2"]}>Events</h2>
            </div>
            <div className={styleNews["listing-type-2"]}>
              
              <div className={styleNews["card-type-3"]}>
                <h3 className={styleNews["card-title-3"]}>LOREM IPSUM l 12 DEC 2023</h3>
                <h2 className={styleNews["card-desc-3"]}>
                  Dolor sit amet, consectetuer adipiscing elit, sed diasita met
                  dolor sit...
                </h2>
                <div className={styleNews["card-type-3-img"]}>
                  <Image
                    src="/next-app/images/news/cart-type-3-img1.svg"
                    width={280}
                    height={280}
                    alt="Blog Image"
                  />
                </div>
              </div>

              <div className={styleNews["card-type-3"]}>
                <h3 className={styleNews["card-title-3"]}>LOREM IPSUM l 12 DEC 2023</h3>
                <h2 className={styleNews["card-desc-3"]}>
                  Dolor sit amet, consectetuer adipiscing elit, sed diasita met
                  dolor sit...
                </h2>
                <div className={styleNews["card-type-3-img"]}>
                  <Image
                    src="/next-app/images/news/cart-type-3-img1.svg"
                    width={280}
                    height={280}
                    alt="Blog Image"
                  />
                </div>
              </div>

              <div className={styleNews["card-type-3"]}>
                <h3 className={styleNews["card-title-3"]}>LOREM IPSUM l 12 DEC 2023</h3>
                <h2 className={styleNews["card-desc-3"]}>
                  Dolor sit amet, consectetuer adipiscing elit, sed diasita met
                  dolor sit...
                </h2>
                <div className={styleNews["card-type-3-img"]}>
                 <Image
                    src="/next-app/images/news/cart-type-3-img1.svg"
                    width={280}
                    height={280}
                    alt="Blog Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styleNews["card-type-3-btn"]}>
            <WhiteBgButton/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
