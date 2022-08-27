import React,{useEffect, useState} from 'react'
import {  useParams } from 'react-router-dom';
import axios from 'axios';


export default function CountryDetails() {
    const { countryId }  = useParams();
    const [country, setCountry] = useState(null)

    useEffect(()=>{
        const getData = async() => {
            try {
                const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries`);
                    console.log(response)
                    setCountry(response)
                } catch (error) {
                    console.log(error)
                }
        }
        getData();
        
    },[countryId])
    
  return (

    <div>
    {!country && <p>loading..</p>}
    <p>{country && country.map(country => (
        <p>{country.name.common}</p>
    ))}</p>
    </div>
  )
}
