import { permanentRedirect } from "next/navigation";
import { getXataClient } from "../lib/xata/xata";

export default async function Rediracttourl({
  params,
}: {
  params: { slug: string };
}) {
  const xata = getXataClient();

  const page = await xata.db.url
    .filter("id", params.slug)
    .select(["url"])
    .getAll();

  if (!(page.length > 0)) {
    return (
      <>
        <div className="w-11/12 rounded-lg shadow-lg">
          <h1 className="text-xl">You have a invaild shorten url </h1>
        </div>
      </>
    );
  } else {
    for (let i = 0; i < 5000; i++) {
        if(i>4900){
            permanentRedirect(`https://${page[0].url}`)
        }
    }
    return (
      <>
        {page.map((val, index: number) => (
          <div key={index} className="w-3/5 rounded-lg shadow-lg mt-44 p-5">
            <h1 className="text-xl w-full text-center">
              You will be rediracted in two seconds
            </h1>
            <h1 className="text-xl font-bold text-blue-600  w-full text-center">
              {val.url}
            </h1>
          </div>
        ))}
      </>
    );
  }
}
