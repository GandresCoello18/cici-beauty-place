import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const MigasPan = () => {
  return (
    <Breadcrumb tag="nav" listTag="div">
      <BreadcrumbItem tag="a" href="#">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">
        Library
      </BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">
        Data
      </BreadcrumbItem>
      <BreadcrumbItem active tag="span">
        Bootstrap
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default MigasPan
