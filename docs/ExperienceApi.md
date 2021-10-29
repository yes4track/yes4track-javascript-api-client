# Caspianyes4TrackserviceApi.ExperienceApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdExperience**](ExperienceApi.md#getByIdExperience) | **GET** /yes4track/v1/experiences/{id} | Get Experience by id
[**getByIdExperienceCode**](ExperienceApi.md#getByIdExperienceCode) | **GET** /yes4track/v1/experiences/{id}/code | Get Experience Code by id
[**yes4trackV1ExperiencesGet**](ExperienceApi.md#yes4trackV1ExperiencesGet) | **GET** /yes4track/v1/experiences | Get All Experience by filter with pagination
[**yes4trackV1ExperiencesIdActivatePost**](ExperienceApi.md#yes4trackV1ExperiencesIdActivatePost) | **POST** /yes4track/v1/experiences/{id}/activate | Activate Experience
[**yes4trackV1ExperiencesIdCodeCodeCheckPost**](ExperienceApi.md#yes4trackV1ExperiencesIdCodeCodeCheckPost) | **POST** /yes4track/v1/experiences/{id}/code/{code}/check | Check Experience Code
[**yes4trackV1ExperiencesIdDelete**](ExperienceApi.md#yes4trackV1ExperiencesIdDelete) | **DELETE** /yes4track/v1/experiences/{id} | Delete Experience by Id
[**yes4trackV1ExperiencesIdImagesImageIdDelete**](ExperienceApi.md#yes4trackV1ExperiencesIdImagesImageIdDelete) | **DELETE** /yes4track/v1/experiences/{id}/images/{imageId} | Delete Experience by Id
[**yes4trackV1ExperiencesIdImagesPost**](ExperienceApi.md#yes4trackV1ExperiencesIdImagesPost) | **POST** /yes4track/v1/experiences/{id}/images | Add images in Experience
[**yes4trackV1ExperiencesIdPatch**](ExperienceApi.md#yes4trackV1ExperiencesIdPatch) | **PATCH** /yes4track/v1/experiences/{id} | Update part of Experience
[**yes4trackV1ExperiencesIdPut**](ExperienceApi.md#yes4trackV1ExperiencesIdPut) | **PUT** /yes4track/v1/experiences/{id} | Update Experience
[**yes4trackV1ExperiencesIdVideosPost**](ExperienceApi.md#yes4trackV1ExperiencesIdVideosPost) | **POST** /yes4track/v1/experiences/{id}/videos | Add videos in an Experience
[**yes4trackV1ExperiencesIdVideosVideoIdDelete**](ExperienceApi.md#yes4trackV1ExperiencesIdVideosVideoIdDelete) | **DELETE** /yes4track/v1/experiences/{id}/videos/{videoId} | Delete Experience by Id
[**yes4trackV1ExperiencesPost**](ExperienceApi.md#yes4trackV1ExperiencesPost) | **POST** /yes4track/v1/experiences | Create Experience

<a name="getByIdExperience"></a>
# **getByIdExperience**
> GetAllExperienceResponse getByIdExperience(id, opts)

Get Experience by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "274638ee-6324-442f-b895-33004cad68bb" // String | CSRF Protection
};
apiInstance.getByIdExperience(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Experience id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 274638ee-6324-442f-b895-33004cad68bb]

### Return type

[**GetAllExperienceResponse**](GetAllExperienceResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getByIdExperienceCode"></a>
# **getByIdExperienceCode**
> GetByIdExperienceCodeResponse getByIdExperienceCode(id, opts)

Get Experience Code by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f2b300d0-d094-4a5f-9b03-eeaffb174c70" // String | CSRF Protection
};
apiInstance.getByIdExperienceCode(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Experience id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f2b300d0-d094-4a5f-9b03-eeaffb174c70]

### Return type

[**GetByIdExperienceCodeResponse**](GetByIdExperienceCodeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1ExperiencesGet"></a>
# **yes4trackV1ExperiencesGet**
> GetAllPagedExperienceResponse yes4trackV1ExperiencesGet(opts)

Get All Experience by filter with pagination

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let opts = { 
  'companyId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'name': "name_example", // String | 
  'description': "description_example", // String | 
  'codeRequired': true, // Boolean | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2f60b172-8229-439c-8f18-e9eacbda7f7f" // String | CSRF Protection
};
apiInstance.yes4trackV1ExperiencesGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | [**String**](.md)|  | [optional] 
 **name** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **codeRequired** | **Boolean**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2f60b172-8229-439c-8f18-e9eacbda7f7f]

### Return type

[**GetAllPagedExperienceResponse**](GetAllPagedExperienceResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1ExperiencesIdActivatePost"></a>
# **yes4trackV1ExperiencesIdActivatePost**
> yes4trackV1ExperiencesIdActivatePost(id, opts)

Activate Experience

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "4acaf698-dfa4-4f0a-b906-ac618058b6eb" // String | CSRF Protection
};
apiInstance.yes4trackV1ExperiencesIdActivatePost(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Experience id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 4acaf698-dfa4-4f0a-b906-ac618058b6eb]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1ExperiencesIdCodeCodeCheckPost"></a>
# **yes4trackV1ExperiencesIdCodeCodeCheckPost**
> PostCheckExperienceCodeResponse yes4trackV1ExperiencesIdCodeCodeCheckPost(id, code, opts)

Check Experience Code

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience id
let code = "code_example"; // String | Experience Code
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "5cec2c87-0092-4f5b-a7d1-9eca74248553" // String | CSRF Protection
};
apiInstance.yes4trackV1ExperiencesIdCodeCodeCheckPost(id, code, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Experience id | 
 **code** | **String**| Experience Code | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 5cec2c87-0092-4f5b-a7d1-9eca74248553]

### Return type

[**PostCheckExperienceCodeResponse**](PostCheckExperienceCodeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1ExperiencesIdDelete"></a>
# **yes4trackV1ExperiencesIdDelete**
> yes4trackV1ExperiencesIdDelete(id, opts)

Delete Experience by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1571855f-b319-4e40-abb8-b7401aada09b" // String | CSRF Protection
};
apiInstance.yes4trackV1ExperiencesIdDelete(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Experience id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1571855f-b319-4e40-abb8-b7401aada09b]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1ExperiencesIdImagesImageIdDelete"></a>
# **yes4trackV1ExperiencesIdImagesImageIdDelete**
> yes4trackV1ExperiencesIdImagesImageIdDelete(id, imageId, opts)

Delete Experience by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience id
let imageId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience Image id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "306520cb-ef60-4ec1-abde-b0955f60f3a2" // String | CSRF Protection
};
apiInstance.yes4trackV1ExperiencesIdImagesImageIdDelete(id, imageId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Experience id | 
 **imageId** | [**String**](.md)| Experience Image id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 306520cb-ef60-4ec1-abde-b0955f60f3a2]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1ExperiencesIdImagesPost"></a>
# **yes4trackV1ExperiencesIdImagesPost**
> [&#x27;String&#x27;] yes4trackV1ExperiencesIdImagesPost(id, opts)

Add images in Experience

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience Id
let opts = { 
  'images': ["QmFzZTY0IGV4YW1wbGU="], // [Blob] | 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "dff42bc4-7192-48ac-b034-4aeac091c0bc" // String | CSRF Protection
};
apiInstance.yes4trackV1ExperiencesIdImagesPost(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Experience Id | 
 **images** | [**[Blob]**](Blob.md)|  | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to dff42bc4-7192-48ac-b034-4aeac091c0bc]

### Return type

**[&#x27;String&#x27;]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

<a name="yes4trackV1ExperiencesIdPatch"></a>
# **yes4trackV1ExperiencesIdPatch**
> yes4trackV1ExperiencesIdPatch(body, id, opts)

Update part of Experience

Sample request:                    PATCH /yes4track/v1/Experience/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let body = [new Caspianyes4TrackserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a9d49e84-3ce2-46ed-be5a-8e94163e9942" // String | CSRF Protection
};
apiInstance.yes4trackV1ExperiencesIdPatch(body, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Operation]**](Operation.md)| Atributes values | 
 **id** | [**String**](.md)| Experience id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a9d49e84-3ce2-46ed-be5a-8e94163e9942]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1ExperiencesIdPut"></a>
# **yes4trackV1ExperiencesIdPut**
> yes4trackV1ExperiencesIdPut(id, opts)

Update Experience

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PutExperienceRequest(), // PutExperienceRequest | Experience to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a4055623-5b95-45b3-8834-790d362d874c" // String | CSRF Protection
};
apiInstance.yes4trackV1ExperiencesIdPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Experience Id | 
 **body** | [**PutExperienceRequest**](PutExperienceRequest.md)| Experience to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a4055623-5b95-45b3-8834-790d362d874c]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1ExperiencesIdVideosPost"></a>
# **yes4trackV1ExperiencesIdVideosPost**
> [&#x27;String&#x27;] yes4trackV1ExperiencesIdVideosPost(id, opts)

Add videos in an Experience

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience Id
let opts = { 
  'videos': ["QmFzZTY0IGV4YW1wbGU="], // [Blob] | 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "29480858-6b43-4591-be4d-3d8abed4398f" // String | CSRF Protection
};
apiInstance.yes4trackV1ExperiencesIdVideosPost(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Experience Id | 
 **videos** | [**[Blob]**](Blob.md)|  | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 29480858-6b43-4591-be4d-3d8abed4398f]

### Return type

**[&#x27;String&#x27;]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

<a name="yes4trackV1ExperiencesIdVideosVideoIdDelete"></a>
# **yes4trackV1ExperiencesIdVideosVideoIdDelete**
> yes4trackV1ExperiencesIdVideosVideoIdDelete(id, videoId, opts)

Delete Experience by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience id
let videoId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Experience Video id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "fc9e29a0-56c3-4a04-906e-f5bf0541cca5" // String | CSRF Protection
};
apiInstance.yes4trackV1ExperiencesIdVideosVideoIdDelete(id, videoId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Experience id | 
 **videoId** | [**String**](.md)| Experience Video id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to fc9e29a0-56c3-4a04-906e-f5bf0541cca5]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1ExperiencesPost"></a>
# **yes4trackV1ExperiencesPost**
> PostExperienceResponse yes4trackV1ExperiencesPost(opts)

Create Experience

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.ExperienceApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostExperienceRequest(), // PostExperienceRequest | Experience to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d13560d2-bdc5-4bbe-8582-ecd826e9cbdb" // String | CSRF Protection
};
apiInstance.yes4trackV1ExperiencesPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostExperienceRequest**](PostExperienceRequest.md)| Experience to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d13560d2-bdc5-4bbe-8582-ecd826e9cbdb]

### Return type

[**PostExperienceResponse**](PostExperienceResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

