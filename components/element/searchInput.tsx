/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Autocomplete from 'autocompleter'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import Router from 'next/router'
import { toast } from 'react-toast'
import SpinnerLoader from './spinner-cici'

interface SearchAutoComplete {
  label: string
  value: string
}

const SearchInput = () => {
  const [SearchValue, setSearchValue] = useState<string>('')
  const [Loading, setLoading] = useState<boolean>(false)
  const [countries] = useState<SearchAutoComplete[]>([
    { label: 'Cejas y pestañas', value: 'Cejas y pestañas' },
    { label: 'Cuidados de la piel', value: 'Cuidados de la piel' },
    { label: 'Labiales mate', value: 'Labiales mate' },
    { label: 'Brochas y sombras', value: 'Brochas y sombras' },
    { label: 'Accesorios para celular', value: 'Accesorios para celular' },
    { label: 'Hidratantes', value: 'Hidratantes' },
    { label: 'Vitaminas', value: 'Vitaminas' },
  ])

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
        setSearchValue(item.label)
      },
    })
  }, [countries])

  const SearchKey = () => {
    setLoading(true)

    if (SearchValue) {
      Router.push(`/buscar/${SearchValue}`)
    } else {
      toast.error(
        'Escribe lo que estas buscando, ya sea un producto o categoría'
      )
    }

    setLoading(false)
  }

  return (
    <InputGroup style={{ width: 300 }} className="ml-md-4">
      <Input
        id="input-search"
        placeholder="Buscar..."
        style={{ borderColor: '#f1d7dd', borderWidth: 2 }}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            SearchKey()
          }
        }}
      />
      <InputGroupAddon
        addonType="append"
        className="cursor-pointer"
        onClick={SearchKey}
      >
        <InputGroupText style={{ backgroundColor: '#f1d7dd' }}>
          {Loading ? <SpinnerLoader /> : <AiOutlineSearch />}
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  )
}

export default SearchInput
