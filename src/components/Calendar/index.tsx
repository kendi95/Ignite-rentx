import React, { FC } from 'react';
import { 
  Calendar as CustomCalendar,
  DateCallbackHandler
} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

export interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  }
}

export interface DayProps {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

interface Props {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
}

export const Calendar: FC<Props> = ({ markedDates, onDayPress }) => {
  const { colors, fonts } = useTheme();

  return (
    <CustomCalendar 
      renderArrow={
        (direction) => 
          <Feather 
            name={`chevron-${direction}`} 
            size={24} 
            color={colors.text}
          />
      }
      headerStyle={{
        marginTop: 16,
        borderBottomColor: colors.text_detail,
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textDayFontFamily: fonts.inter400,
        textDayHeaderFontFamily: fonts.inter500,
        textDayHeaderFontSize: 10,
        arrowStyle: {
          marginHorizontal: -16
        },
        textMonthFontSize: 20,
        textMonthFontFamily: fonts.archivo600,
        monthTextColor: colors.title,
      }}
      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );

}