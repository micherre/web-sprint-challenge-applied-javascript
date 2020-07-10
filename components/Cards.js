// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
function cardMaker(article){
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    const headlineDiv = document.createElement('div')
    headlineDiv.classList.add('headline')
    headlineDiv.textContent = article.headline
    cardDiv.appendChild(headlineDiv)

    const authorDiv = document.createElement('div')
    authorDiv.classList.add('author')
    cardDiv.appendChild(authorDiv)

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    authorDiv.appendChild(imgContainer)

    const authorImg = document.createElement('img')
    authorImg.src = article.authorPhoto
    imgContainer.appendChild(authorImg)

    const nameSpan = document.createElement('div')
    nameSpan.textContent = `By ${article.authorName}`
    authorDiv.appendChild(nameSpan)

    cardDiv.addEventListener('click', () => console.log(article.headline))

    return cardDiv
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((res) => {
        createCardList(res.data)
    })
    .catch((err) => {
        console.log(err)
    })


function createCardList(data) {
    const cardHolder = document.querySelector('.cards-container')
    const languageArticles = data.articles
    const articleSections = Object.keys(languageArticles)
    articleSections.forEach((articleSectionName) => {
        languageArticles[articleSectionName].forEach((cardInfo) => {
            const newArticle = cardMaker(cardInfo)
            cardHolder.appendChild(newArticle)
        })          
    })
}



const data = {"articles":{"javascript":[{"headline":"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUFF"},{"headline":"Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences","authorPhoto":"./assets/bones.jpg","authorName":"BONES R. LIFE"},{"headline":"When to Rest, When to Spread: Why There Are Two Meanings Behind '...'","authorPhoto":"./assets/puppers.jpg","authorName":"PUPPER S. DOGGO"},{"headline":"Typescript: Ten Things you Should Know Before Building Your Next Angular Application","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUFF"}],"bootstrap":[{"headline":"Bootstrap 5: Get a Sneak Peak at all the New Features","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"},{"headline":"UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},{"headline":"The Hottest New Bootstrap 4 Components Every Developer Needs to Know About","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"}],"technology":[{"headline":"AI: What Are the Ethical Ramifications of the Future?","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},{"headline":"AR or VR: How We Will See the World Through a Digital Lense","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},{"headline":"Quantum Computing: Where we Are Now, and Where We Will Be Very Soon","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"}],"jquery":[{"headline":"History of Javascript Libraries: from jQuery to React","authorPhoto":"./assets/puppers.jpg","authorName":"PUPPER S. DOGGO"},{"headline":"jQuery Animations: When and Where to Use Them, and Not CSS","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"},{"headline":"Why I Use jQuery in Every Application I Create and Why You Should Too","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"}],"node":[{"headline":"Node.js in 2018: Which Framework? Express, Sails, Hapi?","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUF"},{"headline":"MongoDB: NoSQL vs. SQL, the Debate Continues..","authorPhoto":"./assets/bones.jpg","authorName":"BONES R. LIFE"}]}}

createCardList(data)