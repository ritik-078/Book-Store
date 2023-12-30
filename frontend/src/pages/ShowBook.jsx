import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 '>
      <BackButton />
      <h1 className='flex text-5xl my-8 justify-center'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex justify-center '>
          <div className='flex flex-col  border-2 border-sky-900 rounded-xl w-fit p-4'>
            <div className='flex my-4 justify-evenly'>
              <span className='text-xl mr-4 text-gray-500'>Id</span>
              <span>{book._id}</span>
            </div>
            <div className='flex my-4 justify-evenly'>
              <span className='text-xl mr-4 text-gray-500'>Title</span>
              <span>{book.title}</span>
            </div>
            <div className='flex my-4 justify-evenly'>
              <span className='text-xl mr-4 text-gray-500'>Author</span>
              <span>{book.author}</span>
            </div>
            <div className='flex my-4 justify-evenly'>
              <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
