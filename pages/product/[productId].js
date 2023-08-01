import RootLayout from '@/components/Layouts/RootLayout'
import Image from 'next/image'
import { useRouter } from 'next/router'
const ProductDetails = ({ display }) => {
  const router = useRouter()
  const handleDescription = (data) => {
    let array = []
    for (let info in data) {
      array.push(
        <p>
          {info} : {data[info]}
        </p>,
      )
    }
    return array
  }
  const showDetails = (display) => {
    let array = []
    return (
      <div className="p-40">
        <Image src={display.image} width={200} height={200} alt="" />
        <div>
          <p>Name: {display.name}</p>
          <p>Category: {display.category}</p>
          <p>Price: {display.price}</p>
          <p>Rating: {display.rating}</p>
          <p>Status: {display.status}</p>
          {display.description &&
          Object.keys(display.description).length !== null ? (
            <ul className="pl-5">
              Description : {handleDescription(display.description)}
            </ul>
          ) : null}
        </div>
      </div>
    )
  }
  return (
    <div className="m-auto flex flex-row justify-center items-center">
      {showDetails(display)}
    </div>
  )
}

export default ProductDetails

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3004/all')
  const datum = await res.json()
  const newData = Object.values(datum).flat()

  const paths = newData.map((data) => {
    const { id } = data
    return {
      params: {
        productId: id.toString(),
      },
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  if (typeof window === undefined) {
    return {
      props: {
        display: [],
      },
    }
  }

  const { params } = context
  const response = await fetch(`http://localhost:3004/all/${params.productId}`)
  const data = await response.json()

  return {
    props: {
      display: data,
    },
  }
}
