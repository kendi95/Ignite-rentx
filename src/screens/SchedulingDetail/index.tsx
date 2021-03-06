import React, { FC, useState, useEffect } from 'react';
import { Alert, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format, addDays } from 'date-fns';

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import { AcessoryIcon } from '../../components/AcessoryIcon';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  RentalPeriod,
  CaledarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetail,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

interface Props {}

interface Params {
  car: CarDTO;
  dates: Array<string>;
}

interface PeriodProps {
  start: string;
  end: string;
}

export const SchedulingDetail: FC<Props> = () => {
  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();
  const { car, dates } = useRoute().params as Params;

  const [period, setPeriod] = useState<PeriodProps>({
    start: "",
    end: ""
  });
  const [loading, setLoading] = useState(false);

  async function handleConfirmRental() {
    try {
      setLoading(true);
      const { data } = await api
        .get(`/schedules_bycars/${car.id}`);

      const unvailable_dates = {
        ...data.unvailable_dates,
        ...dates
      };

      await api.post(`/schedules_byuser`, {
        user_id: 1,
        car,
        startDate: format(
          addDays(new Date(dates[0]), 1), 
          'dd/MM/yyyy'
          ),
        endDate: format(
          addDays(new Date(dates[dates.length - 1]), 1), 
          'dd/MM/yyyy', 
        )
      });

      await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unvailable_dates
      });

      setLoading(false);
      
      navigate('SchedulingComplete' as never);
    } catch (error) {
      setLoading(false);
      console.log(error);
      Alert
        .alert("Erro", "N??o foi poss??vel confirmar o agendamento.");
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    setPeriod({
      start: format(
        addDays(new Date(dates[0]), 1), 
        'dd/MM/yyyy'
        ),
      end: format(
        addDays(new Date(dates[dates.length - 1]), 1), 
        'dd/MM/yyyy', 
      )
    });
  }, [dates]);

  return (
    <Container>
      <StatusBar 
        barStyle="dark-content" 
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <BackButton onPress={goBack} />
      </Header>

      <CarImages>
        <ImageSlider imageURLs={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Acessories>
          {car.accessories.map((accessory, index) => (
            <Acessory
              key={index}
              name={accessory.name} 
              icon={() => <AcessoryIcon type={accessory.type} />} 
            />
          ))}
        </Acessories>

        <RentalPeriod>
          <CaledarIcon>
            <Feather 
              name="calendar" 
              size={RFValue(24)}
              color={colors.shape}
            />
          </CaledarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>
              {period.start}
            </DateValue>
          </DateInfo>

          <Feather 
            name="chevron-right" 
            size={RFValue(10)}
            color={colors.text}
          />

          <DateInfo>
            <DateTitle>AT??</DateTitle>
            <DateValue>
              {period.end}
            </DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetail>
            <RentalPriceQuota>
              R$ {car.rent.price} {dates.length}x di??rias
            </RentalPriceQuota>
            <RentalPriceTotal>
              R$ {car.rent.price * dates.length}
            </RentalPriceTotal>
          </RentalPriceDetail>
        </RentalPrice>
      </Content>

      <Footer>
        <Button 
          title="Alugar agora"
          isLoading={loading}
          isDisabled={loading}
          color={colors.success} 
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );

}