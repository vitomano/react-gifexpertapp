import React, {useState, useEffect} from 'react'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect( ()=>{
        getGifs()
    },[category])
    
    const getGifs = async() =>{

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=aGJ2ySQ5P03cGTeNtv7WESlpmxCdYseE`
        const resp = await fetch (url)
        const {data} = await resp.json()

        const gifs = data.map(img=>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs)
        setImages(gifs)

    }

    

    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
            {
            images.map(img=>{
                return <GifGridItem 
                key={img.id}
                img={img}
                />
                }
                )
            }
        </div>
        </>
    )
}

export default GifGrid
