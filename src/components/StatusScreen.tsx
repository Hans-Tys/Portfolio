import HealthBar from './HealthBar.tsx';
import ManaBar from './ManaBar.tsx';
import './StatusScreen.css';
import {  useState } from "react";
import { faHeart, faDumbbell, faShoePrints, faEye, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function MyCurrentJob() {
  return (
    'None'
  )
};

function MyCurrentTitle() {
  return (
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

  function checkLvlup() {
    if (exp >= 100) {
      setStatpoints(statpoints + 10)
      setLvl((lvl) + 1)
      setExp(0)
    }
  }
  checkLvlup();

  {/*could be a seperate file */ }
  const Button = ({ onclick }: { onclick: () => void }) => {
    if (statpoints >= 1) {
      return (
        <div>
          <button style={{ fontSize: 10 }} onClick={onclick}>
            +
          </button>
        </div>
      )
    }
  }


  const Statpoint = ({ short, value, onclick }: { short: string, value: number, onclick: () => void }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', gap: 15, margin: 0, height: 20 }}>
        {short}: {value}
        {statpoints !== 0 ? <Button onclick={onclick} /> : <></>}
      </div>
    )
  }



  return (
    <div className='Statusscreen'>
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
              <p>Job: <MyCurrentJob /></p>
              <p>Title: <MyCurrentTitle /></p>
            </div>

          </div>
          <div className='resources'>

            <p>HP</p>
            <HealthBar Health={currentHp} maxHealth={maxhp} />
            <p>MP</p>
            <ManaBar Mana={currentMp} maxMana={maxmp} />
          </div>
          <div className='stats'>
            {/*possibe for each*/}
            <div className='statpoints'>
              <FontAwesomeIcon icon={faDumbbell} />
              <Statpoint short="STR" value={strenght} onclick={() => { setStrenght(strenght + 1), setStatpoints(statpoints - 1); }} />
            </div>
            <div className='statpoints'>
              <FontAwesomeIcon icon={faShoePrints} />
              <Statpoint short='AGI' value={agility} onclick={() => { setAgility(agility + 1), setStatpoints(statpoints - 1) }} />
            </div>
            <div className='statpoints'>
              <FontAwesomeIcon icon={faEye} />
              <Statpoint short="PER" value={perception} onclick={() => { setPerception(perception + 1), setStatpoints(statpoints - 1) }} />
            </div>
            <div className='statpoints'>
              <FontAwesomeIcon icon={faHeart} />
              <Statpoint short="VIT" value={vitality} onclick={() => { setVitality(vitality + 1), setMaxhp(maxhp + 10), setStatpoints(statpoints - 1) }} />
            </div>
            <div className='statpoints'>
              <FontAwesomeIcon icon={faBook} />
              <Statpoint short="INT" value={inteligence} onclick={() => { setInteligence(inteligence + 1), setMaxMp(maxmp + 10), setStatpoints(statpoints - 1) }} />
            </div>




          </div>
          <button style={{ fontSize: 10 }} onClick={() => setExp((exp) + 10)}>+exp</button>
          <button style={{ fontSize: 10 }} onClick={() => { setcurrentHp(maxhp); setcurrentMp(maxmp) }}>full recovery</button>
          {exp}
          <p style={{ color: 'red' }}>{statpoints}</p>
        </div>
      </div>
    </div>
  )
}

export default StatusScreen