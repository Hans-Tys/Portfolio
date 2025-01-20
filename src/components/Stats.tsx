import { useState } from "react"



export default function Stats() {
  const [statpoints, setStatpoints] = useState(0);
  const [strenght, setStrenght] = useState(10);
  const [exp, setExp] = useState(0);
  const [lvl, setLvl] = useState(1);

  function checkLvlup(){
    if (exp >= 100) {
     setStatpoints(statpoints + 1)
     setLvl((lvl) + 1)
     setExp(0)
    }
  }
  checkLvlup();
  
  function showLvlButtons() {

    if (statpoints >= 1) {
      return <div>
      <button style={{fontSize: 10}} onClick={() => {setStrenght((strenght) + 1); setStatpoints((statpoints) - 1)} }>+</button>
    </div>
    }
  }
  showLvlButtons();

  return (
    
    <div style={{
      padding: 20,
      display: "flex"
    }}>
      STR: {strenght}
      {showLvlButtons()}
      <button style={{fontSize: 10}} onClick={() => setExp((exp) + 10) }>+exp</button>
      {exp}
      <p style={{color:'red'}}>{statpoints}</p>
      
    </div>
  )
}
