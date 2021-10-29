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
import {GetAllUserResponse} from './GetAllUserResponse';

/**
 * The GetAllPagedUserResponse model module.
 * @module model/GetAllPagedUserResponse
 * @version v1
 */
export class GetAllPagedUserResponse {
  /**
   * Constructs a new <code>GetAllPagedUserResponse</code>.
   * @alias module:model/GetAllPagedUserResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllPagedUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllPagedUserResponse} obj Optional instance to populate.
   * @return {module:model/GetAllPagedUserResponse} The populated <code>GetAllPagedUserResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllPagedUserResponse();
      if (data.hasOwnProperty('currentPage'))
        obj.currentPage = ApiClient.convertToType(data['currentPage'], 'Number');
      if (data.hasOwnProperty('pageCount'))
        obj.pageCount = ApiClient.convertToType(data['pageCount'], 'Number');
      if (data.hasOwnProperty('pageSize'))
        obj.pageSize = ApiClient.convertToType(data['pageSize'], 'Number');
      if (data.hasOwnProperty('rowCount'))
        obj.rowCount = ApiClient.convertToType(data['rowCount'], 'Number');
      if (data.hasOwnProperty('firstRowOnPage'))
        obj.firstRowOnPage = ApiClient.convertToType(data['firstRowOnPage'], 'Number');
      if (data.hasOwnProperty('lastRowOnPage'))
        obj.lastRowOnPage = ApiClient.convertToType(data['lastRowOnPage'], 'Number');
      if (data.hasOwnProperty('results'))
        obj.results = ApiClient.convertToType(data['results'], [GetAllUserResponse]);
    }
    return obj;
  }
}

/**
 * @member {Number} currentPage
 */
GetAllPagedUserResponse.prototype.currentPage = undefined;

/**
 * @member {Number} pageCount
 */
GetAllPagedUserResponse.prototype.pageCount = undefined;

/**
 * @member {Number} pageSize
 */
GetAllPagedUserResponse.prototype.pageSize = undefined;

/**
 * @member {Number} rowCount
 */
GetAllPagedUserResponse.prototype.rowCount = undefined;

/**
 * @member {Number} firstRowOnPage
 */
GetAllPagedUserResponse.prototype.firstRowOnPage = undefined;

/**
 * @member {Number} lastRowOnPage
 */
GetAllPagedUserResponse.prototype.lastRowOnPage = undefined;

/**
 * @member {Array.<module:model/GetAllUserResponse>} results
 */
GetAllPagedUserResponse.prototype.results = undefined;

