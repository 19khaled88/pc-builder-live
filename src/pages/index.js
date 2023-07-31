import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/Layouts/RootLayout'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
   <div><h1>Home Page</h1></div>
  )
}

HomePage.getLayout = function getLayout(page){
  return(
    <RootLayout>
      {page}
    </RootLayout>
  )
}