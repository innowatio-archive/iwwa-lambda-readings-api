import Collection from "lk-collection";
import dotenv from "dotenv";

dotenv.load();

import schema from "./schema";

const Readings = new Collection({
    name: "readings",
    mongodbUrl: process.env.MONGODB_URL,
    schema: schema,
    kinesisStreamName: process.env.KINESIS_STREAM_NAME
});

export const handler = Readings.apiGatewayToKinesis;
