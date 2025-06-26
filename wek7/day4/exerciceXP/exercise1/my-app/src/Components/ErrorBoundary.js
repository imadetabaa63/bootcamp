import React from "react";




class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h3 style={{ color: "red" }}>Une erreur est survenue dans ce composant.</h3>;
    }

    return this.props.children;
  }
}




export default ErrorBoundary;
