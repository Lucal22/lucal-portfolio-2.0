import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Links from '../Links';

export type ImageProps = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
  width?: string | number;
  height?: string | number;
  layout?: 'fill';
};

export default function Images({
  link,
  src,
  alt,
  width,
  height,
  layout,
}: ImageProps) {
  return (
    <Links link={link}>
      <Image
        placeholder="blur"
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
      />
    </Links>
  );
}
