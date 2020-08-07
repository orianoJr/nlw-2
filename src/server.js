const proffys = [
  {
  name: "Diego fernandes",
  avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
  whatsapp: 5559132003,
  bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
  subject:"Química",
  cost:"20,00",
  weekday:[
    0
  ],
  time_from:[720],
  time_to:[1230],
},
{
  name: "mayk brito",
  avatar:"https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
  whatsapp: 5559132003,
  bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
  subject:"Matematica",
  cost:"200,00",
  weekday:[
    1
  ],
  time_from:[830],
  time_to:[1400],
}
]
const subjects = [
          "Artes",
          "Biologia",
          "Ciências",
          "Educação física",
          "Física",
          "Geografia",
          "História",
          "Matemática",
          "Português",
          "Química",
]

const weekdays = [
  'Domingo',
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
   
]
function getSubject(subjectNumber){
  const position = +subjectNumber -1
  return
}

const express = require("express")
const app = express()
const nunjucks = require("nunjucks")
//configurar o nunjucks
nunjucks.configure("src/views", {
  express: app,
  noCache: true,
})
//configurar arquivos estaticos
app.use(express.static("public"))

app.get("/", (req,res) => {
  return res.render("index.html")
})
app.get('/study', (req, res) => {
  const filters = req.query
  return res.render("study.html" ,{ proffys, filters, subjects, weekdays })
});
app.get('/give-classes', (req, res) => {
  const data = req.query

  const isNotEmpty = Object.keys(data).length > 0
  //si tiver data
  if(isNotEmpty){

    data.subject = getSubject(data.subject)
    //adicionar data
    proffys.push(data)

    return res.redirect("/study")
  }
  

  //se não,não adicionar
  
  return res.render("give-classes.html", {subjects, weekdays})
});

app.listen(3000)
