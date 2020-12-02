import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState([])

   /*  const handleAdd = () =>{
        // setCategories([...categories, 'HunterXHunter'])
        setCategories(cat =>[...categories, 'HunterXHunter'])
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>

            <hr />

            <ol>
                {
                    categories.map( cat =>
                        //<li key={cat}>{cat}</li>
                        <GifGrid 
                        key={cat}
                        category={cat}/>
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
