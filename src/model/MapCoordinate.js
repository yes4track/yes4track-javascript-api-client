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
 * The MapCoordinate model module.
 * @module model/MapCoordinate
 * @version v1
 */
export class MapCoordinate {
  /**
   * Constructs a new <code>MapCoordinate</code>.
   * @alias module:model/MapCoordinate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MapCoordinate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MapCoordinate} obj Optional instance to populate.
   * @return {module:model/MapCoordinate} The populated <code>MapCoordinate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MapCoordinate();
      if (data.hasOwnProperty('maxLongitude'))
        obj.maxLongitude = ApiClient.convertToType(data['maxLongitude'], 'Number');
      if (data.hasOwnProperty('maxLatitude'))
        obj.maxLatitude = ApiClient.convertToType(data['maxLatitude'], 'Number');
      if (data.hasOwnProperty('minLongitude'))
        obj.minLongitude = ApiClient.convertToType(data['minLongitude'], 'Number');
      if (data.hasOwnProperty('minLatitude'))
        obj.minLatitude = ApiClient.convertToType(data['minLatitude'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} maxLongitude
 */
MapCoordinate.prototype.maxLongitude = undefined;

/**
 * @member {Number} maxLatitude
 */
MapCoordinate.prototype.maxLatitude = undefined;

/**
 * @member {Number} minLongitude
 */
MapCoordinate.prototype.minLongitude = undefined;

/**
 * @member {Number} minLatitude
 */
MapCoordinate.prototype.minLatitude = undefined;
