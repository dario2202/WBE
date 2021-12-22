import {get} from "https";
const currentTemp = function(place="Winterthur") { 
    getData(place);
};

const getData = (place) => {
    get(`https://wttr.in/${place}?format=j1`, function(response) {
        let data = "";

        response.on("data", (sec) => {
            data += sec;
        });

        response.on("end", () => {
            let weather = JSON.parse(data);
            console.log(weather.current_condition[0].FeelsLikeC+"°C");
        })
    });
};

currentTemp(process.argv[2]);