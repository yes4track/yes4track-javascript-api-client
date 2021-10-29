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
 * The PostTrailGeoDataResponse model module.
 * @module model/PostTrailGeoDataResponse
 * @version v1
 */
export class PostTrailGeoDataResponse {
  /**
   * Constructs a new <code>PostTrailGeoDataResponse</code>.
   * @alias module:model/PostTrailGeoDataResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostTrailGeoDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostTrailGeoDataResponse} obj Optional instance to populate.
   * @return {module:model/PostTrailGeoDataResponse} The populated <code>PostTrailGeoDataResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostTrailGeoDataResponse();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('trailId'))
        obj.trailId = ApiClient.convertToType(data['trailId'], 'String');
      if (data.hasOwnProperty('fileName'))
        obj.fileName = ApiClient.convertToType(data['fileName'], 'String');
      if (data.hasOwnProperty('extension'))
        obj.extension = ApiClient.convertToType(data['extension'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
PostTrailGeoDataResponse.prototype.id = undefined;

/**
 * @member {String} trailId
 */
PostTrailGeoDataResponse.prototype.trailId = undefined;

/**
 * @member {String} fileName
 */
PostTrailGeoDataResponse.prototype.fileName = undefined;

/**
 * @member {String} extension
 */
PostTrailGeoDataResponse.prototype.extension = undefined;

/**
 * @member {String} data
 */
PostTrailGeoDataResponse.prototype.data = undefined;

