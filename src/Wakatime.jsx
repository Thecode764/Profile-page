import "./output.css"
import Favorite_frameworks from "./Favorite_frameworks.jsx"

export default function Wakatime() {
    return (
        <>
        <div>
            <h2 className="text-center font-mono text-2xl mt-5 text-white">Wakatime</h2>
            <div className="flex justify-center items-center mt-3">
                <img src="https://github-readme-stats.vercel.app/api/wakatime?username=Thecode764\&layout=compact" />
            </div>
            <p className="text-center text-red-500 font-bold mt-3 font-mono">Make sure you have a wakatime account and you entered your wakatime api key on you code editor ⚠</p>
            <Favorite_frameworks />
        </div>
        </>
    )
}