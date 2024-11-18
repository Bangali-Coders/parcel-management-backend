import { Double, MongoClient } from 'mongodb'

async function addNewParcel(req, res, next) {

    // Get the name, length, breadth, height, weight from the request
    const { name, length, width, height, weight } = req.body;

    if (!name || !length || !width || !height || !weight) {
        const response = { status: "error", message: "Missing required fields in body", data: { name, length, width, height, weight } }
        return res.json(response)
    }

    // connext to mongodb database
    const uri = process.env.MONGODB_CONNECTION_URI;
    console.log(uri)
    const client = new MongoClient(uri);


    try {
        const database = client.db('parcel-management-system');
        const parcels = database.collection('parcels');

        // create the data 
        const query = {
            name: name,
            length: new Double(length),
            breadth: new Double(width),
            height: new Double(height),
            weight: new Double(weight),
            srcPostId: "source",
            destPostId: "destination"
        }

        const result = await parcels.insertOne(query);

        // return the response
        const parcelId = result.insertedId;

        const responeData = { status: "success", message: "Parcel added", id: parcelId, data: { name, length, width, height, weight, } }

        res.json(responeData)

    } catch (error) {
        console.error(error)
        res.json({ status: "error", message: "An error occurred" })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default addNewParcel