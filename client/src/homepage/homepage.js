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
            "content": [
                "ברוכים הבאים למקום בו אפשר ליצור",
                "#העצמה_אחת_ביום"
            ],
            "color": "white",
            "fontSize": "14vh"
        },
        "openingText": {
            "content":
                "בהשראת סיפורים של גיבורים וגיבורות מהשואה." +
                "המוטו שלנו הוא \"לעשות\" ולא לשכוח." +
                "באתר אתם מוזמנים:" +
                " לקרוא " +
                "סיפורי גבורה, העצמה אישית<b> וסיפורים </b>מעוררי השראה." +
                "לבחור" +
                "ציטוט אותו תרצו לשתף. בין אם זה ביום הזכרון, בחגי ישראל, בימים המיוחדים לכם או פשוט בשגרה.",
            // "oldContent": ["אנו מזמינים אותך ליצור העצמה אישית בהשראת סיפורים של גיבורים וגיבורות מהשואה.",
            //     "המוטו שלנו הוא \"לעשות\" ולא לשכוח. באתר אתם מוזמנים",
            //     "לקרוא סיפורי גבורה, העצמה אישית וסיפורים מעוררי השראה.",
            //     "אנו מזמינים אתכם לקרוא את הסיפורים והעדויות של הגיבורים שלנו ולבחור את הציטוט אותו תרצו לשתף.",
            //     "בין אם זה ביום הזיכרון, בחגי ישראל, בימים המיוחדים לכם או פשוט בשגרה,",
            //     "אנו מזמינים כל אחד למצוא את הציטוט אליו הוא מתחבר,",
            //     "לעצב אותו באתר ולשתף היכן שתרצו לעוד מידע על העמותה וכלל הפרויקטים שלנו מוזמנים לאתר מצעד הגבורה"],
            "boldContent": "לקרוא",
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
        <div className='homepage-wrapper'>
            <div className='homepage-container' dir="rtl">
                <table>
                    <tr>
                        <td style={{ 'width': '50%' }}>
                            <div className='header' style={{ "margin-bottom": "10px" }}>
                                <br />אנו מזמינים אותך ליצור<br />
                                <b>#העצמה_אחת_ביום</b>
                            </div>
                            <div className='sub-header'>
                                בהשראת סיפורים של גיבורים וגיבורות מהשואה.<br />
                                המוטו שלנו הוא "לעשות ולא לשכוח". <br />
                            </div></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <div className='content'>
                                <ul>
                                    <li><b>לקרוא</b> סיפורי גבורה, העצמה אישית וסיפורים מעוררי השראה. </li>
                                    <li><b>לבחור</b> סיפור אותו תרצו לשתף.
                                        בין אם זה ביום הזיכרון, בחגי ישראל, בימים המיוחדים לכם או פשוט בשגרה.</li>
                                    <li><b>לעצב</b> אותו באתר <b>ולשתף</b> היכן שתרצו.</li>
                                </ul>
                                <button onClick={onStartButtonClick}>התחל</button>
                            </div>
                        </td>
                    </tr>
                </table>

                <div className='phoneComponent'>
                    <div className='header'>
                        <img src='Logo transparent bg.png' alt='Logo' className='logo' />
                        <br />אנו מזמינים אותך ליצור<br />
                        <b>#העצמה_אחת_ביום</b>
                    </div>
                    <div className='sub-header'>
                        בהשראת סיפורים של גיבורים וגיבורות מהשואה.<br />
                        המוטו שלנו הוא "לעשות ולא לשכוח". <br />
                    </div>
                    <div className='content'>
                        <ul>
                            <li><b>לקרוא</b> סיפורי גבורה, העצמה אישית וסיפורים מעוררי השראה. </li>
                            <li><b>לבחור</b> סיפור אותו תרצו לשתף.
                                בין אם זה ביום הזיכרון, בחגי ישראל, בימים המיוחדים לכם או פשוט בשגרה.</li>
                            <li><b>לעצב</b> אותו באתר <b>ולשתף</b> היכן שתרצו.</li>
                        </ul>
                        <div className='closing-text'>
                            לעוד מידע על העמותה וכלל הפרויקטים שלנו מוזמנים לאתר
                            "<a href='https://brave-together.com/'>מצעד הגבורה</a>".
                            <br />
                        </div>
                        <button onClick={onStartButtonClick}>התחל</button>
                        <br /><br />
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Homepage;