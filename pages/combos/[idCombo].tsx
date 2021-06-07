/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable unicorn/no-for-loop */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import { toast } from 'react-toast'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { ProductsCombo } from '../../interfaces/combo'
import { DetailsCombo } from '../../components/combo/detailsCombo'
import { GetCombo } from '../../api/combos'
import SpinnerLoader from '../../components/element/spinner-cici'

const ComboDetails = () => {
  const [combo, setCombo] = useState<ProductsCombo>()
  const [loading, setLoading] = useState<boolean>(false)
  const Router = useRouter()

  const { idCombo } = Router.query

  useEffect(() => {
    const id = idCombo as string

    if (!id) {
      Router.push('/')
    }

    const FetchCombo = async () => {
      setLoading(true)

      try {
        const { ThisCombo } = await (await GetCombo({ idCombo: id })).data

        if (!ThisCombo) {
          Router.push('/productos')
        }

        setCombo(ThisCombo)
        setLoading(false)
      } catch (error) {
        toast.error(error.message)
        setLoading(false)
      }
    }

    id && FetchCombo()
  }, [Router, idCombo])

  return (
    <>
      <NextSeo
        title={`${combo?.name || ''} - Cici beauty place`}
        description="Nuestros combos contiene una serie de productos mas vendidos o valorados, para que tu selección sea mas eficaz."
        canonical="https://cici.beauty/productos"
        openGraph={{
          url: `https://cici.beauty/productos/${combo?.idCombo}`,
          title: `${combo?.name}`,
          description:
            'Nuestros combos contiene una serie de productos mas vendidos o valorados, para que tu selección sea mas eficaz.',
          images: [
            {
              url:
                'https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg',
              width: 700,
              height: 500,
              alt: combo?.name || '',
            },
          ],
          site_name: 'Cici beauty place',
        }}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Inicio',
            item: 'https://cici.beauty',
          },
          {
            position: 2,
            name: 'Productos',
            item: 'https://cici.beauty/productos',
          },
          {
            position: 3,
            name: `${combo?.name}`,
            item: `https://cici.beauty/productos/${combo?.idCombo}`,
          },
        ]}
      />

      <Layout>
        {combo ? (
          <DetailsCombo combo={combo} loading={loading} />
        ) : (
          <div className="p-5 bg-white">
            <SpinnerLoader text="Cargando..." />
          </div>
        )}
      </Layout>
    </>
  )
}

export default ComboDetails
