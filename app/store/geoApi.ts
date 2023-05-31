import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import type { LocationItem } from "@/types/location";

export const geoApi = createApi({
  reducerPath: 'geoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/geo/1.0/direct?q=' }),
  endpoints: (builder) => ({
    getLatLonByName: builder.query({
      query: (cityName) => `${cityName}&limit=5&appid=11a6eb0ebd4215616fbcbcdf8a3e94a7`,
    }),
  }),
})

export const {useGetLatLonByName} = geoApi