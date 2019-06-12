const express = require('express')
const path = require('path')
const hbs =require('hbs')
const geocode=require('./utils/geocode')
const forecast =require('./utils/forecast')

const app=express();
const port = process.env.PORT || 3000

app.set('views',path.join(__dirname,'../templates/views'))
app.set('view engine','hbs')
app.use(express.urlencoded({extended:false}));

app.use(express.static( path.join(__dirname,'../public') ))

console.log(path.join(__dirname,'../templates/partials'))
hbs.registerPartials(path.join(__dirname,'../templates/partials'))

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name: 'Aditi Jain',
        number:[{num:'1'},{num:'3'}]
    })
})

app.get('/help',(req,res)=>{
    // console.log(req.params);
    res.render('help',{
        title:'Help',
        name: 'Aditi Jain',
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
            title:'About',
            name: 'Aditi Jain'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({error:'Provide an address'})
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error:error})
        }
        forecast(latitude,longitude,(err,res1)=>{
            if(err){
                return res.send({error:error})
            }
            res.send({
                forecast:res1,
                location:location,
                address:req.query.address
            })
        } )
    })
   
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'',
        error:'Help article not found',
        name: 'Aditi Jain'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'',
        error:'Page not found',
        name: 'Aditi Jain'
    })
})
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
});