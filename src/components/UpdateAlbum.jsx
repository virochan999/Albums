import React, { useEffect, useState } from 'react'
import useDataFetch from '../hooks/useDataFetch'
import { toast } from 'react-toastify';

const UpdateAlbum = ({albumData, onClose}) => {
  const { loading, error, fetchData } = useDataFetch()
  const [updatedAlbumData, setUpdatedAlbumData] = useState(albumData)
  const [errors, setErrors] = useState({
    userId: false,
    title: false,
  })
  const errorText = 'This field is required'

  /* To update the album data in inputs whenever new album is clicked */
  useEffect(() => {
    setUpdatedAlbumData(albumData);
  }, [albumData]);

  /* Update the album with new data */
  const handleUpdate = async () => {
    const url = `https://jsonplaceholder.typicode.com/albums/${updatedAlbumData.id}`;
    const method = 'PUT';

    try {
      const updatedAlbum = await fetchData(url, method, updatedAlbumData);
      toast.success("Album updated successfully");

      // Close the modal or navigate back to the Home page
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  /* Handle inputs data */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAlbumData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <div className='w-full flex items-center justify-center mt-8'>
      <div className='w-2/4 p-6 bg-gray-100 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-4 text-black text-center'>Add Album</h2>
        <div className='mb-4'>
          <label htmlFor='userId' className='block text-gray-600 font-semibold mb-2'>
            Enter UserId:
          </label>
          <input
            type='number'
            name='userId'
            id='userId'
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400'
            onChange={handleChange}
            value={updatedAlbumData.userId}
          />
          {errors.userId && <p className='text-red-500'>{errorText}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='title' className='block text-gray-600 font-semibold mb-2'>
            Enter Title:
          </label>
          <input
            type='text'
            name='title'
            id='title'
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400'
            onChange={handleChange}
            value={updatedAlbumData.title}
          />
          {errors.title && <p className='text-red-500'>{errorText}</p>}
        </div>

        {/* Update album button */}
        <button
          type='submit'
          className='uppercase bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
          onClick={handleUpdate}
        >
          Update Album
        </button>

        {/* Close album button */}
        <button
          type='submit'
          className='uppercase ml-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
          onClick={onClose}
        >
          Close
        </button>
        
      </div>
    </div>
  )
}

export default UpdateAlbum