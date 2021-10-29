# Caspianyes4TrackserviceApi.TemplateApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdTemplate**](TemplateApi.md#getByIdTemplate) | **GET** /yes4track/v1/templates/{id} | Get Template by id
[**yes4trackV1TemplatesGet**](TemplateApi.md#yes4trackV1TemplatesGet) | **GET** /yes4track/v1/templates | Get All Template by filter with pagination
[**yes4trackV1TemplatesIdDelete**](TemplateApi.md#yes4trackV1TemplatesIdDelete) | **DELETE** /yes4track/v1/templates/{id} | Delete Template by Id
[**yes4trackV1TemplatesIdPatch**](TemplateApi.md#yes4trackV1TemplatesIdPatch) | **PATCH** /yes4track/v1/templates/{id} | Update part of Template
[**yes4trackV1TemplatesIdPhotosUploadPost**](TemplateApi.md#yes4trackV1TemplatesIdPhotosUploadPost) | **POST** /yes4track/v1/templates/{id}/photos/upload | Create Template
[**yes4trackV1TemplatesIdPut**](TemplateApi.md#yes4trackV1TemplatesIdPut) | **PUT** /yes4track/v1/templates/{id} | Update Template
[**yes4trackV1TemplatesPost**](TemplateApi.md#yes4trackV1TemplatesPost) | **POST** /yes4track/v1/templates | Create Template

<a name="getByIdTemplate"></a>
# **getByIdTemplate**
> GetAllTemplateResponse getByIdTemplate(id, opts)

Get Template by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TemplateApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Template id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f50aa883-8bf0-4f81-965c-5fb59f93cf5f" // String | CSRF Protection
};
apiInstance.getByIdTemplate(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Template id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f50aa883-8bf0-4f81-965c-5fb59f93cf5f]

### Return type

[**GetAllTemplateResponse**](GetAllTemplateResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TemplatesGet"></a>
# **yes4trackV1TemplatesGet**
> GetAllPagedTemplateResponse yes4trackV1TemplatesGet(opts)

Get All Template by filter with pagination

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TemplateApi();
let opts = { 
  'name': "name_example", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "11de9a32-e668-45f8-99bc-ac5f3281d23b" // String | CSRF Protection
};
apiInstance.yes4trackV1TemplatesGet(opts, (error, data, response) => {
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
 **name** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 11de9a32-e668-45f8-99bc-ac5f3281d23b]

### Return type

[**GetAllPagedTemplateResponse**](GetAllPagedTemplateResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TemplatesIdDelete"></a>
# **yes4trackV1TemplatesIdDelete**
> yes4trackV1TemplatesIdDelete(id, opts)

Delete Template by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TemplateApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Template id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "960cc1d5-3ed2-4b8c-9f56-21cca54bfb4d" // String | CSRF Protection
};
apiInstance.yes4trackV1TemplatesIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Template id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 960cc1d5-3ed2-4b8c-9f56-21cca54bfb4d]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TemplatesIdPatch"></a>
# **yes4trackV1TemplatesIdPatch**
> yes4trackV1TemplatesIdPatch(body, id, opts)

Update part of Template

Sample request:                    PATCH /yes4track/v1/Template/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TemplateApi();
let body = [new Caspianyes4TrackserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Template id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c9de4953-abb9-4533-9c95-e9203f5a55c8" // String | CSRF Protection
};
apiInstance.yes4trackV1TemplatesIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Template id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c9de4953-abb9-4533-9c95-e9203f5a55c8]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1TemplatesIdPhotosUploadPost"></a>
# **yes4trackV1TemplatesIdPhotosUploadPost**
> [&#x27;String&#x27;] yes4trackV1TemplatesIdPhotosUploadPost(id, opts)

Create Template

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TemplateApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Template Id
let opts = { 
  'images': ["QmFzZTY0IGV4YW1wbGU="], // [Blob] | 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "aa7df048-a3be-4700-8882-bfc3c6fc3c9c" // String | CSRF Protection
};
apiInstance.yes4trackV1TemplatesIdPhotosUploadPost(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Template Id | 
 **images** | [**[Blob]**](Blob.md)|  | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to aa7df048-a3be-4700-8882-bfc3c6fc3c9c]

### Return type

**[&#x27;String&#x27;]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

<a name="yes4trackV1TemplatesIdPut"></a>
# **yes4trackV1TemplatesIdPut**
> yes4trackV1TemplatesIdPut(id, opts)

Update Template

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TemplateApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Template Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PutTemplateRequest(), // PutTemplateRequest | Template to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1ce76819-4849-4f1b-9dfb-3722d0c57a2a" // String | CSRF Protection
};
apiInstance.yes4trackV1TemplatesIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Template Id | 
 **body** | [**PutTemplateRequest**](PutTemplateRequest.md)| Template to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1ce76819-4849-4f1b-9dfb-3722d0c57a2a]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1TemplatesPost"></a>
# **yes4trackV1TemplatesPost**
> PostTemplateResponse yes4trackV1TemplatesPost(opts)

Create Template

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TemplateApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostTemplateRequest(), // PostTemplateRequest | Template to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d0c09521-6cea-465b-9569-562dda972c12" // String | CSRF Protection
};
apiInstance.yes4trackV1TemplatesPost(opts, (error, data, response) => {
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
 **body** | [**PostTemplateRequest**](PostTemplateRequest.md)| Template to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d0c09521-6cea-465b-9569-562dda972c12]

### Return type

[**PostTemplateResponse**](PostTemplateResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

