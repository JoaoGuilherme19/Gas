import myJson from './gas.json' assert {type: 'json'}

function AvgPrice(myArray) {
    var i = 0, sum = 0, ArrayLen = myArray.length;
    while(i < ArrayLen) {
        sum = sum + myArray[i++];
    }
    return sum / ArrayLen;
}

//FIRST YEAR
const firstYear = myJson.AvrgGas[0].year;
const firstYearMonths = myJson.AvrgGas[0].months;
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
console.log(TOarray);

//ESTADOS

const ano = document.getElementById('ano');
const canvas = document.getElementById('canvas');
const meses = document.getElementById('meses');
const estado = document.getElementById('estado');

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
  
    const dataFirst = {
      labels: labels,
      datasets: [{
          label: "R$/litro da Gasolina",
          backgroundColor: 'rgb(255, 00, 132)',
          borderColor: 'rgb(255, 00, 132)',
          data: firstYearPrices,
        }]
    };

    const dataSecond = {
        labels: labels,
        datasets: [{
            label: "R$/litro da Gasolina",
            backgroundColor: 'rgb(243, 220, 68)',
            borderColor: 'rgb(243, 220, 68)',
            data: secondYearPrices,
            }]
    };

    const dataThird = {
        labels: labels,
        datasets: [{
            label: "R$/litro da Gasolina",
            backgroundColor: 'rgb(00, 255, 132)',
            borderColor: 'rgb(00, 255, 132)',
            data: thirdYearPrices
            }]
    };

    const dataFourth = {
        labels: labels,
        datasets: [{
            label: "R$/litro da Gasolina",
            backgroundColor: 'rgb(14, 162, 235)',
            borderColor: 'rgb(14, 162, 235)',
            data: fourthYearPrices,
            }]
    };

    const dataFifth = {
        labels: labels,
        datasets: [{
            label: "R$/litro da Gasolina",
            backgroundColor: 'rgb(255, 100, 86)',
            borderColor: 'rgb(255, 100, 86)',
            data: fifthYearPrices,
        }]
    };

    const dataSixth = {
        labels: labels,
        datasets: [{
            label: "R$/litro da Gasolina",
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)',
            data: sixthYearPrices,
            }]
    };
    
    const myChart = (data) => {
    canvas.innerHTML = `<canvas id="myChart" width="400" height="150"></canvas>`
    const config = {
        type: 'line',
        data: data,
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
                myChart(dataFirst),
                document.getElementById('yearTitle').innerHTML = `<h1>${firstYear}<strong> - R$ ${firstYearPrice} / Preço médio do ano</strong></h1>`)
        }
        else if (ano.value === "2018") {
            return (
                myChart(dataSecond),
                document.getElementById('yearTitle').innerHTML = `<h1>${secondYear}<strong> - R$ ${secondYearPrice} / Preço médio do ano</strong></h1>`)
        }
        else if (ano.value === "2019") {
            return(
                myChart(dataThird),
                document.getElementById('yearTitle').innerHTML = `<h1>${thirdYear}<strong> - R$ ${thirdYearPrice} / Preço médio do ano</strong></h1>`)
        }
        else if (ano.value === "2020") {
            return (
                myChart(dataFourth),
                document.getElementById('yearTitle').innerHTML = `<h1>${fourthYear}<strong> - R$ ${fourthYearPrice} / Preço médio do ano</strong></h1>`)
        }
        else if (ano.value === "2021") {
            return (
                myChart(dataFifth),
                document.getElementById('yearTitle').innerHTML = `<h1>${fifthYear}<strong> - R$ ${fifthYearPrice} / Preço médio do ano</strong></h1>`)
        }
        else if (ano.value === "2022") {
            return (
                myChart(dataSixth),
                document.getElementById('yearTitle').innerHTML = `<h1>${sixthYear}<strong> - R$ ${sixthYearPrice} / Preço médio do ano</strong></h1>`)
        }
    
    }
    insertDates();

    
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
        new Chart(
        document.getElementById('myChartYears'),
        configYears
    )}

    // GRAFICO DOS ANOS



    // GRAFICO DOS MESES
    
    // REGIOES

    const datasetNO = {
        type: 'line',
        label: 'Norte',
        data: NOarray,
        backgroundColor: 'rgb(200, 55, 255)',
        borderColor: 'rgb(200, 55, 255)'
    }
    const datasetNE = {
        type: 'line',
        label: 'Nordeste',
        data: NEarray,
        backgroundColor: 'rgb(255, 125, 50)',
        borderColor: 'rgb(255, 125, 50)'
    }
    const datasetCO = {
        type: 'line',
        label: 'Centro-Oeste',
        data: COarray,
        backgroundColor: 'rgb(50, 100, 50)',
        borderColor: 'rgb(50, 100, 50)'
    }
    const datasetSE = {
        type: 'line',
        label: 'Sudeste',
        data: SDarray,
        backgroundColor: 'rgb(0, 255, 0)',
        borderColor: 'rgb(0, 255, 0)'
    }
    const datasetSU = {
        type: 'line',
        label: 'Sul',
        data: SUarray,
        backgroundColor: 'rgb(50, 100, 200)',
        borderColor: 'rgb(50, 100, 200)'
    }

    // REGIOES
  
    // NORTE
    const dataAc = {
        datasets: [{
            type: 'line',
            label: 'Acre',
            data: ACarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
          },datasetNO],
          labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataAm = {
        datasets: [{
            type: 'line',
            label: 'Amazonas',
            data: AMarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNO],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
        }
    const dataAp = {
        datasets: [{
            type: 'line',
            label: 'Amapá',
            data: AParray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNO],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
        }
    const dataRo = {
        datasets: [{
            type: 'line',
            label: 'Rondônia',
            data: ROarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNO],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataRr = {
        datasets: [{
            type: 'line',
            label: 'Roraima',
            data: RRarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNO],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataTo = {
        datasets: [{
            type: 'line',
            label: 'Tocantins',
            data: TOarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNO],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
        }
    // NORTE AC AM AP RO RR TO

    // NORDESTE
    const dataAl = {
        datasets: [{
            type:'line',
            label: 'Alagoas',
            data: ALarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
        }
    const dataBa = {
        datasets: [{
            type: 'line',
            label: 'Bahia',
            data: BAarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataCe = {
        datasets: [{
            type: 'line',
            label: 'Ceará',
            data: CEarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataMa = {
        datasets: [{
            type: 'line',
            label: 'Maranhão',
            data: MAarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataPe = {
        datasets: [{
            type: 'line',
            label: 'Pernambuco',
            data: PEarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataPb = {
        datasets: [{
            type: 'line',
            label: 'Paraíba',
            data: PBarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataPi = {
        datasets: [{
            type: 'line',
            label: 'Piauí',
            data: PIarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataRn = {
        datasets: [{
            type: 'line',
            label: 'Rio Grande do Norte',
            data: RNarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataSe = {
        datasets: [{
            type: 'line',
            label: 'Sergipe',
            data: SEarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetNE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    // NORDESTE AL BA CE MA PB PE PI RN SE

    // CENTRO OESTE
    const dataDf = {
        datasets: [{
            type: 'line',
            label: 'Distrito Federal',
            data: DFarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetCO],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataGo = {
        datasets: [{
            type: 'line',
            label: 'Goiás',
            data: GOarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetCO],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataMt = {
        datasets: [{
            type: 'line',
            label: 'Mato Grosso',
            data: MTarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetCO],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataMs = {
        datasets: [{
            type: 'line',
            label: 'Mato Grosso do Sul',
            data: MSarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetCO],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    // CENTRO OESTE GO MT MS DF
    // SUDESTE
    const dataEs = {
        datasets: [{
            type: 'line',
            label: 'Espírito Santo',
            data: ESarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetSE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataMg = {
        datasets: [{
            type: 'line',
            label: 'Minas Gerais',
            data: MGarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetSE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataRj = {
        datasets: [{
            type: 'line',
            label: 'Rio de Janeiro',
            data: RJarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetSE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataSp = {
        datasets: [{
            type: 'line',
            label: 'São Paulo',
            data: SParray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetSE],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    // SUDESTE ES MG RJ SP
    // SUL 
    const dataSc = {
        datasets: [{
            type: 'line',
            label: 'Santa Catarina',
            data: SCarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetSU],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataPr = {
        datasets: [{
            type: 'line',
            label: 'Paraná',
            data: PRarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetSU],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    const dataRs = {
        datasets: [{
            type: 'line',
            label: 'Rio Grande do Sul',
            data: RSarray,
            backgroundColor: 'rgb(200, 50, 100)',
            borderColor: 'rgb(200, 50, 100)'
            },datasetSU],
            labels: ['2017', '2018', '2019', '2020', '2021', '2022']
    }
    // SUL SC PR RS

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
        if (estado.value === "AC") {
            return (
            myChartsMonths(dataAc),
            document.getElementById('monthTitle').innerText = estadoSelected
            )
        }
        else if (estado.value === "AL") {
            return (myChartsMonths(dataAl),
            document.getElementById('monthTitle').innerText = estadoSelected
            )
        }
        else if (estado.value === "AP") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataAm))
        }
        else if (estado.value === "AM") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataAp))
        }
        else if (estado.value === "BA") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataBa))
        }
        else if (estado.value === "CE") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataCe))
        }
        else if (estado.value === "DF") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataDf))
        }
        else if (estado.value === "ES") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataEs))
        }
        else if (estado.value === "GO") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataGo))
        }
        else if (estado.value === "MA") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataMa))
        }
        else if (estado.value === "MS") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataMg))
        }
        else if (estado.value === "MT") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataMs))
        }
        else if (estado.value === "MG") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataMt))
        }
        else if (estado.value === "PA") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataPa))
        }
        else if (estado.value === "PB") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataPb))
        }
        else if (estado.value === "PR") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataPe))
        }
        else if (estado.value === "PE") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataPi))
        }
        else if (estado.value === "PI") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataPr))
        }
        else if (estado.value === "RJ") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataRj))
        }
        else if (estado.value === "RN") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataRn))
        }
        else if (estado.value === "RS") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataRo))
        }
        else if (estado.value === "RO") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataRr))
        }
        else if (estado.value === "RR") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataRs))
        }
        else if (estado.value === "SC") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataSc))
        }
        else if (estado.value === "SE") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataSe))
        }
        else if (estado.value === "SP") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataSp))
        }
        else if (estado.value === "TO") {
            return (document.getElementById('monthTitle').innerText = estadoSelected,
            myChartsMonths(dataTo))
        }


    }
    insertMonths();
    // GRAFICO DOS MESES

    YearsPercent()
    myChartYears()
    ano.addEventListener('change', function (e) {
      e.preventDefault();
      insertDates();
    });
    estado.addEventListener('change', function (e) {
      e.preventDefault();
      insertMonths();
    })



  