import { useState } from "react"
import products from "./products.js"
import ImgNotSelected from "./imgNotSelected.jsx"
import ImgContainer from "./imgContainer.jsx"


function App() {
  const [product, setProducts] = useState(products)
  const [activeProduct, setActiveProduct] = useState(products.find(item => item.isActive))

  function handleProductSelect(productId) {
    const selectedProduct = products.find(item => item.id === productId)
    selectedProduct.isActive == true
    console.log(selectedProduct)
    setActiveProduct(selectedProduct)

    const notSelectedProduct = products.filter(item => item.id != productId).map(item => {
      return {
        ...item,
        isActive: false
      }
    })

    const newProducts = [
        ...notSelectedProduct,
        selectedProduct
      ].sort((a,b) => a.id - b.id)

    setProducts(newProducts)
  }

  return (
    <>
      <main className="container" >
        {
          activeProduct ? <div style={{marginTop:50}}>
            <h1 >{activeProduct.name}</h1>
            <img src={activeProduct.imgSrc} style={{width: "100%"}}/>
          </div>
          : <ImgNotSelected />
        }
        <ImgContainer products={product} handleProductSelect={handleProductSelect}  />
      </main>
    </>
  )
}

export default App