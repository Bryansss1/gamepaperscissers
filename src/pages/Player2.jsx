import React, { useEffect, useState } from 'react';
import Layoutcountertwoplayer from '../components/Layoutcountertwoplayer';
import styles from "../styles/Papergame.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import tijeras from "/rock-paper-scissors-master/images/icon-scissors.svg"
import roca from "/rock-paper-scissors-master/images/icon-rock.svg"
import papel from "/rock-paper-scissors-master/images/icon-paper.svg"
import triangule from "/rock-paper-scissors-master/images/bg-triangle.svg"
import { increment2 } from '../store/slices/counttwoplayer.slice';
import {increment3} from "../store/slices/counttwoplayer2.slice"
import styles2 from "../styles/Layouts.module.scss"


const Player2 = () => {
const dispatch=useDispatch()
const counter2=useSelector(state=>state.counttwoplayerSlice)
const counter3=useSelector(state=>state.counttwoplayer2Slice)

const [player1,setPlayer1]=useState(true)
const [player2,setPlayer2]=useState(false)

const [fichaSelecccionada1,setFicha1]=useState("")
const [fichaSelecccionada2,setFicha2]=useState("")

const [imgficha1,setImgficha1]=useState("")
const [imgficha2,setImgficha2]=useState("")

const [messageFinal,setMessage]=useState("")
const incrementplayer2= ()=> dispatch(increment3())
const incrementplayer1=()=>dispatch(increment2())

useEffect(()=>{
    if(fichaSelecccionada1=="tijeras" && fichaSelecccionada2 == "roca"){
        dispatch(increment3())
        setMessage("Win Player 2")
    }
    if(fichaSelecccionada2=="tijeras" && fichaSelecccionada1 == "papel"){
        incrementplayer2()
        setMessage("Win Player 2")
    }
    if(fichaSelecccionada2=="tijeras" && fichaSelecccionada1 == "roca"){
        incrementplayer1()
        setMessage("Win Player 1")
    };
    if(fichaSelecccionada1=="tijeras" && fichaSelecccionada2 == "papel"){
        incrementplayer1()
        setMessage("Win Player 1")
    }
    if(fichaSelecccionada1=="tijeras" && fichaSelecccionada2 == "tijeras"){
        setMessage("DRAW")
    }
    if(fichaSelecccionada1=="papel" && fichaSelecccionada2 == "papel"){
        setMessage("DRAW")
    }
    if(fichaSelecccionada1=="papel" && fichaSelecccionada2 == "roca"){
        incrementplayer1()
        setMessage("Win Player 1")
    }
    if(fichaSelecccionada2=="papel" && fichaSelecccionada1 == "roca"){
        incrementplayer2()
        setMessage("Win Player 2")
    }
    if(fichaSelecccionada1=="papel" && fichaSelecccionada2 == "tijeras"){
        incrementplayer2()
        setMessage("Win Player 2")
    }
    if(fichaSelecccionada2=="papel" && fichaSelecccionada1 == "tijeras"){
        incrementplayer1()
        setMessage("Win Player 1")
    }
    if(fichaSelecccionada1=="roca" && fichaSelecccionada2 == "roca"){
        setMessage("DRAW")
    }
    if(fichaSelecccionada1=="roca" && fichaSelecccionada2 == "tijeras"){
        incrementplayer1()
        setMessage("Win player 1")
    }
    if(fichaSelecccionada2=="roca" && fichaSelecccionada1 == "tijeras"){
        incrementplayer2()
        setMessage("Win player 2")
    }
    if(fichaSelecccionada1=="roca" && fichaSelecccionada2 == "papel"){
        incrementplayer2()
        setMessage("Win player 2")
    }
    if(fichaSelecccionada2=="roca" && fichaSelecccionada1 == "papel"){
        incrementplayer1()
        setMessage("Win player 1")
    }
},[fichaSelecccionada2])


const resetPlay=()=>{
    setFicha2("")
    setFicha1("")
}


    return (
        <section className={styles.twoplayerpage}>
            <Layoutcountertwoplayer counter2={counter2} counter3={counter3}/>
            <article className={styles.placegame}>
             {fichaSelecccionada2!==""?"":(
                <>
                {player1===true?<h3 style={{color:"red"}} className={styles.playertext}>Player 1</h3>:""}
                {player2===true?<h3 style={{color:"blue"}} className={styles.playertext}>Player 2</h3>:""}
                </>
             )}   
            
            
            <img style={{marginTop:`${fichaSelecccionada2!==""?"6.5rem":""}`}} className={styles.back} src={triangule} alt="background" />
            {fichaSelecccionada2 ==="" ?(
                
                <div className={styles.dadicon}>
                <img onClick={()=>{{player1===true?(setPlayer1(!player1),setFicha1("tijeras"),setPlayer2(!player2),setImgficha1(tijeras)):(setPlayer2(!player2),setPlayer1(!player1),setFicha2("tijeras"),setImgficha2(tijeras))}}} className={styles.iconos1} src={tijeras} alt="tijeras" />
                <img onClick={()=>{{player1===true?(setPlayer1(!player1),setFicha1("roca"),setPlayer2(!player2),setImgficha1(roca)):(setPlayer2(!player2),setPlayer1(!player1),setFicha2("roca"),setImgficha2(roca))}}} className={styles.iconos2} src={roca} alt="rock" />
                <img onClick={()=>{{player1===true?(setPlayer1(!player1),setFicha1("papel"),setPlayer2(!player2),setImgficha1(papel)):(setPlayer2(!player2),setPlayer1(!player1),setFicha2("papel"),setImgficha2(papel))}}} className={styles.iconos3} src={papel} alt="papel" />
                </div>
            ):(
                <article className={styles.messageWin}>
                <h4 style={{color:`${messageFinal=="Win player 1"?"red":messageFinal=="Win player 2"?"blue":""}`}}>{messageFinal}</h4>
                <div>
                <img className={styles.zzz1} src={imgficha1} alt='player1ficha'/>
                <img className={styles.zzz2} src={imgficha2} alt='player2ficha'/>
                </div>
                <button onClick={resetPlay}>Play again</button>
                </article>
            )}
            

            </article>

        </section>
    );
};

export default Player2;