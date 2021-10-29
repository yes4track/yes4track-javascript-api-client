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
 * The GeoLocation model module.
 * @module model/GeoLocation
 * @version v1
 */
export class GeoLocation {
  /**
   * Constructs a new <code>GeoLocation</code>.
   * @alias module:model/GeoLocation
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GeoLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeoLocation} obj Optional instance to populate.
   * @return {module:model/GeoLocation} The populated <code>GeoLocation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GeoLocation();
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('latitude'))
        obj.latitude = ApiClient.convertToType(data['latitude'], 'Number');
      if (data.hasOwnProperty('longitude'))
        obj.longitude = ApiClient.convertToType(data['longitude'], 'Number');
      if (data.hasOwnProperty('elevation'))
        obj.elevation = ApiClient.convertToType(data['elevation'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Date} _date
 */
GeoLocation.prototype._date = undefined;

/**
 * @member {Number} latitude
 */
GeoLocation.prototype.latitude = undefined;

/**
 * @member {Number} longitude
 */
GeoLocation.prototype.longitude = undefined;

/**
 * @member {Number} elevation
 */
GeoLocation.prototype.elevation = undefined;
