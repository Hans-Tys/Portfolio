import { useState, useEffect } from "react";
import "./WeatherApp.css";
import { faSun, faCloudRain, faCloudSun, faDroplet, faCloud, faMagnifyingGlass, faCloudMoon, faMoon, faSnowflake, faSmog, faWind, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function weatherapp() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [location, setLocation] = useState('');
    const [condition, setcondition] = useState('');
    const [temp, setTemp] = useState();
    const [feeltemp, setFeelTemp] = useState();
    const [humidity, setHumidity] = useState();
    const [windSpeed, setWindspeed] = useState();
    const [visibility, setVisibility] = useState();
    const [cloudcover, setCloudCover] = useState();

    const [day1, setDay1] = useState('');
    const [day1W, setDay1W] = useState('');
    const [day1t, setDay1t] = useState(0);
    const [day2, setDay2] = useState('');
    const [day2W, setDay2W] = useState('');
    const [day2t, setDay2t] = useState(0);
    const [day3, setDay3] = useState('');
    const [day3W, setDay3W] = useState('');
    const [day3t, setDay3t] = useState(0);
    const [day4, setDay4] = useState('');
    const [day4W, setDay4W] = useState('');
    const [day4t, setDay4t] = useState(0);
    const [day5, setDay5] = useState('');
    const [day5W, setDay5W] = useState('');
    const [day5t, setDay5t] = useState(0);

    const apiKey = import.meta.env.VITE_API_KEY;

    const CallWeatherApi = async (location: string) => {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
        const response = await fetch(url);
        const WeatherBody = await response.json();



        const Day1 = WeatherBody.days[1]
        setDay1(Day1.datetime.slice(5, 10));
        setDay1W(Day1.icon)
        setDay1t(Day1.temp)

        const Day2 = WeatherBody.days[2]
        setDay2(Day2.datetime.slice(5, 10));
        setDay2W(Day2.icon)
        setDay2t(Day2.temp)

        const Day3 = WeatherBody.days[3]
        setDay3(Day3.datetime.slice(5, 10));
        setDay3W(Day3.icon)
        setDay3t(Day3.temp)

        const Day4 = WeatherBody.days[4]
        setDay4(Day4.datetime.slice(5, 10));
        setDay4W(Day4.icon)
        setDay4t(Day4.temp)

        const Day5 = WeatherBody.days[5]
        setDay5(Day5.datetime.slice(5, 10));
        setDay5W(Day5.icon)
        setDay5t(Day5.temp)

        setCloudCover(WeatherBody.currentConditions.cloudcover)
        setVisibility(WeatherBody.currentConditions.visibility)
        setLocation(WeatherBody.address);
        setTemp(WeatherBody.currentConditions.temp)
        setFeelTemp(WeatherBody.currentConditions.feelslike)
        setcondition(WeatherBody.currentConditions.icon)
        setHumidity(WeatherBody.currentConditions.humidity)
        setWindspeed(WeatherBody.currentConditions.windspeed)
        updateBg(WeatherBody.currentConditions.icon);
    }


    const [newQuerry, setNewQuerry] = useState('');
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
    const updateBg = (condition: string) => {
        backgrounds.map((background) => {
            condition == background.title ? setBg(background.bg) : <></>
        })
    }

    useEffect(() => {
        CallWeatherApi("Antwerpen");

    }, [])


    const icons = [
        {
            title: 'snow',
            element: <div className="WeatherIcon"><FontAwesomeIcon icon={faSnowflake} /></div>,
            elementSmall: <div className="smallWeatherIcon"><FontAwesomeIcon icon={faSnowflake} /></div>
        },
        {
            title: 'rain',
            element: <div className="WeatherIcon"><FontAwesomeIcon icon={faCloudRain} /></div>,
            elementSmall: <div className="smallWeatherIcon"><FontAwesomeIcon icon={faCloudRain} /></div>
        },
        {
            title: 'fog',
            element: <div className="WeatherIcon"><FontAwesomeIcon icon={faSmog} /></div>,
            elementSmall: <div className="smallWeatherIcon"><FontAwesomeIcon icon={faSmog} /></div>
        },
        {
            title: 'wind',
            element: <div className="WeatherIcon"><FontAwesomeIcon icon={faWind} /></div>,
            elementSmall: <div className="WeatherIcon"><FontAwesomeIcon icon={faWind} /></div>
        },
        {
            title: 'cloudy',
            element: <div className="WeatherIcon"><FontAwesomeIcon icon={faCloud} /></div>,
            elementSmall: <div className="smallWeatherIcon"><FontAwesomeIcon icon={faCloud} /></div>
        },
        {
            title: 'partly-cloudy-night',
            element: <div className="WeatherIcon"><FontAwesomeIcon icon={faCloudMoon} /></div>,
            elementsmall: <div className="smallWeatherIcon"><FontAwesomeIcon icon={faCloudMoon} /></div>
        },
        {
            title: 'partly-cloudy-day',
            element: <div className="WeatherIcon"><FontAwesomeIcon icon={faCloudSun} /></div>,
            elementSmall: <div className="smallWeatherIcon"><FontAwesomeIcon icon={faCloudSun} /></div>
        },
        {
            title: 'clear-day',
            element: <div className="WeatherIcon"><FontAwesomeIcon icon={faSun} /></div>,
            elementSmall: <div className="smallWeatherIcon"><FontAwesomeIcon icon={faSun} /></div>
        },
        {
            title: 'clear-night',
            element: <div className="WeatherIcon"><FontAwesomeIcon icon={faMoon} /></div>,
            elementsmall: <div className="smallWeatherIcon"><FontAwesomeIcon icon={faMoon} /></div>
        }
    ]


    const findIcon = (day: any) => {
        return (
            icons.map((icon) => {
                return (
                    icon.title == day ? icon.elementSmall : <></>
                )
            })
        )
    }


    return (

        <div className="WeatherAppContianer"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="WeatherAppScreen">
                <div className="SearchBar">
                    <input className="" type="text" name="adress" id="" value={newQuerry}
                        onChange={(e) => setNewQuerry(e.target.value)} />
                    <button className="submitButton" onClick={SearchAdress}><FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                </div>
                <h1>{location ? <>{location}</> : <><br /></>}</h1>
                <div className="CloudsandTemp">

                    <div className="Clouds">
                        {
                            icons.map((icon) => {
                                return (
                                    icon.title == condition ? icon.element : <></>
                                )
                            })
                        }

                    </div>

                    <div className="Temp">
                        <div>
                            {temp ? Math.round((temp - 32) * 5 / 9) : <></>}°
                        </div>
                        <div style={{ fontSize: 16 }}>
                            feels:
                            {feeltemp ? <> {Math.round((feeltemp - 32) * 5 / 9)}°</> : <></>}
                        </div>
                    </div>

                </div>
                <div className="AdvInfo">
                    <div>
                        <FontAwesomeIcon className="WeatherIconMedium" icon={faDroplet} />
                        <p>{humidity}%</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="WeatherIconMedium" icon={faWind} />
                        <p>{windSpeed} mph</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="WeatherIconMedium" icon={faEye} />
                        <p>{visibility}%</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="WeatherIconMedium" icon={faCloud} />
                        <p>{cloudcover}%</p>
                    </div>


                </div>

                <div className="nextDays">
                    {day1}
                    {findIcon(day1W)}
                    {temp ? Math.round((day1t - 32) * 5 / 9) : <></>}°
                </div>
                <div className="nextDays">
                    {day2}
                    {findIcon(day2W)}
                    {temp ? Math.round((day2t - 32) * 5 / 9) : <></>}°
                </div>
                <div className="nextDays">
                    {day3}
                    {findIcon(day3W)}
                    {temp ? Math.round((day3t - 32) * 5 / 9) : <></>}°
                </div>
                <div className="nextDays">
                    {day4}
                    {findIcon(day4W)}
                    {temp ? Math.round((day4t - 32) * 5 / 9) : <></>}°
                </div>
                <div className="nextDays">
                    {day5}
                    {findIcon(day5W)}
                    {temp ? Math.round((day5t - 32) * 5 / 9) : <></>}°
                </div>
            </div>
        </div>
    )
}



{/* XYQQAWCFVBSUN37S82FKHBDKL*/ }