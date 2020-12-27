import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap'

const CardImageTitle = () => {
  return (
    <>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://ae01.alicdn.com/kf/H1fe552a980c844fe8a2b6facca6da4fb3/20-50-100-Pairs-Eyelash-Pad-Gel-Patch-Grafted-Eyes-Attached-To-The-Eyelashes-For-Eyelash.jpg_220x220xz.jpg_.webp"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
        </CardBody>
      </Card>
    </>
  )
}

export default CardImageTitle
