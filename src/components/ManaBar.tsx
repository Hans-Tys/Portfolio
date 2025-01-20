
interface Props{
    Mana: number;
    maxMana: number;
}

export default function ManaBar({ Mana, maxMana }: Props) {
  const CurrentManaPercentage = (Mana * 100 / maxMana)
  return (
  <div className="bg-MP">
    <div className="Mp-percentage" style={{ width: `${CurrentManaPercentage}%`  }}> 
     <div className="Mp-Numbers">{Mana}/{maxMana}</div>
    </div>
  </div>
);
  
}
