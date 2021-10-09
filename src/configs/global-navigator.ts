import '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Home: string;
      CarDetails: string;
      Scheduling: string;
      SchedulingDetail: string;
      SchedulingComplete: string;
      MyCars: string;
    }
  } 
}