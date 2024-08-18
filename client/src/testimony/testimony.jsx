import React, { useEffect, useRef, useState } from 'react'

import './testimony.scss';
import defaultImg from '../assets/images/default.png'
import vectorTop1 from '../assets/images/vectortop1.png'
import vectorTop2 from '../assets/images/vectortop2.png'
import vectorBottom from '../assets/images/vectorbottom.png'
import addBtn from '../assets/images/add-btn.png'
import pen from '../assets/images/pen.png'
import calendar from '../assets/images/calendar.png'
import SelectedQuotes from '../selectedQuotes/SelectedQuotes';
import axios from 'axios'

const Testimony = ({ match }) => {

    const [story, setStory] = useState(null)
    const [isChooseText, setIsChooseText] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const selectedText = useRef(null)

    useEffect(() => {
        const { storyId } = match.params; 
        const story = loadStoryById(storyId)
        setStory(story)
    }, [match.params.storyId])

    const loadStoryById = async (storyId) => {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        };
        try {
            console.log('hi', storyId);
            const {data} = await axios.get("http://127.0.0.1:5000/api/story_body",
                { params: { id: storyId } },
                axiosConfig)
            console.log('story from server', data.story);
            setStory(data.story)
        } catch (err) {
            console.log(err)
        }
    }

    const onChooseText = (ev) => {
        if (isChooseText && selectedText.current) {
            console.log('after selection', selectedText.current)
            //go to edit quote 
            // selectedText.current = null; --- after sending data
        }
        setIsChooseText(!isChooseText);
    }

    const chooseText = () => {
        if (!isChooseText) return
        selectedText.current = window.getSelection().toString()
    }

    const onToggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    if (!story) return <div>Loading..</div>
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

                <div className="testimony-details" onClick={chooseText} onTouchEnd={chooseText}>
                    {story.text}
                </div>
            </div>

            <div className="testimony-quotes" >
                <div className="chosen-quotes" onClick={onToggleModal}>ציטוטים נבחרים</div>
                <div className={isChooseText ? 'choose-text chosen' : 'choose-text'}
                    onClick={onChooseText}>
                    {!isChooseText && <p>בחר טקסט מעצים על מנת לשתף ציטוט</p>}
                    {isChooseText && <p>צטט</p>}
                    <div className="add-btn"><img src={addBtn} alt="choose-text" /></div>
                </div>
            </div>

            {isModalOpen && <SelectedQuotes quotes={story.quotes} onToggleModal={onToggleModal} onChooseText={onChooseText} />}

        </section>
    )
}

export default Testimony