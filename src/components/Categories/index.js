import { Link, Route } from "react-router-dom"
import categoryArr from "../../CategoryArr"
import Category from "../Category"

export default function Categories () {
    return(
        <div>
                {categoryArr.map((category, i) => {
                    return (
                            <Link key={i} to={'/categories/'+ category.name} className='categories'>{category.name}</Link>
                    )
                })}
        </div>
    )
}