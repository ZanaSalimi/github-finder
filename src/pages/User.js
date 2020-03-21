import React, { Component } from 'react'
import { MapPin, Mail, Link, Code } from 'react-feather'
export class User extends Component {
    render() {
        const { login, avatar_url, name, bio, location, email, blog, hireable } = this.props.username;
        return (
            <div className="container mt-5">
                <div className="header-box row px-3 py-4">
                    <div className="biography col-8 d-flex">
                        <img src={ avatar_url } alt={ name } className="rounded-circle profile-img mr-5" /> 
                        <div className="bio py-2">
                            <h2>{ login }</h2>
                            <h3>{ name }</h3>
                            <p>{ bio }</p>
                        </div>
                    </div>
                    <div className="contact col-4">
                        <p><MapPin className="contact-ico" />  { location }</p>
                        <p><Mail className="contact-ico" />  { email }</p>
                        <p><Link className="contact-ico" />  { blog }</p>
                        <p><Code className="contact-ico" />  Hirable: { hireable ? 'Available' : 'Unavailable' }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default User