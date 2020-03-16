import React, {Component} from "react";

class Car extends Component{
        render() {
            const {producer,rank,year}=this.props;
            return(
                <div> {producer} {rank} {year} </div>
            )
        }
}
export default  Car