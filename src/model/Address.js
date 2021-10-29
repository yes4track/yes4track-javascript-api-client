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
import {DocumentVersion} from './DocumentVersion';

/**
 * The Address model module.
 * @module model/Address
 * @version v1
 */
export class Address {
  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Address();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('userCreated'))
        obj.userCreated = ApiClient.convertToType(data['userCreated'], 'String');
      if (data.hasOwnProperty('userUpdated'))
        obj.userUpdated = ApiClient.convertToType(data['userUpdated'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = DocumentVersion.constructFromObject(data['version']);
      if (data.hasOwnProperty('zipCode'))
        obj.zipCode = ApiClient.convertToType(data['zipCode'], 'String');
      if (data.hasOwnProperty('street'))
        obj.street = ApiClient.convertToType(data['street'], 'String');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'String');
      if (data.hasOwnProperty('complement'))
        obj.complement = ApiClient.convertToType(data['complement'], 'String');
      if (data.hasOwnProperty('neighborhood'))
        obj.neighborhood = ApiClient.convertToType(data['neighborhood'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('latitude'))
        obj.latitude = ApiClient.convertToType(data['latitude'], 'Number');
      if (data.hasOwnProperty('longitude'))
        obj.longitude = ApiClient.convertToType(data['longitude'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Address.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Address.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Address.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
Address.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
Address.prototype.userUpdated = undefined;

/**
 * @member {module:model/DocumentVersion} version
 */
Address.prototype.version = undefined;

/**
 * @member {String} zipCode
 */
Address.prototype.zipCode = undefined;

/**
 * @member {String} street
 */
Address.prototype.street = undefined;

/**
 * @member {String} _number
 */
Address.prototype._number = undefined;

/**
 * @member {String} complement
 */
Address.prototype.complement = undefined;

/**
 * @member {String} neighborhood
 */
Address.prototype.neighborhood = undefined;

/**
 * @member {String} city
 */
Address.prototype.city = undefined;

/**
 * @member {String} state
 */
Address.prototype.state = undefined;

/**
 * @member {String} country
 */
Address.prototype.country = undefined;

/**
 * @member {Number} latitude
 */
Address.prototype.latitude = undefined;

/**
 * @member {Number} longitude
 */
Address.prototype.longitude = undefined;
