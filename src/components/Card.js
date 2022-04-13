import mapIcon from '../mapicon.png'

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} className="card--photo" alt="location"/>
      <div className="card--info">
        <div className="card--location">
          <img src={mapIcon} className="card--mapicon" alt="map icon" />
          <p className="card--city">{props.item.location}</p>
          <a href={props.item.googleMapsUrl} className="card--link" target="_blank">View on Google Maps</a>
        </div>
        <h1 className="card--title">{props.item.title}</h1>
        <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  )
}
