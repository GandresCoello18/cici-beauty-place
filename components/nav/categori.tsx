import React from 'react'
import { AiFillVideoCamera, AiOutlineUnorderedList } from 'react-icons/ai'
import { GiEyelashes, GiLips } from 'react-icons/gi'
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
          <NavLink href="#" style={styles.navLink}>
            <GiEyelashes size={17} /> &nbsp; Cejas y Pestañas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={styles.navLink}>
            <MdFace /> &nbsp; Cuidados de la piel
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={styles.navLink}>
            <GiLips /> &nbsp; Labiales
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={styles.navLink}>
            <RiBrushLine /> &nbsp; Brochas y Sombras
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={styles.navLink}>
            <RiSmartphoneFill /> &nbsp; Protector para celular
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={styles.navLink}>
            <AiFillVideoCamera /> &nbsp; Streamer
          </NavLink>
        </NavItem>
      </Nav>
    </>
  )
}

export default CategoriNav
