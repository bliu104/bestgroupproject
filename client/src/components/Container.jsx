import React, { Component } from 'react'
import { getItems } from '../services/items'
import Routes from '../routes'
import Header from '../screens/Header'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      items: [],
      isLight: true
    }
  }

  async componentDidMount() {
    try {
      const items = await getItems()
      this.setState({ items })
    } catch (err) {
      console.error(err)
    }
  }

  addItem = item => this.setState({ items: [...this.state.items, item] })

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  handleMode = (e) => {
    console.log('clicked')
    let { isLight } = this.state 
   
    if (isLight) {
      this.setState({
        isLight: false
      })
      e.target.parentElement.parentElement.className = "dark"
    }
    else {
      this.setState({ isLight: true })
      e.target.parentElement.parentElement.className = "light"
    }
  }

  render() {

    const { user, items, isLight } = this.state
    const { handleMode } = this
    return (
      <>
        <Header user={user} />
        <button onClick={handleMode} id ="toggleButton">{isLight ? "Dark" : "Light"} Mode</button>
        <main className="container">
          <Routes
            items={items}
            user={user}
            setUser={this.setUser}
            addItem={this.addItem}
            clearUser={this.clearUser}
          />
        </main>
      </>
    )
  }
}