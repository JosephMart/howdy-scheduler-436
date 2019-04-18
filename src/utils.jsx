import { useEffect, useReducer, useState } from 'react'
import * as axios from 'axios'

export const numberToTime = num => {
  const hour = Math.floor(num);
  const min0 = Math.floor((num - hour) * 60);
  const min1 = Math.ceil((num - hour) * 60);
  const min = (min0 % 5 > min1 % 5) ? min1 : min0;
  return [hour, min];
}

export const numberToTimeAsString = (num) => {
  const [hour, min] = numberToTime(num);
  const minStr = `${min}`.padStart(2, "0");

  if (hour > 12) {
    return `${hour - 12}:${minStr} PM`;
  }

  return `${hour}:${minStr} AM`;
}

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

// https://www.robinwieruch.de/react-hooks-fetch-data/
export const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios(`http://localhost:3001${url}`);

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.error(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', error.message);
        }
        console.log(error.config);
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    if (url !== null) {
      fetchData();
    }

    return () => {
      didCancel = true;
    };
  }, [url]);

  const doFetch = url => {
    setUrl(url);
  };

  return { ...state, doFetch };
};

export const DAYS = ["M", "T", "W", "R", "F"];
