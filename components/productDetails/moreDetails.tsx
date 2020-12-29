import React, { useState } from 'react'
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'
import { BiDetail } from 'react-icons/bi'
import { FaRegCommentDots } from 'react-icons/fa'
import classnames from 'classnames'
import Comentario from '../element/comentario'

const MoreDetails = () => {
  const Styles = {
    color: {
      color: '#999',
    },
  }

  const [activeTab, setActiveTab] = useState<string>('1')

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1')
            }}
          >
            <FaRegCommentDots /> &nbsp; Opiniones
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2')
            }}
          >
            <BiDetail /> &nbsp; Detalles
          </NavLink>
        </NavItem>
      </Nav>
      <br />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12" md="6">
              {[0, 1, 2, 3].map((item) => (
                <div className="p-2 mb-2" key={item}>
                  <Comentario />
                </div>
              ))}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12" md="6">
              <span style={Styles.color} className="p-1 ml-2">
                Marca:{' '}
              </span>
              <span>MB Tatoo</span>
            </Col>
            <Col sm="12" md="6">
              <span style={Styles.color} className="p-1 ml-2">
                Origin:{' '}
              </span>
              <span>CN (origien)</span>
            </Col>
            <Col sm="12" md="6">
              <span style={Styles.color} className="p-1 ml-2">
                Tamaño:{' '}
              </span>
              <span>12 CM</span>
            </Col>
            <Col sm="12" md="6">
              <span style={Styles.color} className="p-1 ml-2">
                Modelo:{' '}
              </span>
              <span>Normal</span>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  )
}

export default MoreDetails
