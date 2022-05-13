import { processEnv } from "@next/env";

const API_KEY = processEnv.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    }

}