import { MongoClient, ObjectId } from 'mongodb';

async function getAllParcel(req, res, next) {

    // connext to mongodb database
    const uri = process.env.MONGODB_CONNECTION_URI;
    console.log(uri)
    const client = new MongoClient(uri);

    try {

        const database = client.db('parcel-management-system');
        const parcels = database.collection('parcels');

        // Fetch all documents
        const data = await parcels.find({}).toArray();
        // console.log(data)

        const response = { status: "success", data: data };
        res.json(response)

    } catch (error) {
        console.error(error)
        res.json({ status: "error", message: "An error occurred" })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default getAllParcel