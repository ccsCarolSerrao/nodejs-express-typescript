
import bodyparser from "body-parser";
export const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({ extended: true });