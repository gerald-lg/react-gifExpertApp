import React, {/*  useEffect, useState  */} from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs'
import { GifGrimItem } from './GifGrimItem';

export const GifGrid = ({category}) => {
    
    const {data, loading} = useFecthGifs(category);
    

    return (
        <>
            <h3 className="animate__animated animate__pulse" >{category}</h3>

            {loading &&  <p className="animate__animated animate__flash">Loading</p>}
            
            {<div className="card-grid">
                
                {
                    data.map((img) => (
                        <GifGrimItem 
                            {...img}
                            key = {img.id}
                        />
                    ))
                }
            </div>}
        </>
    )
}
