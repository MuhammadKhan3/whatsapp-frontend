import React from 'react'
import Styles from '../styles/callNotification.module.css'
import {BsCameraVideoFill} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

const Callnotification = ({answerhandler,setcallaccepted,callaccepted}) => {
  return (
    <div className={Styles.container}>

        {/* <IconContext.Provider s> */}
          {/* <div> */}
            <BsCameraVideoFill className={Styles.videoIcon} color='white'  onClick={answerhandler} size={43}/>
            <BsCameraVideoFill className={Styles.videoIconCancel} color='white'  onClick={()=>{setcallaccepted(!callaccepted)}} size={43}/>
          {/* </div>
        </IconContext.Provider> */}
        {/* <button >Accept</button> */}
    </div>
  )
}

export default Callnotification