import React, { Component } from 'react'
import { MapPin, Mail, Link, Code, Star, GitBranch } from 'react-feather'
export class User extends Component {
    render() {
        const { login, avatar_url, name, bio, location, email, blog, hireable } = this.props.username;
        const repos = this.props.repos.map(repo => {
            return <div className="repo m-4" key={repo.id} >
                        <h4>{repo.name}</h4>
                        <p>{repo.description}</p>
                        <div className="">
                            <span className="text-primary repo-details"><Code size={20} strokeWidth={1} />  {repo.language}</span>
                            <span className="text-primary repo-details"><GitBranch size={20} strokeWidth={1} />  {repo.forks}</span>
                            <span className="text-primary repo-details"><Star size={20} strokeWidth={1} />  {repo.stargazers_count}</span>
                        </div>
                    </div>
        })
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
                <div className="container repos">
                    <div className="row mx-5 d-flex justify-content-between">
                        {repos}
                    </div>
                </div>
            </div>
        )
    }
}

export default User