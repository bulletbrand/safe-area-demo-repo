import '@capacitor-community/safe-area'
import './App.css'
import ReactPlayer from 'react-player/file'


export function App() {
    return (
        <div className={"root"}>
            <h1>DEMO VIDEO PLAYER ISSUE</h1>

            <ReactPlayer
                url="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
                playing={false}
                controls={true}
                playsInline
                loop
            />
        </div>
    );
}
