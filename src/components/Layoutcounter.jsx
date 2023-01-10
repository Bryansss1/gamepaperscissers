import React from 'react';
import { useSelector } from 'react-redux';
import styles from "../styles/Layouts.module.scss"
const Layoutcounter = ({counter1,counter2}) => {


    return (
        
            <section className={styles.layout_score}>
            <div style={{border:"10px solid red"}} className={styles.players}>
                <h2>SCORE</h2>
                <p>ROBOT XD</p>
                <p>= {counter2} =</p>
            </div>

            <div className={styles.titlelayo}>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
            </div>

            <div style={{border:"10px solid blue"}} className={styles.players}>
                <h2>SCORE</h2>
                <p>player</p>
                <p>= {counter1} =</p>
                </div>
        </section>
       
    );
};

export default Layoutcounter;