import React, {useContext} from 'react';
import {CustomContext} from "../../hook/Context";
import {Form, useNavigate} from "react-router-dom";
import styles from './form.module.scss'

const RegisterPage = () => {
    let value = {
        name: '',
        email: '',
        password: ''
    }
    const userAuth = useContext(CustomContext)

    const navigate = useNavigate()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const form2 = new FormData(e.currentTarget)
        const form3 = new FormData(e.currentTarget)
        const user = {
            name: form.get('name'),
            email: form2.get('name'),
            password: form3.get('name')
        }
        if (user) {
            value.name = user.name!.toString()
            value.email = user.email!.toString()
            value.password = user.password!.toString()
        }
        userAuth?.register(value, () => {
            navigate('/')
        })
        console.log(value)
    }


    return (
        <div className={styles.wrapper}>
            <h2 className={styles.h2}>Register</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    <input name={'name'} placeholder={'Name'} className={styles.input} type="text"/>
                </label>
                <label>
                    <input name={'email'} placeholder={'email'} className={styles.input} type="email"/>
                </label>
                <label>
                    <input name={'password'} placeholder={'password'} className={styles.input} type="password"/>
                </label>
                <button  className={styles.btn} type={'submit'}>register</button>
            </form>
        </div>
    );
};

export default RegisterPage;