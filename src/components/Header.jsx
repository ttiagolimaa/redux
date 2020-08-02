import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import logo from '../assets/logo.svg'
import './Header.css'


export default function Header(){
  const reserveSize = useSelector(state => state.reserve)
  return (
    <header className='container'>
      <Link to='/'>
        <img src={logo} alt="logo do projeto" className='logo'/>
      </Link>
      <Link to='/reservas' className='reservas-header'>
        <div>
          <strong> Minhas Reservas</strong>
          <span>{reserveSize.length} reservas</span>
        </div>
      </Link>
    </header>
  )
}