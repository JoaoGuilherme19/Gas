import myJson from './gas.json' assert {type: 'json'}

const ano = document.getElementById('ano');
const canvas = document.getElementById('canvas');
const meses = document.getElementById('meses');
const estado = document.getElementById('estado');
const minEstados = document.getElementById('minEstados')
const maxEstados = document.getElementById('maxEstados')
const yearsDunut = document.getElementById('yearsDunut')
const horas = document.getElementById('horas');

$(window).on('load', function () {
        $('#preloader .inner').delay(1000).fadeOut();
        $('#preloader').delay(1000).fadeOut('slow'); 
        $('body').delay(1000).css({'overflow': 'visible'});
      })



function AvgPrice(myArray) {
    var i = 0, sum = 0, ArrayLen = myArray.length;
    while(i < ArrayLen) {
        sum = sum + myArray[i++];
    }
    return sum / ArrayLen;
}

//FIRST YEAR
const firstYearMonths = myJson.AvrgGas[0].months;
const firstYear = myJson.AvrgGas[0].year;
const firstYearPrices = []
for (let i = 0; i < firstYearMonths.length; i++) {
    firstYearPrices.push(Number(firstYearMonths[i].price))
}

const firstYearPrice = AvgPrice(firstYearPrices).toFixed(2);
//FIRST YEAR

//SECOND YEAR
const secondYear = myJson.AvrgGas[1].year;
const secondYearMonths = myJson.AvrgGas[1].months;
const secondYearPrices = []
for (let i = 0; i < secondYearMonths.length; i++) {
    secondYearPrices.push(Number(secondYearMonths[i].price))
}

const secondYearPrice = AvgPrice(secondYearPrices).toFixed(2);
//SECOND YEAR

//THIRD YEAR
const thirdYear = myJson.AvrgGas[2].year;
const thirdYearMonths = myJson.AvrgGas[2].months;
const thirdYearPrices = []
for (let i = 0; i < thirdYearMonths.length; i++) {
    thirdYearPrices.push(Number(thirdYearMonths[i].price))
}

const thirdYearPrice = AvgPrice(thirdYearPrices).toFixed(2);
//THIRD YEAR

//FOURTH YEAR
const fourthYear = myJson.AvrgGas[3].year;
const fourthYearMonths = myJson.AvrgGas[3].months;
const fourthYearPrices = []
for (let i = 0; i < fourthYearMonths.length; i++) {
    fourthYearPrices.push(Number(fourthYearMonths[i].price))
}

const fourthYearPrice = AvgPrice(fourthYearPrices).toFixed(2);
//FOURTH YEAR

//FIFTH YEAR
const fifthYear = myJson.AvrgGas[4].year;
const fifthYearMonths = myJson.AvrgGas[4].months;
const fifthYearPrices = []
for (let i = 0; i < fifthYearMonths.length; i++) {
    fifthYearPrices.push(Number(fifthYearMonths[i].price))
}

const fifthYearPrice = AvgPrice(fifthYearPrices).toFixed(2);
//FIFTH YEAR

//SIXTH YEAR
const sixthYear = myJson.AvrgGas[5].year;
const sixthYearMonths = myJson.AvrgGas[5].months;
const sixthYearPrices = []
for (let i = 0; i < sixthYearMonths.length; i++) {
    sixthYearPrices.push(Number(sixthYearMonths[i].price))
}

const sixthYearPrice = AvgPrice(sixthYearPrices).toFixed(2);

function YearsPercent() {
    const seven = (Number(firstYearPrice) / Number(sixthYearPrice)) * 100;
    return document.getElementById('porcentagem').innerHTML = `<p>A Gasolina Comum teve um aumento em seu preço de ${seven.toFixed(2)}% dos anos de 2017 a 2022.</p>
    <p>Isso devido por uma série de fatores. Um deles é a retomada do crescimento econômico global em 2021, após um 2020 de contração devido à pandemia da Covid-19.</p>`
}

//SIXTH YEAR


