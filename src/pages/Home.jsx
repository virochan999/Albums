import React, { useEffect, useState } from 'react'
import useDataFetch from '../hooks/useDataFetch'
import Loading from '../components/Loading'
import Card from '../components/Card'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import UpdateAlbum from '../components/UpdateAlbum'
import { toast } from 'react-toastify'

const Home = () => {
  const [data, setData] = useState([])
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  const navigate = useNavigate()
  const { loading, error, fetchData } = useDataFetch()

  /* Functionality to fetch the data for albums from the api */
  const fetchAlbums = async () => {

    const url = 'https://jsonplaceholder.typicode.com/albums';
    const method = 'GET';

    try {
      const data = await fetchData(url, method);
      setData(data)
    } catch (error) {
      toast.error("Something went wrong")
      console.error(error);
    }
  };

  /* Fetch albums when the component mounts */
  useEffect(() => {
    fetchAlbums();
  }, []);

  /* Navigate to add album route */
  const toggleAlbumVisibility = () => {
    navigate('/addAlbum')
  }

  /* Functionality to handle album update */
  const handleUpdateClick = (albumData) => {
    setSelectedAlbum(albumData)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /* Function to delete the album */
  const handleDeleteClick = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/albums/${id}`;
    const method = 'DELETE'
    try {
      const deletedData = await fetchData(url, method);
      toast.success("Album Deleted Successfully")      
    } catch (error) {
      toast.error("Something went wrong")
      console.error(error);
    }
  }

  return (
    <>
      <div className='my-4 text-center'>
        <Button 
          btnText={'Add new album'} 
          gradient={'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700'}
          onClick={toggleAlbumVisibility}
          buttonClasses={'focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80'}
        />
      </div>
      {
        selectedAlbum && 
        <UpdateAlbum 
          albumData={selectedAlbum} 
          onClose={() => setSelectedAlbum(null)} 
        />
      }
      <h1 className='my-6 text-center uppercase font-extrabold text-2xl'>All Albums</h1>
      {
        loading ? (
          <Loading />
        ) : (
          <Card data={data} onUpdateClick={handleUpdateClick} onDeleteClick={handleDeleteClick} />
        )
      }
    </>
  )
}

export default Home