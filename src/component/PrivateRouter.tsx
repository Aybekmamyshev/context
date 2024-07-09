import React, {useContext} from 'react';
import {CustomContext} from "../hook/Context";
import {Navigate} from "react-router-dom";

const PrivateRouter = ({children}: any) => {

    const user = useContext(CustomContext);

    if (user?.user === null) {
        return <Navigate to={'/register'}/>
    }

    return children
};

export default PrivateRouter;