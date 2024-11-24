// Write your code here
import './index.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

const teamMatchesAPIUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {
    teamMatchData: {},
    isLoading: true,
  }

  componentDidMount() {
    //
    this.getFetchedData()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getFetchedData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`${teamMatchesAPIUrl}${id}`)
    const data = await response.json()
    const formattedDate = {
      teamMatchesImg: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatch: data.recent_matches.map(each => this.getFormattedData(each)),
    }
    //
    this.setState({teamMatchData: formattedDate, isLoading: false})
  }

  renderRecentMatchList = () => {
    const {teamMatchData} = this.state
    const {recentMatch} = teamMatchData

    return (
      <ul className="recent-match-list">
        {recentMatch.map(each => (
          <MatchCard key={each.id} matchDetails={each} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamMatchData} = this.state
    const {teamMatchesImg, latestMatch} = teamMatchData

    return (
      <div className="responsive-container">
        <img
          src={teamMatchesImg}
          alt="team banner"
          className="team-banner-img"
        />
        <LatestMatch latestMatchData={latestMatch} />
        {this.renderRecentMatchList()}
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-div">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  getRouteClassNames = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'CSK':
        return 'csk'
      case 'KXP':
        return 'kxp'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const className = `team-matches-container ${this.getRouteClassNames()}`

    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}
export default TeamMatches
