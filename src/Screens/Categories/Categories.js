import React from 'react'
import CategoriesCreators from 'src/Components/CategoriesCreators/CategoriesCreators'

const Categories = () => {
    return (
        <div style={{
            maxWidth: 1400,
            marginLeft:"auto",
            marginRight:"auto",
            padding:10
        }}>
            <CategoriesCreators/>
        </div>
    )
}

export default Categories
