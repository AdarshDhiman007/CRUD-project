import express from "express"
import connectDB from "./db/connectdb.js"
import router from "./routes/web.js"
import {join} from "path"

const app = express()
const port = process.env.PORT || '3000'
const db = process.env.db || 'mongodb://localhost:27017'

app.set('view engine','ejs')

connectDB(db)

app.use(express.urlencoded({extended:false}))

app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))

app.use('/student',router)

app.listen(port,()=>{
  console.log(`Server is localhost:${port}`)
})