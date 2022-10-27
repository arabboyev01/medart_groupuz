import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const datesApi = createApi({
    reducerPath: 'datesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://mamuriyat.medartgroup.uz/api/'}),
    endpoints: (build) => ({
        getDates: build.query({
            query: (limit = '') => `/operations?${limit && `_limit=${limit}`}`
        }),
        getData: build.query({
            query: (name) => `${name}`
        }),
        getSingle: build.query({
            query: (id) => `${id}`
        }),
        postContact: build.mutation({
            query: (body) => ({
                url: 'contuct-us',
                method: 'POST',
                body
            })
        }),
        postOrder: build.mutation({
            query: (body) => ({
                url: 'appointment',
                method: 'POST',
                body,
            })
        })
    })
})

export const {
    useGetDatesQuery,
    useGetDateQuery,
    useGetServiceQuery,
    useGetDataQuery,
    useGetSingleQuery,
    usePostContactMutation,
    usePostOrderMutation
} = datesApi;