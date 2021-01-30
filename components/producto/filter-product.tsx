/* eslint-disable default-case */
/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
import React, { Dispatch, SetStateAction } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { Input, Label } from 'reactstrap'
import { ParamsFilter } from '../../interfaces/products'

interface Props {
  filter: ParamsFilter
  setFilter: Dispatch<SetStateAction<ParamsFilter>>
}

const FilterProduct = ({ filter, setFilter }: Props) => {
  return (
    <div className="row p-3 mt-md-3 bg-white font-arvo">
      <div className="col-7 col-md-3 border-right">
        <span>Precio: </span>
        <div className="row justify-content-start">
          <div className="col-6">
            <input
              className="form-control"
              placeholder="Min"
              onChange={(e) => {
                const value = Number(e.target.value)
                value >= 0
                  ? setFilter({
                      ...filter,
                      min: value,
                    })
                  : alert('Solo numeros positivos')
              }}
            />
          </div>
          <div className="col-6">
            <input
              className="form-control"
              placeholder="Max"
              onChange={(e) => {
                const value = Number(e.target.value)
                value >= 0
                  ? setFilter({
                      ...filter,
                      max: value,
                    })
                  : alert('Solo numeros positivos')
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-5 col-md-3 col-lg-2 border-right">
        <div className="row justify-content-around">
          <div className="col-10">
            <Label check>
              <Input
                type="checkbox"
                style={{ width: 20, height: 20 }}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    isPromo: e.target.checked,
                  })
                }
              />
              &nbsp; Promo
            </Label>
          </div>
          <div className="col-10">
            <Label check>
              <Input
                type="checkbox"
                style={{ width: 20, height: 20 }}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    starNumber: e.target.checked,
                  })
                }
              />
              &nbsp;
              <StarRatingComponent name="rate1" starCount={5} value={4} />
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
              <Input
                type="checkbox"
                style={{ width: 20, height: 20 }}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    orderPrice: e.target.checked,
                  })
                }
              />
              &nbsp; Precio
            </Label>
            <br />
            <Label check>
              <Input
                type="checkbox"
                style={{ width: 20, height: 20 }}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    orderStar: e.target.checked,
                  })
                }
              />
              &nbsp; Star
            </Label>
          </div>
          <div className="col-4">
            <Label check>
              <Input
                type="radio"
                name="radio1"
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    order: e.target.checked ? 'Asc' : undefined,
                  })
                }
              />
              Ascendente
            </Label>
            <br />
            <Label check>
              <Input
                type="radio"
                name="radio1"
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    order: e.target.checked ? 'Desc' : undefined,
                  })
                }
              />
              Descendente
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterProduct
