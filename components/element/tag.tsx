import React from 'react'
import { Badge } from 'reactstrap'

interface Props {
  content: string
  type: string
}

const Tag = ({ content, type }: Props) => {
  return <Badge color={type}>{content}</Badge>
}

export default Tag
