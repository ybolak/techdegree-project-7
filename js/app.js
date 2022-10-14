/* ============================================= */
/*                 Alert Banner                  */
/* ============================================= */

const alertBanner = document.getElementById('alert');
alertBanner.innerHTML = `<div class="alert-banner">
                            <p><strong>Alert:</strong> You have unread messages</p>
                            <p class="alert-banner-close">x</p>
                        </div>`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});


/* ============================================= */
/*                 Notification                  */
/* ============================================= */

const alertIcon = document.querySelector('.bell');

alertIcon.addEventListener('click', () => {
    const box = document.querySelector('.box');
    if (box) {
        box.classList.toggle('notification-open');
    }
});


/* ============================================= */
/*                 Traffic Nav                   */
/* ============================================= */

const trafficNav = document.querySelector('.traffic-nav');

trafficNav.addEventListener('click', (e) => {    
    if (e.target.tagName === 'LI') { 
        const element = e.target;
        const items = document.getElementsByClassName('traffic-nav-link');       
        for (let i=0; i<items.length; i++) {
            let item = items[i];
            if (item.classList.contains('selected')) {
                item.classList.remove('selected');
            }
        }
        element.classList.add('selected');
    }   
});


/* ============================================= */
/*                 Line Chart                    */
/* ============================================= */

const trafficCanvas = document.getElementById('traffic-chart');


let hourly = {
    labels: ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"],
    datasets: [{
        data:[10, 9, 5, 3, 4, 10, 30, 40, 35, 25, 15, 15, 25, 20, 15, 20, 25, 30, 40, 35, 25, 20, 15, 10],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let daily = {
    labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "STA"],
    datasets: [{
        data:[75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let weekly = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data:[750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let monthly = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [{
        data:[4500, 5000, 6000, 7000, 7500, 8000, 9000, 9500, 8500, 7000, 6000, 5000],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    tension: 0.4,
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficData = hourly;

// click handler for chart to change data
// when nav UL is clicked, event occurs
trafficNav.addEventListener('click', e => {
    const navItem = e.target.textContent;
    if (navItem === 'Hourly') {
        trafficData = hourly;             
    } else if (navItem === 'Daily') {
        trafficData = daily;
    } else if (navItem === 'Weekly') {
        trafficData = weekly;
    } else if (navItem === 'Monthly') {
        trafficData = monthly; 
    }

    trafficChart.destroy();

    trafficChart = new Chart(trafficCanvas, {
        type: 'line',   
        data: trafficData,
        options: trafficOptions
    });
});

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',   
    data: trafficData,
    options: trafficOptions
});
    

/* ============================================= */
/*                  Bar Graph                    */
/* ============================================= */

const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

/* ============================================= */
/*               Doughnut Chart                  */
/* ============================================= */

const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

/* ============================================= */
/*                  Messaging                    */
/* ============================================= */

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});


/* ============================================= */
/*                Autocomplete                   */
/* ============================================= */

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
let linkTag = searchWrapper.querySelector("a");
let webLink;
let suggestions = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver'
];

function select(element){                                                           
    let selectData = element.textContent;
    inputBox.value = selectData;
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
};

