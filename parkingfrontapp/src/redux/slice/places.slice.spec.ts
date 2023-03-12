import { Place } from "../../entity/place.entity";
import placeReducer, { PlaceState, getList, updateToLock, updateToUnlock } from "./places.slice";
import { StatusEnum } from "./status.enum";

describe("place reducer", () => {
  it("should handle initial state", () => {
    expect(placeReducer(undefined, { type: "unknown" })).toEqual({
      value: Array(20)
        .fill(null)
        .map((_, index) => new Place(index + 1, false)),
      status: StatusEnum.IDLE,
    });
  });

  //Pb withThunkActionType => need to call for appDispatch ? and mock with jest too
  // it("should handle getList", async () => {
  //   const actual = await placeReducer(initialState, getList());
  //   expect(actual.value.length).toEqual(20);
  // });

  // it("should handle updateToLock", async () => {
  //   const actual = await placeReducer(initialState, updateToLock(initialState.value[1]));
  //   expect(actual.value[1].isLock).toEqual(true);
  // });

  // it("should handle updateToUnlock", async () => {
  //   const actual = await placeReducer(initialState, updateToUnlock(initialState.value[1]));
  //   expect(actual.value[1].isLock).toEqual(false);
  // });
});
