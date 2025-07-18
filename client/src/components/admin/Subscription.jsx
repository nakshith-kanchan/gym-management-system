import React from 'react';

const Subscription = ({ userImg, userName, planName, planAmount, planType, createdAt, planid, subId, handleDelete }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return { day, month, year };
  };

  const { day, month, year } = formatDate(createdAt);

  return (
    <div 
      className='flex flex-col gap-6 justify-center items-center border-2 border-gray-200 rounded-lg p-6 transition-all ease-in-out duration-300 group shadow-md hover:shadow-lg hover:bg-gray-50 w-full max-w-lg mx-auto'
    >
      <img 
        src={userImg} 
        alt="User" 
        className='w-[100px] h-[100px] object-cover rounded-full border-4 border-gray-300 group-hover:scale-110 transition-transform duration-300' 
      />
      <h3 className='text-indigo-600 font-bold text-center text-2xl group-hover:text-indigo-800 transition-all ease-in-out'>
        {userName}
      </h3>
      <div className='flex flex-col gap-4 w-full'>
        <p className='text-gray-700 text-md bg-indigo-100 rounded-lg p-3'>
          <span className='font-semibold text-indigo-600'>Plan Name: </span>{planName}
        </p>
        <p className='text-gray-700 text-md bg-teal-100 rounded-lg p-3'>
          <span className='font-semibold text-teal-600'>Plan Amount: </span>{planAmount} RS
        </p>
        <p className='text-gray-700 text-md bg-pink-100 rounded-lg p-3'>
          <span className='font-semibold text-pink-600'>Plan Type: </span>{planType}
        </p>
        {day && (
          <p className='text-gray-700 text-md bg-yellow-100 rounded-lg p-3'>
            <span className='font-semibold text-yellow-600'>Date: </span>{day}/{month}/{year}
          </p>
        )}
      </div>

      {/* ✅ Delete Button */}
      <button
        onClick={handleDelete}
        className="mt-4 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
      >
        Delete Subscriber
      </button>
    </div>
  );
};

export default Subscription;
