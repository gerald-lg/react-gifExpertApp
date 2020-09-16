
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    /* const handleAdd = () => {

        // return setCategories(categories.concat('Detective Connan'));
        // return setCategories([...categories, 'Detective Connan']);

        // cats llama al estado anterior y le agrega el nuevo elemento
        return setCategories(cats => [...cats, 'Detective Connan']);


    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
        
            <ol>
                {
                    categories.map(category => 
                    <GifGrid key={category} 
                        category={category} 
                        />
                    )
                }
            </ol>

        
        </>


    )
}


