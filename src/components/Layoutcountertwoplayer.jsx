import React from 'react';
import { useSelector } from 'react-redux';
import styles from "../styles/Layouts.module.scss"
const Layoutcountertwoplayer = ({counter2,counter3}) => {

    //const counter2=useSelector(state=>state.counttwoplayerSlice)
    //const counter3=useSelector(state=>state.counttwoplayer2Slice)

    return (
        <section className={styles.layout_score}>
            <div style={{border:"10px solid red"}} className={styles.players}>
                <h2>SCORE</h2>
                <p>player 1</p>
                <p>= {counter2} =</p>
            </div>

            <div className={styles.titlelayo}>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
            </div>

            <div style={{border:"10px solid blue"}} className={styles.players}>
                <h2>SCORE</h2>
                <p>player 2</p>
                <p>= {counter3} =</p>
                </div>
        </section>
    );
};

export default Layoutcountertwoplayer;