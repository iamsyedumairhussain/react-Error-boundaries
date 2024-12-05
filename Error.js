import { Component } from "react";

class Error extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        console.log('Error bhaii ===============',error)
        if(error){
            return { hasError: true }
        }
    }
    render() {
        if (this.state.hasError) {
          return <h1>No name found</h1>
        }
        return this.props.children
    }
}

export default Error;
