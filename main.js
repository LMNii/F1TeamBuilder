// A $( document ).ready() block.
$( document ).ready(function() {
    let budget = 150000000;
    let boughtDrivers = 0;
    let driver = [{name:"Hamilton", cost: 15000000},
        {name:"Bottas", cost:800000},
        {name:"Vettel", cost :13000000},
        {name:"Leclerc", cost:800000},
        {name:"Verstappen", cost:1000000 },
        {name:"Albon", cost:500000},
        {name:"Sainz", cost:400000},
        {name:"Norris", cost:300000},
        {name:"Ricciardo", cost:12000000},
        {name:"Ocon", cost:300000},
        {name:"Gasly", cost:400000},
        {name:"Kvyat", cost:600000},
        {name:"Magnussen", cost:600000},
        {name:"Grosjean", cost:700000},
        {name:"Perez", cost:1000000},
        {name:"Stroll", cost:400000},
        {name:"Raikonnen", cost:10000000},
        {name:"Giovinazzi", cost:200000},
        {name:"Russel", cost:300000},
        {name:"Latifi", cost:200000}];
    let chassis = [{name:"Mercedes W11", cost:100000000},
        {name:"Ferrari SF1000", cost:8000000},
        {name:"Red Bull RB16", cost:9000000},
        {name:"McLaren MCL35", cost:7000000},
        {name:"Renault R.S.20", cost:6000000},
        {name:"RacingPoint RP20", cost:7000000},
        {name:"Alpha Tauri AT01", cost:5000000},
        {name:"Haas VF-20", cost:7000000},
        {name:"Alfa Romeo C39", cost:5000000},
        {name:"Williams FW43", cost:3000000}];
    let powerUnit = [{name:"Mercedes M11 EQ Performance", cost:8000000},
        {name:"Ferrari 065", cost:6000000},
        {name:"Honda RA620H", cost:5000000},
        {name:"Renault E-Tech 20", cost:4000000}];

$('.driverBuyBtn').click(function () {
    let driverName = $(this).attr('name');
    boughtDrivers+= 1;
    console.log(driverName);
    buyDriver(driverName);
    if (boughtDrivers === 2){
        $('.driverBuyBtn').prop("disabled", true);
        $('.driverBuyBtn').css('background', '#aaa');
    }
});
    function buyDriver(x){
        let buyDriverSelector = $('button[name="' + x + '"]');
        let disableButton = buyDriverSelector.prop("disabled",true);
        let greyButton = buyDriverSelector.css('background', '#aaa');
        if (x === "Ham"){
            budget -= driver[0]['cost'];
            disableButton;
            greyButton;
        }

        if (x === "Bot") {
            budget -= driver[1]['cost'];
            disableButton;
            greyButton;
        }

        if (x === "Vet") {
            budget -= driver[2]['cost'];
            disableButton;
            greyButton;
        }
        if (x === "Lec") {
            budget -= driver[3]['cost'];
            disableButton;
            greyButton;
        }
        console.log(budget);
        return budget;
    }
});