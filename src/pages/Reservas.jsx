import React from 'react'
import './Reservas.css'
import { MdDelete,MdAddCircle,MdRemoveCircle } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { removeReserve , updateAmountReserve} from '../store/modules/actions'

export default function Reservas() {
  const dispatch = useDispatch()
  const reserves = useSelector(state => state.reserve)
  function handleDelete(id) {
    dispatch(removeReserve(id))
  }
  function incrementAmount(trip){
    dispatch(updateAmountReserve(trip.id,trip.amount+1))
    
  }
  function decrementAmount(trip){
    dispatch(updateAmountReserve(trip.id,trip.amount-1))
  }

  return (
    <div>
      <h1 className='title'>Voce solicitou {reserves.length} {reserves.length > 1 ? 'Reservas' : 'Reserva'}</h1>
      {reserves.map(reserve => (
        <div className="reservas" key={reserve.id}>
          <img
            src={reserve.image}
            alt={reserve.title}
          />
          <strong>{reserve.title}</strong>
          <div id='amount'>
            <button onClick={()=>decrementAmount(reserve)}>
              <MdRemoveCircle size={25}/>
            </button>
            <input type='text' readOnly value={reserve.amount}></input>
            <button onClick={()=>incrementAmount(reserve)}>
              <MdAddCircle size={25}/>
            </button>
          </div>
          <button type='button' onClick={() => handleDelete(reserve.id)}>
            <MdDelete size={20} color='#191919' />
          </button>
        </div>

      ))}
      <footer>
        <button type='button'>Solicitar Reservas</button>
      </footer>
    </div>
  )
}