import React, { useState ,useEffect} from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './StoryUpload.css'
import s from './mockForm.json'


// const schema = yup.object().shape({
//     title: yup.string().required("שדה זה הינו שדה חובה."),
//     content : yup.
// });
const INITIAL_SUG = [
    {id:"1" , text:"sug-1"},
    {id:"2" , text:"sug-2"}
]
const INITIAL_TAGS = [
    {id:"1" , text:"tag-1"},
    {id:"2" , text:"tag-2"},
]

const StoryUpload = () => {
    const [tags, setTags] = useState(INITIAL_TAGS)
    const handleSubmit = ()=>{

    }


    const handleDelete=(i)=>{
        const tempTags = tags
        setTags(tempTags.filter((tag,index)=>index !== i))
    }
    const handleAddition=(tag)=>{
        setTags([...tags,tag])
    }
    const handleDrag=(tag,currPos , newPos)=>{
        const newTags = tags.slice();

        newTags.splice(currPos,1);
        newTags.splice(newPos,0,tag);

        setTags(newTags)
    }
    
    
    const renderOptions=(options)=>{
        return options.map((option)=>{
            return <option>{option}</option>
        })
    }

    const checkJsxTag=(element)=>{
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
            case "ReactTags":
                return(
                    <>
                        <label>{element.label}</label>
                        <br/>
                        <ReactTags
                            tags={tags}
                            suggestions={INITIAL_SUG}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            handleDrag={handleDrag}
                            delimeter={element.delimeters}
                            placeholder={element.placeholder}/>
                    </>
                )      
            default:
                break;
        }
    }

    const renderForm =()=>{
        return s.storyUpload.form.map((element)=>{
           return checkJsxTag(element)
        })
    }




    return (
        <div className='StoryUpload'>
            <form>
              {renderForm()}
              <div id='button'>
                <button className="sub-button" type='submit' onClick={handleSubmit}>להעלות</button>
              </div>
            </form>
        </div>
    )
}

export default StoryUpload