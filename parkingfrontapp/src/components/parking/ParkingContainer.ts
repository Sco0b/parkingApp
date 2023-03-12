import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getList, selectAll } from "../../redux/slice/places.slice";
import ParkingPage from "./ParkingPage";

export default function ParkingContainer() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectAll);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return ParkingPage(state.places.value);
}
