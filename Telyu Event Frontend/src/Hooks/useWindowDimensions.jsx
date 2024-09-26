import { useState, useEffect } from 'react'

const getWindowSize = () => {
    const {innerWidth: width, innerHeight: height} = window
    return{
        width, height
    }
} 


const useWindowDimensions = () => {
    const [windowSize, setWindowsize] = useState(getWindowSize())

    useEffect(() =>{
        function handleResize(){
            setWindowsize(getWindowSize())
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return windowSize

}
export default useWindowDimensions