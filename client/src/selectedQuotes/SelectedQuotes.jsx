import React from 'react'
import './SelectedQuotes.scss'
import ExitIcon from './exit-icon.png'

export default function SelectedQuotes({ quotes, onToggleModal, onChooseText }) {

    const handleClick = (e) => {
        onToggleModal();
        onChooseText();
    }

    const onChooseQuote = (quote) => {
        //move to editor
        console.log('quote:', quote);
    }

    return (
        <div className='selected-quotes'>
            <div onClick={onToggleModal} className='icon-container pointer'>
                <img src={ExitIcon} />
            </div>
            <section className='content'>
                <h1>ציטוטים נבחרים</h1>
                <div className='quotes-container'>
                    {quotes &&
                        quotes.map(currQuote => {
                            return <Quote onChooseQuote={onChooseQuote} quote={currQuote}></Quote>
                        })
                    }
                </div>
                <div className='or-section'><span>או</span></div>
                <button className='pointer' onClick={handleClick}>סימון חופשי</button>
            </section>
        </div>
    )
}


function Quote({ quote, onChooseQuote }) {
    return (
        <div onClick={() => onChooseQuote(quote)} className='quote'>
            <p>{quote.txt}</p>
        </div>
    )
}




