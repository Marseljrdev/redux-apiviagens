import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addReserveRequest } from '../../store/modules/reserve/actions';
import { MdFlightTakeoff } from 'react-icons/md';
import { toast } from "react-toastify";
import './style.css';
import api from '../../services/api';




export default function Home({ history }){

    const dispatch = useDispatch();
    const [trips, setTrips] = useState([]);


    useEffect(() => {

        async function loadApi(){
            
            const response = await api.get('trips');

            setTrips(response.data);

            //console.log(response.data);


        }

        loadApi();

    }, []);


    function handleAdd(id){

        dispatch(addReserveRequest(id));
        toast.success('Reserva adicionada');

        //history.push('/reservas');
        //alert('clicou');
        //console.log(trip);
    }


    return(
        <div>
            <div className="box" >
                {trips.map(trip => (
                    <li key={trip.id} >
                        <img src={trip.image} alt={trip.title} />
                        <strong>{trip.title}</strong>
                        <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel'} </span>

                        <button type="button" onClick={() => handleAdd(trip.id)} >
                            <div>
                                <MdFlightTakeoff size={18} color="#FFF" />
                            </div>
                            Solicitar reserva
                        </button>

                    </li>
                ))}
            </div>
        </div>
    );
}