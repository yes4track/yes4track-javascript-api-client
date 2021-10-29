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
import {TrailGeoDataRequest} from './TrailGeoDataRequest';

/**
 * The PostTrailChunckGeoDataRequest model module.
 * @module model/PostTrailChunckGeoDataRequest
 * @version v1
 */
export class PostTrailChunckGeoDataRequest {
  /**
   * Constructs a new <code>PostTrailChunckGeoDataRequest</code>.
   * @alias module:model/PostTrailChunckGeoDataRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostTrailChunckGeoDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostTrailChunckGeoDataRequest} obj Optional instance to populate.
   * @return {module:model/PostTrailChunckGeoDataRequest} The populated <code>PostTrailChunckGeoDataRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostTrailChunckGeoDataRequest();
      if (data.hasOwnProperty('lines'))
        obj.lines = ApiClient.convertToType(data['lines'], [TrailGeoDataRequest]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TrailGeoDataRequest>} lines
 */
PostTrailChunckGeoDataRequest.prototype.lines = undefined;
