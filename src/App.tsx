import './App.scss';
import Details from './components/details/Details';
import Map from './components/map/Map';
import SearchInput from './components/search-input/SearchInput';
import { useState, useEffect } from 'react';
import { getMyIP, fetchLocation } from './api'
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import toast from "./utils/toast"

type detailsType = {
  "IP ADDRESS": string,
  "LOCATION": string,
  "TIMEZONE": string,
  "ISP": string,
}

function App() {
  const [myIP, setMyIP] = useState("")
  const [coordinates, setCoordinates] = useState({lat: null, lng: null})
  const [details, setDetails] = useState<detailsType>({ "IP ADDRESS": "", "LOCATION": "", "TIMEZONE": "", "ISP": "" })
  useEffect(() => {
    getMyIP().then((ip: string) => {
      setMyIP(ip)
      getDetails(ip)
    })
  }, [])

  const handleSubmit = (e: any, ip: string) => {
    e.preventDefault();
    getDetails(ip)
  }

  const getDetails = (ip: string) => {
    const regex = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/g
    if (!ip.match(regex)) {
      toast("error", 'Use the correct ip address format', undefined)
      return
    }
    fetchLocation(ip).then((data: any) => {
      setCoordinates({ lat: data.location.lat, lng: data.location.lng })
      setDetails({ "IP ADDRESS": data.ip, "LOCATION": `${data.location.region}, ${data.location.city}`, "TIMEZONE": data.location.timezone, "ISP": data.isp })
    })
  }
  
  return (
    <div className="app">
      <div className="top-section">
        <h1>IP Address Tracker</h1>
        <SearchInput handleSubmit={handleSubmit} preValue={myIP} />
        <Details details={details} />
      </div>
      <div className="bottom-section">
        {
          (coordinates.lat && coordinates.lng)
          ? <Map lat={coordinates.lat} lng={coordinates.lng} />
          : <div></div>
        }
      </div>
      <NotificationContainer/>
    </div>
  );
}

export default App;
