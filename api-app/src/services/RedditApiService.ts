import axios from "axios";
import { Child } from "../models/aww";


export default function fetchRedditApiService(): Promise<Child[]>{
    return axios.get("https://www.reddit.com/r/aww/.json")
    .then(res => res.data.data.children);
}
