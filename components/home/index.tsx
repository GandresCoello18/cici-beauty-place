import React from 'react'
import { AiFillStar, AiOutlineHistory } from 'react-icons/ai'
import { FaPercentage } from 'react-icons/fa'
import { BsFillLightningFill } from 'react-icons/bs'
import Link from 'next/link'
import BannerClearFix from '../banner/util-clear-fix'
import CardProduct from '../card/card-product'
import CaroselCard from '../carousel/CaroselCard'
import CarouselAdvertising from '../carousel/carouselAdvertising'
import CategoriNav from '../nav/categori'
import Time from '../element/time'

const Home = () => {
  return (
    <>
      <section className="container mt-4">
        <div className="row justify-content-between p-2">
          <div className="col-12 col-md-3 col-lg-2 mb-3 mb-md-0 bg-white border-round">
            <CategoriNav />
          </div>
          <div className="col-12 col-md-4 col-lg-5 mb-3 mb-md-0">
            <div className="row bg-white border-round font-arvo">
              <div
                className="col-12 p-2"
                style={{
                  backgroundColor: '#f1d7dd',
                  width: '100%',
                  fontWeight: 'bold',
                  padding: 5,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <h6 className="text-center font-weight-bold">
                  <AiOutlineHistory size={20} /> &nbsp; Historial reciente
                </h6>
              </div>
              <div className="col-6 col-md-12 col-lg-6 p-2">
                <CardProduct
                  sourceImage="https://ae01.alicdn.com/kf/H54f3b265518e41b0a993d1a915488810d/FLD5-15Pcs-Makeup-Brushes-Tool-Set-Cosmetic-Powder-Eye-Shadow-Foundation-Blush-Blending-Beauty-Make-Up.jpg_220x220xz.jpg_.webp"
                  imageOnly
                />
              </div>

              <div className="col-6 col-lg-4 d-md-none p-2">
                <CardProduct
                  sourceImage="https://ae01.alicdn.com/kf/He81f9ea4b1984219aea384a9678e214eB/O-TWO-O-Makeup-Base-Face-Primer-Gel-Invisible-Pore-Light-Oil-Free-Makeup-Finish-No.jpg_220x220xz.jpg_.webp"
                  imageOnly
                />
              </div>

              <div className="col-6 d-md-none d-lg-block col-lg-6 p-2">
                <CardProduct
                  sourceImage="https://ae01.alicdn.com/kf/H7283a45abbad4f37be30a95ddccfab561/60ml-Makeup-Setting-Spray-Face-Primer-Foundation-Base-Fixer-Hydrate-Long-Lasting-Lasting-Make-Up-Fix.jpg_220x220xz.jpg_.webp"
                  imageOnly
                />
              </div>

              <div className="col-6 d-md-none col-lg-6 p-2">
                <CardProduct
                  sourceImage="https://ae01.alicdn.com/kf/H5e3eec11237d45098fb7128507dba2a98/FLD-Professional-Makeup-Brush-Diamond-Face-Fan-Powder-Brush-High-Quality-Makeup-Tool-Blush-Kit.jpg_220x220xz.jpg_.webp"
                  imageOnly
                />
              </div>
              <div className="col-12 p-2 text-center">
                <Link href="/mi-historial">
                  <a
                    href="/mi-historial"
                    className="cursor-pointer"
                    style={{ color: '#999' }}
                  >
                    Ver Màs
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0 bg-white border-round p-2">
            <CarouselAdvertising />
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col-12">
            <BannerClearFix />
          </div>
        </div>

        <div className="row mt-3 mb-3 bg-white p-3">
          <div className="col-12 p-2">
            <FaPercentage color="pink" /> &nbsp; <strong>Ofertas</strong>
          </div>
          <div className="col-12 font-arvo">
            <CaroselCard />
          </div>
        </div>

        <div className="row mt-3 mb-3 bg-white p-3">
          <div className="col-12 p-2">
            <BsFillLightningFill color="pink" /> &nbsp;{' '}
            <strong>Flash Ofertas</strong> &nbsp; &nbsp;
            <Time />
          </div>
          <div className="col-12 font-arvo">
            <CaroselCard />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 p-3">
            <strong>Seguro que te gusta</strong>
          </div>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-xl-3 mb-3 font-arvo"
              key={item}
            >
              <CardProduct
                sourceImage="https://ae01.alicdn.com/kf/H54f3b265518e41b0a993d1a915488810d/FLD5-15Pcs-Makeup-Brushes-Tool-Set-Cosmetic-Powder-Eye-Shadow-Foundation-Blush-Blending-Beauty-Make-Up.jpg_220x220xz.jpg_.webp"
                title="Lapiz labial"
                price={10.2}
                sold={30}
                size="normal"
                imageOnly={false}
              />
            </div>
          ))}
        </div>

        <div className="row mt-3 mb-3 bg-white p-3">
          <div className="col-12 p-2">
            <AiFillStar color="pink" /> &nbsp; <strong>Mejor valorados</strong>
          </div>
          <div className="col-12 font-arvo">
            <CaroselCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
