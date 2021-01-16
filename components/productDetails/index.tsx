import React from 'react'
import Magnifier from 'react-magnifier'
import { GoPlus } from 'react-icons/go'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { AiTwotoneHeart } from 'react-icons/ai'
import { MdShoppingBasket } from 'react-icons/md'
import StarRatingComponent from 'react-star-rating-component'
import { Badge, Button } from 'reactstrap'
import { RiSubtractLine } from 'react-icons/ri'
import Share from '../element/share'
import MigasPan from '../element/breadcrumbs'
import ListImage from './listImage'
import MoreDetails from './moreDetails'
import CaroselCard from '../carousel/CaroselCard'

const ProductDetails = () => {
  const Styles = {
    tachado: {
      padding: 4,
      color: '#999',
      textDecoration: 'line-through',
    },
  }

  return (
    <section className="container">
      <div className="row" style={{ backgroundColor: '#e9ecef' }}>
        <div className="col-12">
          <MigasPan
            migas={[
              { text: 'Home', href: '/' },
              { text: 'productos', href: '/productos' },
              { text: 'Este producto', active: true },
            ]}
          />
        </div>
      </div>
      <div className="row justify-content-center bg-white p-3">
        <div className="col-12 col-md-4">
          <div className="row">
            <div className="col-12">
              <Magnifier
                src="https://preview.colorlib.com/theme/minishop/images/product-1.png"
                width="100%"
              />
            </div>
            <div className="col-12">
              <ListImage />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3 border-bottom">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, maxime sint cumque libero nostrum, eaque assumenda
              tempore vero labore fugiat quisquam doloribus, saepe tempora
              tenetur animi excepturi perspiciatis accusamus iste.
            </p>
            <div className="row">
              <div className="col-5 col-lg-2">
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={1}
                  onStarClick={(
                    nextValue: number,
                    prevValue: number,
                    name: string
                  ) => console.log(`${nextValue} - ${prevValue} - ${name}`)}
                />
              </div>
              <div className="col-5 col-lg-3" style={{ color: '#999' }}>
                13 vendidos
              </div>
            </div>
          </div>
          <div className="p-3 border-bottom">
            <div className="row">
              <div className="col-5 col-lg-3">
                <strong style={{ fontSize: 20 }}>US $20.9</strong>
              </div>
              <div className="col-5 col-md-3">
                <span style={Styles.tachado}>US $25.4</span>
              </div>
              <div className="col-1">
                <span className="tag-discount">-32%</span>
              </div>
            </div>
          </div>
          <div className="p-3 border-bottom">
            <Share ShareUrl="https://www.youtube.com/watch?v=GSWUwcGTcuI" />
          </div>
          <div className="p-3">
            <span>Cantidad: </span>
            <Badge color="dark" className="p-1" pill style={{ fontSize: 17 }}>
              <RiSubtractLine color="#fff" />
            </Badge>
            <strong className="p-2">1</strong>
            <Badge color="dark" className="p-1" pill style={{ fontSize: 17 }}>
              <GoPlus />
            </Badge>
            <span style={{ color: '#999', marginLeft: 10 }}>
              45 disponibles
            </span>
          </div>
          <div className="p-3">
            <div className="row justify-content-start">
              <div className="col-6 col-lg-3">
                <Button color="danger">
                  <div className="row">
                    <div className="col-2">
                      <FaMoneyCheckAlt size={20} />
                    </div>
                    <div className="col-6">Comprar</div>
                  </div>
                </Button>
              </div>
              <div className="col-6 col-lg-4">
                <Button color="warning" className="text-white">
                  <div className="row">
                    <div className="col-2">
                      <MdShoppingBasket size={20} />
                    </div>
                    <div className="col-6">Añadir a cesta</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="row bg-white">
        <div className="col-12 p-2 font-arvo">
          <MoreDetails />
        </div>
      </div>

      <div className="row mt-3 mb-3 bg-white p-3">
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

export default ProductDetails
