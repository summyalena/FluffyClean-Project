import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { machineStatusHandler } from '../../store/reducers/machinesReducer';
import styles from './flowOdd.module.css';

function FlowOdd() {
    const machines = useSelector(state => state.machines);
    const dispatch = useDispatch();
  const reservationHandler = (e) => {
    const index = +e.target.id;
    dispatch(machineStatusHandler(index));
  };

  const router = useRouter();
  const handleSubmit = () => {
    router.push('/invoice');
  };

  return (
    <div className="w-100 h-100 left-20  bg-white-50 ">
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th>Time</th>
            <th>Status</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {machines.map((machine) => (
            <tr key={machine.id}>
              <td>{machine.time}</td>
              <td>
                {!machine.status ? (
                  <span style={{ backgroundColor: 'blue', border: '5px' }}>
                    Active
                  </span>
                ) : (
                  <span style={{ backgroundColor: 'yellow' }}>Non-Active</span>
                )}
              </td>
              <td>{machine.price}</td>
              <td>
                <span
                  style={{ backgroundColor: 'ButtonFace' }}
                  onClick={reservationHandler}
                  id={machine.id}
                  type="button"
                  disabled={machine.status ? true : false}
                >
                  ADD
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        {/* <button
          style={{ backgroundColor: 'ButtonFace' }}
          onClick={handleSubmit}
        >
          Submit
        </button> */}
      </table>
    </div>
  );
}

export default FlowOdd;
