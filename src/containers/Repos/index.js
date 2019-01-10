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
            btnLabel: "Search"
        }
        this._handleChange = this._handleChange.bind(this)
    }

    _handleChange(event){
        this.setState({ repoName: event.target.value })
    }

    async _handleSubmit(e) {
        e.preventDefault()
        let { favorites } = this.props
        let { repoName }  = this.state
        this.setState({ btnLabel: 'Searching...' })
        await this.props.search(repoName, favorites)
        this.setState({ btnLabel: 'Search' })
    }

    render() {
        let { repoName, btnLabel }  = this.state
        let { favorites, repos, addToFavorites } = this.props
        return (
            <div className="flexed-child">
                <form className="form" onSubmit={ this._handleSubmit.bind(this) }>
                    <input 
                        required
                        type="text"
                        name="repo"
                        value={repoName}
                        onChange={this._handleChange}
                        placeholder="Search for a Github repository"
                    />
                    <input type="submit" value={btnLabel} disabled={btnLabel === 'Searching...' ? true : false} />
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
