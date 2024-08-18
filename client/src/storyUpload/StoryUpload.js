import React, { useState, useEffect } from 'react'
import "./StoryUpload.css";

function StoryUpload() {

    const [fields, setFields] = useState([]);
    const [mainHeader, setMainHeader] = useState("");
    const [showSubmit, setShowSubmit] = useState(false);
    const [filledFields, setFilledFields] = useState({});


    useEffect(() => {
        setMainHeader("הכנס סיפור גבורה למאגר וצור את ההשראה הבאה");
        setFields( //should update with server data 
            [{ inputName: 'title', label: 'כותרת', tag: 'input', length: 100 },
            { inputName: 'description', label: 'תוכן הסיפור ', tag: 'textarea', rows: '10', cols: '50' },
            { inputName: 'story_img', label: ' העלה תמונה של גיבור/ת הסיפור ', tag: 'img' },
            { inputName: 'type', label: 'סוג סיפור ', tag: 'select', options: ['קצר', 'בינוני ', 'ארוך'] },
            { inputName: 'categories', label: 'תייג את הסיפור לנושא/ים המתאים/ים', tag: 'checkboxes', options: ['תיעוד', 'חגי ישראל ', 'אחר', 'תיעוד', 'חגי ישראל ', 'אחר', 'תיעוד', 'חגי ישראל ', 'אחר', 'תיעוד', 'חגי ישראל ', 'אחר'] }
            ]);

        setFilledFields({ //should update with server data 
            title: "",
            description: "",
            story_img: "",
            type: "",
            categories: new Array(12).fill(false), //array length should be options.length
        })
    }, [])

    useEffect(() => {
        if (filledFields.description && filledFields.description != "") {
            setShowSubmit(true);
        }else{
            setShowSubmit(false);
        }
    }, [filledFields])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted:", filledFields);
    }

    const handleChange = name => e => {
        setFilledFields({ ...filledFields, [name]: e.target.value })
    }

    const handleCheckboxChange = (position, inputname) => {
        const updatedCheckboxes = filledFields[inputname].map((item, index) =>
            index === position ? !item : item
        );

        setFilledFields({ ...filledFields, [inputname]: updatedCheckboxes })
    }

    const handleImgChange = name => e => {
        setFilledFields({ ...filledFields, [name]: e.target.files[0] });
    }

    return (
        <div className="story-upload-container">
            <h1 className="page-main-header">{mainHeader}</h1>
            <form onSubmit={handleSubmit}>
                {fields ? <>
                    {fields.map((field, index) => <div className='input-container' key={index}>
                        <label className="field-label" htmlFor={field.inputName}>{field.label}</label >

                        {field.tag == 'input' ?
                            <input onChange={handleChange(field.inputName)} value={filledFields[field.inputName]} className="input-field" name={field?.inputName} maxLength={field.length} /> : <></>}

                        {field.tag == 'textarea' ?
                            <textarea onChange={handleChange(field.inputName)} value={filledFields[field.inputName]} className="textarea-field" name={field.inputName} rows={field.rows} cols={field.cols}></textarea> : <></>}

                        {field.tag == 'img' ? <input type="file" accept="image/*" onChange={handleImgChange(field.inputName)} className="img-upload-field" name={field.inputName} rows={field.rows} cols={field.cols} /> : <></>}

                        {field.tag == 'select' ?
                            <select name={field.inputName} onChange={handleChange(field.inputName)} value={filledFields[field.inputName]}>
                                {field.options.map((selectoption, selectOptIndex) =>
                                    <option value={selectoption} key={selectOptIndex}>{selectoption}</option>
                                )}
                            </select> : <></>}

                        {field.tag == 'checkboxes' ? <div className="story-checkboxes">
                            {field.options.map((checkboxoption, checkboxOptIndex) => <div key={checkboxOptIndex} className="story-checkbox">
                                <input type="checkbox" id={checkboxOptIndex} name={checkboxOptIndex} value={checkboxoption} checked={filledFields[field.inputName][checkboxOptIndex]} onChange={() => handleCheckboxChange(checkboxOptIndex, field.inputName)} />
                                <label htmlFor={checkboxOptIndex} > {checkboxoption}</label><br />
                            </div>)}
                        </div>
                            : <></>}

                    </div>)}
                </> : <></>}
                {showSubmit ? <button className="submit-story">צור סיפור</button> : <></>}
            </form>
        </div>
    )
}

export default StoryUpload;
