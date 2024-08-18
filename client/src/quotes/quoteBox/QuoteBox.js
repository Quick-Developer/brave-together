import React from 'react'
import './QuoteBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShareAlt} from '@fortawesome/free-solid-svg-icons'


const QuoteBox = ({text,numOfShares,author,id}) => {

    const handleClick=()=>{

    }

    return (
        <div className='QuoteBox'>
            <div className='info-contaner'>
                <div>
                    <p>"{text}"</p>
                </div>
                <div className='author'>
                    <span>{author}</span>
                </div>
                <button onClick={handleClick} className="btn-doc">תיעוד הגיבור/ה</button>
            </div>
            <div className='footer-contaner'>
                <div>
                    <FontAwesomeIcon icon={faShareAlt}/>
                </div>
                <div>
                    <span className='num-of-shares'>{numOfShares}</span>
                    <span className='num-of-shares'> שיתופים </span>
                </div>
            </div>  
        </div>
    )
}

export default QuoteBox
