import './App.css';
import { Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import React from 'react';
import countryData from './countries.json'


function App() {

  // const code = countryData.map(country => country.alpha3Code)

  return (

    <div className="App">
    <Navbar />
    <Routes>

    

    <Route path='/' element={<CountriesList data={countryData} />} /> 

    <Route path='/countrydetails' element={<CountryDetails  data={countryData}/>}> 
    <Route path=':countryId' element={<CountryDetails  data={countryData}/>} /> 
    </Route>
    
    

      
    </Routes>
   
      
    </div>
  );
}

export default App;
