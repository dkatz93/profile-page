import React, {Component} from 'react'
import {connect} from 'react-redux'

class App extends Component {
	render(){
		return(
			<h1 className = "">Danielle Katz</h1>
		)
	}
}

export default connect()(App)