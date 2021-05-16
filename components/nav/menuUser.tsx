/* eslint-disable no-unused-expressions */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BiPurchaseTagAlt } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'
import { GrConfigure } from 'react-icons/gr'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { MdFavorite } from 'react-icons/md'
import { RiCouponLine, RiLockPasswordLine } from 'react-icons/ri'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import Switch from 'react-switch'
import { IoIosNotifications } from 'react-icons/io'
import { CgFileDocument } from 'react-icons/cg'

import { useTheme } from 'next-themes'
import { RootState } from '../../reducers'
import { SourceAvatar } from '../../helpers/sourceAvatar'
import { BASE_API_IMAGES_CLOUDINNARY_SCALE, DEFAULT_AVATAR } from '../../api'
import ModalElement from '../element/modal'
import CartIcon from '../cart/cart-icon'

export const MenuUser = () => {
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
    buttonMenu: {
      borderColor: '#f1d7dd',
    },
  }

  const [modal, setModal] = useState<boolean>(false)
  const [istheme, setIsTheme] = useState<boolean>(false)
  const [isPermiso, setIsPermiso] = useState<string>('')
  const { theme, setTheme } = useTheme()

  const { User } = useSelector((state: RootState) => state.UserReducer)

  const closeSesion = () => {
    Cookies.remove('access-token')
    window.location.href = '/home'
  }

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

  useEffect(() => {
    setIsPermiso(Notification.permission)
  }, [])

  return (
    <>
      <div className="d-flex">
        <div
          className="d-flex mr-5 bg-cici border-round"
          style={{ height: 40 }}
        >
          <figure
            className="avatar"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={User.userName}
          >
            <img
              src={
                SourceAvatar(User.avatar) ||
                `${BASE_API_IMAGES_CLOUDINNARY_SCALE}/${DEFAULT_AVATAR}`
              }
              alt={User.userName}
            />
          </figure>
          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle
              caret
              className="bg-cici"
              size="sm"
              style={styles.buttonMenu}
            />
            <DropdownMenu className="border-cici">
              <div className="p-2">
                <strong>{User.userName}</strong>
                <br />
                <Link href="/configuracion/mis-datos">Ver mi Perfil</Link>
                <hr />
              </div>
              <DropdownItem style={styles.colorLink}>
                <Link href="/mis-pedidos">
                  <a style={styles.colorLink}>
                    <HiOutlineClipboardList /> Mis Pedidos
                  </a>
                </Link>
              </DropdownItem>
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
                <GrConfigure /> Configuración
              </DropdownItem>
              <DropdownItem
                style={styles.colorClose}
                className="bg-danger"
                onClick={closeSesion}
              >
                <AiFillCloseCircle /> Salir
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>

        <CartIcon />
      </div>

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
