const loadResult = () =>{
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value ;

    searchField.value = '';

    // console.log(searchText);

    const url = `https://api.covid19api.com/live/country/${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then( data => displayResult(data[data.length - 1]));
}

const displayResult = number =>{
    const resultContainer = document.getElementById('result-container');
    resultContainer.textContent ='';
    const div = document.createElement('div');
    div.classList.add('text-center');
    div.innerHTML=`
                <div class="result-box">
                    <h3>Date: ${number.Date.slice(0,10)}</h3>
                    <h2>Country Name: ${number.Country}</h2>
                    <h2>Total Case: ${number.Confirmed}</h2>
                    <h2>Total Recovery: ${number.Active}</h2>
                    <h2>Recovery Today: ${number.Recovered}</h2>
                    <h2>Total Death: ${number.Deaths}</h2>
                </div>
    `;
    resultContainer.appendChild(div);

}