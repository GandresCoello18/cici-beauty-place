/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Autocomplete from 'autocompleter'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'

interface SearchAutoComplete {
  label: string
  value: string
}

const SearchInput = () => {
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

  return (
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
  )
}

export default SearchInput
