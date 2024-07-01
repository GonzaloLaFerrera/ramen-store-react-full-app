import Card2 from "../components/shared/Card2";

/* export function ColdDishes ({ products }) {

    console.log(products);
    return (
        <ul>
            {
                products.map(product => {
                    return(
                        <li key={product.id}>
                            <img 
                                src={product.thumbnail} 
                                alt={product.title} 
                            />
                            <div>
                                <strong>{product.title} - {product.price}</strong>
                            </div>
                            <span>{product.description}</span>
                            <span>{product.category}</span>
                        </li>
                    )
                })
            }
        </ul>
        
    )
} */

    export function ColdDishes ({ products }) {

        const coldDishesFilteredProducts = products.filter(product => product.category === 'cold-dishes');

        console.log(coldDishesFilteredProducts);

        return (
            <>
              <h1>Cold dishes papá</h1>
              <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                    {
                        coldDishesFilteredProducts.length > 0 ? (
                            coldDishesFilteredProducts.map(product => 
                                (
                                    <Card2 key={product.id} {...product} />
                                )
                            )
                        ) : (
                        <p>No hay productos de la categoría "cold-dishes"</p>
                        )
                    }
                </div>
            </>
        )
    }


//Version sin JSON
/* const ColdDishes = () => {
    return(
        <>
            <h1>Cold dishes papá</h1>
            <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3"> */
                {/* Card */}
/*                 <Card 
                img="/img/Ramen1-noBg.png"
                title="Tokushima ramen"
                price="2.29"
                qty="20"
                />
                <Card 
                img="/img/Ramen7-noBg.png"
                title="Takaida ramen"
                price="4.29"
                qty="18"
                />
                <Card 
                img="/img/Ramen3-noBg.png"
                title="Hida Takayama ramen"
                price="3.49"
                qty="16"
                />
                <Card 
                img="/img/Ramen8-noBg.png"
                title="Osaka style ramen"
                price="3.00"
                qty="14"
                />
                <Card 
                img="/img/Ramen9-noBg.png"
                title="Tori-Paitan ramen"
                price="1.99"
                qty="20"
                />
                <Card 
                img="/img/Ramen6-noBg.png"
                title="Golden Shrimp ramen"
                price="3.59"
                qty="12"
                />
            </div>
        </>
    )
}; */

export default ColdDishes;