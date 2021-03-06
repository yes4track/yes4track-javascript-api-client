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
 * The PostUserResponse model module.
 * @module model/PostUserResponse
 * @version v1
 */
export class PostUserResponse {
  /**
   * Constructs a new <code>PostUserResponse</code>.
   * @alias module:model/PostUserResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostUserResponse} obj Optional instance to populate.
   * @return {module:model/PostUserResponse} The populated <code>PostUserResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostUserResponse();
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('userCreated'))
        obj.userCreated = ApiClient.convertToType(data['userCreated'], 'String');
      if (data.hasOwnProperty('userUpdated'))
        obj.userUpdated = ApiClient.convertToType(data['userUpdated'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('photoUrl'))
        obj.photoUrl = ApiClient.convertToType(data['photoUrl'], 'String');
      if (data.hasOwnProperty('isActive'))
        obj.isActive = ApiClient.convertToType(data['isActive'], 'Boolean');
      if (data.hasOwnProperty('isAdmin'))
        obj.isAdmin = ApiClient.convertToType(data['isAdmin'], 'Boolean');
      if (data.hasOwnProperty('isSuperAdmin'))
        obj.isSuperAdmin = ApiClient.convertToType(data['isSuperAdmin'], 'Boolean');
      if (data.hasOwnProperty('isAngel'))
        obj.isAngel = ApiClient.convertToType(data['isAngel'], 'Boolean');
      if (data.hasOwnProperty('isExplorer'))
        obj.isExplorer = ApiClient.convertToType(data['isExplorer'], 'Boolean');
      if (data.hasOwnProperty('defaultAngel'))
        obj.defaultAngel = ApiClient.convertToType(data['defaultAngel'], 'String');
      if (data.hasOwnProperty('defaultSponsor'))
        obj.defaultSponsor = ApiClient.convertToType(data['defaultSponsor'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostUserResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostUserResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostUserResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostUserResponse.prototype.userUpdated = undefined;

/**
 * @member {String} name
 */
PostUserResponse.prototype.name = undefined;

/**
 * @member {String} phone
 */
PostUserResponse.prototype.phone = undefined;

/**
 * @member {String} email
 */
PostUserResponse.prototype.email = undefined;

/**
 * @member {String} id
 */
PostUserResponse.prototype.id = undefined;

/**
 * @member {String} photoUrl
 */
PostUserResponse.prototype.photoUrl = undefined;

/**
 * @member {Boolean} isActive
 */
PostUserResponse.prototype.isActive = undefined;

/**
 * @member {Boolean} isAdmin
 */
PostUserResponse.prototype.isAdmin = undefined;

/**
 * @member {Boolean} isSuperAdmin
 */
PostUserResponse.prototype.isSuperAdmin = undefined;

/**
 * @member {Boolean} isAngel
 */
PostUserResponse.prototype.isAngel = undefined;

/**
 * @member {Boolean} isExplorer
 */
PostUserResponse.prototype.isExplorer = undefined;

/**
 * @member {String} defaultAngel
 */
PostUserResponse.prototype.defaultAngel = undefined;

/**
 * @member {String} defaultSponsor
 */
PostUserResponse.prototype.defaultSponsor = undefined;

