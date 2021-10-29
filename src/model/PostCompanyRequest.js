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
import {CompanyType} from './CompanyType';
import {ProfilePhotoRequest} from './ProfilePhotoRequest';
import {RegistrationType} from './RegistrationType';

/**
 * The PostCompanyRequest model module.
 * @module model/PostCompanyRequest
 * @version v1
 */
export class PostCompanyRequest {
  /**
   * Constructs a new <code>PostCompanyRequest</code>.
   * @alias module:model/PostCompanyRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostCompanyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCompanyRequest} obj Optional instance to populate.
   * @return {module:model/PostCompanyRequest} The populated <code>PostCompanyRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostCompanyRequest();
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('userCreated'))
        obj.userCreated = ApiClient.convertToType(data['userCreated'], 'String');
      if (data.hasOwnProperty('userUpdated'))
        obj.userUpdated = ApiClient.convertToType(data['userUpdated'], 'String');
      if (data.hasOwnProperty('legalName'))
        obj.legalName = ApiClient.convertToType(data['legalName'], 'String');
      if (data.hasOwnProperty('fantasyName'))
        obj.fantasyName = ApiClient.convertToType(data['fantasyName'], 'String');
      if (data.hasOwnProperty('registrationNumber'))
        obj.registrationNumber = ApiClient.convertToType(data['registrationNumber'], 'String');
      if (data.hasOwnProperty('registrationType'))
        obj.registrationType = RegistrationType.constructFromObject(data['registrationType']);
      if (data.hasOwnProperty('contactEmail'))
        obj.contactEmail = ApiClient.convertToType(data['contactEmail'], 'String');
      if (data.hasOwnProperty('contactPhone'))
        obj.contactPhone = ApiClient.convertToType(data['contactPhone'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = CompanyType.constructFromObject(data['type']);
      if (data.hasOwnProperty('biography'))
        obj.biography = ApiClient.convertToType(data['biography'], 'String');
      if (data.hasOwnProperty('profilePhoto'))
        obj.profilePhoto = ProfilePhotoRequest.constructFromObject(data['profilePhoto']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostCompanyRequest.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostCompanyRequest.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostCompanyRequest.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostCompanyRequest.prototype.userUpdated = undefined;

/**
 * @member {String} legalName
 */
PostCompanyRequest.prototype.legalName = undefined;

/**
 * @member {String} fantasyName
 */
PostCompanyRequest.prototype.fantasyName = undefined;

/**
 * @member {String} registrationNumber
 */
PostCompanyRequest.prototype.registrationNumber = undefined;

/**
 * @member {module:model/RegistrationType} registrationType
 */
PostCompanyRequest.prototype.registrationType = undefined;

/**
 * @member {String} contactEmail
 */
PostCompanyRequest.prototype.contactEmail = undefined;

/**
 * @member {String} contactPhone
 */
PostCompanyRequest.prototype.contactPhone = undefined;

/**
 * @member {module:model/CompanyType} type
 */
PostCompanyRequest.prototype.type = undefined;

/**
 * @member {String} biography
 */
PostCompanyRequest.prototype.biography = undefined;

/**
 * @member {module:model/ProfilePhotoRequest} profilePhoto
 */
PostCompanyRequest.prototype.profilePhoto = undefined;

