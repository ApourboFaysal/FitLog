import { Suspense } from "react";
import Banner from "@/components/homepage/Banner";
import Excercises from "@/components/homepage/Excercises";
import Loader from "@/components/shared/Loader";

const page = () => {
  return (
    <div>
      <Banner />

      <div id="library">
        <Suspense fallback={<Loader />}>
          <Excercises />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
