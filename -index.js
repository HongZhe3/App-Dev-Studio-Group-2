
// var  data = require('./contents.json');


const contentData = document.getElementById('contentData');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [{
    "title": "I got my first pet",
    "author":  "James"
},
{
    "title": "Javascript guide",
    "author":  "Johnson"
},
{
    "title": "How to install git",
    "author":  "Johnson"
},
{
    "title": "How to cook roasted chicken",
    "author":  "Tom"
},
{
    "title": "Weather in Singapore",
    "author":  "Jane"
},
{
    "title": "Best stories to read",
    "author":  "Ben"
},
{
    "title": "Upcoming movies",
    "author":  "Ron"
},
{
    "title": "Best holiday site",
    "author":  "Juliet"
},
{
    "title": "New iPhone arriving ",
    "author":  "Julia"
},
{
    "title": "Need help for a programming language!",
    "author":  "Timothy"
}];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredContents = hpCharacters.filter((contents) => {
        return (
            contents.title.toLowerCase().includes(searchString) ||
            contents.author.toLowerCase().includes(searchString)
        );
    });
    displayContents(filteredContents);
});

const loadContents = async () => {
    try {
        // const res = await fetch('https://search-demo2.herokuapp.com/contents');
        // hpCharacters = await res.json();
        //hpCharacters= data;
        displayContents(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayContents = (contents) => {
    const htmlString = contents
        .map((contents) => {
            return `
            <li class="character">
                <h2>${contents.title}</h2>
                <p>Author: ${contents.author}</p>
                
            </li>
        `;
        })
        .join('');
    contentData.innerHTML = htmlString;
};

loadContents();












