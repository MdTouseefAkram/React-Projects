// class ErrorBoundaryPractice extends React.Component{
//     constructor(props){
//         super(props);
//         this.state= {hasError:false};
//     }
//     static getDerivedStateFromError(){
//         return {hasError:true};
//     }
//     componentDidCatch(error, errorInfo){
//         console.log("Error Boundary caught:", error, errorInfo)
//     }
//     render(){
//         if(this.state.hasError){
//             return <p>OOps</p>
//         }
//         return this.props.children;
//     }
// }
// export default ErrorBoundaryPractice


class ErrorBoundaryPractice extends React.Component{
    constructor(props){
        super(props);
        this.state= {hasError:false};
    }
    static getDerivedFromError(){
        return {hasError:true};
    }
    componentDidCatch(error, errorInfo){
        console.log("Error Boundary caught: ",error, errorInfo);
    }
    render(){
        if(this.state.hasError){
            return <p>Oops</p>
        }
        return this.props.children;
    }
}
 export default ErrorBoundaryPractice