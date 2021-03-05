import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keyword' content={keywords}/>
        </Helmet>
    )
}
Meta.defaultProps = {
    title: 'Welcome To ShoeShop',
    description: 'We sell the best shoes',
    keywords: 'Nike Jordan Yeezy'
}
export default Meta
