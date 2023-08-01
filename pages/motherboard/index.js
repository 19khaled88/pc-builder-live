import RootLayout from '@/components/Layouts/RootLayout'
import Motherboard from '@/components/Motherboard/Motherboard'


const MotherboardPage = ({ display }) => {
  return (
    <div>
      <h1 className="text-center text-lg font-bold pt-5">
        All the available motherboard
      </h1>
      <Motherboard display={display} />
    </div>
  )
}

export default MotherboardPage

MotherboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticProps = async () => {
  if (typeof window === undefined) {
    return {
      props: {
        display: [],
      },
    }
  }

 const res = await fetch('http://localhost:3004/db')
 const data = await res.json()

  return {
    props: {
      display: data,
    },
  }
}
