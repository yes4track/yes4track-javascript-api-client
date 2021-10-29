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
import {GetAllAuditResponse} from './GetAllAuditResponse';

/**
 * The GetAllPagedAuditResponse model module.
 * @module model/GetAllPagedAuditResponse
 * @version v1
 */
export class GetAllPagedAuditResponse {
  /**
   * Constructs a new <code>GetAllPagedAuditResponse</code>.
   * @alias module:model/GetAllPagedAuditResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllPagedAuditResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllPagedAuditResponse} obj Optional instance to populate.
   * @return {module:model/GetAllPagedAuditResponse} The populated <code>GetAllPagedAuditResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllPagedAuditResponse();
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
        obj.results = ApiClient.convertToType(data['results'], [GetAllAuditResponse]);
    }
    return obj;
  }
}

/**
 * @member {Number} currentPage
 */
GetAllPagedAuditResponse.prototype.currentPage = undefined;

/**
 * @member {Number} pageCount
 */
GetAllPagedAuditResponse.prototype.pageCount = undefined;

/**
 * @member {Number} pageSize
 */
GetAllPagedAuditResponse.prototype.pageSize = undefined;

/**
 * @member {Number} rowCount
 */
GetAllPagedAuditResponse.prototype.rowCount = undefined;

/**
 * @member {Number} firstRowOnPage
 */
GetAllPagedAuditResponse.prototype.firstRowOnPage = undefined;

/**
 * @member {Number} lastRowOnPage
 */
GetAllPagedAuditResponse.prototype.lastRowOnPage = undefined;

/**
 * @member {Array.<module:model/GetAllAuditResponse>} results
 */
GetAllPagedAuditResponse.prototype.results = undefined;
