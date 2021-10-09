import React, { FC, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

import {
  Container,
  Header,
  Title,
  SubTitle,
  ScheduleDoneContainer,
  ScheduleDoneText,
  ScheduleDoneNumber,
  CloseButton,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
  LoadingContainer,
  LoadingText
} from './styles';
import { Card } from '../Card';

interface Props {
  visible: boolean;
  onClose: () => void;
}

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export const MyCarsModal: FC<Props> = ({ onClose, visible }) => {
  const { colors } = useTheme();

  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(false);

  function closeModal() {
    onClose();
  }

  async function getCars() {
    try {
      setLoading(true);

      const response = await api.get<CarProps[]>('/schedules_byuser');
      const { data } = response;
      setCars(data);

      setLoading(false);
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
    
  }

  useEffect(() => {
    if (visible) {
      getCars();
    } else {
      setCars([]);
    }
  }, [visible]);

  return (
    <Modal 
      style={{
        margin: 0,
      }}
      useNativeDriver
      animationInTiming={200}
      animationOutTiming={200}
      isVisible={visible}
      onBackButtonPress={closeModal}
    >
      <Container>
        <Header>
          <CloseButton
            onPress={closeModal}
          >
            <Feather 
              name="x" 
              size={24} 
              color={colors.shape}
            />
          </CloseButton>

          <Title>
            Seus agendamentos, {'\n'}
            estão aqui.
          </Title>

          <SubTitle>
            Conforto, segurança e praticidade
          </SubTitle>
        </Header>


        {loading ? (
          <LoadingContainer>
            <LoadingText>Carregando...</LoadingText>
          </LoadingContainer>
        ) : (
          <>
            <ScheduleDoneContainer>
              <ScheduleDoneText>
                Agendamentos feitos
              </ScheduleDoneText>
              <ScheduleDoneNumber>
                {cars.length}
              </ScheduleDoneNumber>
            </ScheduleDoneContainer>


            <FlatList
              data={cars}
              contentContainerStyle={{
                padding: 16
              }}
              keyExtractor={(item) => String(item.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <CarWrapper key={index}>
                  <Card data={item.car} />
                  <CarFooter>
                    <CarFooterTitle>Período</CarFooterTitle>
                    <CarFooterPeriod>
                      <CarFooterDate>{item.startDate}</CarFooterDate>
                      <Feather 
                        name="arrow-right"
                        size={18}
                        color={colors.title}
                        style={{ marginHorizontal: 8 }}
                      />
                      <CarFooterDate>{item.endDate}</CarFooterDate>
                    </CarFooterPeriod>
                  </CarFooter>
                </CarWrapper>
              )}
            />
          </>
        )}
      </Container>
    </Modal>
  );

}