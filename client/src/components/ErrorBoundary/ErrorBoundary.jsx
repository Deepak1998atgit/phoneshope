import React from 'react';


class ErrorBoundary extends React.Component{
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({ hasError: true });
      console.error("Error Found On Component Tree: ",error);                                  // Log the error
      console.error("Error Information: ",errorInfo);                                          // Log error information
    }
  
    render() {
      if (this.state.hasError) {
        return <h1> Oops, something went wrong! </h1>;
      }
      return this.props.children;
    }

}
  
export default ErrorBoundary;