import "./output.css"
import Most_used_languages from "./Most-used-language.jsx"

export default function OS() {
    return (
        <>
        <div>
            <h2 className="font-mono text-white text-2xl mt-5 text-center">Operating systems i am using</h2>
            <div className="flex justify-center items-center mt-3">
                <img src="https://skillicons.dev/icons?i=linux,ubuntu,arch,windows" />
            </div>
            <div className="flex justify-center items-center mt-3 gap-2">
                <a href="https://kernel.org">
                    <button className="btn btn-outline btn-warning font-mono">LINUX</button>
                </a>
                <a href="https://ubuntu.org">
                    <button className="btn btn-outline btn-error font-mono">UBUNTU</button>
                </a>
                <a href="https://archlinux.org">
                    <button className="btn btn-outline btn-info font-mono">ARCH</button>
                </a>
                <a href="https://www.microsoft.com/en-us/windows">
                    <button className="btn btn-outline font-mono btn-success">WINDOWS</button>
                </a>
            </div>
            <Most_used_languages />
        </div>
        </>
    )
}