function getTime() {
    function zero(x) {
    if (x < 10) {
            x = '0' + x;
        } return x;
    }
    const date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hour = zero(hour);
    minutes = zero(minutes);
    seconds = zero(seconds);

    horas.innerHTML = `<p>${hour}:${minutes}:${seconds}</p>`
}

setInterval(getTime, 1000)

// REGIOES

const NOvalor = myJson.regioes[0].epocas
const NOarray = []
for (let i = 0; i < NOvalor.length; i++) {
    NOarray.push(NOvalor[i].valor)
}
const NEvalor = myJson.regioes[1].epocas
const NEarray = []
for (let i = 0; i < NEvalor.length; i++) {
    NEarray.push(NEvalor[i].valor)
}

const COvalor = myJson.regioes[2].epocas
const COarray = []
for (let i = 0; i < COvalor.length; i++) {
    COarray.push(COvalor[i].valor)
}

const SDvalor = myJson.regioes[3].epocas
const SDarray = []
for (let i = 0; i < SDvalor.length; i++) {
    SDarray.push(SDvalor[i].valor)
}

const SUvalor = myJson.regioes[4].epocas
const SUarray = []
for (let i = 0; i < SUvalor.length; i++) {
    SUarray.push(SUvalor[i].valor)
}

// REGIOES

//ESTADOS

const ACprice = myJson.estados[0].epocas
const ACarray = []
for (let i = 0; i < ACprice.length; i++) {
    ACarray.push(ACprice[i].valor)
}
const ALprice = myJson.estados[1].epocas
const ALarray = []
for (let i = 0; i < ALprice.length; i++) {
    ALarray.push(ALprice[i].valor)
}
const APprice = myJson.estados[2].epocas
const AParray = []
for (let i = 0; i < APprice.length; i++) {
    AParray.push(APprice[i].valor)
}
const AMprice = myJson.estados[3].epocas
const AMarray = []
for(let i = 0; i < AMprice.length; i++ ) {
    AMarray.push(AMprice[i].valor)
}
const BAprice = myJson.estados[4].epocas
const BAarray = []
for(let i = 0; i < BAprice.length; i++ ) {
    BAarray.push(BAprice[i].valor)
}
const CEprice = myJson.estados[5].epocas
const CEarray = []
for(let i = 0; i < CEprice.length; i++ ) {
    CEarray.push(CEprice[i].valor)
}
const DFprice = myJson.estados[6].epocas
const DFarray = []
for(let i = 0; i < DFprice.length; i++ ) {
    DFarray.push(DFprice[i].valor)
}
const ESprice = myJson.estados[7].epocas
const ESarray = []
for(let i =0; i < ESprice.length; i++ ) {
    ESarray.push(ESprice[i].valor)
}
const GOprice = myJson.estados[8].epocas
const GOarray = []
for(let i = 0; i < GOprice.length; i++ ) {
    GOarray.push(GOprice[i].valor)
}
const MGprice = myJson.estados[9].epocas
const MGarray = []
for(let i = 0; i < MGprice.length; i++ ) {
    MGarray.push(MGprice[i].valor)
}
const MSprice = myJson.estados[10].epocas
const MSarray = []
for(let i = 0; i < MSprice.length; i++ ) {
    MSarray.push(MSprice[i].valor)
}
const MTprice = myJson.estados[11].epocas
const MTarray = []
for(let i = 0; i < MTprice.length; i++ ) {
    MTarray.push(MTprice[i].valor)
}
const PAprice = myJson.estados[12].epocas
const PAarray = []
for(let i = 0; i < PAprice.length; i++ ) {
    PAarray.push(PAprice[i].valor)
}
const MAprice = myJson.estados[13].epocas
const MAarray = []
for(let i = 0; i < MAprice.length; i++ ) {
    MAarray.push(MAprice[i].valor)
}
const PBprice = myJson.estados[14].epocas
const PBarray = []
for(let i = 0; i < PBprice.length; i++ ) {
    PBarray.push(PBprice[i].valor)
}
const PRprice = myJson.estados[15].epocas
const PRarray = []
for(let i = 0; i < PRprice.length; i++ ) {
    PRarray.push(PRprice[i].valor)
}
const PEprice = myJson.estados[16].epocas
const PEarray = []
for(let i = 0; i < PEprice.length; i++ ) {
    PEarray.push(PEprice[i].valor)
}
const PIprice = myJson.estados[17].epocas
const PIarray = []
for(let i = 0; i < PIprice.length; i++ ) {
    PIarray.push(PIprice[i].valor)
}
const RJprice = myJson.estados[18].epocas
const RJarray = []
for(let i = 0; i < RJprice.length; i++ ) {
    RJarray.push(RJprice[i].valor)
}
const RNprice = myJson.estados[19].epocas
const RNarray = []
for(let i = 0; i < RNprice.length; i++ ) {
    RNarray.push(RNprice[i].valor)
}
const RSprice = myJson.estados[20].epocas
const RSarray = []
for(let i = 0; i < RSprice.length; i++ ) {
    RSarray.push(RSprice[i].valor)
}
const ROprice = myJson.estados[21].epocas
const ROarray = []
for(let i = 0; i < ROprice.length; i++ ) {
    ROarray.push(ROprice[i].valor)
}
const RRprice = myJson.estados[22].epocas
const RRarray = []
for(let i = 0; i < RRprice.length; i++ ) {
    RRarray.push(RRprice[i].valor)
}
const SCprice = myJson.estados[23].epocas
const SCarray = []
for(let i = 0; i < SCprice.length; i++ ) {
    SCarray.push(SCprice[i].valor)
}
const SPprice = myJson.estados[24].epocas
const SParray = []
for(let i = 0; i < SPprice.length; i++ ) {
    SParray.push(SPprice[i].valor)
}
const SEprice = myJson.estados[25].epocas
const SEarray = []
for(let i = 0; i < SEprice.length; i++ ) {
    SEarray.push(SEprice[i].valor)
}
const TOprice = myJson.estados[26].epocas
const TOarray = []
for(let i = 0; i < TOprice.length; i++){
    TOarray.push(TOprice[i].valor)
}

