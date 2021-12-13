import React, { useState } from 'react'
import './SelectedQuotes.scss'
import ExitIcon from './exit-icon.png'


const mockData = [
    { txt: '"לי היה כדאי להישאר בחיים כשאר נולדו הבנים אמרתי לעצמי שאולי בכל זאת היה כדאי להישאר בחיים.\n הקמתי משפחה לתפארת - רק לא לי אלא לעם ישראל"' },
    { txt: '"באושוויץ כתבתי על פיסות נייר של שקי מלט. אך את אותן רשימות לא הצלחתי לשמור עד יום השחרור. \n בעצם - לא רשמתי אותן במחשבה לנצלן באחד הימים - אלא פשוט, באופן כלשהו בן עזרו לי להמשיך לחיות"' },
    {}
]

export default function SelectedQuotes({ selectedQuotes, isShown }) {

    const [testIsShown, setTestIsShown] = useState(true)

    const onExit = (e) => {
        setTestIsShown(false)
    }

    const handleClick = (e) => {
        console.log(e);
    }

    return (
        <>
            {
                testIsShown && <div className='selected-quotes'>
                    <div onClick={onExit} className='icon-container'>
                        <img src={ExitIcon} className='pointer' />
                    </div>
                    <section className='content'>
                        <h1>ציטוטים נבחרים</h1>
                        <div className='quotes-container'>
                            {
                                mockData.map((currQuote, idx) => {
                                    return <Quote key={idx}> {currQuote.txt}</Quote>
                                })
                            }
                        </div>
                        <div className='or-section'><span>או</span></div>
                        <button onClick={handleClick} className='pointer'>סימון חופשי</button>
                    </section>
                </div>
            }
        </>
    )
}


function Quote({ children }) {
    return (
        <div className='quote'>
            <p>{children}</p>
        </div>
    )
}




