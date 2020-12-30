import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { AiTwotoneHeart } from 'react-icons/ai'
import { Input, Label } from 'reactstrap'
import CardProduct from '../card/card-product'
import PaginationElement from '../element/pagination'
import CategoriNav from '../nav/categori'
import CaroselCard from '../carousel/CaroselCard'
import Survey from '../element/survey'

const Productos = () => {
  return (
    <section className="container">
      <div className="row p-3 mt-md-3 bg-white">
        <div className="col-7 col-md-3 border-right">
          <span>Precio: </span>
          <div className="row justify-content-start">
            <div className="col-6">
              <input className="form-control" placeholder="Min" />
            </div>
            <div className="col-6">
              <input className="form-control" placeholder="Max" />
            </div>
          </div>
        </div>
        <div className="col-5 col-md-3 col-lg-2 border-right">
          <div className="row justify-content-around">
            <div className="col-10">
              <Label check>
                <Input type="checkbox" style={{ width: 20, height: 20 }} />
                &nbsp; Promo
              </Label>
            </div>
            <div className="col-10">
              <Label check>
                <Input type="checkbox" style={{ width: 20, height: 20 }} />
                &nbsp;
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={4}
                  onStarClick={(
                    nextValue: number,
                    prevValue: number,
                    name: string
                  ) => console.log(`${nextValue} - ${prevValue} - ${name}`)}
                />
              </Label>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 mt-4 mt-md-0">
          <div className="row justify-content-start">
            <div className="col-4 col-md-3">
              <span>Ordenar: </span>
            </div>
            <div className="col-4">
              <Label check>
                <Input type="checkbox" style={{ width: 20, height: 20 }} />
                &nbsp; Precio
              </Label>
              <br />
              <Label check>
                <Input type="checkbox" style={{ width: 20, height: 20 }} />
                &nbsp; Star
              </Label>
            </div>
            <div className="col-4">
              <Label check>
                <Input type="radio" name="radio1" />
                Ascendente
              </Label>
              <br />
              <Label check>
                <Input type="radio" name="radio1" />
                Descendente
              </Label>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-around p-3 mt-3">
        <div className="col-12 col-md-9 col-lg-10">
          <div className="row justify-content-center">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item) => (
                <div
                  className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3 font-arvo"
                  key={item}
                >
                  <CardProduct
                    sourceImage="https://ae01.alicdn.com/kf/H54f3b265518e41b0a993d1a915488810d/FLD5-15Pcs-Makeup-Brushes-Tool-Set-Cosmetic-Powder-Eye-Shadow-Foundation-Blush-Blending-Beauty-Make-Up.jpg_220x220xz.jpg_.webp"
                    title="Lapiz labial"
                    price={10.2}
                    sold={30}
                    size="small"
                    imageOnly={false}
                  />
                </div>
              )
            )}
          </div>

          <div className="row mt-2 mb-3 justify-content-center">
            <div className="col-11 col-md-4 bg-white border-round">
              <br />
              <PaginationElement />
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-3 col-lg-2 bg-white border-round"
          style={{ height: 320 }}
        >
          <CategoriNav />
        </div>
      </div>

      <div className="row mt-3 mb-3 bg-white p-3 font-arvo border-round">
        <div className="col-12">
          <Survey />
        </div>
      </div>

      <div className="row mt-3 mb-3 bg-white p-3 border-round">
        <div className="col-12 p-2">
          <AiTwotoneHeart color="pink" /> &nbsp;{' '}
          <strong>Productos recomendados</strong>
        </div>
        <div className="col-12 font-arvo">
          <CaroselCard />
        </div>
      </div>
    </section>
  )
}

export default Productos
