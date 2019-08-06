import React from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

const AlertComponent = ({ alerts }) => {
    
    return alerts !== null &&
        alerts.length > 0 &&
        alerts.map( alert => (
            <Alert variant={ alert.alertType }
                   key={ alert.id }>
                { alert.msg }
            </Alert>
        ));
};

AlertComponent.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(AlertComponent);