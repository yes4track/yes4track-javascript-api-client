# Caspianyes4TrackserviceApi.AuditApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**yes4trackV1AuditsGet**](AuditApi.md#yes4trackV1AuditsGet) | **GET** /yes4track/v1/audits | Get All Audit by filter with pagination

<a name="yes4trackV1AuditsGet"></a>
# **yes4trackV1AuditsGet**
> GetAllPagedAuditResponse yes4trackV1AuditsGet(opts)

Get All Audit by filter with pagination

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AuditApi();
let opts = { 
  'parentId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'entity': "entity_example", // String | 
  'action': new Caspianyes4TrackserviceApi.ActionType(), // ActionType | 
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'userCreated': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'userUpdated': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "cf2d1a04-8106-4246-b4b2-c84e33357572" // String | CSRF Protection
};
apiInstance.yes4trackV1AuditsGet(opts, (error, data, response) => {
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
 **parentId** | [**String**](.md)|  | [optional] 
 **entity** | **String**|  | [optional] 
 **action** | [**ActionType**](.md)|  | [optional] 
 **startDate** | **Date**|  | [optional] 
 **endDate** | **Date**|  | [optional] 
 **userCreated** | [**String**](.md)|  | [optional] 
 **userUpdated** | [**String**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to cf2d1a04-8106-4246-b4b2-c84e33357572]

### Return type

[**GetAllPagedAuditResponse**](GetAllPagedAuditResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

