import React from 'react';
import styled from 'styled-components';
import cupsimage from './img/3-cups.jpg';
import food from './img/food.jpg';
import pouring from './img/dramatic-pouring.jpg';
import americano from './img/drinks/americano.jpg';
import cappucino from './img/drinks/cappucino.jpg';
import chailatte from './img/drinks/chai-latte.jpg';
import espresso from './img/drinks/espresso.jpg';
import frappuccino from './img/drinks/frappuccino.jpg';
import latte from './img/drinks/latte.jpg';
import macchiato from './img/drinks/macchiato.jpg';
import mocha from './img/drinks/mocha.jpg';
import tea from './img/drinks/tea.jpg';
import biscuits from'./img/foods/biscuits.jpg';
import cake from'./img/foods/cake.jpg';
import muffins from'./img/foods/muffins.jpg';
import omlette from'./img/foods/omlette.jpg';
import pie from'./img/foods/pie.jpg';
import quiche from'./img/foods/quiche.jpg';
import sandwich from'./img/foods/sandwich.jpg';
import scones from'./img/foods/scones.jpg';
import wraps from'./img/foods/wraps.jpg';

const Styles = styled.div`
.container-drinks,
.container-food{
    height: 150vh;
    width: 100%;
    z-index:100;
}

h1{
    font-size: 50px;
    text-align:center;
    position:relative;
    
}
.abc{
    width: 100%;
    height: 1300px;
    display:flex;
    margin-left:-160px;
    margin-top: 50px;
    object-fit:cover;
    opacity:0.2;
    position: absolute;
}
.menu-pic{
    display:flex;
    margin-left:auto;
    margin-right:auto;
    object-fit:cover;
    width: 700px;
    height: 1200px;
    margin-top: -1250px;
    margin-bottom: 50px;
    position:relative;
    border-radius:100px;
   
}
.container-menu{
    width: 100%:
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    flex-wrap:wrap;
    margin-top:3.15rem;

}
.container-item{
    width: 300px;
    border: 1px solid black;
    height: 400px;
    box-shadow: 0 1rem 1rem 0 rgba(0,0,0,0.2);
    position:relative;
    margin: 20px;
    
}
.container-food{
margin-top:2rem;

}
.fixed-container{
    height:50rem;
    width: 100%;
}
.fixed{
    object-fit:cover;
    position:center;
    height:125vh;
    width: 100%;
    margin-top:2rem;
    margin-bottom: 3rem;
    padding:0;
}
.fixed-background {
    padding: 12rem 0;
  }
  .fixed {
    background-image: url(${pouring});
    position: fixed;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
  .fixed-background {
    position: relative;
    width: 100%;
    height:50vh;
  }
  .fixed-wrap {
    clip: rect(0, auto, auto, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -999 !important;
  }
  .fixed {
    z-index: -999 !important;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    will-change: transform;
  }

  .title{
      text-align:center;
      width: 100%;
      height: 60px;
      background-color: beige;
  }
  h6{
      font-size: 30px;
      margin-top: 1rem;
      letter-spacing: 2px;
  }
.photo{
    height: 200px;
    width: 200px;
    align-items:center;
    margin-left:auto;
    margin-right:auto;
    margin-top: 10px;
}
.photo img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    margin-left:auto;
    margin-right:auto;
    box-shadow: 0 1rem 1rem 0 rgba(0,0,0,0.2);
}
.cost{
    margin-top:10%;
    width: 100%;
    height: 100px;
    text-align:center;
}

`

