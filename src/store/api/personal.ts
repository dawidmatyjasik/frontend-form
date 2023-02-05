import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ROUTES } from "../../../../common/routes";

export const personalApi = createApi({
  reducerPath: "personalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REST_URL ?? "http://localhost:5000",
  }),
  tagTypes: ["Personal"],
  endpoints: (builder) => ({
    getAllPersonal: builder.query<any, void>({
      query: () => ROUTES.PERSONAL.GET_ALL,
      providesTags: ["Personal"],
    }),
    getPersonal: builder.query<any, string>({
      query: (id) => `${ROUTES.PERSONAL.GET}/${id}`,
      providesTags: ["Personal"],
    }),
    addPersonal: builder.mutation<void, any>({
      query: (personal) => ({
        url: ROUTES.PERSONAL.POST,
        method: "POST",
        body: personal,
      }),
      invalidatesTags: ["Personal"],
    }),
    updatePersonal: builder.mutation<void, any>({
      query: ({ id, ...rest }) => ({
        url: `${ROUTES.PERSONAL.UPDATE}/${id}`,
        method: "UPDATE",
        body: rest,
      }),
      invalidatesTags: ["Personal"],
    }),
    deletePersonal: builder.mutation<void, string>({
      query: (id) => ({
        url: `${ROUTES.PERSONAL.DELETE}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Personal"],
    }),
  }),
});

export const {
  useGetAllPersonalQuery,
  useGetPersonalQuery,
  useAddPersonalMutation,
  useDeletePersonalMutation,
  useUpdatePersonalMutation,
} = personalApi;
