import React, {useEffect, useState} from 'react';



interface TypeFetch<T>  {
    data: T | undefined,
    loading: boolean,
    error: string | null
}

 function useFetch<T>(url: string) : TypeFetch<T> {

    const [data, setData] = useState<T>()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    const fetchData = async () => {

        try {
            await fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource')
                    }

                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setError(null)
                    setLoading(false)
                })
        } catch (err: any) {
            setLoading(false)
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return {data , error, loading}
};

export default useFetch;