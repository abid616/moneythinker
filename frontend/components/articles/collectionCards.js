import React from 'react'

export function CollectionCards({ title, description, image }) {
    return (
        <div>
            <ol className="order">
                <li >{title.toUpperCase()}</li>
            </ol>
        </div>
    )
}
