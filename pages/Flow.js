import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
// import Flo from '../comps/flow/flowNew';
import Table from '../comps/flow/flowOdd';
import Navbar from '../comps/sidenavbar/sidenavbar';
function Flow() {
  return (
    <Provider store={store}>
      <div className="mt-0">
        <Navbar />
        <Table />
      </div>
    </Provider>
  );
}

export default Flow;
