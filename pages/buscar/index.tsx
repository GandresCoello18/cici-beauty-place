/* eslint-disable @typescript-eslint/camelcase */
import { NextSeo } from 'next-seo'
import React from 'react'
import SearchInput from '../../components/element/searchInput'
import Layout from '../../components/layout'

const Search = () => {
  return (
    <>
      <NextSeo
        title="Buscar productos | Cici beauty place"
        description="Estas buscando algún producto en especifico."
        canonical="https://cici.beauty/buscar"
        openGraph={{
          url: 'https://cici.beauty/buscar',
          title: 'Buscar productos | Cici beauty place',
          description: '¿Estas buscando algún producto en especifico?',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 800,
              height: 600,
              alt: 'logo de cici beauty place',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <Layout>
        <section className="container mt-md-5 mb-md-5 p-2 font-arvo">
          <div className="row bg-white border-round p-3">
            <div className="col-12 p-2 text-center">
              <h3 className="p-1">¿Que estas buscando?</h3>
              <p className="text-secondary">
                Escribe palabras claves como: marcas, productos, categorías.
              </p>

              <div className="row justify-content-center align-items-center mt-2">
                <div className="col-auto">
                  <SearchInput />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Search
