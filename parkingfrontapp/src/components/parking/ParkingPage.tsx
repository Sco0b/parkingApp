import { Place } from "../../entity/place.entity";

function PlaceRect(props: any): any {
  if (props.lock) {
    return <div className="place bg-danger">{props.value}</div>;
  } else {
    return <div className="place">{props.value}</div>;
  }
}

export default function ParkingPage(places: Place[]) {
  if (places?.length === 20) {
    return (
      <div className="board">
        <h3>Parking en direct</h3>
        <div className="row-top">
          <PlaceRect value={places[0].num} lock={places[0].isLock} />
          <PlaceRect value={places[1].num} lock={places[1].isLock} />
          <PlaceRect value={places[2].num} lock={places[2].isLock} />
          <PlaceRect value={places[3].num} lock={places[3].isLock} />
          <PlaceRect value={places[4].num} lock={places[4].isLock} />
        </div>
        <div className="row-bottom">
          <PlaceRect value={places[5].num} lock={places[5].isLock} />
          <PlaceRect value={places[6].num} lock={places[6].isLock} />
          <PlaceRect value={places[7].num} lock={places[7].isLock} />
          <PlaceRect value={places[8].num} lock={places[8].isLock} />
          <PlaceRect value={places[9].num} lock={places[9].isLock} />
        </div>

        <div className="row-top">
          <PlaceRect value={places[10].num} lock={places[10].isLock} />
          <PlaceRect value={places[11].num} lock={places[11].isLock} />
          <PlaceRect value={places[12].num} lock={places[12].isLock} />
          <PlaceRect value={places[13].num} lock={places[13].isLock} />
          <PlaceRect value={places[14].num} lock={places[14].isLock} />
        </div>
        <div className="row-bottom">
          <PlaceRect value={places[15].num} lock={places[15].isLock} />
          <PlaceRect value={places[16].num} lock={places[16].isLock} />
          <PlaceRect value={places[17].num} lock={places[17].isLock} />
          <PlaceRect value={places[18].num} lock={places[18].isLock} />
          <PlaceRect value={places[19].num} lock={places[19].isLock} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="board">
        <h3>Parking en direct</h3>
      </div>
    );
  }
}
