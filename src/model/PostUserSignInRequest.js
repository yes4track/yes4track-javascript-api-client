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
 * The PostUserSignInRequest model module.
 * @module model/PostUserSignInRequest
 * @version v1
 */
export class PostUserSignInRequest {
  /**
   * Constructs a new <code>PostUserSignInRequest</code>.
   * @alias module:model/PostUserSignInRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostUserSignInRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostUserSignInRequest} obj Optional instance to populate.
   * @return {module:model/PostUserSignInRequest} The populated <code>PostUserSignInRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostUserSignInRequest();
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} phone
 */
PostUserSignInRequest.prototype.phone = undefined;

/**
 * @member {String} hash
 */
PostUserSignInRequest.prototype.hash = undefined;
