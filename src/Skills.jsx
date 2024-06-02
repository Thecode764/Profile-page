import "./output.css"
import Wakatime from "./Wakatime.jsx"

export default function Skills() {
    return (
        <>
        <div>
            <h4 className="text-center font-mono text-2xl mt-5 text-white">My skills</h4>
            <div className="flex justify-center items-center mt-5">
                <img src="https://skillicons.dev/icons?i=all" />
            </div>
            <p className="font-mono text-red-600 font-bold text-center mt-3">This skills only for test! ⚠</p>
            <Wakatime />
        </div>
        </>
    )
}