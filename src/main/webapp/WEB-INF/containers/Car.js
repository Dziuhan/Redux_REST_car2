import React from "react";
import Car from "../components/Car.jsx";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as carsAction from "../actions/Cars";

const mapStateToProps = ({ car }) => ({
    car
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(carsAction, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Car);

