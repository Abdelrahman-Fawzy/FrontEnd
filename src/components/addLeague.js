import Axios from 'axios'
import React, { Component } from 'react'

class addLeague extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            homeTeam: '',
            awayTeam: '',
            startTime: '',
            endTime: '',
            duration: '',
            homeTeamScore: '',
            awayTeamScore: '',
            isActive: false,
            league: '',
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        Axios.post('http://localhost:7070/save', this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    render() {
        const {homeTeam, awayTeam, startTime, endTime, duration, homeTeamScore, awayTeamScore, isActive, league} = this.state
        return (
            <div>
                <form action='/save' onSubmit={this.submitHandler} method="post">
                    <div>
                        <input type="text" name="homeTeam" value={homeTeam} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="awayTeam" value={awayTeam} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="date" name="startTime" value={startTime} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="datetime-local" name="endTime" value={endTime} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="Number" name="duration" value={duration} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="Number" name="homeTeamScore" value={homeTeamScore} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="Number" name="awayTeamScore" value={awayTeamScore} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="checkbox" name="isActive" value={isActive} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="league" value={league} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default addLeague
