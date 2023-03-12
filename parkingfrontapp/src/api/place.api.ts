import { Place } from "../entity/place.entity";
import { get, post } from "./client";

export function getAll() {
  return get("places/all");
}

export function updateOneLock(place: Place, toLock: boolean) {
  return post(`places/lock/${toLock}`, place);
}
