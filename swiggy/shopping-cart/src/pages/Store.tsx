import ProductItem from "../components/ProductItem"
import products from "../data/data.json"
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div className="grid grid-cols-3">
        {
          products?.map(product => (
            <>
              <ProductItem {...product} />
            </>
          ))
        }
      </div>
    </>
  )
}
export default Store