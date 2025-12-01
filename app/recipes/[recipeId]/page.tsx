'use client';

import MainDiv from '@/app/components/MainDiv'
import { RECIPES } from '@/app/constant';
import Image from 'next/image'
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function page() {
  const { recipeId } = useParams();
  const findedRecipeId = RECIPES.find((recipe: any) => recipe.id === Number(recipeId));
  console.log({ recipeId, findedRecipeId });

  if (!findedRecipeId) {
    return (
      <main className="flex flex-col items-center w-full h-full px-3 pb-10 pt-28">
        <MainDiv>
          <div>Recipe not found</div>
          <Link href="/recipes" className='text-blue-500 underline mt-4 inline-block'>Go back to Recipes</Link>
        </MainDiv>
      </main>
    );
  }

  
  return (
    <main className="flex flex-col items-center w-full h-full px-3 pb-12 pt-36">
      <MainDiv>
        <div className='w-full flex justify-between items-start gap-8'>
          <div className='w-1/2'>
            <Image
              src={findedRecipeId.image}
              alt='recipe image'
              width={500}
              height={500}
              className='w-full h-auto rounded-md object-cover'
            />
          </div>
          <div className='w-1/2 pl-8'>
            <h1 className='text-4xl font-bold text-green-950 mb-4'>{findedRecipeId.title}</h1>
            <p className='text-green-900 mb-2'><strong>Servings:</strong> {findedRecipeId.servings}</p>
            <p className='text-green-900 mb-2'><strong>Prep Time:</strong> {findedRecipeId.prep}</p>
            <p className='text-green-900 mb-2'><strong>Cook Time:</strong> {findedRecipeId.cook}</p>
            <p className='text-green-900 mb-4'>{findedRecipeId.description}</p>
          </div>
        </div>
      </MainDiv>
    </main>
  )
}
