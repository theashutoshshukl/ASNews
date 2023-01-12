// News App by Ashutosh shukla
// Date code for fetching letest content and using api for free
let date = new Date();
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

// News api
let fetchurl = `https://newsapi.org/v2/everything?q=tata&from=${year}-${month + 1}-${day}&sortBy=publishedAt&apiKey=38dafe0e75a54842826a462c20d2ee5f`;
let cards = document.querySelector('.cards');


// Fetching news and await his response by async await system
const fetchNews = async () => {
  let response = await fetch(fetchurl);
  let res = response.json();
  return res;
}

// Calling fetchNews and dispaying news content in html
const mainFunc = async () => {
  let news = await fetchNews();
  let articales = news.articles;
  console.log(articales);
  let ihtml;

  for (let i = 0; i < articales.length; i++) {
    ihtml += `<div class="card justify-center my-2 mx-2">
        <img src="${articales[i].urlToImage}" alt="url Image">
        <div class="card-body">
          <h2>${articales[i].title}</h2>
          <p class="card-text">${articales[i].description}</p>
          <button class="btn-brown"><a href="${articales[i].url}" target="_blank">Know more</a></button>
        </div>
      </div>`
  }
  cards.innerHTML = ihtml;

  // for removing undifined from page
  let a = cards.firstChild;
  a.remove()

}
mainFunc();
