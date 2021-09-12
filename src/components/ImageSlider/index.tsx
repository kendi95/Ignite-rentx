import React, { FC } from 'react';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage
} from './styles';

interface Props {
  imageURLs: Array<string>;
}

export const ImageSlider: FC<Props> = ({ imageURLs }) => {

  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage 
          source={{ uri: imageURLs[0] }}
          resizeMode="contain"
        />
      </CarImageWrapper>
    </Container>
  );

}