import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchFavorites, removeFavorite } from 'store/actions'

import ReposTable from 'components/ReposTable'
import TableRow from 'components/ReposTable/TableRow'

class Favorites extends Component {
    componentWillMount(){
        this.props.fetchFavorites()
    }

    render() {
        let { favorites, removeFavorite } = this.props
        return (
            <div className="flexed-child purple-bg">
               <ReposTable>
                    {favorites.map((repo, index) => 
                        <TableRow 
                            key={repo.id}
                            url={repo.url}
                            name={repo.name}
                            lang={repo.lang}
                            tag={repo.tag}
                            buttonLabel="Remove"
                            onClick={() => removeFavorite({repo, index})}
                        />
                    )}
                </ReposTable> 
            </div>
        )
    }
}

const mapStateToProps    = state    => ({ favorites: state.repos.favorites })
const mapDispacthToProps = dispatch => bindActionCreators({ fetchFavorites, removeFavorite }, dispatch)
export default connect(mapStateToProps, mapDispacthToProps)(Favorites)
