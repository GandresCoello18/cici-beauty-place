/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
import React from 'react'
import { AiFillVideoCamera, AiOutlineUnorderedList } from 'react-icons/ai'
import { GiEyelashes, GiLips } from 'react-icons/gi'
import Link from 'next/link'
import { RiBrushLine, RiSmartphoneFill } from 'react-icons/ri'
import { MdFace } from 'react-icons/md'

const CategoriNav = () => {
  const styles: any = {
    link: {
      textDecoration: 'none',
      color: '#999',
    },
  }

  return (
    <>
      <div className="row font-arvo head-categori">
        <div className="col-1">
          <AiOutlineUnorderedList size={20} />
        </div>
        <div className="col-1">Categorías</div>
      </div>

      <div className="row font-arvo mt-5 border-bottom item-categori">
        <div className="col-12">
          <Link href="/productos/category/Cejas y Pestañas">
            <a style={styles.link}>
              <GiEyelashes size={17} /> &nbsp; Cejas y Pestañas
            </a>
          </Link>
        </div>
      </div>

      <div className="row font-arvo mt-2 border-bottom item-categori">
        <div className="col-12">
          <Link href="/productos/category/Cuidados de la piel">
            <a style={styles.link}>
              <MdFace /> &nbsp; Cuidados de la piel
            </a>
          </Link>
        </div>
      </div>

      <div className="row font-arvo mt-2 border-bottom item-categori">
        <div className="col-12">
          <Link href="/productos/category/Labiales">
            <a style={styles.link}>
              <GiLips /> &nbsp; Labiales
            </a>
          </Link>
        </div>
      </div>

      <div className="row font-arvo mt-2 border-bottom item-categori">
        <div className="col-12">
          <Link href="/productos/category/Brochas y Sombras">
            <a style={styles.link}>
              <RiBrushLine /> &nbsp; Brochas y Sombras
            </a>
          </Link>
        </div>
      </div>

      <div className="row font-arvo mt-2 border-bottom item-categori">
        <div className="col-12">
          <Link href="/productos/category/Protector para celular">
            <a style={styles.link}>
              <RiSmartphoneFill /> &nbsp; Protector para celular
            </a>
          </Link>
        </div>
      </div>

      <div className="row font-arvo mt-2 border-bottom item-categori">
        <div className="col-12">
          <Link href="/productos/category/Streamer">
            <a style={styles.link}>
              <AiFillVideoCamera /> &nbsp; Streamer
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CategoriNav
