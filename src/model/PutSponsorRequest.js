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
import {ProfilePhotoRequest} from './ProfilePhotoRequest';
import {SponsorContact} from './SponsorContact';

/**
 * The PutSponsorRequest model module.
 * @module model/PutSponsorRequest
 * @version v1
 */
export class PutSponsorRequest {
  /**
   * Constructs a new <code>PutSponsorRequest</code>.
   * @alias module:model/PutSponsorRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PutSponsorRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutSponsorRequest} obj Optional instance to populate.
   * @return {module:model/PutSponsorRequest} The populated <code>PutSponsorRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PutSponsorRequest();
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
      if (data.hasOwnProperty('contacts'))
        obj.contacts = ApiClient.convertToType(data['contacts'], [SponsorContact]);
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('profilePhoto'))
        obj.profilePhoto = ProfilePhotoRequest.constructFromObject(data['profilePhoto']);
      if (data.hasOwnProperty('isActive'))
        obj.isActive = ApiClient.convertToType(data['isActive'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PutSponsorRequest.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PutSponsorRequest.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PutSponsorRequest.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PutSponsorRequest.prototype.userUpdated = undefined;

/**
 * @member {String} companyId
 */
PutSponsorRequest.prototype.companyId = undefined;

/**
 * @member {String} name
 */
PutSponsorRequest.prototype.name = undefined;

/**
 * @member {String} description
 */
PutSponsorRequest.prototype.description = undefined;

/**
 * @member {Array.<module:model/SponsorContact>} contacts
 */
PutSponsorRequest.prototype.contacts = undefined;

/**
 * @member {module:model/Address} address
 */
PutSponsorRequest.prototype.address = undefined;

/**
 * @member {String} id
 */
PutSponsorRequest.prototype.id = undefined;

/**
 * @member {module:model/ProfilePhotoRequest} profilePhoto
 */
PutSponsorRequest.prototype.profilePhoto = undefined;

/**
 * @member {Boolean} isActive
 */
PutSponsorRequest.prototype.isActive = undefined;

