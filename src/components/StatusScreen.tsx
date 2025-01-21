import HealthBar from './HealthBar.tsx';
import ManaBar from './ManaBar.tsx';
import './StatusScreen.css';
import { useState } from "react"
import Data from "../Data.json"
import { data } from 'react-router-dom';

function MyCurrentJob(){
  return(
      'None'
  )
};

function MyCurrentTitle(){
  return(
    'Wolf Assasin'
  )
};

function StatusScreen() {
    const [statpoints, setStatpoints] = useState(0);
    const [strenght, setStrenght] = useState(10);
    const [agility, setAgility] = useState(10);
    const [perception, setPerception] = useState(10);
    const [vitality, setVitality] = useState(10);
    const [inteligence, setInteligence] = useState(10);
    const [exp, setExp] = useState(0);
    const [lvl, setLvl] = useState(1);
    const [maxhp, setMaxhp] = useState(100);
    const [maxmp, setMaxMp] = useState(100);
    const [currentHp, setcurrentHp] = useState(100);
    const [currentMp, setcurrentMp] = useState(100);
  
    function checkLvlup(){
      if (exp >= 100) {
       setStatpoints(statpoints + 10)
       setLvl((lvl) + 1)
       setExp(0)
      }
    }
    checkLvlup();


    const Button = ({onclick}: {onclick: () => void}) => {
      if (statpoints >= 1){
        return(
          <div>
            <button style={{fontSize: 10}} onClick={onclick}> 
              +
            </button>
          </div>          
        )
      }
    }

    {/*
    const Statpoint = ({short, value, onclick} : {short: string, value: number, onclick: () => void}) => {
      if (statpoints >= 1)
     { return(
      <div>
        {short}: {value}
        <Button onClick={onclick}/>
      </div>
    )}
    }
     */}
   

  return (
    <div className='system'>
              
            <p className='system-header'>
              STATUS 
            </p>
    
            <div className='stats-container'> 
              <div className='level'>
                <div> 
                  <h1>{lvl}</h1> 
                  <p>LEVEL</p>
                </div>
                <div className='occupation'>
                  <p>Job: <MyCurrentJob/></p>
                  <p>Title: <MyCurrentTitle/></p>
                </div>
              
              </div>
              <div className='resources'>
                <p>HP</p>
                <HealthBar Health={currentHp} maxHealth={maxhp}/>
                <p>MP</p>
                <ManaBar Mana={currentMp} maxMana={maxmp}/>
              </div>
              <div className='stats'>
                    <div className='statpoints'>STR: {strenght}
                      <Button onclick={ () => {setStrenght(strenght+1), setStatpoints(statpoints-1)}}/>
                    </div>
                    <div className='statpoints'> AGI: {agility}
                      <Button onclick={ () => {setAgility(agility+1), setStatpoints(statpoints-1)}}/>
                    </div>
                    <div className='statpoints'>PER: {perception}
                      <Button onclick={ () => {setPerception(perception+1), setStatpoints(statpoints-1)}}/>
                    </div>
                    <div className='statpoints'>VIT: {vitality} 
                     <Button onclick={ () => {setVitality(vitality+1), setMaxhp(maxhp+10), setStatpoints(statpoints-1)}}/>
                    </div>
                    <div className='statpoints'>INT: {inteligence}
                     <Button onclick={ () => {setInteligence(inteligence+1), setMaxMp(maxmp+10), setStatpoints(statpoints-1)}}/>
                    </div>                   
              </div>
              <button style={{fontSize: 10}} onClick={() => setExp((exp) + 10) }>+exp</button>
              <button style={{fontSize: 10}} onClick={() => {setcurrentHp(maxhp); setcurrentMp(maxmp)} }>full recovery</button>
                  {exp}  
                  <p style={{color:'red'}}>{statpoints}</p>
            </div>
            </div>
  ) 
}

export default StatusScreen