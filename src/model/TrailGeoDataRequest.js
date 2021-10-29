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
 * The TrailGeoDataRequest model module.
 * @module model/TrailGeoDataRequest
 * @version v1
 */
export class TrailGeoDataRequest {
  /**
   * Constructs a new <code>TrailGeoDataRequest</code>.
   * @alias module:model/TrailGeoDataRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrailGeoDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrailGeoDataRequest} obj Optional instance to populate.
   * @return {module:model/TrailGeoDataRequest} The populated <code>TrailGeoDataRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrailGeoDataRequest();
      if (data.hasOwnProperty('latitude'))
        obj.latitude = ApiClient.convertToType(data['latitude'], 'Number');
      if (data.hasOwnProperty('longitude'))
        obj.longitude = ApiClient.convertToType(data['longitude'], 'Number');
      if (data.hasOwnProperty('elevation'))
        obj.elevation = ApiClient.convertToType(data['elevation'], 'Number');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {Number} latitude
 */
TrailGeoDataRequest.prototype.latitude = undefined;

/**
 * @member {Number} longitude
 */
TrailGeoDataRequest.prototype.longitude = undefined;

/**
 * @member {Number} elevation
 */
TrailGeoDataRequest.prototype.elevation = undefined;

/**
 * @member {Date} _date
 */
TrailGeoDataRequest.prototype._date = undefined;
