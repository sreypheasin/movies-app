import Navbar from '@/components/Navbar'
import React from 'react'
import { API_KEY, BASE_PATH } from '@/lib'
import MovieCard from '@/components/MovieCard';
import Card from '@/components/Card';

export default function about({movies}) {
  const data = movies?.results || [];

  return (
        <>
        <h1 className="p-5 self-center text-4xl whitespace-nowrap dark:text-white">Our Popular Movies </h1>
         <div className='p-5 flex flex-wrap justify-center gap-10' >
            {
              data.length> 0 && data.slice(0,4).map((movie)=>
                <Card 
                  key={movie.id}
                  id = {movie.id}
                  image = {BASE_PATH + movie.poster_path}
                  title = {movie.title}
                  overview={movie.overview}
                />
              )
            }
         </div>
        </>
    )
}

// getStaticProps 

export async function getStaticProps(){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`
  const response = await fetch(url)
  if(!response){
    console.log("Error Data Fatching")
  }
  const movies = await response.json()
  if(!movies){
    return {
      props: {
        movies:[] ,
      }
    }
  }
  return {
    props: {
      movies,
    }
  }
}