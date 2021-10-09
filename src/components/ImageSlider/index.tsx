import React, { FC, useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

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

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const ImageSlider: FC<Props> = ({ imageURLs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChangeIndex = useRef((info: ChangeImageProps) => {
    const { index } = info.viewableItems[0];
    setCurrentIndex(Number(index));
  }).current;

  return (
    <Container>
      <ImageIndexes>
        {imageURLs.map((_, index) => (
          <ImageIndex 
            key={index} 
            active={currentIndex === index}
          />
        ))}
      </ImageIndexes>
      
      <FlatList 
        data={imageURLs}
        keyExtractor={key => key}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onChangeIndex}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage 
              source={{ uri: item }}
              resizeMode="contain"
            />
          </CarImageWrapper>
        )}
      />
      
    </Container>
  );

}