const dataStatesArray = [
    ACarray, ALarray, AParray, AMarray, BAarray, 
    CEarray, DFarray, ESarray, GOarray, MGarray, MSarray, MTarray, 
    PAarray, MAarray, PBarray, PRarray, PEarray, PIarray, RJarray, 
    RNarray, RSarray, ROarray, RRarray, SCarray, SParray, SEarray, 
    TOarray]

//ESTADOS



const labels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];
  
  function dataSetYears(data, color, borderColor) {
    const dataset = {
      labels: labels,
      datasets: [{
          label: "R$/litro da Gasolina",
          backgroundColor: color,
          borderColor: borderColor,
          data: data,
          fill: true,
          pointBorderWidth: 1,
          borderWidth: 1
        }]
    }
    return dataset
  }
    
    const myChart = (data, color, borderColor) => {
    canvas.innerHTML = `<canvas id="myChart" height="250" width="450"></canvas>`
    const config = {
        type: 'line',
        data: dataSetYears(data, color, borderColor),
        options: {
            interaction: {
              intersect: false,
              mode: 'nearest'
            }
          }
    };
    new Chart(
        document.getElementById('myChart'),
        config
        )
        
    };
    function insertDates() {
        if (ano.value === "2017") {
            return (
                myChart(firstYearPrices, 'rgb(255, 00, 132, 0.60)', 'rgb(255, 00, 132)'),
                document.getElementById('yearTitle').innerHTML = `<h1>${firstYear}<strong> - R$ ${firstYearPrice} / Preço médio do ano</strong></h1>`)
        }
        else if (ano.value === "2018") {
            return (
                myChart(secondYearPrices, 'rgb(243, 220, 68, 0.60)', 'rgb(243, 220, 68)'),
                document.getElementById('yearTitle').innerHTML = `<h1>${secondYear}<strong> - R$ ${secondYearPrice} / Preço médio do ano</strong></h1>`)
        }
        else if (ano.value === "2019") {
            return(
                myChart(thirdYearPrices, 'rgb(00, 255, 132, 0.60)', 'rgb(00, 255, 132)'),
                document.getElementById('yearTitle').innerHTML = `<h1>${thirdYear}<strong> - R$ ${thirdYearPrice} / Preço médio do ano</strong></h1>`)
        }
        else if (ano.value === "2020") {
            return (
                myChart(fourthYearPrices, 'rgb(14, 162, 235, 0.60)', 'rgb(14, 162, 235)'),
                document.getElementById('yearTitle').innerHTML = `<h1>${fourthYear}<strong> - R$ ${fourthYearPrice} / Preço médio do ano</strong></h1>`)
        }
        else if (ano.value === "2021") {
            return (
                myChart(fifthYearPrices, 'rgb(255, 100, 86, 0.60)', 'rgb(255, 100, 86)'),
                document.getElementById('yearTitle').innerHTML = `<h1>${fifthYear}<strong> - R$ ${fifthYearPrice} / Preço médio do ano</strong></h1>`)
        }
        else if (ano.value === "2022") {
            return (
                myChart(sixthYearPrices, 'rgb(75, 192, 192, 0.60)', 'rgb(75, 192, 192)'),
                document.getElementById('yearTitle').innerHTML = `<h1>${sixthYear}<strong> - R$ ${sixthYearPrice} / Preço médio do ano</strong></h1>`)
        }
    
    }
    
    // GRAFICO DOS ANOS

    const arrayYearsPrice = []

    for (let i = 0; i < myJson.AvrgGas.length; i++) {
        arrayYearsPrice.push(myJson.AvrgGas[i].price)
    }

    const dataYears = {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: "R$/litro da Gasolina",
            backgroundColor: [
                'rgb(255, 00, 132)',
                'rgb(243, 220, 68)',
                'rgb(00, 255, 132)',
                'rgb(14, 162, 235)',
                'rgb(255, 100, 86)',
                'rgb(95, 192, 192)'
            ],
            borderColor: [
                'rgb(255, 00, 132)',
                'rgb(243, 220, 68)',
                'rgb(00, 255, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 100, 86)',
                'rgb(75, 192, 192)'
            ],
            data: arrayYearsPrice,
        }]
    }

    const configYears = {
        type: 'doughnut',
        data: dataYears
    }

    const myChartYears = () => {
        yearsDunut.innerHTML = `<canvas id="myChartYears" width="220"></canvas>`
        new Chart(
        document.getElementById('myChartYears'),
        configYears
    )}

    // GRAFICO DOS ANOS

    // GRAFICO DOS MESES
    
    // REGIOES

    function setWindDirection(label, data, color, borderColor) {
        const dataset = {
        type: 'line',
        label: label,
        data: data,
        backgroundColor: color,
        borderColor: borderColor,
        fill: true,
        pointBorderWidth: 1,
        borderWidth: 2
        }
        return dataset
    }

    // REGIOES
  
    function dataStates(data, label, dataLocale) {
       const config = {
                datasets: [{
                    type: 'line',
                    label: label,
                    data: data,
                    backgroundColor: 'rgb(200, 50, 100, 0.2)',
                    borderColor: 'rgb(200, 50, 100)',
                    fill: true,
                    pointBorderWidth: 1,
                    borderWidth: 2
                },dataLocale],
                labels: ['2017', '2018', '2019', '2020', '2021', '2022']
            }
        return config
    }

    const myChartsMonths = (data) => {
        meses.innerHTML = `<canvas id="myChartsMonths" height="150" width="400"></canvas>`
        const configMonths = {
            type: 'line',
            data: data,
            options: {
                interaction: {
                  intersect: false,
                  mode: 'index'
                }
              }
        }
        new Chart(
        document.getElementById('myChartsMonths'),
        configMonths
    )}

    function insertMonths() {
        const estadoSelected = estado.options[estado.selectedIndex].text
        const dataDirecoes = myJson.direcoes

        const localeWind = () => {for (let i = 0; i < dataDirecoes.length; i++) {
                if(dataDirecoes[i].direcao.estados.includes(estadoSelected)) {
                    if (dataDirecoes[i].direcao.nome == 'Norte') {
                        return setWindDirection('Norte', NOarray, 'rgb(200, 55, 255, 0.2)' , 'rgb(200, 55, 255)')
                    } else if (dataDirecoes[i].direcao.nome == 'Nordeste') {
                        return setWindDirection('Nordeste', NEarray, 'rgb(255, 125, 50, 0.2)', 'rgb(255, 125, 50)')
                    } else if (dataDirecoes[i].direcao.nome == 'Centro-Oeste') {
                        return setWindDirection('Centro-Oeste', COarray, 'rgb(50, 100, 50, 0.2)', 'rgb(50, 100, 50)')
                    } else if (dataDirecoes[i].direcao.nome == 'Sudeste') {
                        return setWindDirection('Sudeste', SDarray, 'rgb(0, 255, 0, 0.2)', 'rgb(0, 255, 0)')
                    } else if (dataDirecoes[i].direcao.nome == 'Sul') {
                        return setWindDirection('Sul', SUarray, 'rgb(50, 100, 200, 0.2)', 'rgb(50, 100, 200)')
                    }
                }
            }
        }

        for(let i = 0; i < estado.length; i++) {
            if(estado[i].value == estadoSelected) {
                    myChartsMonths(dataStates(dataStatesArray[i], estadoSelected, localeWind()))
                    document.getElementById('monthTitle').innerText = estadoSelected
                }
            }
    }
    
    // GRAFICO DOS MESES
 
    // MIN E MAX ESTADOS
    const allStates = myJson.estados
    const allStatesArray = []
    const allVal = []
    const allStatesNames = []
    for(let i = 0; i < allStates.length; i++) {
        allStatesArray.push(myJson.estados[i].epocas)
    }
    for(let i = 0; i < allStates.length; i++) {
        allStatesNames.push(myJson.estados[i].nome)
    }
    for(let i = 0; i < allStatesArray.length; i++) {
        allVal.push(allStatesArray[i][5].valor)
    }
    const min = Math.min(...allVal)
    const max = Math.max(...allVal)

    console.log(allStatesNames, allVal);

    function compareStatesMin() {
        for(let i = 0; i < allVal.length; i++) {
            if(min == allVal[i]) {
                const startPrice = allStates[i].epocas[0].valor
                const endPrice = allStates[i].epocas[5].valor
                const price = endPrice - startPrice
                const percentage = ( startPrice / endPrice) * 100
                
                minEstados.innerText = allStates[i].nome + ` - R$ ${endPrice}`;
                document.getElementById('stateMinPercentage').innerHTML = `
                <span class="material-symbols-outlined">
                change_history
                </span>
                <h1>R$ ${price.toFixed(2)} - ${percentage.toFixed(2)}%</h1>`
            }
        }
    }
    function compareStatesMax() {
        for(let i = 0; i < allVal.length; i++) {
            if(max == allVal[i]) {
                const startPrice = allStates[i].epocas[0].valor
                const endPrice = allStates[i].epocas[5].valor
                const price = endPrice - startPrice
                const percentage = ( startPrice / endPrice) * 100
                
                maxEstados.innerText = allStates[i].nome + ` - R$ ${endPrice}`;
                document.getElementById('stateMaxPercentage').innerHTML = `
                <span class="material-symbols-outlined">
                change_history
                </span>
                <h1>R$ ${price.toFixed(2)} - ${percentage.toFixed(2)}%</h1>`
            }
        }
    }
     
    // MIN E MAX ESTADOS
   
    insertDates();
    YearsPercent()
    myChartYears()
    insertMonths();
    compareStatesMax()
    compareStatesMin() 
    ano.addEventListener('change', function (e) {
      e.preventDefault();
      insertDates();
    });
    estado.addEventListener('change', function (e) {
      e.preventDefault();
      insertMonths();
    }) 



  