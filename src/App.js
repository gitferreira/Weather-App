import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";


function App() {
  const [data, setData] = useState({
    city: "",
    country: "",
  });
  const [search, setSearch] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false)
  const { city, country } = data;

  useEffect(() => {
    const consumeAPI = async () => {
      if (search) {
        const appId = "09f890ab668dd1a383226b6859ad8175";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const answer = await fetch(url);
        const result = await answer.json();

        setWeatherData(result);
        setSearch(false);

        //Check errors
        if(weatherData.cod === "404"){
          setError(true)
        } else {
          setError(false)
        }
       
      }
    };
    consumeAPI();
    //Executes everytime that there is a change in search
  }, [search]);

  let component;
  if( error ) {
    component = <Error message = "Results not found" />
  } else {
      component = <Weather weatherData={weatherData} />
  }

  return (
    <Fragment>
      <Header title="Weather App " />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form data={data} setData={setData} setSearch={setSearch} />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
