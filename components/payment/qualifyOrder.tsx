/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useContext, useState } from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap'
import { BsFillStarFill } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toast'
import StarRatingComponent from 'react-star-rating-component'
import { AxiosError } from 'axios'
import { ImageListType } from 'react-images-uploading'
import ModalElement from '../element/modal'
import { NewProductReviews } from '../../api/products'
import { TokenContext } from '../../context/contextToken'
import { UploadImage } from '../element/uploadImage'
import { HandleError } from '../../helpers/handleError'

export interface FormCalifica {
  received: string
  recommendation: string
  commentary: string
  stars: number
  idProduct: string
  idOrden: string
}

interface Props {
  idProduct: string
  idOrden: string
}

const QualifyOrder = ({ idProduct, idOrden }: Props) => {
  const methods = useForm<FormCalifica>()
  const { token } = useContext(TokenContext)
  const [Modal, setModal] = useState<boolean>(false)
  const [Loading, setLoading] = useState<boolean>(false)
  const [startCount, setStartCount] = useState<number>(0)
  const [images, setImages] = useState<ImageListType>([])
  const { handleSubmit, register, reset } = methods

  const send = async (data: FormCalifica) => {
    setLoading(true)

    const values = new FormData()
    values.append('idProduct', idProduct)
    values.append('stars', startCount.toString())
    values.append('idOrden', idOrden)
    values.append('commentary', data.commentary)
    values.append('received', data.received)
    values.append('recommendation', data.recommendation)

    if (images.length) {
      values.append('source_resena', images[0].file || '')
    }

    console.log(images)

    try {
      await NewProductReviews({ token, data: values })
      reset()

      setModal(false)
      setLoading(false)
      toast.success('Tu calificación fue registrada con éxito.')
    } catch (error) {
      toast.error(HandleError(error as AxiosError))
      setLoading(false)
    }
  }

  const onChange = (imageList: ImageListType) => setImages(imageList as never[])

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
                  name="received"
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
                  name="received"
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
                  name="received"
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
                  name="recommendation"
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
                  name="recommendation"
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
                  name="recommendation"
                  id="No"
                  value="No"
                  ref={register({ required: true })}
                />
                <label className="form-check-label ml-2" htmlFor="No">
                  No
                </label>
              </div>

              <br />

              <p>¿Que puntaje le darías al producto?</p>

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
                  name="commentary"
                  id="opinion"
                  maxLength={200}
                  ref={register()}
                />
              </FormGroup>

              <br />
              <p>¡Muestrales a los demás como llego tu pedido!</p>

              <UploadImage images={images} maxNumber={1} onChange={onChange} />

              <br />

              <Button
                type="submit"
                block
                disabled={Loading}
                className="bg-cici text-dark"
              >
                {Loading ? 'Enviando...' : 'Enviar'}
              </Button>
            </Form>
          </div>
        </div>
      </ModalElement>
    </>
  )
}

export default QualifyOrder
