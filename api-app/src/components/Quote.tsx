import React, { useEffect, useState } from 'react'
import Quote from '../models/quote';
import fetchQuotesApi from '../services/QuotesApiService';

export default function Quotes() {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    /// useEffect hook
    useEffect(() => {
        fetchQuotesApi().then(
            data => {setQuotes(data);}
        );
    }, []);

    return (
        <div className='Quotes'>
            <ul>
                <li>
                {quotes.map(
                    (quote, i)=> <li key={i}>{quote.text} - {quote.author}</li>
                )}
                </li>
            </ul>
            
        </div>
    )
}
