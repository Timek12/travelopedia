import React, { useState } from "react";
import {
  useGetAllDestinationQuery,
} from "../api/destinationApi";
import Destination from "./Destination";
import UpdateDestination from "./UpdateDestination";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();
  const [updateModeId, setUpdateModeId] = useState(false);

  const enterUpdateMode = (id) => {
    setUpdateModeId(id);
  };

  const exitUpdateMode = () => {
    setUpdateModeId(null);
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      if (destination.id === updateModeId) {
        return (
          <UpdateDestination
            destination={destination}
            key={destination.id}
            exitUpdateMode={exitUpdateMode}
          />
        );
      } else {
        return (
          <Destination
            destination={destination}
            key={destination.id}
            enterUpdateMode={enterUpdateMode}
          />
        );
      }
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
