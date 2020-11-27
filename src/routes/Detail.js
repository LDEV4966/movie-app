import React from "react";

class Detail extends React.Component {

    componentDidMount(){
        const { history , location } = this.props;
        if( location.state === undefined ){
            history.push("/movie");
        }
    }

    render() {
        
        const { location } = this.props;
         if( location.state){
            return (
                <div>
                    <span>{location.state.title}</span>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default Detail;