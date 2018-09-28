import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
// import { helloWorld } from '../actions/test'
import {connect} from 'react-redux'
import {addalbum} from '../actions/AddAlbum'



const sleep = time => new Promise(
    resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
  )
  
class AlbumsListContainer extends React.PureComponent {
  state = {}

  componentDidMount() {
    sleep(2000)
    .then(message => this.props.addalbum(1, message))

    sleep(3000)
    .then(message => this.props.addalbum(2, message))
    // this.props.addalbum(5, 'Enjoying sunshine'),
    // this.props.addalbum(10, 'EHaving fun in the US')

    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))   
  }

  render() {
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.state.albums} />
  }
}

const mapStateToProps = ({ albums }) => ({ albums })

// export default connect(mapStateToProps)(AlbumsListContainer)
export default connect(mapStateToProps, { addalbum })(AlbumsListContainer)


// export default connect()(AlbumsListContainer)

// export default connect(null, { helloWorld: helloWorld })(AlbumsListContainer)
// export default connect(null, { helloWorld })(AlbumsListContainer)
