# Caspianyes4TrackserviceApi.GeolocationApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddressByLatLong**](GeolocationApi.md#getAddressByLatLong) | **GET** /yes4track/v1/geolocations/{lat}/{lng} | Get Address by Lat Long

<a name="getAddressByLatLong"></a>
# **getAddressByLatLong**
> Address getAddressByLatLong(lat, lng, opts)

Get Address by Lat Long

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.GeolocationApi();
let lat = 1.2; // Number | latitude
let lng = 1.2; // Number | longitude
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f69cfc36-daee-4ae5-bcdf-186a2dade8d7" // String | CSRF Protection
};
apiInstance.getAddressByLatLong(lat, lng, opts, (error, data, response) => {
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
 **lat** | **Number**| latitude | 
 **lng** | **Number**| longitude | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f69cfc36-daee-4ae5-bcdf-186a2dade8d7]

### Return type

[**Address**](Address.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

