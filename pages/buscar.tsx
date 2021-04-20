/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../components/layout'

const Search = () => {
  return (
    <>
      <NextSeo
        title="Buscar productos | Cici beauty place"
        description="Estas buscando algun producto en especifico."
        canonical="https://cici.beauty/buscar"
        openGraph={{
          url: 'https://cici.beauty/buscar',
          title: 'Buscar productos | Cici beauty place',
          description: '¿Estas buscando algun producto en especifico?',
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
            <div className="col-12">
              <div className="text-center">
                <img
                  src="/img/not_found_search.svg"
                  alt="empty search product"
                  height={200}
                />
              </div>
              <br />
              <h3 className="text-center">Ningún resultado encontrado</h3>
              <p className="text-center text-secondary">
                Prueba a acortar o reformular la búsqueda.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Search
