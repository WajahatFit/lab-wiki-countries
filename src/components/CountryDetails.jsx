import React,{useEffect, useState} from 'react'
import { Outlet, useParams } from 'react-router-dom'
import axios from 'axios';


export default function CountryDetails({data}) {
    const { countryId }  = useParams();
    const [country, setCountry] = useState(null)

    useEffect(()=>{
        const getData = async(countryId) => {
            try {
                const response = await axios.get('http://ih-countries-api.herokuapp.com/countries') 
                console.log(response)
                setCountry(response)
            } catch (error) {
                console.log(error)
            }
            
        }
        
    },[countryId])
    
  return (

    <div>
    <p>{country}</p>

    <Outlet />
    </div>
  )
}
