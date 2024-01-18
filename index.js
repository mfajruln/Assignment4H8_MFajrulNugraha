let loadCountries = async () => {
    const url = 'https://covid-193.p.rapidapi.com/countries';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const convertData = await response.json();
        let dataPlaceholder = "";

        let bodyTable = document.getElementById("selectCountry")

        convertData.response.forEach(data => {
            // console.log(data);
            dataPlaceholder += `
                <option value="${data}">${data}</option>
            `
        });

        bodyTable.innerHTML = dataPlaceholder;
        // console.log(data.response);
    } catch (error) {
        console.error(error.message);
    }
}

async function getData() {
    let selectElement = document.getElementById("selectCountry");
    let country = selectElement.value;

    try {
        const url = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0cbdd767e2msh0f0a0c28449f55bp195814jsn44bd3f7633ef',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        const data = await response.json();
        
        document.getElementById("activeCases").innerHTML = data.response[0].cases.active ? data.response[0].cases.active : "0"
        document.getElementById("newCases").innerHTML = data.response[0].cases.new ? data.response[0].cases.new : "0"
        document.getElementById("recoveredCase").innerHTML = data.response[0].cases.new ? data.response[0].cases.new : "0"
        document.getElementById("totalCases").innerHTML = data.response[0].cases.total ? data.response[0].cases.total : "0"
        document.getElementById("totalDeaths").innerHTML = data.response[0].deaths.total ? data.response[0].deaths.total : "0"
        document.getElementById("totalTest").innerHTML = data.response[0].tests.total ? data.response[0].tests.total : "0"
        console.log(data.response[0]);
    } catch (error) {
        // console.error(error);
    }

    // console.log(countryName);
    
    // console.log(country);

    

}

