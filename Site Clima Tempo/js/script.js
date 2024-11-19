const apiKey = 'asasasasasasasasaaaa'; //chave API
const city = 'São Paulo'; //cidade desejada
const temperatureElement = document.getElementById('temperature');
const weatherImageElement = document.getElementById('weather-image');

//função para buscar dados de clima
async function fetchWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        const temperature = data.main.temp;
        updateWeatherDisplay(temperature);
    } catch (error) {
        temperatureElement.textContent = "Erro ao obter dados do clima.";
    }

}

//função para atualizar a imagem e a temperatura de acordo com a faixa de temperatura
function updateWeatherDisplay (temperature) {
    temperatureElement.textContent = `Temperatura na cidade de ${city}: ${temperature}°C`;
    
    if (temperature > 30) {
        weatherImageElement.innerHTML = `<img src="img/img_escaldante.jpg" alt="imagem escaldante">`;
    } else if (temperature >= 19 && temperature <= 30) {
        weatherImageElement.innerHTML = `<img src="img/img_ensolarado.jpg" alt="imagem ensolarada">`;
    } else if (temperature >= 9 && temperature <19) {
        weatherImageElement.innerHTML = `<img src="img/img_nublado.jpg" alt="imagem nublada">`;
    } else if (temperature >= 1 && temperature <9) {
        weatherImageElement.innerHTML = `<img src="img/img_geada.jpg" alt="imagem geada">`;
    } else {
        weatherImageElement.innerHTML = `<img src="img/img_neve.jpg" alt="imagem neve">`;
    }
}

fetchWeatherData();
