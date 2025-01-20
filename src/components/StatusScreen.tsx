import HealthBar from './HealthBar.tsx';
import ManaBar from './ManaBar.tsx';
import './StatusScreen.css';
import { useState } from "react"

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
    
    function lvlStrenght() {
  
      if (statpoints >= 1) {
        return <div>
        <button style={{fontSize: 10}} onClick={() => {setStrenght((strenght) + 1); setStatpoints((statpoints) - 1)} }>+</button>
      </div>
      }
    }
    lvlStrenght();

    function lvlAgility() {
  
      if (statpoints >= 1) {
        return <div>
        <button style={{fontSize: 10}} onClick={() => {setAgility((agility) + 1); setStatpoints((statpoints) - 1)} }>+</button>
      </div>
      }
    }
    lvlAgility();

    function lvlInteligence() {
  
      if (statpoints >= 1) {
        return <div>
        <button style={{fontSize: 10}} onClick={() => {setInteligence((inteligence) + 1); setStatpoints((statpoints) - 1); setMaxMp((maxmp) +10)} }>+</button>
      </div>
      }
    }
    lvlInteligence();

    function lvlVitality() {
  
      if (statpoints >= 1) {
        return <div>
        <button style={{fontSize: 10}} onClick={() => {setVitality((vitality) + 1); setStatpoints((statpoints) - 1); setMaxhp((maxhp) +10)} }>+</button>
      </div>
      }
    }
    lvlVitality();

    function lvlPerception() {
  
      if (statpoints >= 1) {
        return <div>
        <button style={{fontSize: 10}} onClick={() => {setPerception((perception) + 1); setStatpoints((statpoints) - 1)} }>+</button>
      </div>
      }
    }
    lvlPerception();    
   

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
                    <div className='statpoints'>STR: {strenght}{lvlStrenght()}  </div>
                    <div className='statpoints'>AGI: {agility}{lvlAgility()}  </div>
                    <div className='statpoints'>PER: {perception}{lvlPerception()}</div>
                    <div className='statpoints'>VIT: {vitality}{lvlVitality()}</div>
                    <div className='statpoints'>INT: {inteligence}{lvlInteligence()}</div>                   
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