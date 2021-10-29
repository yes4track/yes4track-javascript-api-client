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
import {Address} from './Address';
import {AdventureType} from './AdventureType';
import {ImageUrl} from './ImageUrl';
import {LevelType} from './LevelType';
import {VideoUrl} from './VideoUrl';

/**
 * The GetAllAdventureResponse model module.
 * @module model/GetAllAdventureResponse
 * @version v1
 */
export class GetAllAdventureResponse {
  /**
   * Constructs a new <code>GetAllAdventureResponse</code>.
   * @alias module:model/GetAllAdventureResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllAdventureResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllAdventureResponse} obj Optional instance to populate.
   * @return {module:model/GetAllAdventureResponse} The populated <code>GetAllAdventureResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllAdventureResponse();
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('userCreated'))
        obj.userCreated = ApiClient.convertToType(data['userCreated'], 'String');
      if (data.hasOwnProperty('userUpdated'))
        obj.userUpdated = ApiClient.convertToType(data['userUpdated'], 'String');
      if (data.hasOwnProperty('companyId'))
        obj.companyId = ApiClient.convertToType(data['companyId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('level'))
        obj.level = LevelType.constructFromObject(data['level']);
      if (data.hasOwnProperty('effectiveStartDate'))
        obj.effectiveStartDate = ApiClient.convertToType(data['effectiveStartDate'], 'Date');
      if (data.hasOwnProperty('effectiveEndDate'))
        obj.effectiveEndDate = ApiClient.convertToType(data['effectiveEndDate'], 'Date');
      if (data.hasOwnProperty('type'))
        obj.type = AdventureType.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('likes'))
        obj.likes = ApiClient.convertToType(data['likes'], 'Number');
      if (data.hasOwnProperty('imagesUrl'))
        obj.imagesUrl = ApiClient.convertToType(data['imagesUrl'], [ImageUrl]);
      if (data.hasOwnProperty('videosUrl'))
        obj.videosUrl = ApiClient.convertToType(data['videosUrl'], [VideoUrl]);
      if (data.hasOwnProperty('codeRequired'))
        obj.codeRequired = ApiClient.convertToType(data['codeRequired'], 'Boolean');
      if (data.hasOwnProperty('isActive'))
        obj.isActive = ApiClient.convertToType(data['isActive'], 'Boolean');
      if (data.hasOwnProperty('experiences'))
        obj.experiences = ApiClient.convertToType(data['experiences'], ['String']);
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
GetAllAdventureResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
GetAllAdventureResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
GetAllAdventureResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
GetAllAdventureResponse.prototype.userUpdated = undefined;

/**
 * @member {String} companyId
 */
GetAllAdventureResponse.prototype.companyId = undefined;

/**
 * @member {String} name
 */
GetAllAdventureResponse.prototype.name = undefined;

/**
 * @member {String} description
 */
GetAllAdventureResponse.prototype.description = undefined;

/**
 * @member {module:model/LevelType} level
 */
GetAllAdventureResponse.prototype.level = undefined;

/**
 * @member {Date} effectiveStartDate
 */
GetAllAdventureResponse.prototype.effectiveStartDate = undefined;

/**
 * @member {Date} effectiveEndDate
 */
GetAllAdventureResponse.prototype.effectiveEndDate = undefined;

/**
 * @member {module:model/AdventureType} type
 */
GetAllAdventureResponse.prototype.type = undefined;

/**
 * @member {String} id
 */
GetAllAdventureResponse.prototype.id = undefined;

/**
 * @member {Number} likes
 */
GetAllAdventureResponse.prototype.likes = undefined;

/**
 * @member {Array.<module:model/ImageUrl>} imagesUrl
 */
GetAllAdventureResponse.prototype.imagesUrl = undefined;

/**
 * @member {Array.<module:model/VideoUrl>} videosUrl
 */
GetAllAdventureResponse.prototype.videosUrl = undefined;

/**
 * @member {Boolean} codeRequired
 */
GetAllAdventureResponse.prototype.codeRequired = undefined;

/**
 * @member {Boolean} isActive
 */
GetAllAdventureResponse.prototype.isActive = undefined;

/**
 * @member {Array.<String>} experiences
 */
GetAllAdventureResponse.prototype.experiences = undefined;

/**
 * @member {module:model/Address} address
 */
GetAllAdventureResponse.prototype.address = undefined;

