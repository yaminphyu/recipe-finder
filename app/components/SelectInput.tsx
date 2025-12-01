import React, { useEffect, useRef } from 'react';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ToggleArrowState = {
  maxPrepTime: boolean;
  maxCookTime: boolean;
};

interface SelectInputProps {
  toggleArrow: ToggleArrowState;
  setToggleArrow: React.Dispatch<React.SetStateAction<ToggleArrowState>>;
  value: { value: number, name: string };
  mappingValue: { value: number, name: string }[];
  name: keyof ToggleArrowState;
  customeClass?: String;
  onClick: (map: { value: number; name: string }, type: string) => void
}

export default function SelectInput({
  toggleArrow,
  setToggleArrow,
  value,
  mappingValue,
  name,
  customeClass,
  onClick
}: SelectInputProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setToggleArrow(prev => ({
          ...prev,
          [name]: false
        }));
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [name, setToggleArrow]);

  const faAngleIcon = toggleArrow ? faAngleUp : faAngleDown;

  return (
    <>
      <div
        ref={containerRef}
        className='relative w-full'>
        <div
          className={`
            w-full md:w-[180px] text-sm lg:text-base cursor-pointer px-2 py-1 flex justify-between items-center gap-2 border-2 border-gray-300 rounded-xl
            ${customeClass}
          `}
          onClick={() =>
            setToggleArrow(prev => {
              return {
                ...toggleArrow,
                [name]: !prev[name]
              };
            })
          }
        >
          {value?.name}
          <FontAwesomeIcon icon={faAngleIcon} />
        </div>
        {
          toggleArrow[name] && (
            <div className='absolute w-full md:w-[180px] bg-white rounded-xl z-10'>
              <ul className='flex flex-col w-full px-2 gap-1 py-1'>
                {
                  mappingValue?.map((map: any, index: number) => (
                    <li
                      key={index}
                      className='hover:bg-gray-400 px-2 rounded-lg w-full'
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('clicked:', map.value);
                        onClick(map, name);
                        setToggleArrow(prev => ({ ...prev, [name]: false }));
                      }}
                    >{map?.name}</li>
                  ))
                }
              </ul>
            </div>
          )
        }
      </div>
    </>
  )
}
