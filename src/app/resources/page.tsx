import ResourceList from "@/components/resources/ResourceList";
import { getResources } from "@/lib/api/resources/queries";


export const revalidate = 0;

export default async function Resources() {
  const { resources } = await getResources();
  

  return (
    <main className="max-w-3xl mx-auto p-4 rounded-lg bg-card">
      <div className="relative">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl my-2">Resources</h1>
        </div>
        <ResourceList resources={resources}  />
      </div>
    </main>
  );
}
