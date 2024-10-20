import './App.css'
import Example from "./Example.tsx";

function App() {
    return (
        <div className="bg-gray-800" style={{height: '400px'}}>
            <div className="bg-white/5">
                <Example/>
            </div>
        </div>
    )
}

export default App
