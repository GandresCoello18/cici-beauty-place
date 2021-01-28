import React, { useEffect } from 'react'
import Router from 'next/router'

const CategoryNone = () => {
  useEffect(() => {
    Router.push('/productos')
  }, [])

  return <small>none</small>
}

export default CategoryNone
