/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      setState({ ...state, isLoading: true });
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Ha habido un error ${res.status} ${res}`);
        } else {
          const dataJson = await res.json();
          setState({ ...state, data: dataJson, isLoading: false });
        }
      } catch (err) {
        setState({ ...state, isLoading: false, hasError: err });
      }
    };

    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    state,
  };
};
