import { redirect } from "next/navigation"

export default function  Home(){
    redirect('/login')
    return(
        <>
        <h1>hello</h1>
        </>
    )
}