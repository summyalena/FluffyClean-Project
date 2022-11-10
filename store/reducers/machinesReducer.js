import { createSlice } from '@reduxjs/toolkit';
import machines from '../../comps/machines1';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_MACHINES = 'machines/fetchMachines';
const initialState = machines;
const baseApiUrl =
  'https://lena-fluffy-clean-default-rtdb.firebaseio.com/-NG74Zyv8XBzas2lgeRv.json';

const fetchMachines = createAsyncThunk(FETCH_MACHINES, async () => {
  const response = await fetch(baseApiUrl);
  const machines = await response.json();
  console.log(machines);
  // return machines;
});

const machinesSlice = createSlice({
  name: 'machines',
  initialState,
  reducers: {
    machineStatusHandler(state, action) {
      const index = action.payload;
      state[index - 1].status = true;
    },
  },
  extraReducers: {
    [fetchMachines.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

// export const { machineStatusHandler } = machinesSlice.actions;

export const { machineStatusHandler } = machinesSlice.actions;
export { fetchMachines };
export default machinesSlice.reducer;
