import React, { FC } from 'react';

import SpeedSVG from '../../assets/speed.svg';
import AccelerationSVG from '../../assets/acceleration.svg';
import ForceSVG from '../../assets/force.svg';
import GasolineSVG from '../../assets/gasoline.svg';
import EnergySVG from '../../assets/energy.svg';
import HybridSVG from '../../assets/hybrid.svg';
import ExchangeSVG from '../../assets/exchange.svg';
import PeopleSVG from '../../assets/people.svg';

interface Props {
  type: 'speed' | 
        'acceleration' | 
        'turning_diameter' | 
        'electric_motor' | 
        'exchange' |
        'hybrid_motor' |
        'gasoline_motor' |
        'seats' | string;
}

export const AcessoryIcon: FC<Props> = ({ type }) => {

  switch(type) {
    case 'speed':
      return <SpeedSVG />
    case 'acceleration':
      return <AccelerationSVG />
    case 'turning_diameter':
      return <ForceSVG />
    case 'electric_motor':
      return <EnergySVG />
    case 'hybrid_motor':
      return <HybridSVG />
    case 'gasoline_motor':
      return <GasolineSVG />
    case 'exchange':
      return <ExchangeSVG />
    case 'seats':
      return <PeopleSVG />
    default:
      return <></>
  }

}