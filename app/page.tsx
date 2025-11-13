import WhatYouWillGet from "./components/WhatYouWillGet";
import MainImage from "./components/MainImage";
import Vendor from "./components/Vendor";
import BuiltRealLife from "./components/BuiltRealLife";
import ReadyToCook from "./components/ReadyToCook";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full px-3 py-10">
      <Vendor />
      <MainImage />
      <WhatYouWillGet />
      <BuiltRealLife />
      <ReadyToCook />
    </main>
  );
}
