import { useCookies } from 'react-cookie';
import Image from 'next/image';
import Styles from '../styles/messagebox.module.css';
import profile from '../public/1.jpg'
import moment from 'moment'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import InputBox from './inputbox';
import { useDispatch, useSelector } from 'react-redux';
import { message_action } from '../redux/messageSlice';
import { socket } from './socket';
import Callnotification from './callnotification';
// import {} from 'React-ic'
var Peer = require('simple-peer');

const MessageBox = ({messagesEndRef,messages,user}) =>{
    // const messagesEndRef = React.useRef();
    const dispatch=useDispatch();     const [callend,setcallended]=useState(null);
    const [audio,setaudio]=useState(true);
    const [video,setvideo]=useState(true);

    const [calls,setcalls]=useState({});
    const [stream,setstream]=useState(null);
    const [callaccepted,setcallaccepted]=useState(false);
    const [name,setname]=useState();
    const peerid=useSelector(state=>state.messageSlice.peerid)
    const [remotePeerid,setremotePeerid]=useState('');
    const remoteuserref=useRef(null);
    const localuserref=useRef(null);
    const peerinstance=useRef(null);
    const [cookies,setCookies]=useCookies(["userId","email"]);
    const targetRef = useRef();
    const [dimension,setDimensions]=useState({width:0,height:0});

    
    useEffect(() => {
            if (targetRef.current) {
              setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
              });
            }
            navigator.mediaDevices.getUserMedia({video:video,audio:audio})
            .then((currenStream)=>{
                  localuserref.current.srcObject=currenStream;
                  // localuserref.current.play();
                  setstream(currenStream);
                  currenStream.getTracks().forEach((device)=>{
                    console.log(device)
                  })
            })
            socket.on("callUser",({from,name,signal})=>{
              setcalls({isReceivedCall:true,from,name,signal})
            })
    }, []);
    const answerCall=()=>{


          const peer=new Peer({initiator:false,trickle:false,stream});
          peer.on('signal',(data)=>{
            socket.emit('answercall',{signal:data,to:cookies.receiveId});
          })
          peer.on('stream',(remoteStream)=>{
            setcallaccepted(true);
            console.log(stream)
            remoteuserref.current.srcObject=remoteStream;
            remoteuserref.current.play();
          })
          console.log(calls.signal)
          peer.signal(calls.signal);
          peerinstance.current=peer;
      
    }
    const userCall=()=>{        
      console.log('user-call')
      const peer=new Peer({initiator:true,trickle:false,stream});
      peer.on('signal',(data)=>{
        socket.emit('calluser',{userToCall:cookies.receiveId,signalData:data,from:socket.id,name});
      })

      peer.on('stream',(remoteStream)=>{
        console.log('stream')
        remoteuserref.current.srcObject=remoteStream;
        remoteuserref.current.play();
      })
      
      socket.on('callaccepted',(signal)=>{
        console.log('accepted susscusefully')
        setcallaccepted(true);
        peer.signal(signal);
      })
      peerinstance.current=peer;
    }
    const leaveCall=()=>{
      setcallended(true);
      peerinstance.current.destroy();
      window.location.reload();
    }

    const unMutehandler=()=>{
      setaudio(!audio)
      stream.getAudioTracks()[0].enabled = true;

    }
    const unMuteVideohandler=()=>{
      setvideo(!video);
      stream.getVideoTracks()[0].enabled = true;
    }
    const Mutehandler=()=>{
      setaudio(false)
      stream.getAudioTracks()[0].enabled = false;
    }
    const MuteVideohandler=()=>{
      setvideo(false);
      stream.getVideoTracks()[0].enabled = false;
    }
  return (
    <div className={Styles.mainContainer}>
        <div className={Styles.innerContainer}>
               <div className={Styles.profileContainer}>
                <Image
                  src={profile}
                  alt="profilepic"
                  width="40px"
                  height="40px"
                />
              </div>
              <p className={Styles.name}>{cookies?.email}</p>

              <div className={Styles.phoneIconContainer}>
                 <svg className={Styles.phoneIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" onClick={userCall}/></svg>
              </div>
        </div>
        <div>
            <div className={Styles.videoContainer}>
                        <div className={Styles.videoRemote}>
                          <video className={Styles.remote} ref={remoteuserref} autoPlay/>
                          {audio ? 
                          <svg onClick={Mutehandler} xmlns="http://www.w3.org/2000/svg" className={`bi bi-mic-fill ${Styles.micIcon}`} fill="currentColor"  viewBox="0 0 16 16"> <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/> <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/> </svg>
                          :
                          <svg style={{color: 'red'}} onClick={unMutehandler} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-mic-mute-fill ${Styles.micMuteIcon}`} viewBox="0 0 16 16"> <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z" fill="red"></path> <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z" fill="red"></path> </svg>
                          }
                          {video ?
                            <svg onClick={MuteVideohandler}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-camera-video-fill ${Styles.videoIcon}`} viewBox="0 0 16 16"> <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" fill="white"></path> </svg>
                            :
                            <svg style={{color: 'red'}} onClick={unMuteVideohandler} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-camera-video-off-fill ${Styles.videMuteIcon}`} viewBox="0 0 16 16"> <path fillRule="evenodd" d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728L.847 3.366zm9.746 11.925-10-14 .814-.58 10 14-.814.58z" fill="red"></path> </svg>
                          }
                          {/* red icon */}
                        </div>
                        <div className={Styles.videoLocal}>
                          <video className={Styles.local} ref={localuserref} muted autoPlay playsInline/>
                        </div>
              </div>
        </div>

        <div className={Styles.messageContainer}>
            <ul 
            className={Styles.messageList}>
              {messages.map((message,i)=>{
                return<div key={i}>
                {message?.receiveId===parseInt(cookies.userId) ?
                <div  className={Styles.sender}>
                    <li className={Styles.receiveMessage}>{message.message} <span className={Styles.sendMessagetime}>{moment(message.createdAt).format("h:mm a")}</span></li>
                </div>
                :
                <div className={Styles.receiver}>
                  <li className={Styles.sendMessage} style={{float:'right',marginRight:'30px'}} ref={targetRef}>{message.message}<span className={Styles.sendMessagetime}>{moment(message.createdAt).format("h:mm a")}</span></li>
                </div>
                }
                </div>
              })}            


            </ul>
        <div ref={messagesEndRef} />
        </div>
        <InputBox messagesEndRef={messagesEndRef}/>
        {calls?.isReceivedCall && !callaccepted &&
        <Callnotification answerhandler={answerCall} setcallaccepted={setcallaccepted} callaccepted={callaccepted}/>
       } 
    </div>
  )
}

export default MessageBox