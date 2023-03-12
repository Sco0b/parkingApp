import { Button, InputGroup } from "react-bootstrap";
import Stack from "react-bootstrap/esm/Stack";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectLockedPlaces, selectUnlockedPlaces, updateToLock, updateToUnlock } from "../../redux/slice/places.slice";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function TicketBoard() {
  const dispatch = useAppDispatch();
  const stateLocked = useAppSelector(selectLockedPlaces);
  const stateUnlocked = useAppSelector(selectUnlockedPlaces);

  const [placeNumToLock, setPlaceNumToLock] = useState(-1);
  const [placeNumToUnlock, setPlaceNumToUnlock] = useState(-1);

  let addLock = (): void => {
    if (placeNumToLock > 0) {
      let place = stateUnlocked.find((place) => place.num == placeNumToLock);
      if (place != null) {
        dispatch(updateToLock(place));
      }
    }
  };

  let removeLock = (): void => {
    if (placeNumToUnlock > 0) {
      let place = stateLocked.find((place) => place.num == placeNumToUnlock);
      if (place != null) {
        dispatch(updateToUnlock(place));
      }
    }
  };

  let displayToLockSelect = (): any => {
    let options = [];
    for (let i = 0; i < stateUnlocked.length; i++) {
      options.push(
        <option key={"tolock" + i} value={stateUnlocked[i].num}>
          {stateUnlocked[i].num}
        </option>
      );
    }
    return options;
  };

  let displayToUnlockSelect = (): any => {
    let options = [];
    for (let i = 0; i < stateLocked.length; i++) {
      options.push(
        <option key={"tounlock" + i} value={stateLocked[i].num}>
          {stateLocked[i].num}
        </option>
      );
    }
    return options;
  };

  let selectTolockChange = (e: any): void => {
    setPlaceNumToLock(e.target.value);
  };

  let selectToUnlockChange = (e: any): void => {
    setPlaceNumToUnlock(e.target.value);
  };

  return (
    <div className="board">
      <h3>Tickets</h3>
      <Stack gap={4} className="col-sm-5 mx-auto">
        <InputGroup>
          <Form.Select aria-label="Places to lock list" onChange={selectTolockChange} value={placeNumToLock}>
            <option value="-1" key="tolock-1"></option>
            {displayToLockSelect()}
          </Form.Select>
          <Button variant="info" onClick={addLock}>
            Prendre un ticket
          </Button>
        </InputGroup>
        <InputGroup>
          <Form.Select aria-label="Places to unlock list" onChange={selectToUnlockChange} value={placeNumToUnlock}>
            <option value="-1" key="tounlock-1"></option>
            {displayToUnlockSelect()}
          </Form.Select>
          <Button variant="outline-info" onClick={removeLock}>
            Libérer une place
          </Button>
        </InputGroup>
      </Stack>
    </div>
  );
}
