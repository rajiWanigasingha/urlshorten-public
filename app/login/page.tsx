"use client";

import { useFormState } from "react-dom";
import { Loginaction } from "../lib/action/loginaction/action";
import Errorlogin from "../lib/components/error/loginerror/error";
import Link from "next/link";


const initialState = {
  message:'',
  id:null
}

export default function Login() {
    const [state ,fromAction] = useFormState(Loginaction ,initialState)
  return (
    <>
      <div className="flex flex-col items-center mt-10 w-full">
        <div className="w-full md:w-4/5 lg:w-4/5 p-5 min-h-80 rounded-lg shadow-lg">
          <div className="flex items-center mb-3 w-full">
            <h1 className="text-lg md:text-xl lg:text-2xl text-center w-full font-semibold">
              Login into URL shorten
            </h1>
          </div>
          <hr className="divide-solid mb-7" />
          {state.message && <Errorlogin state={[state.message,state.id]}/>}
          <div>
            <form action={fromAction} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  name="email"
                  className="p-3 rounded-md shadow-md"
                  placeholder="Email address"
                  required
                />
                <p className=" text-sm">Ex: admin@gmail.com</p>
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="password"
                  name="password"
                  className="p-3 rounded-md shadow-md"
                  placeholder="Password"
                  required
                />
                <p className=" text-sm">
                  Want more than 8 charactores
                </p>
              </div>
              <button
                type="submit"
                className="p-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-800"
              >
                Login in to creator
              </button>
            </form>
            <p className="text-base font-light my-5">Don&apos;t have account <Link href='/singup' className="text-blue-600 underline">Click me</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}

