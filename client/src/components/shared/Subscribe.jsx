import React from 'react'

import SubscribeForm from './SubscribeForm'

import Layout from '../shared/Layout'
import { createSubscriber } from '../../services/subcriber'

class Subscribe extends React.Component {
constructor(props) {
super(props)

this.state = {
    subscriber: {
        first_name: '',
        last_name: '',
        email: ''
    },
    subscribe: null
}
}

handleChange = event => {
const updatedField = { [event.target.name]: event.target.value }

const newInfo = Object.assign(this.state.subscriber, updatedField)

this.setState({ subscriber: newInfo })
}

handleSubmit = async event => {
event.preventDefault()

const res = await createSubscriber(this.state.subscriber)
}

render() {
const { handleChange, handleSubmit } = this
const { subscriber, subscribe} = this.state
const { history } = this.props

return (
<Layout>
    <SubscribeForm
    subscribe={subscribe}
    subscriber={subscriber}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    cancelPath="/"
    />

</Layout>


)

}
}

export default Subscribe
