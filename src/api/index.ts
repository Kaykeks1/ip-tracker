import axios from "axios";

export async function fetchLocation(ipAddress: string) {
  try {
    const params = {
      apiKey: process.env.REACT_APP_GEO_IPFY_APP_KEY,
      ipAddress,
    }
    const response = await axios.get(`${process.env.REACT_APP_GEO_IPFY_BASE_URL}/country,city`, { params });
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export async function getMyIP(): Promise<string> {
  type responseType = {
    data: {
      ip: string
    }
  }
  try {
    const response = await axios.get("https://api.ipify.org/?format=json") as responseType
    return response.data.ip;
  } catch (error) {
    console.log(error)
    return ""
  }
}