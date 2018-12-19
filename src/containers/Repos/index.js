import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { search, addToFavorites } from 'store/actions'

import ReposTable from 'components/ReposTable'
import TableRow from 'components/ReposTable/TableRow'

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
        let { favorites, repos, addToFavorites } = this.props
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
                        repos.map(repo =>
                            <TableRow 
                                key={repo.id}
                                url={repo.url}
                                name={repo.name}
                                lang={repo.lang}
                                tag={repo.tag}
                                buttonLabel="Add"
                                isFav={repo.isFav}
                                onClick={() => addToFavorites(repo)}
                            />
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
