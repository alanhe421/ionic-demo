import {Injectable} from "@angular/core";
/**
 * Created by He on 2/11/17.
 * 工具服务类
 */
export interface DeviceInfo {
    height: number,
    width: number
}
@Injectable()
export class UtilService {
    device: DeviceInfo = {
        height: 0,
        width: 0
    };

    constructor() {
    }

}