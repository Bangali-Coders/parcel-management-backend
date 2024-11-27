import { MongoClient } from 'mongodb'

async function addNewUser(req, res, next) {

    // Get the name, length, breadth, height, weight from the request
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        const response = { status: "error", message: "Missing required fields in body", data: { email, password, role } }
        return res.json(response)
    }

    // connext to mongodb database
    const uri = process.env.MONGODB_CONNECTION_URI;
    const client = new MongoClient(uri);


    try {
        const database = client.db('parcel-management-system');
        const users = database.collection('users');

        // create the data 
        const query = {
            email:email,
            password: password,
            role: role
        }

        const result = await users.insertOne(query);

        // return the response
        const userId = result.insertedId;

        const responeData = { status: "success", message: "User added", id: userId, data: { userId, email, password, role } }

        res.json(responeData)

    } catch (error) {
        console.error(error)
        res.json({ status: "error", message: "An error occurred" })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default addNewUser