import Card from "../components/shared/Card";

const Grill = () => {
    return(
        <>
            <h1>ParriGrill vieji</h1>
            <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                <Card 
                img="/img/grill/Grill1.jpg"
                title="Tai No Shioyaki"
                price="4.15"
                qty="6"
                />
                <Card 
                img="/img/grill/Grill2.jpg"
                title="Yosenabe with miso"
                price="5.29"
                qty="8"
                />
                <Card 
                img="/img/grill/Grill3.jpg"
                title="Gyoden"
                price="3.80"
                qty="8"
                />
            </div>
        </>
    )
};

export default Grill;