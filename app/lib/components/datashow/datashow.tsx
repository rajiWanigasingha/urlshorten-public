"use server";
import Link from "next/link";
import { getXataClient } from "../../xata/xata";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const xata = getXataClient();

export default async function Datashow({ id }: any) {
  async function redirecttocreate() {
    "use server";
    redirect(`${id}/create`);
  }

  const record = await xata.db.url
    .filter("urlid.id", `${id}`)
    .select(["urlid.email", "urlid", "url", "urlid.id"])
    .getPaginated({ pagination: { size: 15 } });

  const data = record.records;

  async function Delete(formData:FormData) {
    "use server";
    const id = formData.get("id")

    const deletes = await xata.db.url.delete(`${id}`)

    revalidatePath(`${id}/`)
  }

  if (data.length <= 0) {
    return (
      <>
        <div className="w-full flex flex-col gap-5 p-2">
          <div className="w-full flex justify-end">
            <form action={redirecttocreate}>
              <button
                type="submit"
                className="text-pink-700 hover:text-white border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-sm px-7 py-3 text-center dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:hover:bg-pink-600 dark:focus:ring-pink-800"
              >
                Create New Short Url
              </button>
            </form>
          </div>
          <div className="mb-4">
            <h1 className="text-lg md:text-2xl lg:text-3xl w-full text-center font-bold">
              there is no record click create new short Url to create a one
            </h1>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full flex flex-col gap-5 p-2">
          <div className="w-full flex justify-end">
            <form action={redirecttocreate}>
              <button
                type="submit"
                className="text-pink-700 hover:text-white border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-sm px-7 py-3 text-center dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:hover:bg-pink-600 dark:focus:ring-pink-800"
              >
                Create New Short Url
              </button>
            </form>
          </div>
          <div className="mb-4">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
              Welcome back {record.records[0].urlid?.email}
            </h1>
          </div>
          {data.map((val: any, index: number) => (
            <div className="w-full flex flex-col items-center" key={index}>
              <div className="flex lg:flex-row md:flex-row flex-col gap-2 md:gap-0 lg:gap-0 md:w-4/5 lg:w-4/5 w-full rounded-xl lg:rounded-full md:rounded-full p-3 shadow-lg border items-center justify-between">
                <div className="px-3 lg:w-2/5 md:w-2/5 w-full text-center">
                  <p>{val.url}</p>
                </div>
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-2/3 md:w-2/3 w-full px-5 gap-4 items-center justify-between">
                  <div className="text-nowrap w-full  overflow-y-scroll">
                    <p className="text-blue-600  w-1/2 text-center pr-2">
                      {process.env.NEXT_PUBLIC_URL}
                      {val.id}
                    </p>
                  </div>
                  <form action={Delete} className="lg:w-2/5 md:w-2/5 w-full">
                    <input type="text" name="id" defaultValue={val.id} hidden />
                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-800 w-full outline-none rounded-lg px-2 py-1"
                    >
                      delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

}
