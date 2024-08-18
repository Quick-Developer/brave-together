import React, { useState } from 'react'
import './storyCheckNew.css'

import StoryCheckIcon from '../assets/icons/StoryCheck.svg'
import StoryCheckIconSelected from '../assets/icons/StoryCheckSelected.svg'


const stories = [
    {
        id: 1,
        save: false,
        heroName: 'Hero 1',
        storyImg: "https://media.istockphoto.com/photos/mature-woman-with-cat-and-dog-at-home-hugging-and-cuddling-animals-picture-id1275350376?b=1&k=20&m=1275350376&s=170667a&w=0&h=MLelUDjcoMmJMUKHBFRfVhtUXE1Ydpg9YMdfoJZ-St8="
    },
    {
        id: 2,
        save: false,
        heroName: 'Hero 2',
        storyImg: "https://media.istockphoto.com/photos/super-cute-dog-and-cat-best-friends-picture-id1299012664?b=1&k=20&m=1299012664&s=170667a&w=0&h=zqCl3zz7-qNFffEqaDKcCSkit-EF0MvsfpJu84jrK64="
    },
    {
        id: 3,
        save: false,
        heroName: 'Hero 3',
        storyImg: "https://media.istockphoto.com/photos/best-friends-picture-id583689556?b=1&k=20&m=583689556&s=170667a&w=0&h=LOb2nhhRDd0Tt3lJADEhuXjNWohmEfXUK0XlJPNfO7c="
    },
    {
        id: 4,
        save: false,
        heroName: 'Hero 4',
        storyImg: "https://media.istockphoto.com/photos/tabby-cat-and-border-collie-dog-picture-id1306543850?b=1&k=20&m=1306543850&s=170667a&w=0&h=fQ1G45yt6Gx4CGegVBKzsv-HQOuPDvaq7qHPSb-yJQE="
    },
    {
        id: 5,
        save: false,
        heroName: 'Hero 5',
        storyImg: "https://images.unsplash.com/photo-1628214460051-cb2102d028a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id: 6,
        save: false,
        heroName: 'Hero 6',
        storyImg: "https://media.istockphoto.com/photos/friends-red-cat-and-corgi-dog-walking-in-a-summer-meadow-under-the-picture-id1324099927?b=1&k=20&m=1324099927&s=170667a&w=0&h=_jRsZpMNYr--izDfsMtCB7MV97R-yMphyDTjcav85xc="
    },
    {
        id: 7,
        save: false,
        heroName: 'Hero 1',
        storyImg: "https://media.istockphoto.com/photos/mature-woman-with-cat-and-dog-at-home-hugging-and-cuddling-animals-picture-id1275350376?b=1&k=20&m=1275350376&s=170667a&w=0&h=MLelUDjcoMmJMUKHBFRfVhtUXE1Ydpg9YMdfoJZ-St8="
    },
    {
        id: 8,
        save: false,
        heroName: 'Hero 2',
        storyImg: "https://media.istockphoto.com/photos/super-cute-dog-and-cat-best-friends-picture-id1299012664?b=1&k=20&m=1299012664&s=170667a&w=0&h=zqCl3zz7-qNFffEqaDKcCSkit-EF0MvsfpJu84jrK64="
    },
    {
        id: 9,
        save: false,
        heroName: 'Hero 3',
        storyImg: "https://media.istockphoto.com/photos/best-friends-picture-id583689556?b=1&k=20&m=583689556&s=170667a&w=0&h=LOb2nhhRDd0Tt3lJADEhuXjNWohmEfXUK0XlJPNfO7c="
    },
    {
        id: 10,
        save: false,
        heroName: 'Hero 4',
        storyImg: "https://media.istockphoto.com/photos/tabby-cat-and-border-collie-dog-picture-id1306543850?b=1&k=20&m=1306543850&s=170667a&w=0&h=fQ1G45yt6Gx4CGegVBKzsv-HQOuPDvaq7qHPSb-yJQE="
    },
    {
        id: 11,
        save: false,
        heroName: 'Hero 5',
        storyImg: "https://images.unsplash.com/photo-1628214460051-cb2102d028a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
   

]

const StoryCheckNew = () => {
    const [allStories, setAllStories] = useState(stories)
    const [selected, setSelected] = useState([])

    const handleSave = (story) => {

        setSelected([...selected, story])
        let selectedStory = allStories.findIndex(item => item.id == story.id);
        let prevStories = allStories;
        prevStories[selectedStory].save = !prevStories[selectedStory].save;
        setAllStories(prevStories)
    }

    return (
        <div className="storyCheckNew-comp">
            <div className="storyCheckNew-compMain">
            {allStories.map(story => (
                <div
                    className="card"
                    key={story.id}
                >
                        <div
                            onClick={() => handleSave(story)}
                        >
                            {
                                story.save && selected
                                    ? <img className="cardIcon" src={StoryCheckIconSelected}/> 
                                    : <img className="cardIcon" src={StoryCheckIcon}/> 
                            }
                        </div>
                    <img className="cardImg"

                        src={story.storyImg}
                        alt={story.heroName}
                    />

                    <div className="cardText">
                        <h6
                        >
                            {story.heroName}
                        </h6>
                    </div>
                </div>
            ))}
            </div>
        </div >
    )
}


export default StoryCheckNew;