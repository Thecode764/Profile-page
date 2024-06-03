import "./output.css"
import Skills from "./Skills.jsx"
import user from "./user.png"

export default function Profile() {
    return (
        <>
        <div>
            <div className="flex justify-center items-center">
            <img src="{{user}} width="100" />
            </div>
            <h3 className="text-center font-mono mt-5 text-2xl text-white">Artin karimi</h3>
            <p className="text-center text-white font-mono">A web developer 🌐 I code python too 🐍 Here is profile page project! This is a test page created by profile page 🧪<br />🐈 <a href='https://github.com/Thecode764' className="underline">Github</a></p>
            <Skills />
        </div>
        </>
    )
}
