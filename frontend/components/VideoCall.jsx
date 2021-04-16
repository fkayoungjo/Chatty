import React from 'react';
import { broadcastData, JOIN_CALL, LEAVE_CALL, EXCHANGE, ice } from './video_util.js';

class VideoCall extends React.Component{

  state = {
    pcPeers: {},
    userId: Math.floor(Math.random() * 10000),
    joinCall: this.joinCall,
    leaveCall: this.leaveCall,
  }


  componentDidMount(){
  this.remoteVideoContainer =
     document.getElementById("remote-video-container")
  navigator.mediaDevices.getUserMedia({audio: false, video: true})
     .then(stream => {
         this.localStream = stream;
         document.getElementById("local-video").srcObject = stream;
     }).catch(error => { console.log(error)});
}

  join(data){ this.createPC(data.from, true) }
  
  joinCall(e){
  App.cable.subscriptions.create(
    { channel: "CallChannel" },
    {
      connected: () => {
        broadcastData({ type: JOIN_CALL, from: this.userId});
      },
      received: data => {
        console.log("RECEIVED: ", data);
        if (data.from === this.userId) return;
        switch(data.type){
          case JOIN_CALL:
            return this.join(data);
          case EXCHANGE:
            if (data.to !== this.userId) return;
            return this.exchange(data);
          case LEAVE_CALL:
            return this.removeUser(data);
          default:
            return;
        }
      }
    });
}

  createPC(userId, offerBool){
  }
  exchange(data){
  }

  leaveCall(){
  }
  removeUser(data){
  }
  render(){
    return(
    <div className="VideoCall">
     <div id="remote-video-container"></div>
     <video id="local-video" autoPlay></video>
     <button onClick={this.joinCall}>Join Call</button>
     <button onClick={this.leaveCall}>Leave Call</button>
    </div>)
  }
export default VideoCall;
