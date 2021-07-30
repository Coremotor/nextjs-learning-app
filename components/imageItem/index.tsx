import React, {useState} from 'react'
import Image from "next/image";
import {Basic} from "unsplash-js/dist/methods/photos/types";


type TProps = {
  photo: Basic
}

export const ImageItem = (props: TProps) => {
  return (
      <Image
        alt="pic"
        src={props.photo.urls.regular}
        height={props.photo.height}
        width={props.photo.width}
      />
  )
}