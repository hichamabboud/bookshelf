import { connect, connection } from "mongoose";

const conn = {
    isConnected : false
}

export async function dbConnect() {
    let uri = process.env.MONGODB_URI;
    let options = {
        useUnifiedTopology: true
    };
    
    if (conn.isConnected) return;

    const db = await connect(uri, options);

    conn.isConnected = db.connections[0].readyState;

    console.log(db.connection.db.databaseName);

};
// End of dbConnect function

connection.on("connected", () => {
    console.log("Mongodb connected to our database");
});

connection.on("error", (err) => {
    console.log("Mongodb not connected to our database", err.message);
});
