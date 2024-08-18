import React, { useEffect, useState } from 'react'
import QuoteBox from './quoteBox/QuoteBox'
import mock from './mock.json'
import axios from 'axios'
import './Quotes.css'



const Quotes = () => {
    //quotes => arrary of object contains text,author and number-of-Shares
    const [quotes,setQuotes ] = useState([])

    useEffect(()=>{
        axios
            .get("#url")
            .then((res)=>{
                setQuotes(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

    const renderQuotes=()=>{
       return quotes.map((q)=>{
            return(
                <QuoteBox key={q.id} id={q.id} text={q.text} numOfShares={q.shares} author={q.author}/>
            )
        })
    }
    const renderMock=()=>{
        return mock.quotes.map((q)=>{
            return(
                <QuoteBox key={q.id} id={q.id} text={q.text} numOfShares={q.shares} author={q.author}/>
            )
        })
    }

    return (
        <div className='Quotes'>
            {quotes && 
                renderQuotes()
            }
            {renderMock()}
        </div>
    )
}

export default Quotes
