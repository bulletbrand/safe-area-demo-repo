import {useState, useCallback} from 'react';
import { Geolocation } from '@capacitor/geolocation';
import '@capacitor-community/safe-area'
import './App.css'

/*
 const detectInsets = () => {
    console.log('ALAL')
    SafeArea.enable({
        config: {
            customColorsForSystemBars: true,
            statusBarColor: '#00000000', // transparent
            statusBarContent: 'light',
            navigationBarColor: '#00000000', // transparent
            navigationBarContent: 'light',
        },
    }).then(() => {
        const style = document.documentElement.style
        const computedStyle = getComputedStyle(document.documentElement)
        debugger
        const bottomInset = computedStyle.getPropertyValue('--safe-area-inset-bottom')
        const topInset = computedStyle.getPropertyValue('--safe-area-inset-top')

        const parseMaxValue = (value) => {
            const match = value.match(/max\((\d+px),\s*(\d+px)\)/)
            if (match) {
                return Math.max(parseInt(match[1]), parseInt(match[2]))
            }
            return parseInt(value)
        }

        const parsedBottomInset = parseMaxValue(bottomInset)
        const parsedTopInset = parseMaxValue(topInset)


        style.setProperty('--obeta-safe-area-bottom', `${parsedBottomInset}px`)
        style.setProperty('--obeta-safe-area-top', `${parsedTopInset}px`)
    })
}

*/

export default function GeolocationPage() {

    const [loc, setLoc] = useState(null);


/*    useEffect(() => {
        detectInsets()
    }, []);*/

    const getCurrentPosition = useCallback(async () => {
     await Geolocation.getCurrentPosition().then((dd)=>{
            setLoc(dd);
        })
    }, []);


    return (
        <div className={"root"}>
            <h1>Geolocation</h1>
            <p>Your location is:</p>
            <p>Latitude: {loc?.coords.latitude}</p>
            <p>Longitude: {loc?.coords.longitude}</p>

            <div className={"navigation"}>
                <button onClick={getCurrentPosition}>
                    Get Current Location
                </button>
            </div>
        </div>
    );
}
