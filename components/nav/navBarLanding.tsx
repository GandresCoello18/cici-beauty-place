/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import React, { useState } from 'react'
import {
  Button,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from 'reactstrap'
import { BASE_API } from '../../api'
import CartIcon from '../cart/cart-icon'
import SearchInput from '../element/searchInput'

const NavBarLanding = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => setIsOpen(!isOpen)

  const styles = {
    colorLink: {
      color: '#999',
      marginBottom: 10,
    },
  }

  return (
    <Navbar color="light" light expand="md" className="navBar font-arvo">
      <NavbarBrand href="/home">
        <Link href="/home">
          <a href="/home" style={styles.colorLink}>
            <figure className="logo">
              <img src={`${BASE_API}/static/logo.jpg`} alt="logotipo" />
            </figure>
          </a>
        </Link>
      </NavbarBrand>
      <span className="d-block d-md-none">
        <CartIcon />
      </span>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="mr-auto">
          <NavItem>
            <NavLink>
              <Link href="/home">
                <a style={styles.colorLink}>Inicio</a>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link href="/productos/ofertas">
                <a style={styles.colorLink}>Ofertas</a>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link href="/productos/mas-vendidos">
                <a style={styles.colorLink}>Mas vendidos</a>
              </Link>
            </NavLink>
          </NavItem>
        </Nav>

        <NavbarText>
          <Link href="/login">
            <a className="mr-3">
              <Button outline color="secondary" size="sm">
                Iniciar Sesiòn
              </Button>
            </a>
          </Link>
          <CartIcon />
        </NavbarText>

        <SearchInput />
      </Collapse>
    </Navbar>
  )
}

export default NavBarLanding
