import WhatYouWillGet from "./components/WhatYouWillGet";
import MainImage from "./components/MainImage";
import Vendor from "./components/Vendor";
import BuiltRealLife from "./components/BuiltRealLife";
import ReadyToCook from "./components/ReadyToCook";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full px-3 py-10">
      <Vendor
        title={'Healthy meals, zero fuss'}
        subTitle="Discover eight quick, whole food recipes that you can cook tonight"
        miniSubTitle="__no processed junk, no guesswork."
      />
      <MainImage />
      <WhatYouWillGet />
      <BuiltRealLife />
      <ReadyToCook />
    </main>
  );
}
