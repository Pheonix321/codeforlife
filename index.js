console.log("This is my js file");


let source = 'the-hindu';
let apiKey = '2db29bf18e4a487abbf5c0c2a21beee1'

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest(); //creating XMLHTTPRequest object
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);  

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                    <b>Breaking News ${index + 1}:</b> ${element["title"]}<hr>
                                </button>
                            </h2>

                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");
    }
}
xhr.send() 

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    let newsCards = document.getElementsByClassName('accordion-item');
    Array.from(newsCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("div")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})

