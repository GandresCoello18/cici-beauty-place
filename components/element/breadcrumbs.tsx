import React from 'react'
import Link from 'next/link'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

interface DataMigas {
  text: string
  href?: string
  active?: boolean
}
interface Props {
  migas: DataMigas[]
}

const MigasPan = ({ migas }: Props) => {
  return (
    <Breadcrumb tag="nav" listTag="div">
      {migas.map((miga) =>
        miga.active ? (
          <BreadcrumbItem active tag="span">
            {miga.text}
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={miga.text}>
            <Link href={miga.href ? miga.href : '/'}>
              <a href={miga.href}>{miga.text}</a>
            </Link>
          </BreadcrumbItem>
        )
      )}
    </Breadcrumb>
  )
}

export default MigasPan
