import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import { Container, Row, Badge } from 'react-bootstrap';

const ProfileGithub = ({ username, repos, getGithubRepos }) => {

    useEffect(() => {
        getGithubRepos(username)
    }, [getGithubRepos])

    return repos.length < 1 ? null : (
        <Row className="d-flex flex-column p-5 m-3">
            <h5 className="pb-2 font-weight-bold text-center border-bottom mb-3">
                <a href={ `https://github.com/${username}` }
                   target="_blank"
                   rel="noopener noreferrer"
                   className="mb-2 text-primary">
                    { username }
                </a>
                <span> Github Repos</span>
            </h5>
            <Container>
            {
                repos.map( repo =>
                    <Row className="d-flex flex-row justify-content-between p-3 m-2 bg-light border rounded"
                         key={"a"}>
                        <div className="d-flex flex-column">
                            <h6 className="text-primary">
                                <a href={ repo.html_url }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mb-2">
                                    { repo.name }
                                </a>
                            </h6>
                            <p>{ repo.description }</p>
                        </div>
                        <div className="d-flex flex-column text-white">
                            <Badge variant="success"
                                   style={{ fontSize: "1rem" }}
                                   className="p-2 m-1">
                                { `Stars: ${repo.stargazers_count}` }
                            </Badge>
                            <Badge variant="primary"
                                   style={{ fontSize: "1rem" }}
                                   className="p-2 m-1">
                                { `Watchers: ${repo.watchers_count}` }
                            </Badge>
                            <Badge variant="secondary"
                                   style={{ fontSize: "1rem" }}
                                   className="p-2 m-1">
                                { `Forks: ${repo.forks_count}` }
                            </Badge>
                        </div>
                    </Row>
                )
            }
            </Container>
        </Row>
    );
};

ProfileGithub.propTypes = {
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
    getGithubRepos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    repos: state.profile.repos
});

export default connect(
    mapStateToProps, {
        getGithubRepos
    }
)(ProfileGithub);