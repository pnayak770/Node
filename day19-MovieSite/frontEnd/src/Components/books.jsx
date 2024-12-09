import React from 'react'

export const Books = ({books}) => {
  return (
    <div>
        {
            books.map((item,index)=>{
                return(
                    <p key={index}>
                        {item.title}
                    </p>
                )
                    
                

            })
        }

    </div>
  )
}
