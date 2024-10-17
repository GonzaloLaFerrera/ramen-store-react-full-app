import { MdOutlineRamenDining } from "react-icons/md";
import RecipeFooter from "../components/shared/RecipeFooter";

const RecipeDetail1 = () => { 
    return (
        <div className="bg-[#1f1d2b] text-gray-300 p-8 rounded-xl flex flex-col gap-2">
            <img 
                src="\img\recipes\recipe1.jpg" 
                alt="recipe 1"  
                className="w-40 h-40 object-cover -mt-20 mb-2 rounded-full shadow-xl"
            />
            <h3 className="flex items-end text-[#ec7c6a] text-2xl">Traditional chicken ramen<MdOutlineRamenDining className="text-[#ec7c6a] text-2xl p-1"/></h3>
            <h5 className="text-base">Chicken chashu shoyu ramen</h5>
            <span className="text-sm text-gray-400 -mt-2">Make this comforting Japanese noodle soup using pan-fried rolled chicken (chashu) and noodles in a delicious broth. Top with eggs and nori if you like</span>
            <h5 className="text-base mt-2">Ingredients</h5>
            <ul className="text-gray-400 text-sm list-disc list-inside">
                <li>2 boneless chicken thighs</li>
                <li>2 chicken breasts</li>
                <li>thumb-sized piece of ginger, thinly sliced</li>
                <li>2 tbsp dashi powder or 1 piece of dried kombu (5cm square)</li>
                <li>1 whole small garlic bulb, cloves peeled</li>
                <li>150ml soy sauce</li>
                <li>4 tbsp saké</li>
                <li>4 tbsp mirin</li>
                <li>2 tbsp dark brown sugar</li>
                <li>2 litres chicken stock</li>
                <li>100-130g fresh ramen noodles (or 80g -100g per serving if using dried ramen noodles)</li>
                <li>3 soft-boiled eggs</li>
                <li>1 sheet of nori (seaweed sheet)</li>
                <li>2 spring onions</li>
                <li>shichimi (Japanese seven spice) (optional)</li>
            </ul>
            <h5 className="text-base mt-2">Method</h5>
            <ul className="text-gray-400 text-sm list-decimal list-inside flex flex-col gap-2 [&_li::marker]:font-bold">
                <li>First make the chashu. Wrap the chicken thighs around the breasts and secure with toothpicks or string to make a cylindrical shape – you may need to flatten the thighs a little by bashing them with a rolling pin. In a very hot pan, sear the chicken on each side until golden brown, around 25 mins in total.</li>
                <li>Transfer the chicken to a medium pan with a lid and add the ginger, dashi powder, garlic, soy sauce, saké, mirin and sugar, plus 150ml water. Cover and bring to the boil, then reduce to medium-low and simmer for 30-40 mins. Remove the lid and leave to cool. If you want to make it ahead, chill the chicken and sauce overnight, or at least for a few hours. It will improve the flavour. Once cooled, remove the chicken from the sauce, slice it and set the sauce aside.</li>
                <li>Pour 240ml of the sauce into a large pan (freeze the rest to use another time), bring to the boil, add the chicken stock and heat through.</li>
                <li>In a separate pan filled with boiling water, cook the noodles following pack instructions, then drain.</li>
                <li>Divide the chicken stock and noodles between six bowls. Put the sliced chicken, half a boiled egg and any other toppings you're using on top. Serve immediately, otherwise the noodles will go soggy.</li>
            </ul>
            <div className="flex mt-2">
                <h5 className="text-base">Enjoy!</h5>
                <MdOutlineRamenDining className="text-white text-2xl pl-1"/>
            </div>

            <RecipeFooter />
        </div>
    )
}

export default RecipeDetail1;