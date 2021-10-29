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
 * The PhotosUploadBody model module.
 * @module model/PhotosUploadBody
 * @version v1
 */
export class PhotosUploadBody {
  /**
   * Constructs a new <code>PhotosUploadBody</code>.
   * @alias module:model/PhotosUploadBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PhotosUploadBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhotosUploadBody} obj Optional instance to populate.
   * @return {module:model/PhotosUploadBody} The populated <code>PhotosUploadBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PhotosUploadBody();
      if (data.hasOwnProperty('images'))
        obj.images = ApiClient.convertToType(data['images'], ['Blob']);
    }
    return obj;
  }
}

/**
 * Images
 * @member {Array.<Blob>} images
 */
PhotosUploadBody.prototype.images = undefined;

