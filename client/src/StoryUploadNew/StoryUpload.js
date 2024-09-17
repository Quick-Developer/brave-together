import React, { useState } from 'react'
import './StoryUpload.css'
import s from './mockForm.json'



const StoryUpload = () => {
    const [tags, setTags] = useState([])
    const handleSubmit = ()=>{

    }
    const renderOptions=(options)=>{
        return options.map((option)=>{
            return <option>{option}</option>
        })
    }
    const renderForm =()=>{
        return s.storyUpload.form.map((element)=>{
            switch (element.tag) {
                case "input":
                    return(
                        <>
                            <label>{element.label}</label>
                            <br/>
                            <input type={element.type} />
                        </>
                    )
                case "textarea":
                return(
                    <>
                        <label>{element.label}</label>
                        <br/>
                        <textarea rows={element.rows} cols={element.cols}></textarea>
                    </>
                )
                case "select":
                    return(
                        <>
                            <label>{element.label}</label>
                            <br/>
                            <select>
                                {renderOptions(element.options)}
                            </select>
                        </>
                    )        
                default:
                    break;
            }
        })
    }
    return (
        <div className='StoryUpload'>
            <form>
              {renderForm()}
              <div id='button'>
                <button type='submit' onClick={handleSubmit}>להעלות</button>
              </div>
            </form>
        </div>
    )
}

export default StoryUpload