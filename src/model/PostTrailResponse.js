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
import {AdventureType} from './AdventureType';
import {LevelType} from './LevelType';
import {TrailType} from './TrailType';
import {Waypoint} from './Waypoint';

/**
 * The PostTrailResponse model module.
 * @module model/PostTrailResponse
 * @version v1
 */
export class PostTrailResponse {
  /**
   * Constructs a new <code>PostTrailResponse</code>.
   * @alias module:model/PostTrailResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostTrailResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostTrailResponse} obj Optional instance to populate.
   * @return {module:model/PostTrailResponse} The populated <code>PostTrailResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostTrailResponse();
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
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'Date');
      if (data.hasOwnProperty('endDate'))
        obj.endDate = ApiClient.convertToType(data['endDate'], 'Date');
      if (data.hasOwnProperty('type'))
        obj.type = TrailType.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('sponsors'))
        obj.sponsors = ApiClient.convertToType(data['sponsors'], ['String']);
      if (data.hasOwnProperty('angels'))
        obj.angels = ApiClient.convertToType(data['angels'], ['String']);
      if (data.hasOwnProperty('adventureName'))
        obj.adventureName = ApiClient.convertToType(data['adventureName'], 'String');
      if (data.hasOwnProperty('adventureLevel'))
        obj.adventureLevel = LevelType.constructFromObject(data['adventureLevel']);
      if (data.hasOwnProperty('adventureType'))
        obj.adventureType = AdventureType.constructFromObject(data['adventureType']);
      if (data.hasOwnProperty('photoUrl'))
        obj.photoUrl = ApiClient.convertToType(data['photoUrl'], 'String');
      if (data.hasOwnProperty('adventureDescription'))
        obj.adventureDescription = ApiClient.convertToType(data['adventureDescription'], 'String');
      if (data.hasOwnProperty('waypoints'))
        obj.waypoints = ApiClient.convertToType(data['waypoints'], [Waypoint]);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostTrailResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostTrailResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostTrailResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostTrailResponse.prototype.userUpdated = undefined;

/**
 * @member {String} adventureId
 */
PostTrailResponse.prototype.adventureId = undefined;

/**
 * @member {String} name
 */
PostTrailResponse.prototype.name = undefined;

/**
 * @member {Date} startDate
 */
PostTrailResponse.prototype.startDate = undefined;

/**
 * @member {Date} endDate
 */
PostTrailResponse.prototype.endDate = undefined;

/**
 * @member {module:model/TrailType} type
 */
PostTrailResponse.prototype.type = undefined;

/**
 * @member {String} id
 */
PostTrailResponse.prototype.id = undefined;

/**
 * @member {Array.<String>} sponsors
 */
PostTrailResponse.prototype.sponsors = undefined;

/**
 * @member {Array.<String>} angels
 */
PostTrailResponse.prototype.angels = undefined;

/**
 * @member {String} adventureName
 */
PostTrailResponse.prototype.adventureName = undefined;

/**
 * @member {module:model/LevelType} adventureLevel
 */
PostTrailResponse.prototype.adventureLevel = undefined;

/**
 * @member {module:model/AdventureType} adventureType
 */
PostTrailResponse.prototype.adventureType = undefined;

/**
 * @member {String} photoUrl
 */
PostTrailResponse.prototype.photoUrl = undefined;

/**
 * @member {String} adventureDescription
 */
PostTrailResponse.prototype.adventureDescription = undefined;

/**
 * @member {Array.<module:model/Waypoint>} waypoints
 */
PostTrailResponse.prototype.waypoints = undefined;

