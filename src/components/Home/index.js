// Write your code here
import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

const teamsAPIUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    teamCardsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getFetchedLists()
  }

  getFetchedLists = async () => {
    const response = await fetch(teamsAPIUrl)
    const data = await response.json()
    const modifiedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({
      teamCardsList: modifiedData,
      isLoading: false,
    })
  }

  renderTeamsList = () => {
    const {teamCardsList} = this.state

    return (
      <ul className="teamcards-conatiner">
        {teamCardsList.map(team => (
          <TeamCard teamDetails={team} key={team.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="home">
        <div className="teams-list-container">
          <div className="head-holder">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-head">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home
