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
import {ApiClient} from "../ApiClient";
import {ErrorDetails} from '../model/ErrorDetails';
import {GetAllPagedSponsorResponse} from '../model/GetAllPagedSponsorResponse';
import {GetAllSponsorResponse} from '../model/GetAllSponsorResponse';
import {Operation} from '../model/Operation';
import {PostSponsorRequest} from '../model/PostSponsorRequest';
import {PostSponsorResponse} from '../model/PostSponsorResponse';
import {PutSponsorRequest} from '../model/PutSponsorRequest';

/**
* Sponsor service.
* @module api/SponsorApi
* @version v1
*/
export class SponsorApi {

    /**
    * Constructs a new SponsorApi. 
    * @alias module:api/SponsorApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getByIdSponsor operation.
     * @callback moduleapi/SponsorApi~getByIdSponsorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllSponsorResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sponsor by id
     * @param {String} id Sponsor id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/SponsorApi~getByIdSponsorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getByIdSponsor(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getByIdSponsor");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAllSponsorResponse;

      return this.apiClient.callApi(
        '/yes4track/v1/sponsors/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the yes4trackV1SponsorsGet operation.
     * @callback moduleapi/SponsorApi~yes4trackV1SponsorsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllPagedSponsorResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Sponsor by filter with pagination
     * @param {Object} opts Optional parameters
     * @param {String} opts.companyId 
     * @param {String} opts.name 
     * @param {Boolean} opts.isActive 
     * @param {String} opts.city 
     * @param {String} opts.state 
     * @param {String} opts.country 
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/SponsorApi~yes4trackV1SponsorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    yes4trackV1SponsorsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'companyId': opts['companyId'],'name': opts['name'],'isActive': opts['isActive'],'city': opts['city'],'state': opts['state'],'country': opts['country'],'page': opts['page'],'pageSize': opts['pageSize'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAllPagedSponsorResponse;

      return this.apiClient.callApi(
        '/yes4track/v1/sponsors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the yes4trackV1SponsorsIdDelete operation.
     * @callback moduleapi/SponsorApi~yes4trackV1SponsorsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Sponsor by Id
     * @param {String} id Sponsor id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/SponsorApi~yes4trackV1SponsorsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    yes4trackV1SponsorsIdDelete(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling yes4trackV1SponsorsIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/yes4track/v1/sponsors/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the yes4trackV1SponsorsIdPatch operation.
     * @callback moduleapi/SponsorApi~yes4trackV1SponsorsIdPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update part of Sponsor
     * Sample request:                    PATCH /yes4track/v1/Sponsor/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]
     * @param {Array.<module:model/Operation>} body Atributes values
     * @param {String} id Sponsor id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/SponsorApi~yes4trackV1SponsorsIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    yes4trackV1SponsorsIdPatch(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling yes4trackV1SponsorsIdPatch");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling yes4trackV1SponsorsIdPatch");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/yes4track/v1/sponsors/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the yes4trackV1SponsorsIdPut operation.
     * @callback moduleapi/SponsorApi~yes4trackV1SponsorsIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Sponsor
     * @param {String} id Sponsor Id
     * @param {Object} opts Optional parameters
     * @param {module:model/PutSponsorRequest} opts.body Sponsor to update
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/SponsorApi~yes4trackV1SponsorsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    yes4trackV1SponsorsIdPut(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling yes4trackV1SponsorsIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/yes4track/v1/sponsors/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the yes4trackV1SponsorsPost operation.
     * @callback moduleapi/SponsorApi~yes4trackV1SponsorsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSponsorResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Sponsor
     * @param {Object} opts Optional parameters
     * @param {module:model/PostSponsorRequest} opts.body Sponsor to create
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/SponsorApi~yes4trackV1SponsorsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    yes4trackV1SponsorsPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostSponsorResponse;

      return this.apiClient.callApi(
        '/yes4track/v1/sponsors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}