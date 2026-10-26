import { Suspense } from "react";
import ViewDetails from "@/components/shared/ViewDetails";

export default function Page({ params }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <WorkoutContent params={params} />
    </Suspense>
  );
}

async function WorkoutContent({ params }) {
  const { id } = await params;
  return <ViewDetails id={id} />;
}
