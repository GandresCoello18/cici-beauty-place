/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Dispatch, SetStateAction } from 'react'
import { Colors } from '../../interfaces/products'

interface Props {
  colors: Colors[]
  colour?: string
  setColour?: Dispatch<SetStateAction<string | undefined>>
}

export const ListColors = ({ colors, colour, setColour }: Props) => {
  return (
    <div className="flex space">
      {colors.map(
        (color) =>
          !color.disabled && (
            <button
              type="button"
              disabled={color.disabled}
              onClick={() => setColour && setColour(color.hex)}
              key={color.hex}
              className="cursor-pointer border-round p-2 ml-2"
              style={{
                background: color.hex,
                border: `3px solid ${colour === color.hex ? 'red' : color.hex}`,
                width: 18,
                height: 18,
              }}
            />
          )
      )}
    </div>
  )
}
