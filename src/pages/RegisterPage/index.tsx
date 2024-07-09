import React, {useContext} from 'react';
import {CustomContext} from "../../hook/Context";
import {Form} from "react-router-dom";

const RegisterPage = () => {
    const  user  = useContext(CustomContext)
    return (
        <form>
            <label>
                <input type="text"/>
            </label>
            <label>
                <input type="text"/>
            </label>
            <label>
                <input type="password"/>
            </label>
        </form>
    );
};

export default RegisterPage;