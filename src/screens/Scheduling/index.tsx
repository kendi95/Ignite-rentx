import React, { FC, useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { format } from 'date-fns';

import ArrowSVG from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, DayProps, MarkedDateProps } from '../../components/Calendar';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';

import { generateInterval } from '../../utils/generateInterval';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { CarDTO } from '../../dtos/CarDTO';

interface Props {}

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export const Scheduling: FC<Props> = () => {
  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();
  const { car } = useRoute().params as Params;

  const [
    lastSelectedDate, 
    setLastSelectedDate
  ] = useState<DayProps>({} as DayProps);
  const [
    markedDates, 
    setMarkedDates
  ] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [
    rentalPeriod, 
    setRentalPeriod
  ] = useState<RentalPeriod>({} as RentalPeriod);

  function handleConfirmRentalPeriod() {
    navigate('SchedulingDetail' as never, {
      car,
      dates: Object.keys(markedDates),
    } as never);
  }

  function handleDayPress(date: DayProps) {
    let start: DayProps = !lastSelectedDate.timestamp 
      ? date
      : lastSelectedDate;
    let end: DayProps = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[
      Object.keys(interval).length - 1
    ];

    setRentalPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'
      ),
      endFormatted: format(
        getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'
      ),
    })
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content" 
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <BackButton 
          onPress={goBack} 
          colorIcon={colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue
              isSelected={rentalPeriod.startFormatted ? true : false}
            >
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSVG />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue 
              isSelected={rentalPeriod.endFormatted ? true : false}
            >
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar 
          markedDates={markedDates} 
          onDayPress={handleDayPress} 
        />
      </Content>

      <Footer>
        <Button 
          title="Confirmar" 
          onPress={handleConfirmRentalPeriod}    
        />
      </Footer>
    </Container>
  );

}