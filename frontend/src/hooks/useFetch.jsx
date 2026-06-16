import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      setState({ data: null, isLoading: true, hasError: null });
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Ha habido un error ${res.status} ${res}`);
        }
        const dataJson = await res.json();
        setState({ data: dataJson, isLoading: false, hasError: null });
      } catch (err) {
        setState({ data: null, isLoading: false, hasError: err.message });
      }
    };

    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
