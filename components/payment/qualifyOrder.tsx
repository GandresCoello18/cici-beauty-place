/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap'
import { BsFillStarFill } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toast'
import StarRatingComponent from 'react-star-rating-component'
import ModalElement from '../element/modal'

interface FormCalifica {
  recibistes: string
  recomendacion: string
  opinion: string
}

const QualifyOrder = () => {
  const methods = useForm<FormCalifica>()
  const [Modal, setModal] = useState<boolean>(false)
  const [startCount, setStartCount] = useState<number>(0)
  const { handleSubmit, register, reset } = methods

  const send = async (data: FormCalifica) => {
    console.log(data)
    reset()
    setModal(false)
    toast.success('Tu opion fue registrada con exito.')
  }

  return (
    <>
      <Button
        color="warning"
        className="float-right"
        onClick={() => setModal(true)}
      >
        <BsFillStarFill /> Calificar
      </Button>
      <ModalElement
        title="Calificar mi compra"
        visible={Modal}
        setVisible={setModal}
      >
        <div className="row p-1">
          <div className="col-12">
            <Form onSubmit={handleSubmit(send)}>
              <p>¿Recibiste el producto que esperabas?</p>

              <div className="form-check">
                <input
                  type="radio"
                  name="recibir"
                  id="Sí, tengo el producto y está bien"
                  value="Si"
                  ref={register({ required: true })}
                />
                <label
                  className="form-check-label ml-2"
                  htmlFor="Sí, tengo el producto y está bien"
                >
                  Sí, tengo el producto y está bien
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="recibir"
                  id="Decidí no comprarlo"
                  value="No comprar"
                  ref={register({ required: true })}
                />
                <label
                  className="form-check-label ml-2"
                  htmlFor="Decidí no comprarlo"
                >
                  Decidí no comprarlo
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="recibir"
                  id="No, tuve un problema"
                  value="No"
                  ref={register({ required: true })}
                />
                <label
                  className="form-check-label ml-2"
                  htmlFor="No, tuve un problema"
                >
                  No, tuve un problema
                </label>
              </div>

              <br />

              <p>¿Recomendarías este producto/s?</p>

              <div className="form-check">
                <input
                  type="radio"
                  name="recomendacion"
                  id="Si"
                  value="Si"
                  ref={register({ required: true })}
                />
                <label className="form-check-label ml-2" htmlFor="Si">
                  Si
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="recomendacion"
                  id="No estoy seguro"
                  value="No estoy seguro"
                  ref={register({ required: true })}
                />
                <label
                  className="form-check-label ml-2"
                  htmlFor="No estoy seguro"
                >
                  No estoy seguro
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="recomendacion"
                  id="No"
                  value="No"
                  ref={register({ required: true })}
                />
                <label className="form-check-label ml-2" htmlFor="No">
                  No
                </label>
              </div>

              <br />

              <p>¿Que puntaje le darias al producto?</p>

              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={startCount}
                onStarClick={(nextValue: number) => setStartCount(nextValue)}
              />

              <FormGroup>
                <Label for="opinion">
                  Comparte tu opinión sobre el producto:
                </Label>
                <textarea
                  rows={3}
                  className="form-control"
                  name="opinion"
                  id="opinion"
                  maxLength={200}
                  ref={register()}
                />
              </FormGroup>

              <Button
                type="submit"
                disabled={false}
                className="bg-cici text-dark"
              >
                Guardar
              </Button>
            </Form>
          </div>
        </div>
      </ModalElement>
    </>
  )
}

export default QualifyOrder
