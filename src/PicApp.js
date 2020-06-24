import React, { Component } from 'react'
import pic1 from './1.jpeg'
import pic2 from './2.jpg'
import pic3 from './3.jpg'
import pic4 from './4.jpg'
import './PicApp.css'
export default class PicApp extends Component {
    state = {
        data: [pic1, pic2, pic3, pic4],
        whichPic: 0,
    }
    onNext = () => {
        if (this.state.whichPic == 3) {
            this.setState({ whichPic: 0 })
        } else if (this.state.whichPic != 4) {
            this.setState({ whichPic: this.state.whichPic + 1 })
        }
    }
    onLast = () => {
         if (this.state.whichPic == 0) {
                    this.setState({ whichPic: 3 })
                } else if (this.state.whichPic != 0) {
                    this.setState({ whichPic: this.state.whichPic - 1 })
                } else if (this.state.whichPic == 0){
                    this.setState({whichPic:3})
                }
    }
        render() {
            return (
                <div>
                    <button onClick={this.onLast}>&lt;</button>
                    <img src={this.state.data[this.state.whichPic]} />
                    <button onClick={this.onNext}>&gt;</button>
                </div>
            )
        }
    }
