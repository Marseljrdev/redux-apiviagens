import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { addReserveSuccess, updateReserveSuccess } from './actions';
import api from '../../../services/api'; 
//import history from '../../../services/history';
import { toast } from 'react-toastify';


function* addToReserve({id}){

  const tripExists = yield select(
      state => state.reserve.find(trip => trip.id === id)
  );



  const myStock = yield call(api.get, `/stock/${id}`);

  //console.log(myStock.data.amount);

  const stockAmount = myStock.data.amount;

  const currentAmount = tripExists ? tripExists.amount : 0;

  const amount = currentAmount + 1;

  if(amount > stockAmount){
      toast.error('Quantidade maxima atingida.');
      return;
  }

  

  if(tripExists){

    //const amount = tripExists.amount + 1;

    yield put(updateReserveSuccess(id, amount));


  }else{

    const response = yield call(api.get, `trips/${id}`);


    const result = {
        ...response.data,
        amount: 1,
    };

    //put metodo para disparar uma action no redux-saga
    yield put(addReserveSuccess(result));

    //history.push('/reservas');

  }


}


function* updateAmount({id, amount}){
    if(amount <= 0) return;

    const myStock = yield call(api.get, `/stock/${id}`);

    const amountStock = myStock.data.amount;

    if(amount > amountStock){
        alert('Quantidade maxima atingida.');
        return;
    }

    yield put(updateReserveSuccess(id, amount))

}


export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount)
]);