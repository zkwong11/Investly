getAxiosRequest();
getAxiosRequest5();
getAxiosRequest6();
getAxiosRequest7();
getAxiosRequest8();

function getAxiosRequest() {
    axios.get('https://api.iextrading.com/1.0/stock/market/list/gainers')
    .then( (response) => generateGainers(response))
    .catch( (err) => console.log(err))
}

function getAxiosRequest2() {
    axios.get('https://api.iextrading.com/1.0/stock/market/list/losers')
    .then( (response2) => generateLosers(response2))
    .catch( (err) => console.log(err))
}

function getAxiosRequest3() {
    axios.get('https://api.iextrading.com/1.0/stock/market/list/iexvolume')
    .then( (response3) => generateVolume(response3))
    .catch( (err) => console.log(err))
}

function getAxiosRequest4() {
    axios.get('https://api.iextrading.com/1.0/stock/market/list/iexpercent')
    .then( (response4) => generatePercent(response4))
    .catch( (err) => console.log(err))
}

function getAxiosRequest5() {
    axios.get('https://api.iextrading.com/1.0/stock/market/sector-performance')
    .then( (response5) => generateSector(response5))
    .catch( (err) => console.log(err))
}

function getAxiosRequest6() {
    const apiKey = '91c4711bc08247559575d5c6c3cd4dfa';
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&sortBy=latest&apiKey=${apiKey}`)
    .then( (response6) => generateNews(response6))
    .catch( (err) => console.log(err))
}

function getAxiosRequest7() {
    axios.get('https://api.iextrading.com/1.0/stock/market/upcoming-ipos')
    .then( (response7) => generateUpcomingIpos(response7))
    .catch( (err) => console.log(err))
}

function getAxiosRequest8() {
    axios.get('https://api.iextrading.com/1.0/stock/market/today-ipos')
    .then( (response8) => generateTodayIpos(response8))
    .catch( (err) => console.log(err))
}

function generateGainers(response) {
    let tbody = document.querySelector(".tbody");
    tbody.innerHTML = "";
    
    for(let i=0; i<response.data.length; i++) {
        tbody.innerHTML += 
        `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${response.data[i].symbol}</td>
            <td>$${response.data[i].close}</td>
            <td>${response.data[i].change}</td>
            <td>${response.data[i].changePercent}</td>
            <td>${response.data[i].latestVolume}</td>
            <td>$${response.data[i].week52Low}</td>
        </tr>
        `
    };
    document.querySelector(".date-time").innerHTML = response.data[0].latestTime;
    console.log(response.data);
}

function generateLosers(response2){
    let tbody = document.querySelector(".tbody");
    tbody.innerHTML = "";
    
    for(let i=0; i<response2.data.length; i++) {
        tbody.innerHTML += 
        `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${response2.data[i].symbol}</td>
            <td>$${response2.data[i].close}</td>
            <td>${response2.data[i].change}</td>
            <td>${response2.data[i].changePercent}</td>
            <td>${response2.data[i].latestVolume}</td>
            <td>$${response2.data[i].week52Low}</td>
        </tr>
        `
    };
}

function generateVolume(response3){
    let tbody = document.querySelector(".tbody");
    tbody.innerHTML = "";
    
    for(let i=0; i<response3.data.length; i++) {
        tbody.innerHTML += 
        `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${response3.data[i].symbol}</td>
            <td>$${response3.data[i].close}</td>
            <td>${response3.data[i].change}</td>
            <td>${response3.data[i].changePercent}</td>
            <td>${response3.data[i].latestVolume}</td>
            <td>$${response3.data[i].week52Low}</td>
        </tr>
        `
    };
    noData(response3.data.length);
}

function generatePercent(response4) {
    let tbody = document.querySelector(".tbody");
    tbody.innerHTML = "";
    
    for(let i=0; i<response4.data.length; i++) {
        tbody.innerHTML += 
        `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${response4.data[i].symbol}</td>
            <td>$${response4.data[i].close}</td>
            <td>${response4.data[i].change}</td>
            <td>${response4.data[i].changePercent}</td>
            <td>${response4.data[i].latestVolume}</td>
            <td>$${response4.data[i].week52Low}</td>
        </tr>
        `
    };
    noData(response4.data.length);
}

function noData(resp) {
    let tbody = document.querySelector(".tbody");

    if (resp === 0) {
        tbody.innerHTML = "<br><div class='text-center'> No Market Data </div>";
    }
}

function generateSector(response5) {
    let sector = document.querySelector(".sector-list");
    
    for(let i=0; i<response5.data.length; i++) {
        sector.innerHTML += 
        `
        <div class="sector-items"">
            <h4>${response5.data[i].name}</h4>
            <p>${response5.data[i].performance}</p>
        </div>
        `
    }
}

function generateNews(response6) {
    let news = document.querySelector(".news-section");

    for(let i=0; i<response6.data.articles.length; i++) {
        news.innerHTML +=
        `
        <a href="${response6.data.articles[i].url}">
        <div class="news-items">
            <p>${response6.data.articles[i].title}</p>
            <img class="news-img" src="${response6.data.articles[i].urlToImage}" alt="News Image">
        </div>
        </a>
        `
    }
}

function generateUpcomingIpos(response7) {
    let cb1 = document.querySelector(".cb1");
    
    for(let i=0; i<response7.data.rawData.length; i++) {
        cb1.innerHTML +=
        `
        <li>
        <strong>${response7.data.rawData[i].symbol}</strong> &rarr;
        ${response7.data.rawData[i].companyName}
        (${response7.data.rawData[i].expectedDate})
        </li>
        `
        if (i != response7.data.rawData.length -1) {
            cb1.innerHTML += "<hr>"
        }
    }
}

function generateTodayIpos(response8) {
    let cb2 = document.querySelector(".cb2");
    
    for(let i=0; i<response8.data.rawData.length; i++) {
        cb2.innerHTML +=
        `
        <li>
        <strong>${response8.data.rawData[i].symbol}</strong> &rarr;
        ${response8.data.rawData[i].companyName}
        (${response8.data.rawData[i].expectedDate})
        </li>
        `
        if (i != response8.data.rawData.length -1) {
            cb2.innerHTML += "<hr>"
        }
    }
}


// Auto-refresh page
// setTimeout(function() {
//     window.location.reload(1);
//  }, 5000);