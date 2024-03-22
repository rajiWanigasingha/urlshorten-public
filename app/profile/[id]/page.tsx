import Datashow from "@/app/lib/components/datashow/datashow";

export default async function Profile({ params }: { params: { id: string } }) {

  return (
    <>
    <Datashow id={params.id}/>
    </>
  );
}
