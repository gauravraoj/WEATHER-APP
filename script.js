const fetchData = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aab8919185mshfdb102b58b55f9ap1f0a2bjsn727d6688261e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      document.getElementById('cityName').textContent = city;
  
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      document.getElementById('temp1').textContent = result.temp;
      document.getElementById('feels_like').textContent = result.feels_like;
      document.getElementById('cloud_pct').textContent = result.cloud_pct;
      document.getElementById('humidity').textContent = result.humidity;
      document.getElementById('wind_speed').textContent = result.wind_speed;
      document.getElementById('wind_degrees').textContent = result.wind_degrees;
      document.getElementById('wind_speed2').textContent = result.wind_speed;
      document.getElementById('sunrise').textContent = result.sunrise;
      document.getElementById('sunset').textContent = result.sunset;
      document.getElementById('humidity2').textContent = result.humidity;
      document.getElementById('temp').textContent = result.temp;
      document.getElementById('min_temp').textContent = result.min_temp;
      document.getElementById('max_temp').textContent = result.max_temp;
    } catch (error) {
      console.error(error);
    }
  };
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const uppercaseStr = city.value.toUpperCase();
    fetchData(uppercaseStr);
  });
  fetchData("Delhi"); // Call the function to fetch weather data for Delhi
  const data = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aab8919185mshfdb102b58b55f9ap1f0a2bjsn727d6688261e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      document.getElementById('cityName').textContent = city;
  
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
  
      document.getElementById('three').textContent = result.feels_like;
      document.getElementById('one').textContent = result.cloud_pct;
      document.getElementById('four').textContent = result.humidity;
      document.getElementById('seven').textContent = result.wind_speed;
      document.getElementById('eight').textContent = result.wind_degrees;
  
      document.getElementById('nine').textContent = result.sunrise;
      document.getElementById('ten').textContent = result.sunset;
  
      document.getElementById('two').textContent = result.temp;
      document.getElementById('five').textContent = result.min_temp;
      document.getElementById('six').textContent = result.max_temp;
    } catch (error) {
      console.error(error);
    }
  };
  
  data("DELHI");

  const data1 = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aab8919185mshfdb102b58b55f9ap1f0a2bjsn727d6688261e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      document.getElementById('cityName').textContent = city;
  
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
  
      document.getElementById('three1').textContent = result.feels_like;
      document.getElementById('one1').textContent = result.cloud_pct;
      document.getElementById('four1').textContent = result.humidity;
      document.getElementById('seven1').textContent = result.wind_speed;
      document.getElementById('eight1').textContent = result.wind_degrees;
  
      document.getElementById('nine1').textContent = result.sunrise;
      document.getElementById('ten1').textContent = result.sunset;
  
      document.getElementById('two1').textContent = result.temp;
      document.getElementById('five1').textContent = result.min_temp;
      document.getElementById('six1').textContent = result.max_temp;
    } catch (error) {
      console.error(error);
    }
  };
  
  data1("MUMBAI");

  const data12 = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aab8919185mshfdb102b58b55f9ap1f0a2bjsn727d6688261e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      document.getElementById('cityName').textContent = city;
  
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
  
      document.getElementById('three12').textContent = result.feels_like;
      document.getElementById('one12').textContent = result.cloud_pct;
      document.getElementById('four12').textContent = result.humidity;
      document.getElementById('seven12').textContent = result.wind_speed;
      document.getElementById('eight12').textContent = result.wind_degrees;
  
      document.getElementById('nine12').textContent = result.sunrise;
      document.getElementById('ten12').textContent = result.sunset;
  
      document.getElementById('two12').textContent = result.temp;
      document.getElementById('five12').textContent = result.min_temp;
      document.getElementById('six12').textContent = result.max_temp;
    } catch (error) {
      console.error(error);
    }
  };
  
  data12("Mysore");

  const data123 = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aab8919185mshfdb102b58b55f9ap1f0a2bjsn727d6688261e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      document.getElementById('cityName').textContent = city;
  
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
  
      document.getElementById('three123').textContent = result.feels_like;
      document.getElementById('one123').textContent = result.cloud_pct;
      document.getElementById('four123').textContent = result.humidity;
      document.getElementById('seven123').textContent = result.wind_speed;
      document.getElementById('eight123').textContent = result.wind_degrees;
  
      document.getElementById('nine123').textContent = result.sunrise;
      document.getElementById('ten123').textContent = result.sunset;
  
      document.getElementById('two123').textContent = result.temp;
      document.getElementById('five123').textContent = result.min_temp;
      document.getElementById('six123').textContent = result.max_temp;
    } catch (error) {
      console.error(error);
    }
  };
  
  data123("KOLKATA");

  const data1234 = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aab8919185mshfdb102b58b55f9ap1f0a2bjsn727d6688261e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      document.getElementById('cityName').textContent = city;
  
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
  
      document.getElementById('three1234').textContent = result.feels_like;
      document.getElementById('one1234').textContent = result.cloud_pct;
      document.getElementById('four1234').textContent = result.humidity;
      document.getElementById('seven1234').textContent = result.wind_speed;
      document.getElementById('eight1234').textContent = result.wind_degrees;
  
      document.getElementById('nine1234').textContent = result.sunrise;
      document.getElementById('ten1234').textContent = result.sunset;
  
      document.getElementById('two1234').textContent = result.temp;
      document.getElementById('five1234').textContent = result.min_temp;
      document.getElementById('six1234').textContent = result.max_temp;
    } catch (error) {
      console.error(error);
    }
  };
  
  data1234("CHENNAI");

  const data12345 = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aab8919185mshfdb102b58b55f9ap1f0a2bjsn727d6688261e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      document.getElementById('cityName').textContent = city;
  
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
  
      document.getElementById('three12345').textContent = result.feels_like;
      document.getElementById('one12345').textContent = result.cloud_pct;
      document.getElementById('four12345').textContent = result.humidity;
      document.getElementById('seven12345').textContent = result.wind_speed;
      document.getElementById('eight12345').textContent = result.wind_degrees;
  
      document.getElementById('nine12345').textContent = result.sunrise;
      document.getElementById('ten12345').textContent = result.sunset;
  
      document.getElementById('two12345').textContent = result.temp;
      document.getElementById('five12345').textContent = result.min_temp;
      document.getElementById('six12345').textContent = result.max_temp;
    } catch (error) {
      console.error(error);
    }
  };
  
  data12345("PUNE");


  const city1 = document.getElementById('city');


const dropdownItem3 = document.getElementById('dropdown-item3');

dropdownItem3.addEventListener('click', (e) => {
  e.preventDefault();
  fetchData('UDUPI');
  city1.value=" ";
});
const dropdownItem2 = document.getElementById('dropdown-item2');

dropdownItem2.addEventListener('click', (e) => {
  e.preventDefault();
  fetchData('BANGALORE');
  city1.value=" ";
});
const dropdownItem1 = document.getElementById('dropdown-item1');
dropdownItem1.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData('MANGALORE');
    city1.value=" ";
  });
