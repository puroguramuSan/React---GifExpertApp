import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    
    const [categories, setCategories ] = useState( ['One Punch Man'] );

    /* const handleAdd = () => {

        const category = "To Your Eternity";

        setCategories( cat => [ category, ...cat] );
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( ( cat ) => {
                        return <GifGrid key = { cat } category = { cat }/>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;