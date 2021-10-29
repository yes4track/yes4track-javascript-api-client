# Caspianyes4TrackserviceApi.TrailApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdTrail**](TrailApi.md#getByIdTrail) | **GET** /yes4track/v1/trails/{id} | Get Trail by id
[**getByIdTrailGeoData**](TrailApi.md#getByIdTrailGeoData) | **GET** /yes4track/v1/trails/{id}/geodata | Get Trail Geo Data by id
[**getByIdTrailGeoLocation**](TrailApi.md#getByIdTrailGeoLocation) | **GET** /yes4track/v1/trails/{id}/geolocation | Get Trail Geo Location by id
[**yes4trackV1TrailsActiveByAngelGet**](TrailApi.md#yes4trackV1TrailsActiveByAngelGet) | **GET** /yes4track/v1/trails/activeByAngel | Get All Active Trail by Angel
[**yes4trackV1TrailsGet**](TrailApi.md#yes4trackV1TrailsGet) | **GET** /yes4track/v1/trails | Get All Trail by filter with pagination
[**yes4trackV1TrailsIdAngelAngelIdDelete**](TrailApi.md#yes4trackV1TrailsIdAngelAngelIdDelete) | **DELETE** /yes4track/v1/trails/{id}/angel/{angelId} | Delete Trail Angel by Id
[**yes4trackV1TrailsIdAngelAngelIdPost**](TrailApi.md#yes4trackV1TrailsIdAngelAngelIdPost) | **POST** /yes4track/v1/trails/{id}/angel/{angelId} | Add Trail Angel by Id
[**yes4trackV1TrailsIdCompanyIdTrailtoadventurePost**](TrailApi.md#yes4trackV1TrailsIdCompanyIdTrailtoadventurePost) | **POST** /yes4track/v1/trails/{id}/{companyId}/trailtoadventure | Convert Trail to Adventure
[**yes4trackV1TrailsIdDelete**](TrailApi.md#yes4trackV1TrailsIdDelete) | **DELETE** /yes4track/v1/trails/{id} | Delete Trail by Id
[**yes4trackV1TrailsIdGeodataChunckPost**](TrailApi.md#yes4trackV1TrailsIdGeodataChunckPost) | **POST** /yes4track/v1/trails/{id}/geodata/chunck | Add Chunck Trail GeoData
[**yes4trackV1TrailsIdGeodataPost**](TrailApi.md#yes4trackV1TrailsIdGeodataPost) | **POST** /yes4track/v1/trails/{id}/geodata | Create Trail GeoData
[**yes4trackV1TrailsIdImagesPost**](TrailApi.md#yes4trackV1TrailsIdImagesPost) | **POST** /yes4track/v1/trails/{id}/images | Add images in trail
[**yes4trackV1TrailsIdMapPhotoPut**](TrailApi.md#yes4trackV1TrailsIdMapPhotoPut) | **PUT** /yes4track/v1/trails/{id}/map/photo | Update Trail Map Photo
[**yes4trackV1TrailsIdPatch**](TrailApi.md#yes4trackV1TrailsIdPatch) | **PATCH** /yes4track/v1/trails/{id} | Update part of Trail
[**yes4trackV1TrailsIdPut**](TrailApi.md#yes4trackV1TrailsIdPut) | **PUT** /yes4track/v1/trails/{id} | Update Trail
[**yes4trackV1TrailsIdSponsorSponsorIdDelete**](TrailApi.md#yes4trackV1TrailsIdSponsorSponsorIdDelete) | **DELETE** /yes4track/v1/trails/{id}/sponsor/{sponsorId} | Delete Trail Sponsor by Id
[**yes4trackV1TrailsIdSponsorSponsorIdPost**](TrailApi.md#yes4trackV1TrailsIdSponsorSponsorIdPost) | **POST** /yes4track/v1/trails/{id}/sponsor/{sponsorId} | Add Trail Sponsor by Id
[**yes4trackV1TrailsPost**](TrailApi.md#yes4trackV1TrailsPost) | **POST** /yes4track/v1/trails | Create Trail

<a name="getByIdTrail"></a>
# **getByIdTrail**
> GetAllTrailResponse getByIdTrail(id, opts)

Get Trail by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "54779b0b-2f3d-4477-af47-d5e6d8b321b1" // String | CSRF Protection
};
apiInstance.getByIdTrail(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 54779b0b-2f3d-4477-af47-d5e6d8b321b1]

### Return type

[**GetAllTrailResponse**](GetAllTrailResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getByIdTrailGeoData"></a>
# **getByIdTrailGeoData**
> GetByIdTrailGeoDataResponse getByIdTrailGeoData(id, opts)

Get Trail Geo Data by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "24299ea0-3c3e-41db-befa-7a578683e124" // String | CSRF Protection
};
apiInstance.getByIdTrailGeoData(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 24299ea0-3c3e-41db-befa-7a578683e124]

### Return type

[**GetByIdTrailGeoDataResponse**](GetByIdTrailGeoDataResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getByIdTrailGeoLocation"></a>
# **getByIdTrailGeoLocation**
> TrailGeoLocationDto getByIdTrailGeoLocation(id, opts)

Get Trail Geo Location by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1c0bf1e8-dcb1-4e16-a670-80c56cab4653" // String | CSRF Protection
};
apiInstance.getByIdTrailGeoLocation(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1c0bf1e8-dcb1-4e16-a670-80c56cab4653]

### Return type

[**TrailGeoLocationDto**](TrailGeoLocationDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TrailsActiveByAngelGet"></a>
# **yes4trackV1TrailsActiveByAngelGet**
> GetAllActiveTrailByAngelResponse yes4trackV1TrailsActiveByAngelGet(opts)

Get All Active Trail by Angel

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "372e92a9-77c9-44d6-b4ec-59770d24854f" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsActiveByAngelGet(opts, (error, data, response) => {
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
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 372e92a9-77c9-44d6-b4ec-59770d24854f]

### Return type

[**GetAllActiveTrailByAngelResponse**](GetAllActiveTrailByAngelResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TrailsGet"></a>
# **yes4trackV1TrailsGet**
> GetAllPagedTrailResponse yes4trackV1TrailsGet(opts)

Get All Trail by filter with pagination

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let opts = { 
  'adventureId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'name': "name_example", // String | 
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'adventureName': "adventureName_example", // String | 
  'userCreated': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f2a0dd29-aa01-496a-9566-aff5775eea4b" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsGet(opts, (error, data, response) => {
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
 **adventureId** | [**String**](.md)|  | [optional] 
 **name** | **String**|  | [optional] 
 **startDate** | **Date**|  | [optional] 
 **endDate** | **Date**|  | [optional] 
 **adventureName** | **String**|  | [optional] 
 **userCreated** | [**String**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f2a0dd29-aa01-496a-9566-aff5775eea4b]

### Return type

[**GetAllPagedTrailResponse**](GetAllPagedTrailResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TrailsIdAngelAngelIdDelete"></a>
# **yes4trackV1TrailsIdAngelAngelIdDelete**
> yes4trackV1TrailsIdAngelAngelIdDelete(id, angelId, opts)

Delete Trail Angel by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail id
let angelId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Angel id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "19716095-f015-48a6-978b-3ca80e33a4d1" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdAngelAngelIdDelete(id, angelId, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail id | 
 **angelId** | [**String**](.md)| Angel id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 19716095-f015-48a6-978b-3ca80e33a4d1]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TrailsIdAngelAngelIdPost"></a>
# **yes4trackV1TrailsIdAngelAngelIdPost**
> yes4trackV1TrailsIdAngelAngelIdPost(id, angelId, opts)

Add Trail Angel by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail id
let angelId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Angel id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "5e5413c9-73f2-4853-b024-06c47b8db571" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdAngelAngelIdPost(id, angelId, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail id | 
 **angelId** | [**String**](.md)| Angel id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 5e5413c9-73f2-4853-b024-06c47b8db571]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TrailsIdCompanyIdTrailtoadventurePost"></a>
# **yes4trackV1TrailsIdCompanyIdTrailtoadventurePost**
> PostAdventureResponse yes4trackV1TrailsIdCompanyIdTrailtoadventurePost(id, companyId, opts)

Convert Trail to Adventure

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail Id
let companyId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Company Id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d6124826-d49b-43db-8028-b4864d771542" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdCompanyIdTrailtoadventurePost(id, companyId, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail Id | 
 **companyId** | [**String**](.md)| Company Id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d6124826-d49b-43db-8028-b4864d771542]

### Return type

[**PostAdventureResponse**](PostAdventureResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="yes4trackV1TrailsIdDelete"></a>
# **yes4trackV1TrailsIdDelete**
> yes4trackV1TrailsIdDelete(id, opts)

Delete Trail by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "9324f82b-4917-40f2-bec0-de7c9b5d7d83" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 9324f82b-4917-40f2-bec0-de7c9b5d7d83]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TrailsIdGeodataChunckPost"></a>
# **yes4trackV1TrailsIdGeodataChunckPost**
> yes4trackV1TrailsIdGeodataChunckPost(body, id, opts)

Add Chunck Trail GeoData

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let body = new Caspianyes4TrackserviceApi.PostTrailChunckGeoDataRequest(); // PostTrailChunckGeoDataRequest | Object Request
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail Id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c6d5c05c-d8b6-4cd8-8820-19f98205785a" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdGeodataChunckPost(body, id, opts, (error, data, response) => {
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
 **body** | [**PostTrailChunckGeoDataRequest**](PostTrailChunckGeoDataRequest.md)| Object Request | 
 **id** | [**String**](.md)| Trail Id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c6d5c05c-d8b6-4cd8-8820-19f98205785a]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1TrailsIdGeodataPost"></a>
# **yes4trackV1TrailsIdGeodataPost**
> PostTrailGeoDataResponse yes4trackV1TrailsIdGeodataPost(id, opts)

Create Trail GeoData

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail Id
let opts = { 
  'files': ["QmFzZTY0IGV4YW1wbGU="], // [Blob] | 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "412e62b1-7144-49d8-853c-0aeaef56bec5" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdGeodataPost(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail Id | 
 **files** | [**[Blob]**](Blob.md)|  | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 412e62b1-7144-49d8-853c-0aeaef56bec5]

### Return type

[**PostTrailGeoDataResponse**](PostTrailGeoDataResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

<a name="yes4trackV1TrailsIdImagesPost"></a>
# **yes4trackV1TrailsIdImagesPost**
> [PostTrailPhotosResponse] yes4trackV1TrailsIdImagesPost(id, opts)

Add images in trail

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail Id
let opts = { 
  'images': ["QmFzZTY0IGV4YW1wbGU="], // [Blob] | 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ec1be4f2-447f-4dfd-86b4-d287c75f908e" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdImagesPost(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail Id | 
 **images** | [**[Blob]**](Blob.md)|  | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ec1be4f2-447f-4dfd-86b4-d287c75f908e]

### Return type

[**[PostTrailPhotosResponse]**](PostTrailPhotosResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

<a name="yes4trackV1TrailsIdMapPhotoPut"></a>
# **yes4trackV1TrailsIdMapPhotoPut**
> yes4trackV1TrailsIdMapPhotoPut(id, opts)

Update Trail Map Photo

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail Id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a3566e1f-e95e-47d8-90d5-61ff9f04e03e" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdMapPhotoPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail Id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a3566e1f-e95e-47d8-90d5-61ff9f04e03e]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TrailsIdPatch"></a>
# **yes4trackV1TrailsIdPatch**
> yes4trackV1TrailsIdPatch(body, id, opts)

Update part of Trail

Sample request:                    PATCH /yes4track/v1/Trail/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let body = [new Caspianyes4TrackserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "e97e21ab-ff6f-4028-bfa7-e22e88e48866" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to e97e21ab-ff6f-4028-bfa7-e22e88e48866]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1TrailsIdPut"></a>
# **yes4trackV1TrailsIdPut**
> yes4trackV1TrailsIdPut(id, opts)

Update Trail

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PutTrailRequest(), // PutTrailRequest | Trail to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "846bfd98-2a7b-43fd-8087-6b82cc9972e2" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail Id | 
 **body** | [**PutTrailRequest**](PutTrailRequest.md)| Trail to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 846bfd98-2a7b-43fd-8087-6b82cc9972e2]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1TrailsIdSponsorSponsorIdDelete"></a>
# **yes4trackV1TrailsIdSponsorSponsorIdDelete**
> yes4trackV1TrailsIdSponsorSponsorIdDelete(id, sponsorId, opts)

Delete Trail Sponsor by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail id
let sponsorId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Sponsor id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8b1c4123-8439-4528-a71c-16b7834571ec" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdSponsorSponsorIdDelete(id, sponsorId, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail id | 
 **sponsorId** | [**String**](.md)| Sponsor id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8b1c4123-8439-4528-a71c-16b7834571ec]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TrailsIdSponsorSponsorIdPost"></a>
# **yes4trackV1TrailsIdSponsorSponsorIdPost**
> yes4trackV1TrailsIdSponsorSponsorIdPost(id, sponsorId, opts)

Add Trail Sponsor by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Trail id
let sponsorId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Sponsor id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "71b71dd0-382a-4769-a11e-42c170235b8f" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsIdSponsorSponsorIdPost(id, sponsorId, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Trail id | 
 **sponsorId** | [**String**](.md)| Sponsor id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 71b71dd0-382a-4769-a11e-42c170235b8f]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TrailsPost"></a>
# **yes4trackV1TrailsPost**
> PostTrailResponse yes4trackV1TrailsPost(opts)

Create Trail

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrailApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostTrailRequest(), // PostTrailRequest | Trail to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "38cd7fd0-5496-44ae-add7-12c2bdd2f0a3" // String | CSRF Protection
};
apiInstance.yes4trackV1TrailsPost(opts, (error, data, response) => {
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
 **body** | [**PostTrailRequest**](PostTrailRequest.md)| Trail to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 38cd7fd0-5496-44ae-add7-12c2bdd2f0a3]

### Return type

[**PostTrailResponse**](PostTrailResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

