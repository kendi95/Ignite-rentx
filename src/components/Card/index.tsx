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

import { AcessoryIcon } from '../AcessoryIcon';

import { CarDTO } from '../../dtos/CarDTO';

interface Props extends RectButtonProps {
  data: CarDTO;
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
              <AcessoryIcon type={data.fuel_type} />
              {/* <GasolineSVG /> */}
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