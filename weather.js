class Weather {
    constructor(city) {
        this.apiKey = 'cd284df17ff64aba821153111202406';
        this.city = city;
        // this.state = state;
    }

    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

        const responseData = await response.json();

        return responseData
    }

    // change weather location
    changeLocation(city) {
        this.city = city;
        console.log(this.city);
    }
}