import "./output.css"
import Social from "./Social.jsx"

export default function Most_used_languages() {
    return (
        <>
        <div>
            <h2 className="text-center mt-3 font-mono text-2xl text-white">Most used languages</h2>
            <div className="flex justify-center items-center mt-3">
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Thecode764&custom_title=Top languages&theme=dracula" />
            </div>
            <Social />
        </div>
        </>
    )
}