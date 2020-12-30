import React, { useState } from 'react'
import { Button, ButtonGroup, Input, Label } from 'reactstrap'

const Survey = () => {
  const [option, setOption] = useState<string>('')

  const formFedback = () => {
    return (
      <>
        <Input
          type="textarea"
          style={{ fontSize: 13 }}
          placeholder="Ten en cuenta que no nos es posible responder directamente al feedback enviado a traves de este formulario"
        />
        <Button color="secondary" className="mt-2" style={{ fontSize: 13 }}>
          Enviar
        </Button>
      </>
    )
  }

  return (
    <>
      <h6>¿Encontraste lo que buscabas?</h6>
      <ButtonGroup>
        <Button onClick={() => setOption('si')}>Si</Button>
        <Button onClick={() => setOption('no')}>No</Button>
      </ButtonGroup>

      <div style={{ fontSize: 13 }}>
        {option === 'si' && (
          <div className="p-3">
            <p>
              ¿Hay alguna manera en la que podamos hacer tu experiencia de
              búsqueda?
            </p>

            {formFedback()}
          </div>
        )}

        {option === 'no' && (
          <div className="p-3">
            <p>¿Qué problemas encontraste al buscar productos?</p>
            <ul className="ul list-unstyled">
              <li className="p-1">
                <Label check>
                  <Input type="radio" name="radio1" /> Demasiados resultados no
                  resultados no relacionados
                </Label>
              </li>
              <li className="p-1">
                <Label check>
                  <Input type="radio" name="radio1" /> No sé cómo ordenar o
                  filtrar mis resultados de búsqueda
                </Label>
              </li>
              <li className="p-1">
                <Label check>
                  <Input type="radio" name="radio1" /> Las sugerencias de
                  búsqueda o las búsquedas relacionadas tenían problemas.
                </Label>
              </li>
            </ul>
            <p>Escribe aquí tu problema:</p>
            {formFedback()}
          </div>
        )}
      </div>
    </>
  )
}

export default Survey
