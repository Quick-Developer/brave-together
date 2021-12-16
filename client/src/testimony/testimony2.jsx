import React, { useEffect, useRef, useState } from 'react'

import './testimony2.scss';
import defaultImg from '../assets/images/default.png'
import vectorTop1 from '../assets/images/vectortop1.png'
import vectorTop2 from '../assets/images/vectortop2.png'
import vectorBottom from '../assets/images/vectorbottom.png'
import addBtn from '../assets/images/add-btn.png'
import pen from '../assets/images/pen.png'
import calendar from '../assets/images/calendar.png'
import { mock } from './mock2';


function loadStoryById(storyId) { //TEMP~~~
    return mock.find(story => story._id === storyId)
}

const Testimony = ({ match }) => {

    const [story, setStory] = useState(null)
    const [isChooseText, setIsChooseText] = useState(false)
    const selectedText = useRef(null)

    useEffect(() => {
        // const { storyId } = match.params; // get from params
        const storyId = '61994cce5c6bda891a141382';
        const story = loadStoryById(storyId)
        setStory(story)
    }, [match.params.storyId])

    const onChooseText = (ev) => {
        if (isChooseText) {
            console.log('after selection', selectedText.current)
            //go to edit quote 
        }
        setIsChooseText(!isChooseText);
    }

    const chooseText = () => {
        if (!isChooseText) return
        selectedText.current = window.getSelection().toString()
    }


    if (!story) return <div></div>
    return (
        <section className="testimony-container">
            <button className="prev-quotes-btn">שיתופים קודמים</button>
            <div className="testimony-content">
                <div className="testimony-hero-container">
                    <div className="hero-img">
                        <img src={defaultImg} alt="Hero Image" />
                    </div>
                    <div className="hero-details">
                        <h2 className="hero-name">{story.heroName}</h2>
                        <p className="hero-author"> מחבר.ת הסיפור <img className="sm-img" src={pen} /></p>
                        <p className="date">{story.date} <img className="sm-img" src={calendar} /></p>
                    </div>
                    <div className="vector top1-vector"><img src={vectorTop1} /></div>
                    <div className="vector top2-vector"><img src={vectorTop2} /></div>
                    <div className="vector bottom-vector"><img src={vectorBottom} /></div>
                </div>
                <div>{selectedText.current}</div>
                <div className="testimony-details" onClick={chooseText} onTouchEnd={chooseText}>
                    {story.text}
                </div>
            </div>
            <div className="testimony-quotes" >
                <div className="chosen-quotes" >ציטוטים נבחרים</div>
                <div className={isChooseText ? 'choose-text chosen' : 'choose-text'}
                    onClick={onChooseText}>
                    {!isChooseText && <p>בחר טקסט מעצים על מנת לשתף ציטוט</p>}
                    {isChooseText && <p>צטט</p>}
                    <div className="add-btn"><img src={addBtn} alt="choose-text" /></div>
                </div>
            </div>
        </section>
    )
}

export default Testimony