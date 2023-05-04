import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { API_KEY, BASE_URL,BASE_PATH } from '@/lib';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ViewDetailCard from '@/components/ViewDetailCard';
import { data } from 'autoprefixer';
import MyComponent from '@/components/Modal';

export default function MovieId() {
  const router = useRouter()
  const movieId = router.query.id
  const [movie,setMovie] = useState()
  const [video,setVideo] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isVideoLoading, setIsVideoLoading] = useState(true)

  useEffect(()=>{
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(res=> res.json())
    .then(data => {
      setMovie(data)
      setIsLoading(false)
    }) 

    fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`)
    .then(res=> res.json())
    .then(data => {
      setVideo(data)
      setIsVideoLoading(false)
    }) 
  },
  [])
  
  // if(!isVideoLoading){
  //   console.log(video)
  // }
  if(!isLoading){
    console.log(movie)
  }
  return (
    <>
    {isLoading? <p>Loading</p>: 
            <ViewDetailCard>
              image={BASE_PATH + movie.poster_path}
              title={movie.title}
              language={movie.original_language}
              overview={movie.overview}
              rateCount={movie.vote_count}
            </ViewDetailCard>          
    } 
    </>
  )
}

