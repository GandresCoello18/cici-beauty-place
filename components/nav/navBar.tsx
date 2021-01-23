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
import { IoIosNotifications } from 'react-icons/io'
import { BiPurchaseTagAlt } from 'react-icons/bi'
import { GrConfigure } from 'react-icons/gr'
import { CgFileDocument } from 'react-icons/cg'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { MdFavorite } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import Autocomplete from 'autocompleter'
import ModalElement from '../element/modal'

interface SearchAutoComplete {
  label: string
  value: string
}

const NavBarElement = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [istheme, setIsTheme] = useState<boolean>(false)
  const [isPermiso, setIsPermiso] = useState<string>('')
  const { theme, setTheme } = useTheme()
  const [countries] = useState<SearchAutoComplete[]>([
    { label: 'United Kingdom', value: 'UK' },
    { label: 'United States', value: 'US' },
  ])

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

  useEffect(() => {
    const inputSearch: Document | any = document.querySelector('#input-search')

    Autocomplete<any>({
      input: inputSearch,
      fetch(text: string, update: (items: SearchAutoComplete[]) => void) {
        text = text.toLowerCase()
        const suggestions = countries.filter((n) =>
          n.label.toLowerCase().startsWith(text)
        )
        update(suggestions)
      },
      onSelect(item) {
        inputSearch.value = item.label
      },
    })
  }, [countries])

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

  return (
    <>
      <Navbar
        color={theme ? theme : 'light'}
        dark={theme === 'dark' ? true : false}
        light={theme !== 'dark' ? true : false}
        expand="md"
        className="navBar font-arvo"
      >
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
            <NavItem>
              <NavLink>
                <Link href="/home">
                  <a style={styles.colorLink}>Inicio</a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/productos?type=ofertas">
                  <a style={styles.colorLink}>Ofertas</a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/productos?type=mas-vendidos">
                  <a style={styles.colorLink}>Mas vendidos</a>
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
                  Opciones
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem style={styles.spaceMenu}>
                    <Link href="/mis-compras">
                      <a href="/mis-compras" style={styles.colorLink}>
                        <BiPurchaseTagAlt /> Mis Compras
                      </a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem style={styles.spaceMenu}>
                    <Link href="/mis-favoritos">
                      <a href="/mis-favoritos" style={styles.colorLink}>
                        <MdFavorite /> Mis Favoritos
                      </a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem style={styles.colorLink}>
                    <Link href="/mis-pedidos">
                      <a href="/mis-pedidos" style={styles.colorLink}>
                        <HiOutlineClipboardList /> Mis Pedidos
                      </a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem style={styles.colorLink}>
                    <Link href="/configuracion/invitar">
                      <a
                        href="/configuracion/invitar"
                        style={{ textDecoration: 'none', color: '#999' }}
                      >
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
                  <DropdownItem style={styles.colorClose}>
                    <AiFillCloseCircle /> Cerrar Sesiòn
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>

          <NavbarText>
            <Link href="/compra">
              <a href="/compra">
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
              id="input-search"
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
          <li
            className="list-group-item cursor-pointer"
            style={styles.colorLink}
          >
            <Link href="/configuracion/cambiar-clave">
              <a
                href="/configuracion/cambiar-clave"
                style={{ textDecoration: 'none', color: '#999' }}
              >
                <RiLockPasswordLine /> Cambio de contraseña
              </a>
            </Link>
          </li>
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
              <a
                href="/configuracion/cambiar-clave"
                style={{ textDecoration: 'none', color: '#999' }}
              >
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
