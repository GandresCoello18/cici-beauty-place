import React, { useState } from 'react'
import Link from 'next/link'
import {
  Badge,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from 'reactstrap'
import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai'

const NavBarElement = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => setIsOpen(!isOpen)

  const styles = {
    colorLink: {
      color: '#999',
    },
  }

  return (
    <div>
      <Navbar color="light" light expand="md" className="navBar font-arvo">
        <NavbarBrand href="/">
          <figure className="logo">
            <img
              src="https://scontent.fgye18-1.fna.fbcdn.net/v/t1.0-9/101095190_255714909200617_8749237192456404992_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=LNAFOmAIaAEAX94QBnj&_nc_ht=scontent.fgye18-1.fna&oh=b98723790cdb5d9db1274f200e58c29b&oe=6010FC9C"
              alt="logotipo"
            />
          </figure>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="mr-auto">
            <NavItem>
              <NavLink>
                <Link href="/">
                  <a href="/" style={styles.colorLink}>
                    Inicio
                  </a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/productos?type=ofertas">
                  <a href="/productos?type=ofertas" style={styles.colorLink}>
                    Ofertas
                  </a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/productos?type=mas-vendidos">
                  <a
                    href="/productos?type=mas-vendidos"
                    style={styles.colorLink}
                  >
                    Mas vendidos
                  </a>
                </Link>
              </NavLink>
            </NavItem>
          </Nav>

          <div className="row mt-3 mt-md-0">
            <div className="col-2 col-md-3">
              <figure className="avatar ml-2">
                <img
                  src="https://andres-coello-goyes.herokuapp.com/img/profile-test.jpg"
                  alt="avatar perfil"
                />
              </figure>
            </div>
            <div className="col-9">
              <UncontrolledDropdown setActiveFromChild style={styles.colorLink}>
                <DropdownToggle tag="a" className="nav-link" caret>
                  Mi perfil
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/blah" style={styles.colorLink}>
                    Mis pedidos
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah" style={styles.colorLink}>
                    Mis Favoritos
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah" style={styles.colorLink}>
                    Mis Datos
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah" style={styles.colorLink}>
                    Configuracion
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah" style={styles.colorLink}>
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

          <InputGroup style={{ width: 300 }} className="ml-md-4">
            <Input
              placeholder="Buscar..."
              style={{ borderColor: '#f1d7dd', borderWidth: 2 }}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText style={{ backgroundColor: '#f1d7dd' }}>
                <AiOutlineSearch />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBarElement
