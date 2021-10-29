# Caspianyes4TrackserviceApi.VersionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**yes4trackV1VersionGet**](VersionApi.md#yes4trackV1VersionGet) | **GET** /yes4track/v1/version | Get Version

<a name="yes4trackV1VersionGet"></a>
# **yes4trackV1VersionGet**
> yes4trackV1VersionGet(opts)

Get Version

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.VersionApi();
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "262a3683-0042-4558-82cc-59a4bf631420" // String | CSRF Protection
};
apiInstance.yes4trackV1VersionGet(opts, (error, data, response) => {
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
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 262a3683-0042-4558-82cc-59a4bf631420]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

