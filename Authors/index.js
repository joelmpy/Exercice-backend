const express = require("express");
const app = express();
const port = 8000;


app.get('/', (req, res) => {
    res.send("Authors api")
})

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get('/authors/:id', (req, res) => {
     let id = req.params.id
     let author = authors[id]
    //  console.log(author)
    res.json({
        name : `Voici l'auteur : ${author.name}`,  
        nationality : author.nationality,  
        books : `C'est livre  ${author.books }` 
    })
})

app.get('/authors/:id/books', (req, res) => {
    let id  = req.params.id
    let author = authors[id]
    // console.log(author.books)
    res.json({
        books : author.books
    })
})


app.get('/json/authors/:id' , (req, res) => {
    let id = req.params.id
    let author = authors[id]

    res.json({
        name : author.name,
        nationality : author.nationality
    })
})

app.get('/json/authors/:id/books' , (req, res) => {
    let id = req.params.id
    let author = authors[id]

    res.json({
        books : author.books,
    })
})








app.get("/hello/:name", (req, res) => {
  let name = req.params.name;
  let secondeName = "";

  if (name === "joel") {
    secondeName = "mpy";
  } else if (name === "jeff") {
    secondeName = "mawa";
  } else {
    name = "pas de nom"
    secondeName = "not nameeeee";
  }
  res.json({
    message: `Hello tout le monde ici ${name}`,
    Name: `Hello mon nom ${secondeName}`,
  });
});


app.listen(port, () => {
  console.log("Serveur started on port", port);
});


