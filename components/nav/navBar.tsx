/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unneeded-ternary */
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap'
import SearchInput from '../element/searchInput'
import { MenuUser } from './menuUser'

const NavBarElement = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [width, setWidth] = useState<number>(window.innerWidth)
  const { theme } = useTheme()

  const toggle = () => setIsOpen(!isOpen)

  const styles = {
    colorLink: {
      color: '#999',
      marginBottom: 10,
    },
    colorClose: {
      color: 'red',
    },
    spaceMenu: {
      marginBottom: 10,
    },
  }

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  return (
    <>
      <Navbar
        color={theme ? theme : 'light'}
        dark={theme === 'dark' ? true : false}
        light={theme !== 'dark' ? true : false}
        expand="md"
        className="navBar font-arvo"
      >
        <NavbarBrand>
          <Link href="/home">
            <a style={styles.colorLink}>
              <figure className="logo">
                <img
                  src="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
                  alt="logotipo"
                />
              </figure>
            </a>
          </Link>
        </NavbarBrand>
        <span className="d-block d-md-none">
          <MenuUser />
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
                <Link href="/productos/mas-vendidos">
                  <a style={styles.colorLink}>Mas vendidos</a>
                </Link>
              </NavLink>
            </NavItem>
          </Nav>

          {width > 768 && <MenuUser />}

          <SearchInput />
        </Collapse>
      </Navbar>
    </>
  )
}

export default NavBarElement
