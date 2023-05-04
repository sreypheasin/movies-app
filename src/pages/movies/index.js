import Card from "@/components/Card";
import React from "react";
import { API_KEY, BASE_PATH} from "@/lib";

export default function movie({movies}) {
  const data = movies?.results || [];
  return (
    <>
      <div className='p-5 flex flex-wrap justify-center gap-10 '>
        {
          data.length >0 && data.map((movie)=>
            <Card 
              key={movie.id} 
              id ={movie.id}
              image={BASE_PATH + movie.poster_path}
              title={movie.title}
              overview={movie.overview}
            />
          )
        }
      </div>
    </>
  )
}

//getServerSideProps

export async function getServerSideProps(){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`
  const response = await fetch(url);

  if(!response){
    console.log("Error fetching data")
  }
  const movies = await response.json();
  if(!movies){
    return{
      props: {
        movies: [],
      }
    }
  }
  return{
    props: {
      movies,
    }
  }
}