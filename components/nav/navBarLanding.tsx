import Link from 'next/link'
import React, { useState } from 'react'
import {
  Collapse,
  Nav,
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
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="mr-auto">
          <></>
        </Nav>

        <NavbarText>
          <CartIcon />
        </NavbarText>

        <SearchInput />
      </Collapse>
    </Navbar>
  )
}

export default NavBarLanding
