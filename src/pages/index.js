import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import MovieCard from '@/components/MovieCard'
import Welcome from '@/components/Welcome'
import Footer from '@/components/Footer'
import { API_KEY, BASE_PATH } from '@/lib'

const inter = Inter({ subsets: ['latin'] })

export default function Home({movies}) {
  // console.log(movies.results)
  const data = movies?.results || [];
  return (
    <>
      <Navbar/>
      <Welcome/>
      <div className='p-5 flex flex-wrap justify-center gap-10 '>
        {
          data.length >0 && data.map((movie)=>
            <MovieCard 
              key={movie.id} 
              image={BASE_PATH + movie.poster_path}
              title={movie.title}
              overview={movie.overview}
            />
          )
        }
      </div>
      <Footer/>
    </>
  )
}

//getServerSideProps

export async function getServerSideProps(context){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`
  const respond = await fetch(url);
  if(!respond){
    console.log("Error fetching data")
  }
  const movies = await respond.json();
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
