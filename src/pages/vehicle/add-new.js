import { Double, MongoClient } from 'mongodb'
import { calculateVolume } from '../../lib/volumeCalculator.js';

async function addNewVehicle(req, res, next) {

    // Get the name, length, breadth, height, breadth, height, weight from the request
    let { name, number, length, breadth, height, weight, fuelCapacity } = req.body;

    if (!name || !number || !length || !breadth || !height || !weight || !fuelCapacity) {
        const response = { status: "error", message: "Missing required fields in body", data: { name, number, length, breadth, height, weight, fuelCapacity } }
        return res.json(response)
    }

    name = String(name).trim()
    number = String(number).trim()
    length = Number(length)
    breadth = Number(breadth)
    height = Number(height)
    weight = Number(weight)
    fuelCapacity = Number(fuelCapacity)

    let volumeObject = {
        height: height,
        length: length,
        breadth: breadth,
        total: calculateVolume(length, breadth, height)
    }

    // connext to mongodb database
    const uri = process.env.MONGODB_CONNECTION_URI;
    const client = new MongoClient(uri);


    try {
        const database = client.db('parcel-management-system');
        const parcels = database.collection('vehicles');

        // create the data 
        const query = {
            name: name,
            number: number,
            volume: volumeObject,
            remainingVolume: volumeObject,
            weight: weight,
            remainingWeight: weight,
            fuelCapacity: fuelCapacity,
            routeId: ''
        }

        const result = await parcels.insertOne(query);

        // return the response
        const vehicleId = result.insertedId;

        const responeData = { status: "success", message: "Vehicle added", id: vehicleId, data: { ...query } }

        res.json(responeData)

    } catch (error) {
        // No document was updated

        console.error(error)
        res.json({ status: "error", message: "An error occurred" })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default addNewVehicle