import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { search, addToFavorites } from 'store/actions'

import ReposTable from 'components/ReposTable'
import './repos.css'
class Repos extends Component {
    constructor(props){
        super()
        this.state = {
            repoName : '',
        }
        this._handleChange = this._handleChange.bind(this)
    }

    _handleChange(event){
        this.setState({ repoName: event.target.value })
    }

    render() {
        let { repoName }  = this.state
        let { favorites } = this.props
        return (
            <div className="flexed-child">
                <form className="form" onSubmit={e => {e.preventDefault(); this.props.search(repoName, favorites)}}>
                    <input 
                        required
                        type="text"
                        name="repo"
                        value={repoName}
                        onChange={this._handleChange}
                        placeholder="Search for a Github repository"
                    />
                    <input type="submit" value="Search" />
                </form>

                <ReposTable>
                    {   
                        this.props.repos.map(repo =>
                            
                            <tr key={repo.id}>
                                <td>{repo.name}</td>
                                <td>{repo.lang}</td>
                                <td>{repo.tag}</td>
                                <td>{!repo.isFav ? <button onClick={() => this.props.addToFavorites(repo)} className="add-btn">Add</button> : ''}</td>
                            </tr>
                        )
                    }
                </ReposTable>
            </div>
        )
    }
}

const mapStateToProps    = state    => ({ repos: state.repos.repos, favorites: state.repos.favorites })
const mapDispatchToProps = dispatch => bindActionCreators({ search, addToFavorites }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Repos)
