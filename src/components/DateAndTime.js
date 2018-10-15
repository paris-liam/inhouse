import React from 'react';
import styled from 'styled-components';

export const Dnt = styled.div`
    grid-area:clock;
    text-align:right;
    font-family:'Courier New', Courier, monospace;
    margin-right:2vw;
    font-size:.75em;
`;

class DateAndTime extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dnt:0
        }
        this.clockSetup = this.clockSetup.bind(this);
    }
    componentDidMount(){
        this.time = setInterval(this.clockSetup,1);
    }
    componentWillUnmount(){
        clearInterval(this.time);
    }
    clockSetup(){
        let clock = new Date();
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let M = 'AM'
        let date = clock.getDate();
        let j = date % 10;
        let k = date % 100;
        if (j === 1 && k !== 11) {
         date = date + "st";
        }
        else if (j === 2 && k !== 12) {
         date = date + "nd";
        }
        else if (j === 3 && k !== 13) {
         date = date + "rd";
        }
        else{
         date = date + "th";
        }
        let hour = clock.getHours();
        if(hour > 12){
          hour = hour % 12;
          M = 'PM';
        }
        if(hour < 10){
            hour = `0${hour}`;
        }
        let minute = clock.getMinutes();
        if(minute < 10 ){
            minute = `0${minute}`;
           }
        let second = clock.getSeconds();
        if(second < 10 ){
         second = `0${second}`;
        }
        let milli = clock.getMilliseconds();
        if(milli < 10 ){
          milli = `00${milli}`;
        }
        else if(milli < 100){
          milli = `0${milli}`;
        }
        this.setState({
          dnt: `${hour}:${minute}:${second}:${milli} ${M} ${weekday[clock.getDay()]} ${month[clock.getMonth()]} ${date} ${clock.getFullYear()}`,
        });
       }
    render(){
        return(
            <Dnt>{this.state.dnt}</Dnt>
        )
    }

}
export default DateAndTime
