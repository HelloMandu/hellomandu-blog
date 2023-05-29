import { ComponentProps } from 'react'
import NextImage from 'next/image'

const Image = (props: ComponentProps<typeof NextImage>) => <NextImage {...props} />

export default Image
