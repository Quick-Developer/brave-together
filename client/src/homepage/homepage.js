import React from 'react';
import { useHistory } from "react-router-dom";
import './homepage.scss';


function Homepage() {

    let history = useHistory();

    const onStartButtonClick = () => {
        let token = localStorage.getItem('token');
        /*
        if (!token) {
            this.props.history.push('/login');
        }
    
        else {
            this.props.history.push('/storyCheck');
        }
        */
        //for development, moving directly to storyCheck even without token..

        history.push({
            pathname: '/storyCheck',
            state: {
                template: { id: 1, backgroundImg: 'images/frame2.png', templateImg: `images/template1.png` }
            }
        })
    }

    let data = {
        "headerTitle": {
            "content": "ברוכים הבאים להעצמה אחת ביום",
            "color": "white",
            "fontSize": "14vh"
        },
        "openingText": {
            "content": ["אנו מזמינים אותך ליצור העצמה אישית בהשראת סיפורים של גיבורים וגיבורות מהשואה.",
                "המוטו שלנו הוא \"לעשות\" ולא לשכוח. באתר אתם מוזמנים",
                "לקרוא סיפורי גבורה, העצמה אישית וסיפורים מעוררי השראה.",
                "אנו מזמינים אתכם לקרוא את הסיפורים והעדויות של הגיבורים שלנו ולבחור את הציטוט אותו תרצו לשתף.",
                "בין אם זה ביום הזיכרון, בחגי ישראל, בימים המיוחדים לכם או פשוט בשגרה,",
                "אנו מזמינים כל אחד למצוא את הציטוט אליו הוא מתחבר,",
                "לעצב אותו באתר ולשתף היכן שתרצו לעוד מידע על העמותה וכלל הפרויקטים שלנו מוזמנים לאתר מצעד הגבורה"],
            "color": "white",
            "fontSize": "14vh"
        },
        "developmentInfo": {
            "content": "על פיתוח האתר...",
            versions: [
                {
                    "1.1": {
                        "number": "1.1",
                        "members": ""
                    }
                },
                {
                    "1.2": {
                        "number": "1.2",
                        "members": ""
                    }
                }
            ]
        },
        "letsStartButton": {
            "content": "בואו נתחיל",
            "rout": "() => this.onStartButtonClick()"
        }
    }

    return (
        <div className='homepage-container'>
            <h1 className='header'>
                {data.headerTitle.content}
            </h1>
            <div className='opening-text'>
                {data.openingText.content.join('\n')}
            </div>
            <div className='developmentInfo'>
                {data.developmentInfo.content}
                {data.developmentInfo.versions[0].number}: <br />
                {data.developmentInfo.versions[0].members}
                {data.developmentInfo.versions[1].number}: <br />
                {data.developmentInfo.versions[1].members}
            </div>
            <button onClick={onStartButtonClick}>בואו נתחיל</button>
        </div>
    );
}

export default Homepage;