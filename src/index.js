import express from 'express'
import * as dotenv from 'dotenv';
import cors from 'cors'
import setTruckLocation from './pages/set-truck-location.js';
import getOneTruck from './pages/location/get-one-truck.js';
import addNewParcel from './pages/parcel/add-parcel.js';
import getParcelDetails from './pages/parcel/get-details.js';
import getAllParcel from './pages/parcel/all-parcel.js';


const app = express()
const port = 4000 || process.env.PORT

// set dotenv
dotenv.config();

// set cors
app.use(cors())

// add bodyparser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.raw())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// ---- Truck Location ---- //
app.post('/set-truck-location', setTruckLocation)
app.post('/location/get-one-truck', getOneTruck)

// ---- Parcel ---- //
app.post('/parcel/add-new', addNewParcel)
app.post('/parcel/get-details', getParcelDetails)
app.post('/parcel/all-parcel', getAllParcel)


app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`)
})