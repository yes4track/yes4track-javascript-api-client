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

/**
 * The PostAdventureRequest model module.
 * @module model/PostAdventureRequest
 * @version v1
 */
export class PostAdventureRequest {
  /**
   * Constructs a new <code>PostAdventureRequest</code>.
   * @alias module:model/PostAdventureRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostAdventureRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostAdventureRequest} obj Optional instance to populate.
   * @return {module:model/PostAdventureRequest} The populated <code>PostAdventureRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostAdventureRequest();
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
      if (data.hasOwnProperty('codeRequired'))
        obj.codeRequired = ApiClient.convertToType(data['codeRequired'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostAdventureRequest.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostAdventureRequest.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostAdventureRequest.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostAdventureRequest.prototype.userUpdated = undefined;

/**
 * @member {String} companyId
 */
PostAdventureRequest.prototype.companyId = undefined;

/**
 * @member {String} name
 */
PostAdventureRequest.prototype.name = undefined;

/**
 * @member {String} description
 */
PostAdventureRequest.prototype.description = undefined;

/**
 * @member {module:model/LevelType} level
 */
PostAdventureRequest.prototype.level = undefined;

/**
 * @member {Date} effectiveStartDate
 */
PostAdventureRequest.prototype.effectiveStartDate = undefined;

/**
 * @member {Date} effectiveEndDate
 */
PostAdventureRequest.prototype.effectiveEndDate = undefined;

/**
 * @member {module:model/AdventureType} type
 */
PostAdventureRequest.prototype.type = undefined;

/**
 * @member {Boolean} codeRequired
 */
PostAdventureRequest.prototype.codeRequired = undefined;
