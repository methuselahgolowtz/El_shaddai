import { Link } from "react-router-dom"

export default function Nopage(){
    return (
        <>
        
        <div className="font-cabinet flex flex-col justify-center items-center h-screen w-screen bg-blue-950 text-blue-50 text-xl">
        <div>

            <p>No Page Found!</p>
        </div>

<div className="flex items-center justify-center">
    <p className="flex mt-2 p-3 items-center justify-center">Back to <span className="text-3xl">|</span>  </p>
    <span className=""><Link to='/home' className="text-amber-500 my-3">Home</Link></span>
</div>

        </div>
        
        </>
    )
}