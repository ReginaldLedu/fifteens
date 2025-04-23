import React from 'react';
import { Link } from 'react-router-dom';
import './intro.scss';
import '../../../App.scss';

export default function Intro() {
  return (
    <>
      <header className="header">
        <h1 className="main__title boldonse-regular">
          Welcome to our fifteen game
        </h1>
        <Link to="/game">
          <button className="button">Start</button>
        </Link>
      </header>
      <section className="box">
        <div className="animated figure1">1</div>
        <div className="animated figure2">2</div>
        <div className="animated figure3">3</div>
        <div className="animated figure4">4</div>
        <div className="animated figure5">5</div>
        <div className="animated figure6">6</div>
        <div className="animated figure7">7</div>
        <div className="animated figure8">8</div>
        <div className="animated figure9">9</div>
        <div className="animated figure10">10</div>
        <div className="animated figure11">11</div>
        <div className="animated figure12">12</div>
        <div className="animated figure13">13</div>
        <div className="animated figure14">14</div>
        <div className="animated figure15">15</div>
        <div className="animated figure16"></div>
      </section>
    </>
  );
}
