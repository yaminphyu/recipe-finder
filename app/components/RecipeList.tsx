import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import { getPageNumbers } from '../useHook/Common';

const RenderList = ({
  latestRecord
}: {
  latestRecord: any;
}) => {
  return latestRecord?.map((recipe: any, index: number) => (
    <div
      key={index}
      className='mb-4 p-3 bg-white rounded-xl w-full h-auto flex flex-col gap-3 cursor-pointer hover:shadow-lg transition-shadow'
      onClick={() => window.open(`/recipes/${recipe.id}`, '_blank')}
    >
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={300}
        height={150}
        className='w-full h-40 object-cover rounded-lg'
      />
      <h3 className='text-xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis text-green-900'>{recipe.title}</h3>
      <p className='text-green-900 overflow-hidden whitespace-nowrap text-ellipsis'>{recipe.description}</p>
      <div className='flex justify-start items-center gap-4'>
        <p className='text-green-900'>
          <FontAwesomeIcon icon={faUser} className='mr-1' />
          Servings: {recipe.servings}
        </p>
        <p className='text-green-900'>
        <FontAwesomeIcon icon={faClock} className='mr-1' />
        Prep: {recipe.prep}
      </p>
      </div>
      <p className='text-green-900'>
        <FontAwesomeIcon icon={faBowlFood} className='mr-1' />
        Cook: {recipe.cook}
      </p>
    </div>
  ))
};

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) => {
  const paginationObj = { totalPages, currentPage }
  const pageNumbers = getPageNumbers(paginationObj); // Assuming 5 is the missing argument
  
  return (
    <div className="flex gap-2 mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>

      {pageNumbers.map((p, i) => {
        if (p === "left-dots" || p === "right-dots") {
          return <span key={`dots-${i}`}>...</span>;
        }

        return (
          <button
            key={`page-${p}-${i}`}
            className={p === currentPage ? "font-bold underline" : ""}
            onClick={() => typeof p === "number" && setCurrentPage(p)}
          >
            {p}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default function RecipeList({
  latestRecord,
  currentPage,
  setCurrentPage,
  totalPages
}: {
  latestRecord: any;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) {
  if (!latestRecord || latestRecord.length === 0) {
    return (
      <div className='w-full h-auto flex justify-center items-center mt-3'>
        <p className='text-base lg:text-lg'>No recipes found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl mt-3 mb-2 w-full">
      <RenderList latestRecord={latestRecord} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  )
}
