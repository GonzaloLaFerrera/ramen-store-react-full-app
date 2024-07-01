import Card from "../components/shared/Card";


const HotDishes = () => {
    return(
        <>
            <h1>Hot dishes papá</h1>
            <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                <Card 
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
};

export default HotDishes;