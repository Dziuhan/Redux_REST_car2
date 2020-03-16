import React,{Component} from "react";
import Car from "./Car.jsx";

class CarsList extends Component{
    constructor(props) {
        super(props);

    }


    render() {
        const {cars}=this.props;
        return (
            <div>
                {cars.map((car,index) =>{
                return <Car key={index} producer={car.producer} rank={car.rank} year={car.year} />;
                })}
            </div>
    );
    };

}
export default CarsList