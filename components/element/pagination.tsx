/* eslint-disable no-plusplus */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

interface Props {
  pages: number
  setSelectPage: Dispatch<SetStateAction<number>>
  SelectPage: number
}

const PaginationElement = ({ pages, setSelectPage, SelectPage }: Props) => {
  const [Count, setCount] = useState<number[]>([])
  const Styles = {
    textColor: {
      color: '#000',
    },
  }

  useEffect(() => {
    const count = []
    for (let i = 1; i <= pages; i++) {
      count.push(i)
    }

    setCount(count)
  }, [pages])

  const Previous = () => {
    if (Count.length !== 0 && Count.length > 1) {
      setSelectPage(SelectPage - 1)
    }
  }

  const Next = () => {
    if (Count.length !== 0 && Count.length > 1 && SelectPage < Count.length) {
      setSelectPage(SelectPage + 1)
    }
  }

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem disabled={!Count.length || Count.length === 1}>
        <PaginationLink previous style={Styles.textColor} onClick={Previous} />
      </PaginationItem>
      {Count.map((item) => (
        <PaginationItem active={SelectPage === item} key={item}>
          <PaginationLink
            style={Styles.textColor}
            onClick={() => setSelectPage(item)}
          >
            {item}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={!Count.length}>
        <PaginationLink next style={Styles.textColor} onClick={Next} />
      </PaginationItem>
    </Pagination>
  )
}

export default PaginationElement
