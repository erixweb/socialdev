'use client'

import { useState } from "react"

export default function LikeBtn (props) {

    let { likes } = props
    
    const [isLiked, setisLiked] = useState(false)

    if (isLiked) {
        likes++
    }

    return (
        <li className="likes" onClick={() => {
            if (!isLiked) {
                setisLiked(true)
            } else {
                setisLiked(false)
            }}
        }>
            💟 {likes}
        </li>
    )
}