export const menu = () =>(
    <Styles>
        <div className="container-drinks">
        <div>
            <h1>Drink Options</h1>
            <img class="abc"src={cupsimage} alt="cups"></img>
            <div class="container-menu">
            <div class="container-item">
                <div class="title">
                <h6>Americano</h6>
                </div>
                <div class="photo">
                    <img src={americano} alt="americano"></img>
                </div>
                <div class="cost">
                    <h3>$3.99</h3>
                </div>
            </div>
            <div class="container-item">
            <div class="title">
                <h6>Cappuccino</h6>
                </div>
                <div class="photo">
                    <img src={cappucino} alt="cappuccino"></img>
                </div>
                <div class="cost">
                    <h3>$4.99</h3>
                </div>
            </div>
            <div class="container-item">
            <div class="title">
                <h6>Chai Latte</h6>
                </div>
                <div class="photo">
                    <img src={chailatte} alt="chailatte"></img>
                </div>
                <div class="cost">
                    <h3>$4.99</h3>
                </div>
                </div> 
            <div class="container-item">
            <div class="title">
                <h6>Espresso</h6>
                </div>
                <div class="photo">
                    <img src={espresso} alt="espresso"></img>
                </div>
                <div class="cost">
                    <h3>$3.99</h3>
                </div>
                </div>  
            <div class="container-item">
            <div class="title">
                <h6>Frappuccino</h6>
                </div>
                <div class="photo">
                    <img src={frappuccino} alt="frappuccino"></img>
                </div>
                <div class="cost">
                    <h3>$5.99</h3>
                </div>
                </div>  
            <div class="container-item">
            <div class="title">
                <h6>Latte</h6>
                </div>
                <div class="photo">
                    <img src={latte} alt="latte"></img>
                </div>
                <div class="cost">
                    <h3>$4.99</h3>
                </div>
                </div>  
            <div class="container-item">
            <div class="title">
                <h6>Macchiato</h6>
                </div>
                <div class="photo">
                    <img src={macchiato} alt="macchiato"></img>
                </div>
                <div class="cost">
                    <h3>$5.99</h3>
                </div>
                </div>  
            <div class="container-item">
            <div class="title">
                <h6>Mocha</h6>
                </div>
                <div class="photo">
                    <img src={mocha} alt="mocha"></img>
                </div>
                <div class="cost">
                    <h3>$5.99</h3>
                </div>
                </div>  
            <div class="container-item">
            <div class="title">
                <h6>Tea</h6>
                </div>
                <div class="photo">
                    <img src={tea} alt="tea"></img>
                </div>
                <div class="cost">
                    <h3>$2.99</h3>
                </div>
                </div>  
            </div>
        </div>
        <div class="fixed-background">
        <div class="fixed-wrap">
            <div class="fixed"></div>
        </div>
    </div>
    <div className="container-food">
        <div>
            <h1>Food Options</h1>
            <img class="abc"src={food} alt="food"></img>
            <div class="container-menu">
            <div class="container-item">
                <div class="title">
                <h6>Sandwich</h6>
                </div>
                <div class="photo">
                    <img src={sandwich} alt="americano"></img>
                </div>
                <div class="cost">
                    <h3>$5.99</h3>
                </div>
            </div>
            <div class="container-item">
            <div class="title">
                <h6>Wrap</h6>
                </div>
                <div class="photo">
                    <img src={wraps} alt="cappuccino"></img>
                </div>
                <div class="cost">
                    <h3>$5.99</h3>
                </div>
            </div>
            <div class="container-item">
            <div class="title">
                <h6>Quiche</h6>
                </div>
                <div class="photo">
                    <img src={quiche} alt="chailatte"></img>
                </div>
                <div class="cost">
                    <h3>$6.99</h3>
                </div>
                </div> 
            <div class="container-item">
            <div class="title">
                <h6>Omelette</h6>
                </div>
                <div class="photo">
                    <img src={omlette} alt="espresso"></img>
                </div>
                <div class="cost">
                    <h3>$5.99</h3>
                </div>
                </div>  
            <div class="container-item">
            <div class="title">
                <h6>Cake</h6>
                </div>
                <div class="photo">
                    <img src={cake} alt="frappuccino"></img>
                </div>
                <div class="cost">
                    <h3>$5.99</h3>
                </div>
                </div>  
            <div class="container-item">
            <div class="title">
                <h6>Pie</h6>
                </div>
                <div class="photo">
                    <img src={pie} alt="latte"></img>
                </div>
                <div class="cost">
                    <h3>$4.99</h3>
                </div>
                </div>  
            <div class="container-item">
            <div class="title">
                <h6>Muffins</h6>
                </div>
                <div class="photo">
                    <img src={muffins} alt="macchiato"></img>
                </div>
                <div class="cost">
                    <h3>$3.99</h3>
                </div>
                </div>  
            <div class="container-item">
            <div class="title">
                <h6>Scones</h6>
                </div>
                <div class="photo">
                    <img src={scones} alt="mocha"></img>
                </div>
                <div class="cost">
                    <h3>$3.99</h3>
                </div>
                </div>  
            <div class="container-item">
            <div class="title">
                <h6>Biscuits</h6>
                </div>
                <div class="photo">
                    <img src={biscuits} alt="tea"></img>
                </div>
                <div class="cost">
                    <h3>$2.99</h3>
                </div>
                </div>  
            </div>
        </div>
        </div>
        </div>
        </Styles>
    
)