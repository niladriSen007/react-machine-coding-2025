interface ProductItemProps {
  id: number
  name: string
  price: number
  imgUrl: string
}

const ProductItem = ({ id, name, price, imgUrl }: ProductItemProps) => {

  const quantity = 0

  return (
    <div key={id}>
      <img className="object-cover size-80" src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      {!quantity ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button> :
        <div className="flex gap-4 items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
          <span>{quantity}</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
        </div>
      }
    </div>
  )
}
export default ProductItem