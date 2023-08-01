import RootLayout from '@/components/Layouts/RootLayout'
import Ram from '@/components/Ram/Ram'

const RamPage = ({ display }) => {
  return (
    <div>
      <h1 className="text-center text-lg font-bold pt-5">
        All the available RAM
      </h1>
      <Ram display={display} />
    </div>
  )
}

export default RamPage

RamPage.getLayout = function getLayout(page) {
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
