import React from 'react';
import Container from "../../component";
import useFetch from "../../hook/useFetch";
import {useSearchParams} from "react-router-dom";


interface TypeLocation {
    id: string,
    name: string,
    type: string,
    dimension: string,
    created: string
}

const Location = () => {
    const {data} = useFetch<TypeLocation[]>('http://localhost:3001/locations');
    const [search, setSearchParams] = useSearchParams({name: ''});
    const nameQuery = search.get('name');


    return (
        <Container>
            <>
                <h2 style={{textAlign: 'center'}}>All titles</h2>
                <input type="text" value={nameQuery!} onChange={(e) => setSearchParams({name: e.target.value})}
                       name={'search'}/>

                <div>
                    {

                        data?.filter((filtered) => filtered.name.toUpperCase().includes(nameQuery!.toUpperCase())).map((item) => (
                            <h2>{item.name}</h2>
                        ))
                    }
                </div>
            </>
        </Container>
    );
};

export default Location;