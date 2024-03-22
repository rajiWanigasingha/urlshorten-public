"use server";

import { cookies } from "next/headers";
import { getXataClient } from "../../xata/xata";
import * as jose from "jose";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


const xata = getXataClient();

export async function Createurl(formData: FormData) {
  const url = formData.get("url") as string;

  const cookie = cookies().get("jwt");

  if(!cookie){
    redirect('/login')
  }

  const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_API_KEY);

  const jwt = cookie?.value;

  const { payload } = await jose.jwtVerify(jwt, secret, {});

  if(!payload){
    redirect('/login')
  }

    const record = await xata.db.url.create({
      urlid: payload.sub,
      url: url,
    });

    revalidatePath(`/profile/${payload.sub}`)

    redirect(`/profile/${payload.sub}`)
}
