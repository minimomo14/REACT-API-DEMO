import axios from "axios";
import Quote from "../models/quote";

//data model was import from {Quote} form.

export default function fetchQuotesApi(): Promise<Quote[]> {
    //get info from api itseft when called the function
    return axios.get("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then(res => res.data);
}
