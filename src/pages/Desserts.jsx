import Card2 from "../components/shared/Card2";

export function Desserts ({ products }) {

    const dessertsFilteredProducts = products.filter(product => product.category === 'desserts');

    console.log(dessertsFilteredProducts);

    return (
        <>
          <h1>Postrecitos papá</h1>
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                {
                    dessertsFilteredProducts.length > 0 ? (
                        dessertsFilteredProducts.map(product => 
                            (
                                <Card2 key={product.id} {...product} />
                            )
                        )
                    ) : (
                    <p>No hay productos de la categoría "desserts"</p>
                    )
                }
            </div>
        </>
    )
}

export default Desserts;