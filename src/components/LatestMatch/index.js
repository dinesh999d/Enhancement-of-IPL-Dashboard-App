//
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData

  return (
    <div className="team-match-div">
      <h1 className="team-match">Latest Matches</h1>
      <div className="team-match-box">
        <div className="content-holder">
          <p className="team-box-head details">{competingTeam}</p>
          <p className="details">{date}</p>
          <p className="details">{venue}</p>
          <p className="details">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-team-logo"
        />
        <hr />
        <div className="content-holder-2">
          <p className="details">First Innings</p>
          <p className="details">{firstInnings}</p>
          <p className="details">second Innings</p>
          <p className="details">{secondInnings}</p>
          <p className="details">Man of the Match</p>
          <p className="details">{manOfTheMatch}</p>
          <p className="details">umpires</p>
          <p className="details">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
