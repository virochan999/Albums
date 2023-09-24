import React, { useState } from 'react'
import useDataFetch from '../hooks/useDataFetch';
import { toast } from 'react-toastify';

const AddAlbum = () => {
  const { loading, error, fetchData } = useDataFetch();
  const [newAlbumData, setNewAlbumData] = useState({
    userId: '',
    title: '',
    body: ''
  })
  const [errors, setErrors] = useState({
    userId: false,
    title: false,
    body: false,
  })
  const errorText = 'This field is required'

  /* Handle the change in input values */
  const handleChange = (e) => {
    setNewAlbumData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  /* To handle the errors of input fields */
  const handleErrors = () => {
    const newErrors = {}
    let hasError = false

    for(const field in newAlbumData) {
      if(newAlbumData[field] === '') {
        newErrors[field] = true
        hasError = true
      } else {
        newErrors[field] = false
      }
    }

    if(hasError) {
      setErrors(newErrors);
      return
    }
  }

  /* To submit the data of album */
  const submitAlbum = async () => {

    handleErrors()

    if(Object.values(newAlbumData).some((value) => value === '')) {
      return
    }

    const url = 'https://jsonplaceholder.typicode.com/albums'
    const method = 'POST';
    const requestData = newAlbumData;

    const data = await fetchData(url, method, requestData)
    if(data) {
      toast.success("Successfully added new album")
      setNewAlbumData({
        userId: '',
        title: '',
        body: ''
      })
      setErrors({
        userId: false,
        title: false,
        body: false,
      })
    }
  }
 
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
            value={newAlbumData.userId}
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
            value={newAlbumData.title}
          />
          {errors.title && <p className='text-red-500'>{errorText}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='body' className='block text-gray-600 font-semibold mb-2'>
            Enter Body:
          </label>
          <input
            type='text'
            name='body'
            id='body'
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400'
            onChange={handleChange}
            value={newAlbumData.body}
          />
          {errors.body && <p className='text-red-500'>{errorText}</p>}
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
          onClick={submitAlbum}
        >
          Add Album
        </button>
        
      </div>
    </div>
  );
};

export default AddAlbum;
