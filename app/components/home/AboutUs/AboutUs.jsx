import aboutStyle from './aboutus.module.css'
import cardStyles from '../../cards/card-type-2.module.css'
import SecondaryButton from '../../ui/SecondaryButton'
import Link from 'next/link'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div>
      <section className={aboutStyle.aboutUs}>
        <div className="container">
          <div className={aboutStyle["about-us-main"]}>
            <div className={aboutStyle["about-us-top"]}>
              <div className={aboutStyle.aboutleft}>
                <Image
                  src="/images/aboutus/aboutUs-left-img.jpg"
                  //  width={200}
                  //  height={100}
                  alt="Photo"
                  fill
                  style={{ objectFit: "cover",  borderRadius: "50%" }}
                />
              </div>
              <div className={aboutStyle.aboutright}>
                <h2 className={aboutStyle["about-us-title"]}>About us</h2>
                <p className={aboutStyle["about-us-desc"]}>
                  The Partnership for Market Implementation (PMI) has two
                  overarching objectives: assist client countries design and
                  deploy carbon pricing policies appropriate to their domestic
                  context; and catalyze the development of the next generation
                  of international carbon markets. The PMI currently supports
                  more than 32 countries through national and regional programs.
                </p>
                <SecondaryButton />
              </div>
            </div>
          </div>
        </div>

        <div className={aboutStyle["about-us-bottom"]}>
          <div className="container">
            <div className={aboutStyle["listing-type-1"]}>
              <div className={cardStyles["card-type-2"]}>
                <h2 className={`${cardStyles["card-type-2-title"]} ${aboutStyle.counter}`} data-target="11">11</h2>
                <div className={cardStyles["card-type-2-item"]}>
                  <h3 className={aboutStyle["list-title"]}>Donor PARTNERS</h3>
                  <ul>
                    <li><Link href="/">Australia, Canada,</Link></li>
                    <li><Link href="/">The European Commission, </Link></li>
                    <li><Link href="/">Finland, Germany, Japan,</Link></li>
                    <li><Link href="/">Norway, Spain, Sweden,</Link></li>
                    <li><Link href="/">Switzerland,</Link></li>
                    <li><Link href="/">The United Kingdom</Link></li>
                  </ul>
                </div>
              </div>

              <div className={cardStyles["card-type-2"]}>
                {/* <h2 className="card-type-2-title counter" data-target="32">32</h2> */}
                <h2 className={`${cardStyles["card-type-2-title"]} ${aboutStyle.counter}`} data-target="32">32</h2>
                <div className={cardStyles["card-type-2-item"]}>
                  <h3 className={aboutStyle["list-title"]}>Donor PARTNERS</h3>
                  <p className={cardStyles["item-para"]}>
                    Supported through national and regional programs
                  </p>
                </div>
              </div>

              <div className={cardStyles["card-type-2"]}>
                <h2 className={`${cardStyles["card-type-2-title"]} ${aboutStyle.counter}`} data-target="4">4</h2>
                <div className={cardStyles["card-type-2-item"]}>
                  <h3 className={aboutStyle["list-title"]}>Pillars</h3>
                  <ul>
                    <li><Link href="/">Country Engagement Program</Link></li>
                    <li><Link href="/">Global Knowledge Program </Link></li>
                    <li><Link href="/">Innovation Program</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
