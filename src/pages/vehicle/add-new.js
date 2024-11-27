import { Double, MongoClient } from 'mongodb'

async function addNewVehicle(req, res, next) {

    // Get the name, length, breadth, height, weight from the request
    let { name, number, volume, fuelCapacity } = req.body;

    if (!name || !number || !volume || !fuelCapacity) {
        const response = { status: "error", message: "Missing required fields in body", data: { name, length, width, height, weight } }
        return res.json(response)
    }

    name = String(name).trim()
    number = String(number).trim()
    volume = String(volume).trim()
    fuelCapacity = Number(fuelCapacity)

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
            volume: volume,
            fuelCapacity: fuelCapacity
        }

        const result = await parcels.insertOne(query);

        // return the response
        const vehicleId = result.insertedId;

        const responeData = { status: "success", message: "Vehicle added", id: vehicleId, data: { name, number, volume, fuelCapacity } }

        res.json(responeData)

    } catch (error) {
        console.error(error)
        res.json({ status: "error", message: "An error occurred" })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default addNewVehicle