import './App.css'



export function App() {
    return (
        <div className={"root"} style={{background: 'white'}}>
            <h1>DEMO VIDEO PLAYER ISSUE 3</h1>

            <video controls width="300">
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4"/>
            </video>
        </div>
    );
}
