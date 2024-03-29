import { apiSlice } from '@/app/api/apiSlice';

export const dataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    upload: builder.mutation({
      query: (body) => ({
        url: '/upload',
        method: 'POST',
        body,
        formData: true,
      }),
    }),
  }),
});

export const { useUploadMutation } = dataApiSlice;
