# Caspianyes4TrackserviceApi.SponsorApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdSponsor**](SponsorApi.md#getByIdSponsor) | **GET** /yes4track/v1/sponsors/{id} | Get Sponsor by id
[**yes4trackV1SponsorsGet**](SponsorApi.md#yes4trackV1SponsorsGet) | **GET** /yes4track/v1/sponsors | Get All Sponsor by filter with pagination
[**yes4trackV1SponsorsIdDelete**](SponsorApi.md#yes4trackV1SponsorsIdDelete) | **DELETE** /yes4track/v1/sponsors/{id} | Delete Sponsor by Id
[**yes4trackV1SponsorsIdPatch**](SponsorApi.md#yes4trackV1SponsorsIdPatch) | **PATCH** /yes4track/v1/sponsors/{id} | Update part of Sponsor
[**yes4trackV1SponsorsIdPut**](SponsorApi.md#yes4trackV1SponsorsIdPut) | **PUT** /yes4track/v1/sponsors/{id} | Update Sponsor
[**yes4trackV1SponsorsPost**](SponsorApi.md#yes4trackV1SponsorsPost) | **POST** /yes4track/v1/sponsors | Create Sponsor

<a name="getByIdSponsor"></a>
# **getByIdSponsor**
> GetAllSponsorResponse getByIdSponsor(id, opts)

Get Sponsor by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.SponsorApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Sponsor id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "27646f71-f0fb-416f-b930-99c7de346d20" // String | CSRF Protection
};
apiInstance.getByIdSponsor(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Sponsor id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 27646f71-f0fb-416f-b930-99c7de346d20]

### Return type

[**GetAllSponsorResponse**](GetAllSponsorResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1SponsorsGet"></a>
# **yes4trackV1SponsorsGet**
> GetAllPagedSponsorResponse yes4trackV1SponsorsGet(opts)

Get All Sponsor by filter with pagination

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.SponsorApi();
let opts = { 
  'companyId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'name': "name_example", // String | 
  'isActive': true, // Boolean | 
  'city': "city_example", // String | 
  'state': "state_example", // String | 
  'country': "country_example", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "87b675d3-37bd-4977-9322-f245c9eb7f85" // String | CSRF Protection
};
apiInstance.yes4trackV1SponsorsGet(opts, (error, data, response) => {
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
 **isActive** | **Boolean**|  | [optional] 
 **city** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 
 **country** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 87b675d3-37bd-4977-9322-f245c9eb7f85]

### Return type

[**GetAllPagedSponsorResponse**](GetAllPagedSponsorResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1SponsorsIdDelete"></a>
# **yes4trackV1SponsorsIdDelete**
> yes4trackV1SponsorsIdDelete(id, opts)

Delete Sponsor by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.SponsorApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Sponsor id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "6c9a3155-ab1f-4301-9cc6-ac5b231d30e5" // String | CSRF Protection
};
apiInstance.yes4trackV1SponsorsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Sponsor id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 6c9a3155-ab1f-4301-9cc6-ac5b231d30e5]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1SponsorsIdPatch"></a>
# **yes4trackV1SponsorsIdPatch**
> yes4trackV1SponsorsIdPatch(body, id, opts)

Update part of Sponsor

Sample request:                    PATCH /yes4track/v1/Sponsor/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.SponsorApi();
let body = [new Caspianyes4TrackserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Sponsor id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "eecd6592-7dec-4113-ba38-4d55da0b013d" // String | CSRF Protection
};
apiInstance.yes4trackV1SponsorsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Sponsor id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to eecd6592-7dec-4113-ba38-4d55da0b013d]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1SponsorsIdPut"></a>
# **yes4trackV1SponsorsIdPut**
> yes4trackV1SponsorsIdPut(id, opts)

Update Sponsor

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.SponsorApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Sponsor Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PutSponsorRequest(), // PutSponsorRequest | Sponsor to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "142e84cf-30dd-4920-ac4e-d0736db71832" // String | CSRF Protection
};
apiInstance.yes4trackV1SponsorsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Sponsor Id | 
 **body** | [**PutSponsorRequest**](PutSponsorRequest.md)| Sponsor to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 142e84cf-30dd-4920-ac4e-d0736db71832]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1SponsorsPost"></a>
# **yes4trackV1SponsorsPost**
> PostSponsorResponse yes4trackV1SponsorsPost(opts)

Create Sponsor

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.SponsorApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostSponsorRequest(), // PostSponsorRequest | Sponsor to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f356a8bd-d28e-45f7-9700-2b6ceea7fbd0" // String | CSRF Protection
};
apiInstance.yes4trackV1SponsorsPost(opts, (error, data, response) => {
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
 **body** | [**PostSponsorRequest**](PostSponsorRequest.md)| Sponsor to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f356a8bd-d28e-45f7-9700-2b6ceea7fbd0]

### Return type

[**PostSponsorResponse**](PostSponsorResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

