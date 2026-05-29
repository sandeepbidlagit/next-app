import SecondaryButton from '../../ui/SecondaryButton'
import styleKnowledge from './KnowledgeCenter.module.css'
import Image from 'next/image'

const KnowledgeCenter = () => {
  return (
    <div>
      <section className={styleKnowledge["knowledge-center"]}>
        <div className="container">
          <h2 className={styleKnowledge["knowledge-title"]}>KNOWLEDGE CENTRE</h2>
          <div className={styleKnowledge["knowledge-block"]}>
            <div className={styleKnowledge["knowledge-block-left"]}>

              <Image
                src="/images/KnowledgeCenter/mid-img-left.jpg"
                width={266}
                height={354}
                alt="Photo"
              // fill
              />
            </div>
            <div className={styleKnowledge["knowledge-block-middle"]}>
              <div className={styleKnowledge.middle}>
                <div className={styleKnowledge["middle-img"]}>
                  <Image
                    src="/images/KnowledgeCenter/mid-img.jpg"
                    width={380}
                    height={499}
                    alt="Photo"
                  // fill
                  />
                </div>
                <div className={styleKnowledge["knowledge-data"]}>
                  <div className={styleKnowledge["knowledge-data-content"]}>
                    <h3 className={styleKnowledge["knowledge-data-title"]}>14 January 2023</h3>
                    <h2 className={styleKnowledge["knowledge-data-desc"]}>
                      Dolor sit amet, consectetuer adipiscing elit sed diasitamet
                      lorem ipsum
                    </h2>
                    <p className={styleKnowledge["knowledge-data-para"]}>
                      consectetuer adipiscing elit, sed diam nonummy nibh euismod
                      tincidunt ut laoreet dolore magna aliquam erat volutpat...
                    </p>
                    <a href="#" className="learnmore-arrow">LEARN MORE</a>
                  </div>
                </div>
                <div className={`${styleKnowledge["knowledge-data-1"]} ${styleKnowledge["fade-out"]}`}>
                  <div className={styleKnowledge["knowledge-data-content"]}>
                    <h3 className={styleKnowledge["knowledge-data-title"]}>LOREM IPSUM l 12 DEC 2023</h3>
                    <h2 className={styleKnowledge["knowledge-data-desc"]}>
                      Consectetur adipisicing elit. Aperiam debitis culpa officiis
                      architecto.
                    </h2>
                    <p className={styleKnowledge["knowledge-data-para"]}>
                      Nihil officia commodi rem et, consectetur adipisicing elit.
                      Aliquid quod itaque aspernatur reiciendis mollitia. Nihil
                      officia commodi rem et, expedita reprehenderit, non quo
                      quasi atque mollitia voluptas labore esse iusto.
                    </p>
                    <a href="#" className="learnmore-arrow">LEARN MORE</a>
                  </div>
                </div>

                <div className={`${styleKnowledge["knowledge-data-3"]} ${styleKnowledge["fade-out"]}`}>
                  <div className={styleKnowledge["knowledge-data-content"]}>
                    <h3 className={styleKnowledge["knowledge-data-title"]}>DOLR IT MET IPSUM l 12 DEC 2023</h3>
                    <h2 className={styleKnowledge["knowledge-data-desc"]}>
                      Sunt quas ratione odit, voluptate saepe sit velit deleniti ullam magni,
                      voluptas.
                    </h2>
                    <p className={styleKnowledge["knowledge-data-para"]}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat...
                    </p>
                    <a href="#" className="learnmore-arrow">LEARN MORE</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styleKnowledge["knowledge-block-right"]}>
              <Image
                src="/images/KnowledgeCenter/mid-img-right.jpg"
                width={266}
                height={354}
                alt="Photo"
              // fill
              />
            </div>
          </div>
          <div className={styleKnowledge["knowledge-block-btn"]}>
            <SecondaryButton />
          </div>
        </div>
      </section>
    </div>
  )
}

export default KnowledgeCenter
