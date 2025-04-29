// import { View } from 'react-native';
// import CarTypeRows from '../CarTypeRows';
// import styles from './styles';
// import { TYPES } from '../../assets/data/types';

// const CarTypes = ({ selectedCategory, distance, selectedCar, setSelectedCar }) => {
//   const getPriceRange = () => {
//     switch (selectedCategory) {
//       case 'silver':
//         return [22, 27];
//       case 'gold':
//         return [36, 42];
//       case 'diamond':
//         return [36, 22];
//       case 'platinum':
//         return [36, 42];
//       default:
//         return [];
//     }
//   };

//   const priceRange = getPriceRange();

//   const calculatePrice = (basePrice, distance) => {
//     const perKmCost = 2; // Example cost per km
//     return basePrice + perKmCost * distance;
//   };

//   return (
//     <View>
//       {TYPES.filter((type) => priceRange.includes(type.price)).map((type) => (
//         <CarTypeRows
//           type={{ ...type, price: calculatePrice(type.price, distance) }}
//           key={type.id}
//           isSelected={selectedCar?.id === type.id} // Check if this car is selected
//           onSelect={() => setSelectedCar(type)} // Set the selected car on press
//         />
//       ))}
//     </View>
//   );
// };

// export default CarTypes;

import {View} from 'react-native';
import CarTypeRows from '../CarTypeRows';
import {TYPES} from '../../assets/data/types';

const CarTypes = ({distance, selectedCar, setSelectedCar}) => {
  const calculatePrice = (basePrice, distance) => {
    const perKmCost = 1.76;
    return basePrice + perKmCost * distance;
  };

  return (
    <View>
      {TYPES.map(type => (
        <CarTypeRows
          type={{...type, price: calculatePrice(type.price, distance)}}
          key={type.id}
          isSelected={selectedCar?.id === type.id} // Check if this car is selected
          onSelect={() => setSelectedCar(type)} // Set the selected car on press
        />
      ))}
    </View>
  );
};

export default CarTypes;
