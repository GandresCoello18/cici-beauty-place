import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationElement = () => {
  const Styles = {
    textColor: {
      color: '#000',
    },
  }
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous style={Styles.textColor} />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink style={Styles.textColor}>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink style={Styles.textColor}>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink style={Styles.textColor}>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink style={Styles.textColor}>4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink style={Styles.textColor}>5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next style={Styles.textColor} />
      </PaginationItem>
    </Pagination>
  )
}

export default PaginationElement
