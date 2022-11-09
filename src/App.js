import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const App = () => {
  const [data, setdata] = useState([]);
  const apidata = async () => {
    let apiurl = await fetch(`https://data.covid19india.org/data.json`);
    let cast = await apiurl.json();
    setdata(cast.statewise);
    console.log(cast.statewise);
  };
  useEffect(() => {
    apidata();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="card text-center">
          <div className="card-header font-weight-bold">Live Covid Data</div>
          <div className="card-body">
            <table className="table table-bordered border-success">
              <thead>
                <tr>
                  <th scope="col">Active</th>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Deaths</th>
                  <th scope="col">Deltaconfirmed</th>
                  <th scope="col">Deltadeaths</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val,index) => {
                  return (
                    <>
                      <tr key={index}>
                        <th scope="row">{val.active}</th>
                        <th scope="row">{val.confirmed}</th>
                        <th scope="row">{val.deaths}</th>
                        <th scope="row">{val.deltaconfirmed}</th>
                        <th scope="row">{val.deltadeaths}</th>
                        
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <table className="table table-bordered border-success">
              <thead>
                <tr>
                  <th scope="col">Deltarecovered</th>
                  <th scope="col">Lastupdatedtime</th>
                  <th scope="col">Migratedother</th>
                  <th scope="col">recovered</th>
                  <th scope="col">State</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val,index) => {
                  return (
                    <>
                      <tr key={index}>
                        <th scope="row">{val.deltarecovered}</th>
                        <th scope="row">{val.lastupdatedtime}</th>
                        <th scope="row">{val.migratedother}</th>
                        <th scope="row">{val.recovered}</th>
                        <th scope="row">{val.state}</th>
                       
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    </>
  );
};

export default App;
