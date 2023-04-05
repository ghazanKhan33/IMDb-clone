import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <p className='text-xl font-bold w-fit justify-center mx-auto'>Hello World</p>
  )
}
