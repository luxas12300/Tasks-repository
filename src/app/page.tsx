"use client"

import Todo from "./Pages/Todo/Todo";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter()
  // const slug = 'nextjs'

  return (
   <div className="">
    {/* <button onClick={() => router.push("/components/TaskPage")}>TaskPages</button> */}
    {/* <ul>
      <li><Link href={"/addTask"}>newTask</Link></li>
      <li><Link href={"/Login"}>Login</Link></li>
    </ul> */}
    
    {/* <Link href></Link> */}
    {/* <Login /> */}
    <Todo />
   </div>
  );
}
