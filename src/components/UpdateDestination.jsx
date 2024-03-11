import React, { useState } from "react";
import {
  useDeleteDestinationMutation,
  useUpdateDestinationMutation,
} from "../api/destinationApi";

function Destination({ destination, exitUpdateMode }) {
  const [deleteDestination] = useDeleteDestinationMutation();
  const [updateDestination] = useUpdateDestinationMutation();

  const [newCity, setNewCity] = useState(() => {
    return destination.city;
  });
  const [newCountry, setNewCountry] = useState(() => {
    return destination.country;
  });

  const handleUpdate = () => {
    updateDestination({
      ...destination,
      city: newCity,
      country: newCountry,
    });
    setNewCity("");
    setNewCountry("");
    exitUpdateMode();
  };

  return (
    <div
      className="row py-1"
      key={destination.id}
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      <div className="col-2 offset-1">
        <input
          className=" form-control"
          placeholder="City..."
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          
        ></input>
      </div>
      <div className="col-2">
        <input
          className="form-control"
          placeholder="Country..."
          value={newCountry}
          onChange={(e) => setNewCountry(e.target.value)}
        ></input>
      </div>

      <div className="col-1 text-warning">{destination.daysNeeded} days</div>
      <div className="col-2">
        <button
          className="btn btn-warning form-control"
          onClick={() => exitUpdateMode()}
        >
          Cancel
        </button>
      </div>
      <div className="col-2">
        <button
          className="btn btn-primary form-control"
          onClick={() => handleUpdate()}
        >
          Update
        </button>
      </div>
      <div className="col-2">
        <button
          className="btn btn-danger form-control"
          onClick={() => deleteDestination(destination.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination;
