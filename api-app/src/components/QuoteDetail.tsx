import React from "react";
import { useParams } from "react-router-dom";
import Quote from "../models/quote";
import fetchQuotesApi from "../services/QuotesApiService";
import { useEffect, useState } from "react";



export default function QuoteDetail() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const id: number = parseInt(useParams().id!);
  let foundQuote: Quote | undefined = quotes.find((quote, index) => id === index);
  
  useEffect(()=>{
    fetchQuotesApi().then(data => {setQuotes(data)});
  },[])

  if(!foundQuote) {
    foundQuote = {text: "No quote found", author: "N/A"};
  }
  
  return(
  <div className="QuoteDetail">
    {foundQuote.text} - {foundQuote.author}
  </div>);
}
