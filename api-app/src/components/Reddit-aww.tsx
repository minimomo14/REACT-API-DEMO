import React, { useEffect, useState } from "react";
import { Child } from "../models/aww";
import fetchRedditApiService from "../services/RedditApiService";

export default function RedditAww() {
  const [awws, setAwws] = useState<Child[]>([]);

  //hook
  useEffect(() => {
    fetchRedditApiService().then((awws) => setAwws(awws));
  }, []);

  return (
    <div className="Reddit-aww">
      <h1>GIF APP</h1>
      <h2>Results:</h2>
      <ul>
        {awws.map((aww, i) => (
          <li key={i}>
            <h3>{aww.data.title}</h3>
            <p>{aww.data.title}</p>
            <img src={aww.data.thumbnail} alt="" />
            <br></br>
            <a href={"http://www.reddit.com" + aww.data.permalink}> ..Link..</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
