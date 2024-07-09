import React, {ReactElement, ReactNode} from 'react';
import styles from './container.module.scss'

type TypeProp = {
    children: React.ReactElement;
    className?: string
}
const Container = ({children}: TypeProp) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Container;