import { FaInstagram, FaFacebook } from "react-icons/fa";

const RecipeFooter = () => {
  return (
    <>
        <div className="mt-6">Take a pic to your dishes and tag us!</div>
        <div className="flex gap-2 text-sm text-[#ec7c6a]">
            <span className="flex items-center gap-1"><FaInstagram/>/koi_dragon</span>
            <span className="flex items-center gap-1"><FaFacebook/>/koi_dragon</span>
        </div>
    </>

  )
}

export default RecipeFooter