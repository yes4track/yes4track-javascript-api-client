/*
 * Caspian.Yes4Track.Service API
 * Caspian.Yes4Track.Service API
 *
 * OpenAPI spec version: v1
 * Contact: admin@yes4track.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.29
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The PutTrackStatisticRequest model module.
 * @module model/PutTrackStatisticRequest
 * @version v1
 */
export class PutTrackStatisticRequest {
  /**
   * Constructs a new <code>PutTrackStatisticRequest</code>.
   * @alias module:model/PutTrackStatisticRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PutTrackStatisticRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutTrackStatisticRequest} obj Optional instance to populate.
   * @return {module:model/PutTrackStatisticRequest} The populated <code>PutTrackStatisticRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PutTrackStatisticRequest();
      if (data.hasOwnProperty('totalTime'))
        obj.totalTime = ApiClient.convertToType(data['totalTime'], 'Number');
      if (data.hasOwnProperty('totalMovingTime'))
        obj.totalMovingTime = ApiClient.convertToType(data['totalMovingTime'], 'Number');
      if (data.hasOwnProperty('totalDistance'))
        obj.totalDistance = ApiClient.convertToType(data['totalDistance'], 'Number');
      if (data.hasOwnProperty('elevationGain'))
        obj.elevationGain = ApiClient.convertToType(data['elevationGain'], 'Number');
      if (data.hasOwnProperty('speed'))
        obj.speed = ApiClient.convertToType(data['speed'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} totalTime
 */
PutTrackStatisticRequest.prototype.totalTime = undefined;

/**
 * @member {Number} totalMovingTime
 */
PutTrackStatisticRequest.prototype.totalMovingTime = undefined;

/**
 * @member {Number} totalDistance
 */
PutTrackStatisticRequest.prototype.totalDistance = undefined;

/**
 * @member {Number} elevationGain
 */
PutTrackStatisticRequest.prototype.elevationGain = undefined;

/**
 * @member {Number} speed
 */
PutTrackStatisticRequest.prototype.speed = undefined;

