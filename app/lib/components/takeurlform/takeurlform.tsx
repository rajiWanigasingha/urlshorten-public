"use client"

import { Createurl } from "../../action/createurlaction/action";

export default function Takeurlform() {
  return (
    <>
      <div className="w-full md:w-10/12 lg:w-9/12 flex flex-col gap-3 justify-center mt-20 p-2 py-8 rounded-lg shadow-lg">
        <div className="w-full">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl w-full text-center">
            Enter the URL to be shortened
          </h1>
        </div>
        <div className="w-full p-2">
          <form action={Createurl} className="flex flex-col w-full gap-3">
            <input name="url" type="text" placeholder="Enetr your url to be shorten" className="p-5 placeholder: rounded-md shadow-sm outline-none border hover:outline-1 hover:outline-blue-600" />
            <p className="text-sm">Need to be full url Ex: www.google.com</p>
            <button type="submit" className="p-3 rounded-md bg-green-600 hover:bg-green-800 outline-none">Create shorten url</button>
          </form>
        </div>
      </div>
    </>
  );
}
