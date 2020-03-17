import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/App.css'
import './styles/MenuIcon.css'
import './styles/MediaQueries.css'
import './styles/Carousel.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
)

serviceWorker.unregister()