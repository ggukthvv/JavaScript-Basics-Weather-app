// const response = await fetch("https://api.weatherapi.com/v1/forecast.json?q=83.139.21.1&days=3&dt=2026-04-02&hour=5&lang=eng&alerts=yes&aqi=yes&tp=15&key=c7aa7002a9f2416399363325260204",)
// async function fetchWeather() {
//     try {
//         const response = await fetch(url);


//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);
//         displayWeather(data);
//     } catch (error) {
//         console.error('Error fetching data:', error.message);
//     }
// }

// fetch('https://api.weatherapi.com/v1/forecast.json?q=83.139.21.1&days=3&dt=2026-04-02&hour=5&lang=eng&alerts=yes&aqi=yes&tp=15&key=c7aa7002a9f2416399363325260204')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not fetch");
//         }
//         return response.json()
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error));

async function fetchWeather() {
    try {
        const response = await fetch("https://api.weatherapi.com/v1/forecast.json?q=83.139.21.1&days=3&dt=2026-04-02&hour=5&lang=eng&alerts=yes&aqi=yes&tp=15&key=c7aa7002a9f2416399363325260204",)

        const data = await response.json();
        console.log(data);

        const country = document.querySelector('#country');
        country.innerText = data.location.country || 'none';
        console.log('country', country);

        const time = document.querySelector('#time');
        time.innerText = data.location.localtime || 'none';
        console.log('time', time);

        const thunder = document.querySelector('#thunder');
        thunder.innerText = data.current.condition.text || 'none';
        console.log('thunder', thunder);

        const wind = document.querySelector('#wind');
        wind.innerText = data.current.wind_kph || 'none';
        console.log('wind', wind);

        const temp = document.querySelector('#temp');
        temp.innerText = data.current.temp_c || 'none';
        console.log('temp', temp);

        const uvindex = document.querySelector('#uvindex');
        uvindex.innerText = data.current.uv || 'none';
        console.log('uvindex', uvindex);

        const humid = document.querySelector('#humid');
        humid.innerText = ` ${data.current.humidity}%` || 'none';
        console.log('humid', humid)
    }
    catch (error) {
        console.log(error);
    }
}
fetchWeather();