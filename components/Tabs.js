// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address:
// https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints 
// to review the structure.
// Iterate over the topics creating a new tab for each topic, 
// and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included 
// in the HTML via script element

axios.get('https://lambda-times-backend.herokuapp.com/topics') 
    .then((res) => {
        console.log(res.data.topics.length)
        res.data.topics.forEach((item) => {
            const tabAnchor = document.querySelector('.topics')
            const newTab = document.createElement('div')
            newTab.classList.add('tab')
            newTab.textContent = (item)
            tabAnchor.appendChild(newTab)
        })
    })
    .catch((err) => {
        console.log(err)
    })
    // for(let i = 0; i< res.data.topics.length; i++){