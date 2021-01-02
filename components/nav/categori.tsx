/* eslint-disable no-shadow */
import React, { useState } from 'react'
import { AiFillVideoCamera, AiOutlineUnorderedList } from 'react-icons/ai'
import { GiEyelashes, GiLips } from 'react-icons/gi'
import Link from 'next/link'
import { RiBrushLine, RiSmartphoneFill } from 'react-icons/ri'
import { MdFace } from 'react-icons/md'
import { Nav, NavItem, NavLink } from 'reactstrap'

const CategoriNav = () => {
  const styles: any = {
    navLink: {
      color: '#999',
      fontSize: 13,
      fontFamily: 'font-arvo',
    },
    navLinkHover: {
      color: '#df7c93',
      fontSize: 13,
      fontFamily: 'font-arvo',
      boxShadow: '5px 5px 5px #f1d7dd',
    },
    headCategori: {
      backgroundColor: '#f1d7dd',
      position: 'absolute',
      top: 0,
      left: 15,
      width: '100%',
      fontWeight: 'bold',
      padding: 5,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
  }

  const [isHover, setIsHover] = useState<boolean>(false)
  const [item, setItem] = useState<number>(0)

  const toggleHover = (item: number) => {
    setIsHover(true)
    setItem(item)

    setTimeout(() => setIsHover(false), 3000)
  }

  return (
    <>
      <div className="row font-arvo" style={styles.headCategori}>
        <div className="col-1">
          <AiOutlineUnorderedList size={20} />
        </div>
        <div className="col-1">Categorìas</div>
      </div>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">-----</NavLink>
        </NavItem>
        <NavItem>
          <Link href="/">
            <NavLink
              href="/"
              style={
                isHover && item === 1 ? styles.navLinkHover : styles.navLink
              }
              onMouseEnter={() => toggleHover(1)}
              onMouseLeave={() => toggleHover(1)}
            >
              <GiEyelashes size={17} /> &nbsp; Cejas y Pestañas
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <NavLink
              href="/"
              style={
                isHover && item === 2 ? styles.navLinkHover : styles.navLink
              }
              onMouseEnter={() => toggleHover(2)}
              onMouseLeave={() => toggleHover(2)}
            >
              <MdFace /> &nbsp; Cuidados de la piel
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <NavLink
              href="/"
              style={
                isHover && item === 3 ? styles.navLinkHover : styles.navLink
              }
              onMouseEnter={() => toggleHover(3)}
              onMouseLeave={() => toggleHover(3)}
            >
              <GiLips /> &nbsp; Labiales
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <NavLink
              href="/"
              style={
                isHover && item === 4 ? styles.navLinkHover : styles.navLink
              }
              onMouseEnter={() => toggleHover(4)}
              onMouseLeave={() => toggleHover(4)}
            >
              <RiBrushLine /> &nbsp; Brochas y Sombras
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <NavLink
              href="/"
              style={
                isHover && item === 5 ? styles.navLinkHover : styles.navLink
              }
              onMouseEnter={() => toggleHover(5)}
              onMouseLeave={() => toggleHover(5)}
            >
              <RiSmartphoneFill /> &nbsp; Protector para celular
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <NavLink
              href="/"
              style={
                isHover && item === 6 ? styles.navLinkHover : styles.navLink
              }
              onMouseEnter={() => toggleHover(6)}
              onMouseLeave={() => toggleHover(6)}
            >
              <AiFillVideoCamera /> &nbsp; Streamer
            </NavLink>
          </Link>
        </NavItem>
      </Nav>
    </>
  )
}

export default CategoriNav
