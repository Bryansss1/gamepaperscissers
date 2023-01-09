import React from 'react';
import { useSelector } from 'react-redux';
import styles from "../styles/Layouts.module.scss"
const Layoutcounter = () => {

    const counter1=useSelector(state=>state.countSlice)

    return (
        <section>
            
        </section>
    );
};

export default Layoutcounter;