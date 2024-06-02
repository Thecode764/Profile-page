import "./output.css"
import OS from "./OS.jsx"

export default function Favorite_frameworks() {
    return (
        <>
        <div>
            <h2 className="text-center mt-3 font-mono text-2xl text-white">My favorite frameworks</h2>
            <div className="flex justify-center items-center mt-3">
                <img src="https://skillicons.dev/icons?i=react,flask,tailwind,bootstrap" />
            </div>
            <OS />
        </div>
        </>
    )
}