import { MongoClient } from 'mongodb'


const URI = 'mongodb+srv://sroberts:' + process.env.MONGODB_PWD + '@serverlessinstance0.qxaqke3.mongodb.net/?retryWrites=true&w=majority&tlsCAFile=isrgrootx1.pem'
const options = {}

if (!URI) throw new Error('Please add your Mongo URI to .env local')

let client = new MongoClient(URI, options)
let clientPromise

if (process.env.NODE_ENV !== 'production') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
  }

  clientPromise = global._mongoClientPromise

} else {
  // In production mode, it's best to not use a global variable.
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.

export default clientPromise