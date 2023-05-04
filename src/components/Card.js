import React from 'react'

export default function Card({id,image,title,overview}) {
  return (
    <div className="bg-slate-900 w-80 max-w-sm rounded-lg shadow mb-9 shadow-lg mt-5">
        <img className="p-5 rounded-t-lg w-80  object-cover rounded-lg" src={image?image : 'https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1'} alt="product image" />
        <div className="px-4 pb-4">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight dark:text-white line-clamp-1">{title? title :"Unknow"}</h5>
                <p className='line-clamp-2 mt-4 opacity-85'>{overview? overview : "Unknow"}</p>
            </a>
        </div>
    </div>
  )
}
