import React, { Component } from 'react'

import './repos.css'

class Repos extends Component {
    constructor(props){
        super()
        this.state = {
            reposFound: [],
            inputRepo : '',
        }

        this._handleChange = this._handleChange.bind(this)
        this._searchRepo   = this._searchRepo.bind(this)
    }

    _handleChange(event){
        this.setState({ inputRepo: event.target.value })
    }

    _searchRepo(){
        let { inputRepo } = this.state
        alert(inputRepo)
    }

    render() {
        return (
            <div className="flexed-child">
                <div className="form">
                    <input 
                        type="text"
                        name="repo"
                        onChange={this._handleChange}
                        placeholder="Search for a Github repository"
                    />

                    <input type="submit" value="Search" onClick={this._searchRepo}/>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Latest tag</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Body content 1</td>
                            <td>Body content 2</td>
                            <td>Body content 3</td>
                            <td><button className="add-btn">Add</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Repos
