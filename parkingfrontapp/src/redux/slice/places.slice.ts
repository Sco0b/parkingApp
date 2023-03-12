import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Place } from "../../entity/place.entity";
import { getAll, updateOneLock } from "../../api/place.api";
import { StatusEnum } from "./status.enum";

export interface PlaceState {
  value: Place[];
  status: StatusEnum;
}

const initialState: PlaceState = {
  value: Array(20)
    .fill(null)
    .map((_, index) => new Place(index + 1, false)),
  status: StatusEnum.IDLE,
};

export const getList = createAsyncThunk("place/getListPlace", async () => {
  const response = await getAll();
  return response.data.places;
});

export const updateToLock = createAsyncThunk("place/updateLock", async (place: Place) => {
  const response = await updateOneLock(place, true);
  return response.data.place;
});

export const updateToUnlock = createAsyncThunk("place/updateUnlock", async (place: Place) => {
  const response = await updateOneLock(place, false);
  return response.data.place;
});

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.status = StatusEnum.IDLE;
        state.value = action.payload;
      })
      .addCase(getList.rejected, (state, action) => {
        state.status = StatusEnum.FAILED;
      })
      .addCase(updateToLock.pending, (state) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(updateToLock.fulfilled, (state, action) => {
        state.status = StatusEnum.IDLE;
        state.value[action.payload.num - 1] = action.payload;
      })
      .addCase(updateToLock.rejected, (state, action) => {
        state.status = StatusEnum.FAILED;
        console.log(action.payload);
      })
      .addCase(updateToUnlock.pending, (state) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(updateToUnlock.fulfilled, (state, action) => {
        state.status = StatusEnum.IDLE;
        state.value[action.payload.num - 1] = action.payload;
      })
      .addCase(updateToUnlock.rejected, (state, action) => {
        state.status = StatusEnum.FAILED;
        console.log(action.payload);
      });
  },
});

export const selectAll = (state: { places: PlaceState }) => state;
export const selectCountAll = (state: { places: PlaceState }) => state.places.value?.length;
export const selectLockedPlaces = (state: { places: PlaceState }) => state.places.value?.filter((place) => place.isLock === true);
export const selectUnlockedPlaces = (state: { places: PlaceState }) => state.places.value?.filter((place) => place.isLock === false);

export default placeSlice.reducer;
