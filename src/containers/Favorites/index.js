import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchFavorites, removeFavorite } from 'store/actions'

import ReposTable from 'components/ReposTable'

class Favorites extends Component {
    componentWillMount(){
        this.props.fetchFavorites()
    }

    render() {
        let { favorites } = this.props
        return (
            <div className="flexed-child purple-bg">
               <ReposTable>
                    {favorites.map((repo, index) => 
                        <tr key={repo.id}>
                            <td>
                                <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                            </td>
                            <td>{repo.lang}</td>
                            <td>{repo.tag}</td>
                            <td><button className="add-btn" onClick={() => this.props.removeFavorite({repo, index})}>Remove</button></td>
                        </tr>
                    )}
                </ReposTable> 
            </div>
        )
    }
}

const mapStateToProps    = state    => ({ favorites: state.repos.favorites })
const mapDispacthToProps = dispatch => bindActionCreators({ fetchFavorites, removeFavorite }, dispatch)
export default connect(mapStateToProps, mapDispacthToProps)(Favorites)
