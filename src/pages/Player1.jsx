import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layoutcounter from '../components/Layoutcounter';
import styles from "../styles/Papergameoneplayer.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import tijeras from "/rock-paper-scissors-master/images/icon-scissors.svg"
import roca from "/rock-paper-scissors-master/images/icon-rock.svg"
import papel from "/rock-paper-scissors-master/images/icon-paper.svg"
import triangule from "/rock-paper-scissors-master/images/bg-triangle.svg"
import { increment } from '../store/slices/count.slice';
import Navbasic from '../components/Navbasic';

const Player1 = () => {
const [fichaSelecccionada1,setFicha1]=useState("")
const [fichaSelecccionada2,setFicha2]=useState("")
const [player1,setPlayer1]=useState(true)
const [imgficha1,setImgficha1]=useState("")
const [imgficha2,setImgficha2]=useState("")
const [messageFinal,setMessage]=useState("")
const [counter2,setCounter]=useState(0)
const counter1=useSelector(state=>state.countSlice)
const dispatch=useDispatch()
const Jugada=Math.floor(Math.random()*3)
const jugadasRobot=["tijeras","roca","papel"]

const resetPlay=()=>{
    setPlayer1(true)
    setFicha1("")
    setFicha2("")
    setImgficha2("")
}

const incrementplayer=()=>dispatch(increment())
const robotwin=()=>setCounter(counter2+2)

useEffect(()=>{
setFicha2(jugadasRobot[Jugada])
switch (fichaSelecccionada2){
    case"tijeras":
    setImgficha2(tijeras)
    break
    case "papel":
    setImgficha2(papel)
    break
    case "roca":
    setImgficha2(roca)
    break
}
},[fichaSelecccionada2])

useEffect(()=>{
    if(fichaSelecccionada1=="tijeras" && fichaSelecccionada2 == "roca"){
        robotwin()
        setMessage("Win Robot XD")
    }
    if(fichaSelecccionada2=="tijeras" && fichaSelecccionada1 == "papel"){
        robotwin()
        setMessage("Win Robot XD")
    }
    if(fichaSelecccionada2=="tijeras" && fichaSelecccionada1 == "roca"){
        incrementplayer()
        setMessage("Win player 1")
    };
    if(fichaSelecccionada1=="tijeras" && fichaSelecccionada2 == "papel"){
        incrementplayer()
        setMessage("Win player 1")
    }
    if(fichaSelecccionada1=="tijeras" && fichaSelecccionada2 == "tijeras"){
        setMessage("DRAW")
    }
    if(fichaSelecccionada1=="papel" && fichaSelecccionada2 == "papel"){
        setMessage("DRAW")
    }
    if(fichaSelecccionada1=="papel" && fichaSelecccionada2 == "roca"){
        incrementplayer()
        setMessage("Win player 1")
    }
    if(fichaSelecccionada2=="papel" && fichaSelecccionada1 == "roca"){
        robotwin()
        setMessage("Win Robot XD")
    }
    if(fichaSelecccionada1=="papel" && fichaSelecccionada2 == "tijeras"){
        robotwin()
        setMessage("Win Robot XD")
    }
    if(fichaSelecccionada2=="papel" && fichaSelecccionada1 == "tijeras"){
        incrementplayer()
        setMessage("Win player 1")
    }
    if(fichaSelecccionada1=="roca" && fichaSelecccionada2 == "roca"){
        setMessage("DRAW")
    }
    if(fichaSelecccionada1=="roca" && fichaSelecccionada2 == "tijeras"){
        incrementplayer()
        setMessage("Win player 1")
    }
    if(fichaSelecccionada2=="roca" && fichaSelecccionada1 == "tijeras"){
        robotwin()
        setMessage("Win Robot XD")
    }
    if(fichaSelecccionada1=="roca" && fichaSelecccionada2 == "papel"){
        robotwin()
        setMessage("Win Robot XD")
    }
    if(fichaSelecccionada2=="roca" && fichaSelecccionada1 == "papel"){
        incrementplayer()
        setMessage("Win player 1")
    }
},[fichaSelecccionada1])

console.log(fichaSelecccionada2)
console.log(imgficha2)
    return (
        <section className={styles.oneplayerpage}>
            <Navbasic/>
            <Layoutcounter counter2={counter2} counter1={counter1}/>
            <article className={styles.placegame}>
            
            {fichaSelecccionada1!==""?"":(
                <>
                {player1===true?<h3 style={{color:"red"}} className={styles.playertext}>Player 1</h3>:""}
                </>
             )}   

            <img  className={styles.back} src={triangule} alt="background" />
            {fichaSelecccionada1 ==="" ?(
                
                <div className={styles.dadicon}>
                <img onClick={()=>{{player1===true?(setPlayer1(!player1),setFicha1("tijeras"),setImgficha1(tijeras)):""}}} className={styles.iconos1} src={tijeras} alt="tijeras" />
                <img onClick={()=>{{player1===true?(setPlayer1(!player1),setFicha1("roca"),setImgficha1(roca)):""}}} className={styles.iconos2} src={roca} alt="rock" />
                <img onClick={()=>{{player1===true?(setPlayer1(!player1),setFicha1("papel"),setImgficha1(papel)):""}}} className={styles.iconos3} src={papel} alt="papel" />
                </div>
            ):(
                <article className={styles.messageWin}>
                <h4 style={{color:`${messageFinal=="Win player 1"?"red":messageFinal=="Win Robot XD"?"blue":""}`}}>{messageFinal}</h4>
                <div>
                <img style={{boxShadow:`${messageFinal=="Win player 1"?"2px 2px 20px 2px red":""}`}} className={styles.zzz1} src={imgficha1} alt='player1ficha'/>
                <img style={{boxShadow:`${messageFinal==="Win Robot XD"? "2px 2px 20px 2px blue":""}`}} className={styles.zzz2} src={imgficha2} alt='player2ficha'/>
                </div>
                <button onClick={resetPlay}>Play again</button>
                </article>
            )}
            

            </article>

        </section>
    );
};

export default Player1;