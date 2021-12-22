import fetch from "node-fetch";
const currentTemp = function(place="Winterthur") {
    getData(place)
        .then((data) => prepData(data))
        .then(temp => console.log(temp+"°C"));
}

const getData = async (place) => {
    let response = await fetch(`https://wttr.in/${place}?format=j1`);
    let resJson = await response.json();
    return resJson;
}

const prepData = (data) => {
    return data.current_condition[0].FeelsLikeC;
}

currentTemp(process.argv[2]);