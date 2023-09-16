import ProductCard from "./productCard"


function ImgContainer({ products, handleProductSelect }) {
  return (
    <div className="grid">
      {products
        .filter(
          product => product.isAvaliable)
        .map(
          product => <ProductCard product={product} key={product.id} handleProductSelect={handleProductSelect} />)}
    </div>
  )
}

export default ImgContainer