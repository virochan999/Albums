import React from 'react'
import Button from './Button'

const Card = ({data, onUpdateClick, onDeleteClick}) => {

  return (
    <div className='grid grid-cols-3 gap-8 mx-8'>
      {
        data.map((album, index) => (
          <div className='flex justify-between basis-1/4 p-4 gap-2 relative bg-slate-500 hover:outline' key={index}>
            <div className='flex w-8/12'>
              <span className='font-bold pr-2'>{index+1}.</span>
              <h3 className='cursor-pointer text-text-skyblue capitalize'>{album.title}</h3>
            </div>
            <div className='flex justify-center items-center'>
              <Button
                btnText={'Delete'} 
                gradient={'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'}
                buttonClasses={'focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80'}
                onClick={() => onDeleteClick(album.id)}
              />
              <Button
                btnText={'update'} 
                gradient={'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'}
                buttonClasses={'focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80'}
                onClick={() => onUpdateClick(album)}
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Card