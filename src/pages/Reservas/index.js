import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import { toast } from "react-toastify";
import { removeReserve, updateReserveRequest } from '../../store/modules/reserve/actions';

import './style.css';


export default function Reservas(){

    const dispatch = useDispatch();
    const reserves = useSelector(state => state.reserve);


    function handleRemove(id){
        dispatch(removeReserve(id));
        toast.warning('Reserva excluida');
    }


    function decrementAomount(trip){
        dispatch(updateReserveRequest(trip.id, trip.amount - 1));
    }

    function incrementAmount(trip){
        dispatch(updateReserveRequest(trip.id, trip.amount + 1));
    }


    return(
        <div>
            <h1 className="title">Voce solicitou {reserves.length} reserva</h1>


            {reserves.map(reserve => (

                <div className="reservas" key={reserve.id} >
                    <img src={reserve.image} alt={reserve.title} />
                    <strong> {reserve.title} </strong>
                        <div className="button" >
                        <button type="button" onClick={() => decrementAomount(reserve)} >
                        <MdRemoveCircle size={20} />
                        </button>
                        <input id="reservas" readOnly value={reserve.amount}/> 
                        <button type="button" onClick={() => incrementAmount(reserve)} >
                        <MdAddCircle size={20} />
                        </button>
                        </div>
                    <button type="button" onClick={() => handleRemove(reserve.id)} >
                        <MdDelete size={20} />
                    </button>
                </div>

            ))}



            <footer>
                <button type="button" >
                    Solicitar reserva
                </button>
            </footer>

        </div>
    );
}