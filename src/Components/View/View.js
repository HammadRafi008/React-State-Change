import {useState} from 'react'
import '../View.css'
import blubOff from '../../Images/one.jpeg'
import blubOn from '../../Images/W.jpeg'



function View() {
    const [isBlubOn, setBlubState] = useState(false)
    const blubSource = isBlubOn ? blubOn : blubOff
    const btnText = isBlubOn ? 'Kesa Diya' : 'Wah Wah'


    function toggleBtnState(){
        
        setBlubState(!isBlubOn)

    }
    return (
        <>
            <div className='bulbContainer'>
                <img width={300} className='im' src={blubSource} />
                <button  onClick={toggleBtnState} className='btn'>{btnText}</button>


            </div>
        </>
    )
        } 
    

export default View