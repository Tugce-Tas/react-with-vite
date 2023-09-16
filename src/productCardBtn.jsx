const ProductCardBtn = ({ productId, handleProductSelect }) => <button
  className="outline"
  onClick={() => handleProductSelect(productId)}
  >Select {productId}
</button>

export default ProductCardBtn