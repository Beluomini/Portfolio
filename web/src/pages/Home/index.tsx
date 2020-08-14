import React from 'react';

import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import jogadorImg from '../../assets/jogador.jpg';
import edicaoGif from '../../assets/mestreEditionsGif.gif';

function Home(){
    return (
        <div className="home-content">

            <Header selected="home" />

            <div className="home-main">

                <h1>HISTORY</h1>
                <div className="home-block">
                    <div className="home-block-image">
                        <img id="jogador-img" src={jogadorImg} alt="gamer" />
                    </div>
                    <div className="home-block-text">
                        <p> 
                            It all started in 2005 when I got to know the game King}
                            Pin Bowling, it was one of the few video games of the
                            time and ran on the home computer, a windows xp.{<br/>}{<br/>}
                            I FELL GOOD!!!
                        </p>
                    </div>
                </div>
                <div className="home-block-2">
                    <div className="home-block-text">
                        <p> 
                            At 8 years old I was already a professional in video editing
                             and realistic cuts and transitions hehe :)
                        </p>
                    </div>
                    <div className="home-block-image">
                        <img id="edicao-gif" src={edicaoGif} alt="editor" />
                    </div>
                </div>
                

            </div>

            <Footer />

        </div>
    );
}

export default Home;