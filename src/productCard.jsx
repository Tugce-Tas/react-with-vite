import ProductCardBtn from "./productCardBtn"

function ProductCard({product, handleProductSelect}) {
  return (
    <>
    <article>
        <header>{product.name}</header>
        <img src={product.thumbnail} alt="" />
        <footer><ProductCardBtn productId={product.id} handleProductSelect={handleProductSelect}/></footer>
      </article>
    </>
  )
}

export default ProductCard