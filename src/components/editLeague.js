import Axios from 'axios'
import React, { Component } from 'react'

class editLeague extends Component {
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
            id: ''
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:7070/get`)
        .then(res => {
            console.log(res.data[2])
            this.setState({
                homeTeam: res.data[2].homeTeam,
                awayTeam: res.data[2].awayTeam,
                startTime: res.data[2].startTime,
                endTime: res.data[2].endTime,
                duration: res.data[2].duration,
                homeTeamScore: res.data[2].homeTeamScore,
                awayTeamScore: res.data[2].awayTeamScore,
                isActive: res.data[2].isActive,
                league: res.data[2].league,
                id: res.data[2]._id
            })
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        Axios.put('http://localhost:7070/update', this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    render() {
        const {homeTeam, awayTeam, startTime, endTime, duration, homeTeamScore, awayTeamScore, isActive, league, id} = this.state
        return (
            <div>
                <form action='/update' onSubmit={this.submitHandler}>
                    <input type="hidden" name="id" value={id} />
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

export default editLeague
