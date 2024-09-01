import { BaseBloc } from "../base.bloc";
import { Noti, NotiType } from "./noti.model";

export type NotiBlocState = {
  noti: NotiType;
};

class NotiBloc extends BaseBloc<NotiBlocState> {
  /**
   *
   * @param {string} msg
   */
  showInfo(msg) {
    const noti = new Noti({ msg, type: "INFO" });
    this.setState({ noti });
  }

  constructor() {
    super("poke_noti_state");
  }

  get noti() {
    return this.getState().noti;
  }

  /**
   *
   * @returns {NotiBloc}
   */
  static _getInstance() {
    return new NotiBloc();
  }
}

export const notiBloc = NotiBloc._getInstance();
