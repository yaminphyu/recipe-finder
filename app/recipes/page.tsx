'use client';

import React, { useEffect, useState } from 'react'
import Vendor from '../components/Vendor'
import MainDiv from '../components/MainDiv'
import SelectInput from '../components/SelectInput'
import { MAPPING_COOK_TIME, MAPPING_PREP_TIME, RECIPES } from '../constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RecipeList from '../components/RecipeList';

interface MaxTimeSelectProps {
  toggleArrow: {
    maxPrepTime: boolean;
    maxCookTime: boolean;
  };
  setToggleArrow: React.Dispatch<React.SetStateAction<{
    maxPrepTime: boolean;
    maxCookTime: boolean;
  }>>;
  maxPrepTime: { value: number, name: string };
  handleMaxTime: (map: { value: number; name: string }, type: string) => void
  maxCookTime: { value: number, name: string };
};

const MaxTimeSelect = ({
  toggleArrow,
  setToggleArrow,
  maxPrepTime,
  handleMaxTime,
  maxCookTime
}: MaxTimeSelectProps) => {
  return (
    <div className='flex justify-between items-center gap-4 w-full md:w-auto'>
      <div className='w-1/2'>
        <SelectInput
          toggleArrow={toggleArrow}
          setToggleArrow={setToggleArrow}
          value={maxPrepTime}
          mappingValue={MAPPING_PREP_TIME}
          name={'maxPrepTime'}
          onClick={handleMaxTime}
        />
      </div>
      <div className='w-1/2'>
        <SelectInput
          toggleArrow={toggleArrow}
          setToggleArrow={setToggleArrow}
          value={maxCookTime}
          mappingValue={MAPPING_COOK_TIME}
          name={'maxCookTime'}
          onClick={handleMaxTime}
        />
      </div>
    </div>
  );
};

const SearchBar = ({
  handleOnChange,
  handleKeyDown
}: {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative w-full md:w-[300px] lg:w-[300px]">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        type="text"
        placeholder="Search by name or ingredients..."
        className="w-full pl-10 pr-3 py-2 border-2 text-gray-500 border-gray-700 rounded-xl focus:outline-none focus:border-green-500"
        onChange={(e) => handleOnChange(e)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleKeyDown(e);
        }}
      />
    </div>
  );
};

export default function Recipes() {
  const [toggleArrow, setToggleArrow] = useState({
    maxPrepTime: false,
    maxCookTime: false
  });
  const [maxPrepTime, setMaxPrepTime] = useState<{ value: number; name: string }>({
    value: MAPPING_PREP_TIME[0].value,
    name: MAPPING_PREP_TIME[0].name,
  });
  const [maxCookTime, setMaxCookTime] = useState<{ value: number; name: string }>({
    value: MAPPING_COOK_TIME[0].value,
    name: MAPPING_COOK_TIME[0].name,
  });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [latestRecord, setLatestRecord] = useState<any[]>([]);
  const [pageList, setPageList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const originalRecipes = [...RECIPES, ...RECIPES, ...RECIPES] as unknown as any[];

  const handleMaxTime = (map: { value: number; name: string }, type: string) => {
    const { value, name } = map;

    if (type === 'maxPrepTime') {
      setMaxPrepTime({ value, name });
      setIsFiltered(true);
      return;
    }

    setMaxCookTime({ value, name });
    setIsFiltered(true);
  };

  const filteredRecipes = () => {
    const { value: prepValue } = maxPrepTime;
    const { value: cookValue } = maxCookTime;

    const maxPrepTimeNumber = parseInt(prepValue.toString());
    const maxCookTimeNumber = parseInt(cookValue.toString());

    let filteredMaxTime = originalRecipes;

    if (prepValue > 0) {
      filteredMaxTime = filteredMaxTime.filter(recipe => parseInt(recipe.prep) === maxPrepTimeNumber);
    } else {
      filteredMaxTime = originalRecipes;
    }

    if (cookValue > 0) {
      filteredMaxTime = filteredMaxTime.filter(recipe => parseInt(recipe.cook) === maxCookTimeNumber);
    } else {
      filteredMaxTime = filteredMaxTime;
    }

    if (searchTerm.trim() !== '') {
      filteredMaxTime = filteredMaxTime.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm)
      );
    } else {
      filteredMaxTime = filteredMaxTime;
    }
    
    setLatestRecord(filteredMaxTime);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase();
    setIsFiltered(true);
    setSearchTerm(query);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase();
    setIsFiltered(true);
    setSearchTerm(query);
  };

  useEffect(() => {
    if (!isFiltered) {
      setLatestRecord(prev => [...prev, ...originalRecipes]);
      return;
    }

    filteredRecipes();
  }, [maxPrepTime, maxCookTime, isFiltered, searchTerm]);

  useEffect(() => {
    if (latestRecord.length === 0) return;

    const totalRecords = latestRecord.length;
    const recordsPerPage = 9;
    const calculatedTotalPages = Math.ceil(totalRecords / recordsPerPage);
    console.log({ recordsPerPage, totalRecords, calculatedTotalPages });
    setTotalPages(calculatedTotalPages);

    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;

    const paginatedItems = latestRecord.slice(startIndex, endIndex);
    setPageList(paginatedItems);
  }, [latestRecord, currentPage]);

  return (
    <main className="flex flex-col items-center w-full h-full px-3 py-10">
      <Vendor
        title={'Explore our simple, healthy recipes'}
        subTitle={'Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing.'}
        miniSubTitle={'Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch by your eyes.'}
      />
      <MainDiv>
        <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-3'>
          <MaxTimeSelect
            toggleArrow={toggleArrow}
            setToggleArrow={setToggleArrow}
            maxPrepTime={maxPrepTime}
            handleMaxTime={handleMaxTime}
            maxCookTime={maxCookTime}
          />
          <SearchBar
            handleOnChange={handleOnChange}
            handleKeyDown={handleKeyDown}
          />
        </div>
        <RecipeList
          latestRecord={pageList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </MainDiv>
    </main>
  )
}
