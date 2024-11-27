import { Double, MongoClient } from 'mongodb';

async function addNewParcel(req, res) {
    const {
        name,
        length,
        width,
        height,
        weight,
        srcPincode,
        srcCity,
        srcState,
        destPincode,
        destCity,
        destState,
        serviceType, // domestic or international
        itemType // type of item
    } = req.body;

    // Validate the required fields
    if (!name || !length || !width || !height || !weight || !srcPincode || !destPincode || !serviceType || !itemType) {
        const response = {
            status: "error",
            message: "Missing required fields in the request body",
            data: {
                name, length, width, height, weight,
                srcPincode, srcCity, srcState,
                destPincode, destCity, destState,
                serviceType, itemType
            }
        };
        return res.json(response);
    }

    // Connect to MongoDB
    const uri = process.env.MONGODB_CONNECTION_URI;
    const client = new MongoClient(uri);

    try {
        const database = client.db('parcel-management-system');
        const parcels = database.collection('parcels');

        // Construct the document to insert
        const query = {
            name,
            dimensions: {
                length: new Double(length),
                width: new Double(width),
                height: new Double(height),
            },
            weight: new Double(weight),
            sender: {
                pincode: srcPincode,
                city: srcCity,
                state: srcState
            },
            receiver: {
                pincode: destPincode,
                city: destCity,
                state: destState
            },
            serviceType, // domestic or international
            itemType, // type of item (e.g., letter, parcel)
            createdAt: new Date()
        };

        // Insert the parcel into the database
        const result = await parcels.insertOne(query);

        // Response
        const parcelId = result.insertedId;
        const responseData = {
            status: "success",
            message: "Parcel added successfully",
            id: parcelId,
            data: query
        };

        res.json(responseData);

    } catch (error) {
        console.error(error);
        res.json({ status: "error", message: "An error occurred while adding the parcel" });
    } finally {
        await client.close(); // Ensure client closes
    }
}

export default addNewParcel;
