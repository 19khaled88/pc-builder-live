import RootLayout from '@/components/Layouts/RootLayout'
import Processor from '@/components/Processor/Processor'

const CpuPage = ({ display }) => {
  console.log(Object.values(display).flat())
  return (
    <div>
      <h1 className="text-center text-lg font-bold pt-5">
        All the available processors
      </h1>
      <Processor cpu={display} />
    </div>
  )
}

export default CpuPage

CpuPage.getLayout = function getLayout(page) {
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
