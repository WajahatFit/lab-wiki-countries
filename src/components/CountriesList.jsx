import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesList({data}) {
  
  return (
    <div>
        {data.map(country => <h2 key={country.name.common}><Link to={`/${country.alpha3Code}`} >{country.name.common}</Link></h2>)}
    </div>
  )
  
}
