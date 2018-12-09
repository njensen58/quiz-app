import React, { Component } from 'react'


class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null, 
            errInfo: null
        }
    }

    componentDidCatch(error, errInfo){
        this.setState({ error, errInfo })
    }

    render(){
        if(this.state.errInfo){
            return (
                <div>
                    <h4>Something went terribly wrong...</h4>
                    <details>
                        { this.state.error && this.state.error.toString() }
                        { this.state.errorInfo.componentStack }
                    </details>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary