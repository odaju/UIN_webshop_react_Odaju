import { useParams } from "react-router";

export default function CategoryPage({products}) {
    const {slug} = useParams ()

    const categoryProducts = products.filter((product) => product.categorySlug === slug)

    console.log(categoryProducts)


    return (
            <main>
              <div id="productlist">
                {/* Mapper gjennom produktlisten og genererer en ProductCard-komponent for hvert produkt */}
                {categoryProducts.map((product, index) => (
                  <ProductCard
                    product={product}
                    key={`FCT_${index}`}
                    setCartCount={setCartCount}
                    cart={cart}
                    setCart={setCart}
                  />
                ))}
                </div>
            </main>
    )
}