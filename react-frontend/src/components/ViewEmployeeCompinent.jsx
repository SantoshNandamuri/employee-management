import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../App';

class ViewEmployeeCompinent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            this.setState({
                employee: res.data
            });
        });
    }
    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Employee Details</h2>
                    <div className='card-body'>
                        <div className='row'>
                            <table className='table table-striped table-bordered'>
                                <tr>
                                    <th>Employee ID</th>
                                    <td>{this.state.employee.id}</td>
                                </tr>
                                <tr>
                                    <th>First Name</th>
                                    <td>{this.state.employee.firstName}</td>
                                </tr>
                                <tr>
                                    <th>Last Name</th>
                                    <td>{this.state.employee.lastName}</td>
                                </tr>
                                <tr>
                                    <th>Email ID</th>
                                    <td>{this.state.employee.emailId}</td>
                                </tr>
                            </table>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(ViewEmployeeCompinent);