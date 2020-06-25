// init weather object
const weather = new Weather('London');
// init Ui
const ui = new UI();
// weather.changeLocation('Paris');

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    // change location
    weather.changeLocation(city);

    // call get weather on new location
    getWeather();

});

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err));
}
