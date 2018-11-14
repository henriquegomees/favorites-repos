import React, { Component } from 'react'

import ReposTable from '../../components/ReposTable'
import ReposService from '../../services/Github'
import './repos.css'


const token = '98cd94897e5612fab83650a411a10084645ae522'
class Repos extends Component {
    constructor(props){
        super()
        this.state = {
            repos    : [],
            repoName : '',
        }

        this._handleChange = this._handleChange.bind(this)
        this._searchRepo   = this._searchRepo.bind(this)
    }

    _handleChange(event){
        this.setState({ repoName: event.target.value })
    }

    async _searchRepo(){
        let { repoName } = this.state
        let repos         = await ReposService.search(repoName)
        
        this.setState({ repos })
        console.log(repos)
    }

    render() {
        return (
            <div className="flexed-child">
                <div className="form">
                    <input 
                        type="text"
                        name="repo"
                        value={this.state.repoName}
                        onChange={this._handleChange}
                        placeholder="Search for a Github repository"
                    />
                    <input type="submit" value="Search" onClick={this._searchRepo}/>
                </div>

                <ReposTable>
                    {
                        this.state.repos.map(repo =>
                            <tr key={repo.id}>
                                <td>{repo.name}</td>
                                <td>{repo.lang}</td>
                                <td>{repo.tag}</td>
                                <td><button className="add-btn">Add</button></td>
                            </tr>
                        )
                    }
                </ReposTable>

            </div>
        )
    }
}

export default Repos
