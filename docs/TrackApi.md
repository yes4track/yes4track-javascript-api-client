# Caspianyes4TrackserviceApi.TrackApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdTrack**](TrackApi.md#getByIdTrack) | **GET** /yes4track/v1/tracks/{id} | Get Track by id
[**getByIdTrackGeoData**](TrackApi.md#getByIdTrackGeoData) | **GET** /yes4track/v1/tracks/{id}/geodata | Get Track Geo Data by id
[**getByIdTrackGeoLocation**](TrackApi.md#getByIdTrackGeoLocation) | **GET** /yes4track/v1/tracks/geolocation | Get Track Geo Location by id
[**yes4trackV1TracksGet**](TrackApi.md#yes4trackV1TracksGet) | **GET** /yes4track/v1/tracks | Get All Track by filter with pagination
[**yes4trackV1TracksIdDelete**](TrackApi.md#yes4trackV1TracksIdDelete) | **DELETE** /yes4track/v1/tracks/{id} | Delete Track by Id
[**yes4trackV1TracksIdGeodataPost**](TrackApi.md#yes4trackV1TracksIdGeodataPost) | **POST** /yes4track/v1/tracks/{id}/geodata | Create Track GeoData
[**yes4trackV1TracksIdPatch**](TrackApi.md#yes4trackV1TracksIdPatch) | **PATCH** /yes4track/v1/tracks/{id} | Update part of Track
[**yes4trackV1TracksIdPut**](TrackApi.md#yes4trackV1TracksIdPut) | **PUT** /yes4track/v1/tracks/{id} | Update Track
[**yes4trackV1TracksIdStatisticPut**](TrackApi.md#yes4trackV1TracksIdStatisticPut) | **PUT** /yes4track/v1/tracks/{id}/statistic | Update Track Statistic
[**yes4trackV1TracksPost**](TrackApi.md#yes4trackV1TracksPost) | **POST** /yes4track/v1/tracks | Create Track

<a name="getByIdTrack"></a>
# **getByIdTrack**
> GetAllTrackResponse getByIdTrack(id, opts)

Get Track by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrackApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Track id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "9a45f88d-aee9-41e7-aa11-d8d98ba1caf0" // String | CSRF Protection
};
apiInstance.getByIdTrack(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Track id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 9a45f88d-aee9-41e7-aa11-d8d98ba1caf0]

### Return type

[**GetAllTrackResponse**](GetAllTrackResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getByIdTrackGeoData"></a>
# **getByIdTrackGeoData**
> getByIdTrackGeoData(id, opts)

Get Track Geo Data by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrackApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Track id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d7a3217e-1c2e-4d84-aaf4-ee71ed44989c" // String | CSRF Protection
};
apiInstance.getByIdTrackGeoData(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Track id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d7a3217e-1c2e-4d84-aaf4-ee71ed44989c]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getByIdTrackGeoLocation"></a>
# **getByIdTrackGeoLocation**
> [TrackGeoLocationDto] getByIdTrackGeoLocation(opts)

Get Track Geo Location by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrackApi();
let opts = { 
  'trackId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | Track id
  'adventureId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | Track id
  'experienceId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | Track id
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "33cfda9d-f61a-4a57-b8a0-8d18b740a450" // String | CSRF Protection
};
apiInstance.getByIdTrackGeoLocation(opts, (error, data, response) => {
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
 **trackId** | [**String**](.md)| Track id | [optional] 
 **adventureId** | [**String**](.md)| Track id | [optional] 
 **experienceId** | [**String**](.md)| Track id | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 33cfda9d-f61a-4a57-b8a0-8d18b740a450]

### Return type

[**[TrackGeoLocationDto]**](TrackGeoLocationDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TracksGet"></a>
# **yes4trackV1TracksGet**
> GetAllPagedTrackResponse yes4trackV1TracksGet(adventureId, opts)

Get All Track by filter with pagination

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrackApi();
let adventureId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'name': "name_example", // String | 
  'source': new Caspianyes4TrackserviceApi.TrackSource(), // TrackSource | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "aa305969-5383-4e4e-94c4-1b7fa224d820" // String | CSRF Protection
};
apiInstance.yes4trackV1TracksGet(adventureId, opts, (error, data, response) => {
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
 **adventureId** | [**String**](.md)|  | 
 **name** | **String**|  | [optional] 
 **source** | [**TrackSource**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to aa305969-5383-4e4e-94c4-1b7fa224d820]

### Return type

[**GetAllPagedTrackResponse**](GetAllPagedTrackResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TracksIdDelete"></a>
# **yes4trackV1TracksIdDelete**
> yes4trackV1TracksIdDelete(id, opts)

Delete Track by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrackApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Track id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "312a7346-6427-4d03-be92-93c7ceb734e5" // String | CSRF Protection
};
apiInstance.yes4trackV1TracksIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Track id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 312a7346-6427-4d03-be92-93c7ceb734e5]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1TracksIdGeodataPost"></a>
# **yes4trackV1TracksIdGeodataPost**
> PostTrackGeoDataResponse yes4trackV1TracksIdGeodataPost(id, opts)

Create Track GeoData

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrackApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Track Id
let opts = { 
  'files': ["QmFzZTY0IGV4YW1wbGU="], // [Blob] | 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ba49822b-332e-4999-897b-a37c3788ad29" // String | CSRF Protection
};
apiInstance.yes4trackV1TracksIdGeodataPost(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Track Id | 
 **files** | [**[Blob]**](Blob.md)|  | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ba49822b-332e-4999-897b-a37c3788ad29]

### Return type

[**PostTrackGeoDataResponse**](PostTrackGeoDataResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

<a name="yes4trackV1TracksIdPatch"></a>
# **yes4trackV1TracksIdPatch**
> yes4trackV1TracksIdPatch(body, id, opts)

Update part of Track

Sample request:                    PATCH /yes4track/v1/Track/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrackApi();
let body = [new Caspianyes4TrackserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Track id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1eeb3022-6f72-49da-8088-497418824b4a" // String | CSRF Protection
};
apiInstance.yes4trackV1TracksIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Track id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1eeb3022-6f72-49da-8088-497418824b4a]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1TracksIdPut"></a>
# **yes4trackV1TracksIdPut**
> yes4trackV1TracksIdPut(id, opts)

Update Track

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrackApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Track Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PutTrackRequest(), // PutTrackRequest | Track to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "90576fe5-e894-4149-b423-33e3ab40c145" // String | CSRF Protection
};
apiInstance.yes4trackV1TracksIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Track Id | 
 **body** | [**PutTrackRequest**](PutTrackRequest.md)| Track to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 90576fe5-e894-4149-b423-33e3ab40c145]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1TracksIdStatisticPut"></a>
# **yes4trackV1TracksIdStatisticPut**
> yes4trackV1TracksIdStatisticPut(id, opts)

Update Track Statistic

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrackApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Track Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PutTrackStatisticRequest(), // PutTrackStatisticRequest | Track to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "4879a905-6b50-4870-bedb-314e23e248b6" // String | CSRF Protection
};
apiInstance.yes4trackV1TracksIdStatisticPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Track Id | 
 **body** | [**PutTrackStatisticRequest**](PutTrackStatisticRequest.md)| Track to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 4879a905-6b50-4870-bedb-314e23e248b6]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1TracksPost"></a>
# **yes4trackV1TracksPost**
> PostTrackResponse yes4trackV1TracksPost(opts)

Create Track

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.TrackApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostTrackRequest(), // PostTrackRequest | Track to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "75315498-243a-4e60-a86b-d5f536981781" // String | CSRF Protection
};
apiInstance.yes4trackV1TracksPost(opts, (error, data, response) => {
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
 **body** | [**PostTrackRequest**](PostTrackRequest.md)| Track to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 75315498-243a-4e60-a86b-d5f536981781]

### Return type

[**PostTrackResponse**](PostTrackResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

