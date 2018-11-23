import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchFavorites } from 'store/actions'

import ReposTable from 'components/ReposTable'

class Favorites extends Component {
    componentWillMount(){
        this.props.fetchFavorites()
    }

    _renderRepos(repos){
        repos.map(repo => 
            console.log(repo)
        )
    }

    render() {
        let { favorites } = this.props
        return (
            <div className="flexed-child purple-bg">
               <ReposTable>
                    {favorites.map(repo => 
                        <tr key={repo.id}>
                            <td>{repo.name}</td>
                            <td>{repo.lang}</td>
                            <td>{repo.tag}</td>
                            <td><button className="add-btn">Remove</button></td>
                        </tr>
                    )}
                </ReposTable> 
            </div>
        )
    }
}

const mapStateToProps    = state    => ({ favorites: state.repos.favorites })
const mapDispacthToProps = dispatch => bindActionCreators({ fetchFavorites }, dispatch)
export default connect(mapStateToProps, mapDispacthToProps)(Favorites)
