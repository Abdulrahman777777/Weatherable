let location = { longtitude: 0, latitude: 0 };

const requestIp = require("request-ip");

async function getWeather() {
  const ip = await fetch("https://api.ipify.org/?format=json");
  const formattedIp = await ip.json();
  const data = await fetch(
    `https://api.geoapify.com/v1/ipinfo?ip=${formattedIp.ip}&apiKey=${process.env.GEO_CODE}`
  );
  return await data.json();
}

export default async function handler() {
  const city = (await getWeather()) as any;
  return city.country.names.en;
}
