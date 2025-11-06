import {useState, useEffect} from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

function useFetch(endpoint) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = BASE_URL + endpoint;

        (async () => {

            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [endpoint]);

    return { data, isLoading, error };
}

export default useFetch;