import React from "react";
import "../App.css";

const Character = ({ data }) => {
  return (
    <div className="container-fluid">
      {data.map((people, i) => {
        //map thru data to render star wars characters
        return (
          <div className="d-inline-flex">
            <div className="card p-3 m-2" key={i} style={{ width: "18rem" }}>
              <img
                className="card-img-top w-auto"
                src="https://assets1.ignimgs.com/2019/12/01/twitter-in-stream-wide-baby-yoda-soup-mandalorian-1575172376899_160w.jpg?width=1280"
                alt="baby yoda"
              />
              {/* stock image since api didn't have images */}
              <div className="card-body">
                <h5 className="card-title">{people.name}</h5>
                <p className="card-text">Gender: {people.gender}</p>
                <p>Height: {people.height}</p>
                <p>Mass: {people.mass}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
