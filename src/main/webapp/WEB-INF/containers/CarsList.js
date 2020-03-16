import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as carsAction from  '../actions/Cars.js'
import CarsList from "../components/CarsList.jsx";



const mapStateToProps = ({ cars=[{producer:'audi',rank:'A',year:'1995'}] }) => ({
    cars
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(carsAction, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CarsList);