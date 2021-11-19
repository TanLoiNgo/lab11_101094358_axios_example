import React, { Component } from 'react';
import axios from 'axios'


export default class PersonList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            persons: []
        }
    }
    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
    }

    render() {
        return (

            <div>
                {
                    this.state.persons.map(p => (
                        <>
                            <div class="container">
                                <div class=" bg-info  text-left mt-2 border-bottom border-dark">
                                    <h5 class="p-3 ">{p.name.title} {p.name.first} {p.name.last} - {p.login.uuid}</h5>
                                </div>
                                <div class="form-group bg-info bg-gradient pt-4">
                                    <div class="row ">
                                        <div class="col-sm-3">
                                            <img class="rounded-circle" src={p.picture.large} />
                                            <div>
                                                <button class="btn btn-primary mt-2">Details</button>
                                            </div>
                                        </div>
                                        <div class="col-sm-9">
                                            <div class="form-group row  ">
                                                <p class="col-sm-3 text-right">User Name: </p>
                                                <div class="col-sm-9 text-left">{p.login.username}
                                                </div>
                                            </div>
                                            <div class="form-group row  ">
                                                <p class="col-sm-3 text-right">Gender:  </p>
                                                <div class="col-sm-9 text-left">{p.gender}
                                                </div>
                                            </div>
                                            <div class="form-group row  ">
                                                <p class="col-sm-3 text-right">Time Zone Description :</p>
                                                <div class="col-sm-9 text-left">
                                                    {p.location.timezone.description}
                                                </div>
                                            </div>
                                            <div class="form-group row  ">
                                                <p class="col-sm-3 text-right">Address:  </p>
                                                <div class="col-sm-9 text-left">
                                                    {p.location.street.number} {p.location.street.name}, {p.location.city}, {p.location.state}, {p.location.country} - {p.location.postcode}
                                                </div>
                                            </div>
                                            <div class="form-group row  ">
                                                <p class="col-sm-3 text-right">Email:  </p>
                                                <div class="col-sm-9 text-left">{p.email}
                                                </div>
                                            </div>
                                            <div class="form-group row  ">
                                                <p class="col-sm-3 text-right">Birth Date and Age: </p>
                                                <div class="col-sm-9 text-left">{p.dob.date} ({p.dob.age})
                                                </div>
                                            </div>
                                            <div class="form-group row  ">
                                                <p class="col-sm-3 text-right">Register Date:</p>
                                                <div class="col-sm-9 text-left">{p.registered.date}
                                                </div>
                                            </div>
                                            <div class="form-group row  ">
                                                <p class="col-sm-3 text-right">Phone#: </p>
                                                <div class="col-sm-9 text-left">{p.phone}
                                                </div>
                                            </div>
                                            <div class="form-group row  ">
                                                <p class="col-sm-3 text-right">Cell#: </p>
                                                <div class="col-sm-9 text-left">{p.cell}
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </>
                    ))
                }
            </div>

        )
    }

}