/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Autocomplete from 'autocompleter'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import Router from 'next/router'
import { toast } from 'react-toast'

interface SearchAutoComplete {
  label: string
  value: string
}

const SearchInput = () => {
  const [SearchValue, setSearchValue] = useState<string>('')
  const [countries] = useState<SearchAutoComplete[]>([
    { label: 'United Kingdom', value: 'UK' },
    { label: 'United States', value: 'US' },
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
      },
    })
  }, [countries])

  const SearchKey = () => {
    if (SearchValue) {
      Router.push(`/buscar/${SearchValue}`)
    } else {
      toast.error(
        'Escribe lo que estas buscando, ya sea un producto o categoria'
      )
    }
  }

  return (
    <InputGroup style={{ width: 300 }} className="ml-md-4">
      <Input
        id="input-search"
        placeholder="Buscar..."
        style={{ borderColor: '#f1d7dd', borderWidth: 2 }}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <InputGroupAddon
        addonType="append"
        className="cursor-pointer"
        onClick={SearchKey}
      >
        <InputGroupText style={{ backgroundColor: '#f1d7dd' }}>
          <AiOutlineSearch />
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  )
}

export default SearchInput
