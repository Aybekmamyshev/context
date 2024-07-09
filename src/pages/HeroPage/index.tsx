import React from 'react';
import Container from "../../component";
import useFetch from "../../hook/useFetch";
import styles from './hero.module.scss'
import {Link} from "react-router-dom";



interface TypeData  {
    id: string,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    image: string,
    created: string
}
const Hero = () => {
    const {error, loading, data} = useFetch<TypeData[]>('http://localhost:3001/characters')
    return (
        <Container>
            <>
                <h2 className={styles.title}> All heroes</h2>

                <div className={styles.wrapper}>
                    {loading && <p>...Loading</p>}
                    {error && <p>Ошибка</p>}
                    {data && !loading &&
                        data?.map((item) => (
                            <Link className={styles.link} to={`${item.id}`}>
                                <div key={item.id} className={styles.card}>
                                    <div>
                                        <img src={item.image} alt=""/>
                                    </div>
                                    <h2>{item.name}</h2>
                                    <h3>{item.status}</h3>
                                    <h4>{item.gender}</h4>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </>
        </Container>
    );
};

export default Hero;