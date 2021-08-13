import React from 'react'
import { useParams } from 'react-router-dom'

function PostIdPage() {
    const params = useParams()
    return (
        <div>
            <h2>Вы открыли страницу поста с ID = {params.id}</h2>
        </div>
    )
}

export default PostIdPage
