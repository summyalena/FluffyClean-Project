import { configureStore } from '@reduxjs/toolkit';
import machinesReducer from './reducers/machinesReducer';

const store = configureStore({
  reducer: {
    machines: machinesReducer,
  },
});

export default store;

// [
//   {
//     'imachine id': 1,
//     time: {
//       '10:00 - 11:00am': inactve,
//       '11:00 - 12:00pm': active,
//       '12:00 - 1:00pm': active,
//       '1:00 - 2:00pm': active,
//     },
//   },

//   {
//     'imachine id': 2,
//     time: {
//       '10:00 - 11:00am': inactve,
//       '11:00 - 12:00pm': active,
//       '12:00 - 1:00pm': active,
//       '1:00 - 2:00pm': active,
//     },
//   },

//   {
//     'imachine id': 3,
//     time: {
//       '10:00 - 11:00am': inactve,
//       '11:00 - 12:00pm': active,
//       '12:00 - 1:00pm': active,
//       '1:00 - 2:00pm': active,
//     },
//   },
// ];
