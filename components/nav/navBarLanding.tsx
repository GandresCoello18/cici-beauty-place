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
              <img
                src="https://scontent.fgye18-1.fna.fbcdn.net/v/t1.0-9/101095190_255714909200617_8749237192456404992_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=LNAFOmAIaAEAX94QBnj&_nc_ht=scontent.fgye18-1.fna&oh=b98723790cdb5d9db1274f200e58c29b&oe=6010FC9C"
                alt="logotipo"
              />
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
