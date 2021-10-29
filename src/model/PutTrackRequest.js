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
import {TrackSource} from './TrackSource';

/**
 * The PutTrackRequest model module.
 * @module model/PutTrackRequest
 * @version v1
 */
export class PutTrackRequest {
  /**
   * Constructs a new <code>PutTrackRequest</code>.
   * @alias module:model/PutTrackRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PutTrackRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutTrackRequest} obj Optional instance to populate.
   * @return {module:model/PutTrackRequest} The populated <code>PutTrackRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PutTrackRequest();
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('userCreated'))
        obj.userCreated = ApiClient.convertToType(data['userCreated'], 'String');
      if (data.hasOwnProperty('userUpdated'))
        obj.userUpdated = ApiClient.convertToType(data['userUpdated'], 'String');
      if (data.hasOwnProperty('adventureId'))
        obj.adventureId = ApiClient.convertToType(data['adventureId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('source'))
        obj.source = TrackSource.constructFromObject(data['source']);
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'Date');
      if (data.hasOwnProperty('endDate'))
        obj.endDate = ApiClient.convertToType(data['endDate'], 'Date');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PutTrackRequest.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PutTrackRequest.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PutTrackRequest.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PutTrackRequest.prototype.userUpdated = undefined;

/**
 * @member {String} adventureId
 */
PutTrackRequest.prototype.adventureId = undefined;

/**
 * @member {String} name
 */
PutTrackRequest.prototype.name = undefined;

/**
 * @member {module:model/TrackSource} source
 */
PutTrackRequest.prototype.source = undefined;

/**
 * @member {Date} startDate
 */
PutTrackRequest.prototype.startDate = undefined;

/**
 * @member {Date} endDate
 */
PutTrackRequest.prototype.endDate = undefined;

/**
 * @member {String} id
 */
PutTrackRequest.prototype.id = undefined;

