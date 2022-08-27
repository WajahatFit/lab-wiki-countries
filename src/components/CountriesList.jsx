import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CountriesList() {
  const [data, setData] = useState(null)

useEffect(()=> {
  const getData = async() => {
    try {
      const response = await axios.get('http://ih-countries-api.herokuapp.com/countries');
      console.log(response.data)
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  } 
  getData()
},[])
  
  return (
    <div>
    {data && data.map(country => <h2 key={country.name.common}><Link to={`/${country.alpha3Code}`} >{country.name.common}</Link></h2>)}
    {!data && <p>Loading---</p>}
      
    </div>
  )
  
}
