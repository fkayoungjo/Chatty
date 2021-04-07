import React from 'react';
import { broadcastData, JOIN_CALL, LEAVE_CALL, EXCHANGE, ice } from './video_util.js';

class VideoCall extends React.Component{
  constructor(props){
    super(props);
    this.pcPeers = {};
    this.userId = Math.floor(Math.random() * 10000);
    this.joinCall = this.joinCall.bind(this);
    this.leaveCall = this.leaveCall.bind(this);
  }
  componentDidMount(){
  }
  join(data){
  }
  joinCall(){
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
}
export default VideoCall;
