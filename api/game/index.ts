import baseApi from '../core.ts';
import { CHANCE } from "../../constant";
import moment from 'moment';

class GameApi {
  _apiCore;
  _apiCoreMock;
  _basePath;
  _mock;

  constructor(basePath:string, isMock:boolean ){
    this._apiCore = baseApi._apiCore;
    this._basePath = `${basePath}/game`;
    this._apiCoreMock = baseApi._apiCoreMock;
    this._mock = isMock;
  }

  postWinGame() {
    
    if (this._mock) {
      this._apiCoreMock
        .onPost(`${this._basePath}/win`)
        .reply(200, {});
    }
    return this._apiCore.post(`${this._basePath}/win`);
  }

  postLostChance() {
    if (this._mock) {
      const chance = parseInt(localStorage.getItem("chance") || CHANCE.toString());
      localStorage.setItem("chance", (chance > 0 ? (chance - 1) : 0).toString())
      if(chance - 1 === 0){
        localStorage.setItem("dataRetry", moment().add(1 , "days").format("YYYY/MM/DD"))
      }
      this._apiCoreMock
       .onPost(`${this._basePath}/lost`)
        .reply(200, {});
    }
    return this._apiCore.post(`${this._basePath}/lost`);
  }

  getAllowGame() {
    if (this._mock) {
      let chance  = localStorage.getItem("chance") || CHANCE.toString();
      const dataRetry = localStorage.getItem("dataRetry");
      const today = moment().format("YYYY/MM/DD");
      const allowNewChance = moment(today).isSame(dataRetry);
      if(chance == "0" && dataRetry && allowNewChance){
        localStorage.setItem("chance",CHANCE.toString())
        chance = CHANCE.toString();
      }

      this._apiCoreMock
        .onGet(`${this._basePath}/allow`)
        .reply(200, {chance : parseInt(chance)});
    }
    return this._apiCore.get(`${this._basePath}/allow`);
  }


}

export default new GameApi('/v1', true);
