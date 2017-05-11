
import express from 'express'
import bodyParser from 'body-Parser'
var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(process.env.PORT||3000, function(){
    console.log('server started ')
})

app.use(express.static('public'))
app.use(express.static('bower_components'))
app.use(express.static('dist'))
app.set('view engine', 'ejs')
app.set('views', './views')



app.get('/', function(req, res){
    res.render('index')
})



