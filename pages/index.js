import { Sidemenu } from "@components/sidemenu";

export default function Home() {
  return (
    <div className='h-screen flex'>
      <Sidemenu/>
      <div className=''>
        Content
      </div>
    </div>
  )
}
