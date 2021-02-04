/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unneeded-ternary */
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { FiSend } from 'react-icons/fi'
import Switch from 'react-switch'
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
import { AiFillCloseCircle } from 'react-icons/ai'
import { IoIosNotifications } from 'react-icons/io'
import { BiPurchaseTagAlt } from 'react-icons/bi'
import { GrConfigure } from 'react-icons/gr'
import { CgFileDocument } from 'react-icons/cg'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { MdFavorite } from 'react-icons/md'
import { RiCouponLine, RiLockPasswordLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import ModalElement from '../element/modal'
import SearchInput from '../element/searchInput'
import CartIcon from '../cart/cart-icon'
import { BASE_API, DEFAULT_AVATAR } from '../../api'
import { RootState } from '../../reducers'

const NavBarElement = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [istheme, setIsTheme] = useState<boolean>(false)
  const [isPermiso, setIsPermiso] = useState<string>('')
  const { theme, setTheme } = useTheme()

  const { User } = useSelector((state: RootState) => state.UserReducer)

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
    setIsPermiso(Notification.permission)
  }, [])

  const ColorPermisoNotificacon = (permiso: string) => {
    switch (permiso) {
      case 'denied':
        return 'danger'
      case 'granted':
        return 'success'
      case 'default':
        return 'info'
      default:
        return 'link'
    }
  }

  const closeSesion = () => {
    Cookies.remove('access-token')
    window.location.href = '/home'
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
        <NavbarBrand>
          <Link href="/home">
            <a style={styles.colorLink}>
              <figure className="logo">
                <img src={`${BASE_API}/static/logo.jpg`} alt="logotipo" />
              </figure>
            </a>
          </Link>
        </NavbarBrand>
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

          <div className="row mt-3 mt-md-0">
            <div className="col-2 col-md-3">
              <figure
                className="avatar ml-2"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title={User.userName}
              >
                <img
                  src={
                    User.avatar === 'null'
                      ? `${BASE_API}/static/${DEFAULT_AVATAR}`
                      : User.avatar
                  }
                  alt={User.userName}
                />
              </figure>
            </div>
            <div className="col-9">
              <UncontrolledDropdown setActiveFromChild style={styles.colorLink}>
                <DropdownToggle className="nav-link" caret>
                  Opciones
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem style={styles.spaceMenu}>
                    <Link href="/mis-compras">
                      <a style={styles.colorLink}>
                        <BiPurchaseTagAlt /> Mis Compras
                      </a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem style={styles.spaceMenu}>
                    <Link href="/mis-favoritos">
                      <a style={styles.colorLink}>
                        <MdFavorite /> Mis Favoritos
                      </a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem style={styles.colorLink}>
                    <Link href="/mis-pedidos">
                      <a style={styles.colorLink}>
                        <HiOutlineClipboardList /> Mis Pedidos
                      </a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem style={styles.colorLink}>
                    <Link href="/mis-cupones">
                      <a style={styles.colorLink}>
                        <RiCouponLine /> Mis Cupones
                      </a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem style={styles.colorLink}>
                    <Link href="/configuracion/invitar">
                      <a style={{ textDecoration: 'none', color: '#999' }}>
                        <FiSend /> Invitar amigos
                      </a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setModal(true)}
                    style={styles.colorLink}
                  >
                    <GrConfigure /> Configuracion
                  </DropdownItem>
                  <DropdownItem style={styles.colorClose} onClick={closeSesion}>
                    <AiFillCloseCircle /> Salir
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>

          <NavbarText>
            <CartIcon />
          </NavbarText>

          <SearchInput />
        </Collapse>
      </Navbar>

      <ModalElement title="Configuracion" visible={modal} setVisible={setModal}>
        <ul className="list-group">
          <li className="list-group-item" style={styles.colorLink}>
            Tema: {theme === 'dark' ? 'Oscuro' : 'Claro'} &nbsp; &nbsp;
            <Switch
              onChange={(checked: boolean) => {
                setIsTheme(checked)
                theme === 'dark' ? setTheme('light') : setTheme('dark')
              }}
              checked={istheme}
            />
          </li>
          {User.provider === 'cici' && (
            <li
              className="list-group-item cursor-pointer"
              style={styles.colorLink}
            >
              <Link href="/configuracion/cambiar-clave">
                <a style={{ textDecoration: 'none', color: '#999' }}>
                  <RiLockPasswordLine /> Cambio de contraseña
                </a>
              </Link>
            </li>
          )}
          <li
            className="list-group-item cursor-pointer"
            style={styles.colorLink}
          >
            <div
              onClick={() =>
                Notification.requestPermission().then((result) =>
                  setIsPermiso(result)
                )
              }
              aria-hidden="true"
            >
              <IoIosNotifications /> Recibir notificaciones{' '}
              <Badge color={ColorPermisoNotificacon(isPermiso)}>
                {isPermiso === 'denied' && 'Denegado'}
                {isPermiso === 'granted' && 'Permitido'}
                {isPermiso === 'default' && 'Sin respuesta'}
              </Badge>
            </div>
          </li>
          <li
            className="list-group-item cursor-pointer"
            style={styles.colorLink}
          >
            <Link href="/configuracion/mis-datos">
              <a style={{ textDecoration: 'none', color: '#999' }}>
                <CgFileDocument /> Mis Datos
              </a>
            </Link>
          </li>
        </ul>
      </ModalElement>
    </>
  )
}

export default NavBarElement
