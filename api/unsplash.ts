import { createApi } from 'unsplash-js';

export const unsplash = createApi({
  accessKey: process.env.UNSPLASH_KEY ? process.env.UNSPLASH_KEY : '',
});
