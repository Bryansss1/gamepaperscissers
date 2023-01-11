import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate=useNavigate()
    return (
    <>
        <section>
           <h1>WELCOME A PAPER ROCK AND SCISSORS<i className='bx bxs-hand bx-md'></i></h1>
           <div className='initial-buttons'>
        <button className='a' onClick={()=>navigate("/twoplayer")}>Two Player</button>
        <button className='e' onClick={()=>navigate("/oneplayer")}>One Player</button>
          </div>
        </section>
        <div className='footerr'>
          <a href="https://github.com/Bryansss1" target="_blank"><i className='bx bxl-github bx-md'></i></a>
            <p>Bryan sanabria @bryansss1</p>
            <p>2023 enero</p>
        </div>
        </>
    );
};

export default Home;