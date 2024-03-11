import React from "react";
import {
  useGetAllDestinationQuery,
  useDeleteDestinationMutation,
} from "../api/destinationApi";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();
  const [deleteDestination, results] = useDeleteDestinationMutation();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      return (
        <article key={destination.id}>
          <div className="text-center text-info p-2">
            <div>
              {destination.city}, {destination.country} -{" "}
              {destination.daysNeeded} days
            </div>
            <button
              className="btn btn-danger form-control"
              onClick={() => deleteDestination(destination.id)}
            >
              Delete
            </button>
          </div>
        </article>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
