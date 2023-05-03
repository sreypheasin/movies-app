import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { API_KEY, BASE_URL } from '@/lib';

export default function MovieId() {
    const router = useRouter();

    const [movie,setMovie] = useState({});
    const [id,setId] = useState(router.query.id);
    useEffect(()=>{
        fetch(BASE_URL + `/movies/${id}/videos?api_key=${API_KEY}`)
        .then(res=>res.json()).then(data => console.log(data))
    }
    ,[]); 
  return (
    <div>Movie Page {router.query.id}</div>
  )
}
