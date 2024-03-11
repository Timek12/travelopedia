import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationAPI = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  endpoints: (builder) => ({
    getAllDestination: builder.query({
      query: () => "destination",
    }),
  }),
});

export const { useGetAllDestinationQuery } = destinationAPI;