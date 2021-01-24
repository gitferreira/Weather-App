import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState({
    city: "",
    country: "",
  });

  const [search, setSearch] = useState(false);

  const { city, country } = data;

  useEffect(() => {
    const consumeAPI = async () => {};
    consumeAPI();
    //Executes everytime that there is a change in search
  }, [search]);

  return (
    <Fragment>
      <Header title="Weather App " />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form data={data} setData={setData} setSearch={setSearch} />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
