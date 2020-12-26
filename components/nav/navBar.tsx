import React, { useState } from 'react'
import Link from 'next/link'
import {
  Badge,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from 'reactstrap'
import { AiOutlineShopping } from 'react-icons/ai'

const NavBarElement = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md" className="navBar font-arvo">
        <NavbarBrand href="/">
          <figure className="logo">
            <img src="img/logo.jpg" alt="logotipo" />
          </figure>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="mr-auto">
            <NavItem>
              <NavLink>
                <Link href="/">
                  <a href="/" style={{ color: '#999' }}>
                    Inicio
                  </a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/ofertas">
                  <a href="/ofertas" style={{ color: '#999' }}>
                    Ofertas
                  </a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/mas-vendidos">
                  <a href="/mas-vendidos" style={{ color: '#999' }}>
                    Mas vendidos
                  </a>
                </Link>
              </NavLink>
            </NavItem>
          </Nav>

          <div className="row">
            <div className="col-2 col-md-3">
              <figure className="avatar ml-2">
                <img src="img/profile.jpeg" alt="perfil" />
              </figure>
            </div>
            <div className="col-9">
              <UncontrolledDropdown
                setActiveFromChild
                style={{ color: '#999' }}
              >
                <DropdownToggle tag="a" className="nav-link" caret>
                  Mi perfil
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/blah" style={{ color: '#999' }}>
                    Mis pedidos
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah" style={{ color: '#999' }}>
                    Mis Favoritos
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah" style={{ color: '#999' }}>
                    Mis Datos
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah" style={{ color: '#999' }}>
                    Configuracion
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah" style={{ color: '#999' }}>
                    Cerrar Sesiòn
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>

          <NavbarText>
            <Link href="/cart">
              <a href="/cart">
                <AiOutlineShopping size={25} />
                <Badge
                  color="dark"
                  pill
                  className="position-relative"
                  style={{ top: -10 }}
                >
                  0
                </Badge>
              </a>
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBarElement
