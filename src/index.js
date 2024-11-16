import express from 'express'
import * as dotenv from 'dotenv';
import cors from 'cors'
import setTruckLocation from './pages/set-truck-location.js';

const app = express()
const port = 4000 || process.env.PORT

// set dotenv
dotenv.config();

// set cors
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/set-truck-location', setTruckLocation)


app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`)
})