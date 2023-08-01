import RootLayout from '@/components/Layouts/RootLayout'
import Processor from '@/components/Processor/Processor'

// import Processor from '@/components/Processor/Processor'

const port = process.env.LOCAL_URL || 5000
const CpuPage = ({ display }) => {

  // const { cpu } = allCpus
  return (
    <div>
      <h1 className="text-center text-lg font-bold pt-5">
        All the available processors
      </h1>
      {/* <Processor cpu={allCpus} /> */}
      <Processor display={display} />
    </div>
  )
}

export default CpuPage

CpuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export async function getStaticProps() {
    if(typeof window === undefined){
      return{
        props:{
          display:[]
        }
      }
    }
  const res = await fetch(`${process.env.LOCAL_URL}/db`)
  const data = await res.json()

  return {
    props: {
      display: data,
    },
  }
}
