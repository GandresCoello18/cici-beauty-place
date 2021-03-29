/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Button } from 'reactstrap'
import ImageUploading, { ImageListType } from 'react-images-uploading'

interface Props {
  images: ImageListType
  maxNumber: number
  onChange: (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => void
}

export const UploadImage = ({ images, maxNumber, onChange }: Props) => {
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
      acceptType={['jpg', 'gif', 'png']}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div className="upload__image-wrapper">
          {imageList.length === maxNumber ? (
            ''
          ) : (
            <Button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              color="secondary"
              variant="contained"
            >
              Seleccionar imagen
            </Button>
          )}
          &nbsp;
          {imageList.length > 1 ? (
            <Button style={{ color: 'red' }} onClick={onImageRemoveAll}>
              Limpiar
            </Button>
          ) : (
            ''
          )}
          <>
            {imageList.map((image, index) => (
              <div key={index} className="image-item text-center">
                <img
                  src={image.data_url}
                  alt="uj"
                  width="100"
                  className="p-2"
                />
                <div className="image-item__btn-wrapper">
                  <Button
                    onClick={() => onImageUpdate(index)}
                    color="secondary"
                  >
                    Cambiar
                  </Button>
                  <Button
                    className="ml-2"
                    color="danger"
                    onClick={() => onImageRemove(index)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            ))}
          </>
        </div>
      )}
    </ImageUploading>
  )
}
