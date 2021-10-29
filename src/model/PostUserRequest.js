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
import {ProfilePhotoRequest} from './ProfilePhotoRequest';

/**
 * The PostUserRequest model module.
 * @module model/PostUserRequest
 * @version v1
 */
export class PostUserRequest {
  /**
   * Constructs a new <code>PostUserRequest</code>.
   * @alias module:model/PostUserRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostUserRequest} obj Optional instance to populate.
   * @return {module:model/PostUserRequest} The populated <code>PostUserRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostUserRequest();
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
      if (data.hasOwnProperty('profilePhoto'))
        obj.profilePhoto = ProfilePhotoRequest.constructFromObject(data['profilePhoto']);
      if (data.hasOwnProperty('isAdmin'))
        obj.isAdmin = ApiClient.convertToType(data['isAdmin'], 'Boolean');
      if (data.hasOwnProperty('isSuperAdmin'))
        obj.isSuperAdmin = ApiClient.convertToType(data['isSuperAdmin'], 'Boolean');
      if (data.hasOwnProperty('isAngel'))
        obj.isAngel = ApiClient.convertToType(data['isAngel'], 'Boolean');
      if (data.hasOwnProperty('isExplorer'))
        obj.isExplorer = ApiClient.convertToType(data['isExplorer'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostUserRequest.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostUserRequest.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostUserRequest.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostUserRequest.prototype.userUpdated = undefined;

/**
 * @member {String} name
 */
PostUserRequest.prototype.name = undefined;

/**
 * @member {String} phone
 */
PostUserRequest.prototype.phone = undefined;

/**
 * @member {String} email
 */
PostUserRequest.prototype.email = undefined;

/**
 * @member {module:model/ProfilePhotoRequest} profilePhoto
 */
PostUserRequest.prototype.profilePhoto = undefined;

/**
 * @member {Boolean} isAdmin
 */
PostUserRequest.prototype.isAdmin = undefined;

/**
 * @member {Boolean} isSuperAdmin
 */
PostUserRequest.prototype.isSuperAdmin = undefined;

/**
 * @member {Boolean} isAngel
 */
PostUserRequest.prototype.isAngel = undefined;

/**
 * @member {Boolean} isExplorer
 */
PostUserRequest.prototype.isExplorer = undefined;

