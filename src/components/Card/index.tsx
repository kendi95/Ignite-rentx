import React, { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage
} from './styles';
import GasolineSVG from '../../assets/gasoline.svg';

interface Props extends RectButtonProps {
  data: {
    brand: string;
    name: string;
    rent: {
      period: string;
      price: number;
    },
    thumbnail: string;
  }
}

export const Card: FC<Props> = ({ data, ...rest }) => {

  return (
    <Container { ...rest }>
      <>
        <Details>
          <Brand>{data.brand}</Brand>
          <Name>{data.name}</Name>

          <About>
            <Rent>
              <Period>{data.rent.period}</Period>
              <Price>{data.rent.price}</Price>
            </Rent>
            
            <Type>
              <GasolineSVG />
            </Type>
          </About>
        </Details>

        <CarImage 
          resizeMode="contain"
          source={{ uri: data.thumbnail }} 
        />
      </>
    </Container>
  );

}