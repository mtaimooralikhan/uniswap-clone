import { userSchema } from "./userSchema";
import { transactionSchema } from "./transactionSchema";
import { createSchema } from "sanity";
import { schemaTypes } from "../schemaTypes"; 

const schemaTypesArray: any[] = schemaTypes;

export default createSchema({
    name: "default",
    types: schemaTypesArray.concat([userSchema, transactionSchema]),
});