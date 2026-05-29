import Image from 'next/image'
import styleBlog from './Blog.module.css'
import SecondaryButton from '../../ui/SecondaryButton'

const Blog = () => {
  return (
    <div>
      <section className={styleBlog.blog}>
        <h2 className={styleBlog["blog-title"]}>Blog</h2>
        <div className={styleBlog["card-container"]}>
          <div className={styleBlog["card-type-1"]}>
            <Image
              src="/next-app/images/blog/image-1.svg"
              width={280}
              height={280}
              alt="Blog Image"
            />
            <div className={styleBlog.info}>
              <h3 className={styleBlog["card-title"]}>LOREM IPSUM l 12 DEC 2023</h3>
              <h2 className={styleBlog["card-desc"]}>
                Dolor sit amet consectetuer adipiscing elit sed diasitamet
              </h2>
            </div>
          </div>

          <div className={styleBlog["card-type-1"]}>
             <Image
              src="/next-app/images/blog/image-2.svg"
              width={280}
              height={280}
              alt="Blog Image"
            />
            <div className={styleBlog.info}>
              <h3 className={styleBlog["card-title"]}>LOREM IPSUM l 12 DEC 2023</h3>
              <h2 className={styleBlog["card-desc"]}>
                Dolor sit amet consectetuer adipiscing elit sed diasitamet
              </h2>
              <img src="./components/elements/cards/card-type-1/img/blog-arrow.svg" className={styleBlog["card-arrow"]} alt="" />
            </div>
          </div>

          <div className={styleBlog["card-type-1"]}>
             <Image
              src="/next-app/images/blog/image-3.svg"
              width={280}
              height={280}
              alt="Blog Image"
            />
            <div className={styleBlog.info}>
              <h3 className={styleBlog["card-title"]}>LOREM IPSUM l 12 DEC 2023</h3>
              <h2 className={styleBlog["card-desc"]}>
                Dolor sit amet consectetuer adipiscing elit sed diasitamet
              </h2>
              <img src="./components/elements/cards/card-type-1/img/blog-arrow.svg" className={styleBlog["card-arrow"]} alt="" />
            </div>
          </div>

          <div className={styleBlog["card-type-1"]}>
             <Image
              src="/next-app/images/blog/image-1.svg"
              width={280}
              height={280}
              alt="Blog Image"
            />
            <div className={styleBlog.info}>
              <h3 className={styleBlog["card-title"]}>LOREM IPSUM l 12 DEC 2023</h3>
              <h2 className={styleBlog["card-desc"]}>
                Dolor sit amet consectetuer adipiscing elit sed diasitamet
              </h2>
              <img src="./components/elements/cards/card-type-1/img/blog-arrow.svg" className={styleBlog["card-arrow"]} alt="" />
            </div>
          </div>

          <div className={styleBlog["card-type-1-btn"]}>
            <SecondaryButton className={styleBlog["secondary-btn"]}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
