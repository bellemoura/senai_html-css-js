const apiKey = 'asasasasasasasasasas'; //chave API
var city = ''; //cidade desejada
var temperatureElement = document.getElementById('temperature');
var weatherImageElement = document.getElementById('weather-image');


//função clicar no botão
document.getElementById('submitButton').addEventListener('click', function() {

    // Obtém o valor da caixa de texto
    var textInput = document.getElementById('textInput').value;

    city = textInput; //cidade desejada

    // Limpa a caixa de texto
    document.getElementById('textInput').value = '';


    //função para buscar dados de clima
    async function fetchWeatherData() {
        try {
            var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            var data = await response.json();
            var temperature = data.main.temp;
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
        }   else if (temperature >= 19 && temperature <= 30) {
            weatherImageElement.innerHTML = `<img src="img/img_ensolarado.jpg" alt="imagem ensolarada">`;
        } else if (temperature >= 9 && temperature <19) {
            weatherImageElement.innerHTML = `<img src="img/img_nublado.jpg" alt="imagem nublada">`;
        } else if (temperature >= 1 && temperature <9) {
            weatherImageElement.innerHTML = `<img src="img/img_frio-geada.jpg" alt="imagem geada">`;
        } else {
            weatherImageElement.innerHTML = `<img src="img/img_neve.jpg" alt="imagem neve">`;
        }
}

fetchWeatherData();
})

