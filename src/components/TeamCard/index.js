// Write your code here
//
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    //
    ///
    //
    <li className="list-item">
      <Link className="each" to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="logo-img" />
        <p className="eachcard-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
