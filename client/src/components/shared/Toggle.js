import { Component } from 'react'

export default class Toggle extends Component {
    constructor(props){
        super(props)
        this.state = { isToggled: props.isToggled || false }
    }
    toggler = () => this.setState(p => ({isToggled: !p.isToggled}))
    render(){
        return this.props.render({ isToggled: this.state.isToggled, toggler: this.toggler })
    }
}