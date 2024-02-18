import { atom } from "recoil";
import { USER_ROOM_TYPE } from "../../../utils/types";

interface ATOM_USER_ROOM {
  rooms: USER_ROOM_TYPE[];
  isLoading: boolean;
}

const InitialState: ATOM_USER_ROOM = {
  isLoading: false,
  rooms: [],
};

export const RoomAtom = atom({
  key: "room/atom",
  default: InitialState,
});
