import { MongooseModule } from "@nestjs/mongoose";

require('dotenv').config();

function mongoConnection() {
    return MongooseModule.forRoot(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.kpdutem.mongodb.net/?retryWrites=true&w=majority`)
}

export {mongoConnection}
