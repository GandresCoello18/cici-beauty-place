/* eslint-disable no-unused-expressions */
/* eslint-disable no-unneeded-ternary */
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Switch from 'react-switch'
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
import {
  AiFillCloseCircle,
  AiOutlineSearch,
  AiOutlineShopping,
} from 'react-icons/ai'
import { BiPurchaseTagAlt } from 'react-icons/bi'
import { GrConfigure } from 'react-icons/gr'
import { CgFileDocument } from 'react-icons/cg'
import { FaHistory } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import ModalElement from '../element/modal'

const NavBarElement = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [istheme, setIsTheme] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  const toggle = () => setIsOpen(!isOpen)

  const styles = {
    colorLink: {
      color: '#999',
      marginBottom: 10,
    },
    colorClose: {
      color: 'red',
    },
  }

  return (
    <>
      <Navbar
        color={theme ? theme : 'light'}
        dark={theme === 'dark' ? true : false}
        light={theme !== 'dark' ? true : false}
        expand="md"
        className="navBar font-arvo"
      >
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
                <DropdownToggle className="nav-link" caret>
                  Mi perfil
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem style={styles.colorLink}>
                    <BiPurchaseTagAlt /> Mis pedidos
                  </DropdownItem>
                  <DropdownItem style={styles.colorLink}>
                    <MdFavorite /> Mis Favoritos
                  </DropdownItem>
                  <DropdownItem style={styles.colorLink}>
                    <CgFileDocument /> Mis Datos
                  </DropdownItem>
                  <DropdownItem style={styles.colorLink}>
                    <FaHistory /> Historial
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setModal(true)}
                    style={styles.colorLink}
                  >
                    <GrConfigure /> Configuracion
                  </DropdownItem>
                  <DropdownItem style={styles.colorClose}>
                    <AiFillCloseCircle /> Cerrar Sesiòn
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

      <ModalElement title="Configuracion" visible={modal} setVisible={setModal}>
        <ul className="list-group">
          <li className="list-group-item">
            Tema: {theme === 'dark' ? 'Oscuro' : 'Claro'} &nbsp; &nbsp;
            <Switch
              onChange={(checked: boolean) => {
                setIsTheme(checked)
                theme === 'dark' ? setTheme('light') : setTheme('dark')
              }}
              checked={istheme}
            />
          </li>
          <li className="list-group-item cursor-pointer">
            Cambio de contraseña
          </li>
          <li className="list-group-item cursor-pointer">
            Recibir notificaciones
          </li>
          <li className="list-group-item cursor-pointer">Invitar amigos</li>
          <li className="list-group-item cursor-pointer">Centro de mensajes</li>
        </ul>
      </ModalElement>
    </>
  )
}

export default NavBarElement
