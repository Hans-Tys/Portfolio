interface Props{
    Health: number;
    maxHealth: number;
}

export default function HealthBar({ Health, maxHealth }: Props) {
  const CurrentHealthPercentage = (Health * 100 / maxHealth)
  return (
  <div className="bg-HP">
    <div className="Hp-percentage" style={{ width: `${CurrentHealthPercentage}%`}}> 
      <div className="Hp-Numbers"> {Health}/{maxHealth} </div>
    </div>
  </div>
);
  
}
