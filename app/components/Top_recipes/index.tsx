import Link from "next/link"
import Image from "next/image"
import styles from "./top-recipes.module.css"



export default async function TopRecipes(){
    return(
        <section className={`${styles.topCatagoryArea} section-padding-80-0 mt-4`}>
        <div className="container">
          <div className="row">
            {/* Top Catagory Area */}
            <div className="col-12 col-lg-6">
              <div className="single-top-catagory">
                <Image
                  src="/store/bg2.jpg"
                  alt="Strawberry Cake"
                  width={800}
                  height={600}
                  layout="responsive"
                />
                {/* Content */}
                <div className="top-cta-content">
                  <h3>Strawberry Cake</h3>
                  <h6>Simple &amp; Delicious</h6>
                  <Link href="/receipe-post">
                    See Full Recipe
                  </Link>
                </div>
              </div>
            </div>
            {/* Top Catagory Area */}
            <div className="col-12 col-lg-6">
              <div className="single-top-catagory">
                <Image
                  src="/store/bg3.jpg"
                  alt="Chinese Noodles"
                  width={800}
                  height={600}
                  layout="responsive"
                />
                {/* Content */}
                <div className="top-cta-content">
                  <h3>Chinese Noodles</h3>
                  <h6>Simple &amp; Delicious</h6>
                  <Link href="/receipe-post">
                    See Full Recipe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

