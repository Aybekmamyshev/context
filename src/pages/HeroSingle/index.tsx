import React from 'react';
import {useParams} from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Container from "../../component";


interface TypeFetch {
    id: string,
    name: string,
    air_date: string,
    episode: string,
    created: string
}
const HeroSingle = () => {
    const {id} = useParams()
    const {data: item} = useFetch<TypeFetch>(`http://localhost:3001/episodes/${id}`)
    return (
        <Container>
            <div>
                {
                    <h2>{item?.name}</h2>
                }
            </div>
        </Container>
    );
};

export default HeroSingle;