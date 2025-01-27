import { useState , useEffect} from "react";
import "./WeatherApp.css";
import  { faSun, faCloudRain, faCloudSun, faDroplet, faCloud, faMagnifyingGlass , faCloudMoon, faMoon, faSnowflake, faSmog, faWind} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function weatherapp() {
  
  const [location, setLocation] = useState('');
  const [condition, setcondition ] = useState('');
  const [temp, setTemp] = useState();
  const [feeltemp, setFeelTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [windSpeed, setWindspeed] = useState();

  const [day1 ,setDay1] = useState('');
  const [day1W ,setDay1W] = useState('');
  


  const CallWeatherApi = async (location: string ) =>{
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=XYQQAWCFVBSUN37S82FKHBDKL`;
    const response = await fetch(url); 
    const WeatherBody = await response.json();
    const Day1 = WeatherBody.days[0]
    setDay1(Day1.datetime.slice(5, 10));
    setDay1W(Day1.icon)
    
    setLocation(WeatherBody.address);
    setTemp(WeatherBody.currentConditions.temp)
    setFeelTemp(WeatherBody.currentConditions.feelslike)
    setcondition(WeatherBody.currentConditions.icon)
    setHumidity(WeatherBody.currentConditions.humidity)
    setWindspeed(WeatherBody.currentConditions.windspeed)
    console.log(WeatherBody);
    
    updateBg(WeatherBody.currentConditions.icon);
  }
    

  const [newQuerry , setNewQuerry] = useState('');
  const SearchAdress = () => {
    CallWeatherApi(newQuerry);
    setNewQuerry('');
    
  }
  

  const backgrounds = [
    {
        title: "snow",
        bg: 'https://images.pexels.com/photos/30371646/pexels-photo-30371646/free-photo-of-snow-covered-winter-forest-landscape.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1'
    },
    {
        title: "rain",
        bg: 'https://images.pexels.com/photos/8074446/pexels-photo-8074446.jpeg?auto=compress&cs=tinysrgb&w=3072&h=4096&dpr=1'
    },
    {
        title: "fog",
        bg: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1'
    },
    {
        title: "wind",
        bg: 'https://images.pexels.com/photos/5008655/pexels-photo-5008655.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1'
    },
    {
        title: "cloudy",
        bg: 'https://images.pexels.com/photos/8074446/pexels-photo-8074446.jpeg?auto=compress&cs=tinysrgb&w=5472&h=3648&dpr=1'
    },
    {
        title: "partly-cloudy-night",
        bg: 'https://images.pexels.com/photos/239107/pexels-photo-239107.jpeg'
    }
    ,
    {
        title: "partly-cloudy-day",
        bg: 'https://images.pexels.com/photos/449751/pexels-photo-449751.jpeg?auto=compress&cs=tinysrgb&w=5472&h=3648&dpr=1'
    }
    ,
    {
        title: "clear-day",
        bg: 'https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&w=4912&h=2760&dpr=1'
    }
    ,
    {
        title: "clear-night",
        bg: 'https://images.pexels.com/photos/17810090/pexels-photo-17810090/free-photo-of-stars-on-clear-night-sky.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1'
    }

  ];
  
    const [bg, setBg] = useState('');
    const updateBg = (condition: string) =>{
        backgrounds.map((background)=>{
            condition == background.title ? setBg(background.bg) : <></>
          })
    }
  

  useEffect(()=>{
    CallWeatherApi("Antwerpen");

  }, [])  

  return (
    
    <div className="WeatherAppContianer" 
    style={{backgroundImage: `url(${bg})`}}
    >
        <div className="WeatherAppScreen">
            <div className="SearchBar">
                <input className="" type="text" name="adress" id="" value={newQuerry}
                onChange={(e) => setNewQuerry(e.target.value)} />
                <button className="submitButton" onClick={SearchAdress}><FontAwesomeIcon icon={faMagnifyingGlass}/> </button>
            </div>
            <h1>{location ? <>{location}</> : <><br/></>}</h1>
            <div className="CloudsandTemp">
                
                <div className="Clouds">
                    {condition == 'snow' ? <div className="WeatherIcon"><FontAwesomeIcon icon={faSnowflake}/></div>: <></>} 
                    {condition == 'rain' ? <div className="WeatherIcon"><FontAwesomeIcon icon={faCloudRain}/></div>: <></>}
                    {condition == 'fog' ? <div className="WeatherIcon"><FontAwesomeIcon icon={faSmog}/></div>: <></>}
                    {condition == 'wind' ? <div className="WeatherIcon"><FontAwesomeIcon icon={faWind}/></div>: <></>}
                    {condition == 'cloudy' ? <div className="WeatherIcon"><FontAwesomeIcon icon={faCloud}/></div>: <></>} 
                    {condition == 'partly-cloudy-night' ? <div className="WeatherIcon"><FontAwesomeIcon icon={faCloudMoon}/></div>: <></>}
                    {condition == 'partly-cloudy-day' ? <div className="WeatherIcon"><FontAwesomeIcon icon={faCloudSun}/></div>: <></>}
                    {condition == 'clear-day' ? <div className="WeatherIcon"><FontAwesomeIcon icon={faSun}/></div>: <></>}
                    {condition == 'clear-night' ? <div className="WeatherIcon"><FontAwesomeIcon icon={faMoon}/></div>: <></>}
                </div>

                <div className="Temp">
                    <div>
                        {temp ? Math.round((temp - 32) * 5/9)  : <></> }°
                    </div>
                    <div style={{fontSize:16}}>
                        feels: 
                        {feeltemp ?  <> {Math.round((feeltemp - 32) * 5/9)}°</> : <></>}
                    </div>
                </div>

            </div>
            <div className="AdvInfo">
                <span><FontAwesomeIcon icon={faDroplet}/>{humidity}</span>
                <span><FontAwesomeIcon icon={faWind}/>{windSpeed}</span>
                <span></span>
                
            </div>

            <div className="nextDays">
                {day1}
                {day1W == 'rain' ? <div className="smallWeatherIcon"><FontAwesomeIcon icon={faCloudRain}/></div>: <></>}      
            </div>
        </div>
    </div>
  )
}



{/* XYQQAWCFVBSUN37S82FKHBDKL*/}