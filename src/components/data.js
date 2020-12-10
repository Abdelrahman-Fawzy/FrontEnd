import React, { Component } from 'react'
import axios from 'axios'

class data extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,
            data: []
        }
    }

    async componentDidMount() {
        const url = "http://localhost:7070/get";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div>
                {this.state.loading ? 
                <table>
                    <tr>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Duration</th>
                        <th>Home Team Score</th>
                        <th>Away Team Score</th>
                        <th>League</th>
                    </tr>
                    {this.state.data.map((item, index) =>
                    <tr>
                        <td>{item.homeTeam}</td>
                        <td>{item.awayTeam}</td>
                        <td>{item.startTime}</td>
                        <td>{item.endTime}</td>
                        <td>{item.duration}</td>
                        <td>{item.homeTeamScore}</td>
                        <td>{item.awayTeamScore}</td>
                        <td>{item.league}</td>
                    </tr>)}
                </table> : <div>person</div>}
            </div>
        )
    }
}

export default data
