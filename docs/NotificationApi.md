# Caspianyes4TrackserviceApi.NotificationApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdNotification**](NotificationApi.md#getByIdNotification) | **GET** /yes4track/v1/notifications/{id} | Get Notification by id
[**yes4trackV1NotificationsGet**](NotificationApi.md#yes4trackV1NotificationsGet) | **GET** /yes4track/v1/notifications | Get All Notification by filter with pagination
[**yes4trackV1NotificationsIdDelete**](NotificationApi.md#yes4trackV1NotificationsIdDelete) | **DELETE** /yes4track/v1/notifications/{id} | Delete Notification by Id
[**yes4trackV1NotificationsIdPatch**](NotificationApi.md#yes4trackV1NotificationsIdPatch) | **PATCH** /yes4track/v1/notifications/{id} | Update part of Notification
[**yes4trackV1NotificationsIdPut**](NotificationApi.md#yes4trackV1NotificationsIdPut) | **PUT** /yes4track/v1/notifications/{id} | Update Notification
[**yes4trackV1NotificationsPost**](NotificationApi.md#yes4trackV1NotificationsPost) | **POST** /yes4track/v1/notifications | Create Notification

<a name="getByIdNotification"></a>
# **getByIdNotification**
> GetAllNotificationResponse getByIdNotification(id, opts)

Get Notification by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.NotificationApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Notification id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d51ae7f9-b753-44f9-a4a0-d3845e097a69" // String | CSRF Protection
};
apiInstance.getByIdNotification(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Notification id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d51ae7f9-b753-44f9-a4a0-d3845e097a69]

### Return type

[**GetAllNotificationResponse**](GetAllNotificationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1NotificationsGet"></a>
# **yes4trackV1NotificationsGet**
> GetAllPagedNotificationResponse yes4trackV1NotificationsGet(opts)

Get All Notification by filter with pagination

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.NotificationApi();
let opts = { 
  'message': "message_example", // String | 
  'type': new Caspianyes4TrackserviceApi.NotificationType(), // NotificationType | 
  'userPhone': "userPhone_example", // String | 
  'userName': "userName_example", // String | 
  'userEmail': "userEmail_example", // String | 
  'userId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "196cc88d-6fea-4b82-a298-d9199cca82ef" // String | CSRF Protection
};
apiInstance.yes4trackV1NotificationsGet(opts, (error, data, response) => {
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
 **message** | **String**|  | [optional] 
 **type** | [**NotificationType**](.md)|  | [optional] 
 **userPhone** | **String**|  | [optional] 
 **userName** | **String**|  | [optional] 
 **userEmail** | **String**|  | [optional] 
 **userId** | [**String**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 196cc88d-6fea-4b82-a298-d9199cca82ef]

### Return type

[**GetAllPagedNotificationResponse**](GetAllPagedNotificationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1NotificationsIdDelete"></a>
# **yes4trackV1NotificationsIdDelete**
> yes4trackV1NotificationsIdDelete(id, opts)

Delete Notification by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.NotificationApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Notification id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2df2b9d0-32fd-4f70-9682-10f1a50bdeb1" // String | CSRF Protection
};
apiInstance.yes4trackV1NotificationsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Notification id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2df2b9d0-32fd-4f70-9682-10f1a50bdeb1]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1NotificationsIdPatch"></a>
# **yes4trackV1NotificationsIdPatch**
> yes4trackV1NotificationsIdPatch(body, id, opts)

Update part of Notification

Sample request:                    PATCH /yes4track/v1/Notification/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.NotificationApi();
let body = [new Caspianyes4TrackserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Notification id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "557b5a34-d31d-47f4-bd86-fc095eb26081" // String | CSRF Protection
};
apiInstance.yes4trackV1NotificationsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Notification id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 557b5a34-d31d-47f4-bd86-fc095eb26081]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1NotificationsIdPut"></a>
# **yes4trackV1NotificationsIdPut**
> yes4trackV1NotificationsIdPut(id, opts)

Update Notification

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.NotificationApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Notification Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PutNotificationRequest(), // PutNotificationRequest | Notification to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "490dca90-b592-4c8c-a1f8-d932b4766e0d" // String | CSRF Protection
};
apiInstance.yes4trackV1NotificationsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Notification Id | 
 **body** | [**PutNotificationRequest**](PutNotificationRequest.md)| Notification to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 490dca90-b592-4c8c-a1f8-d932b4766e0d]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1NotificationsPost"></a>
# **yes4trackV1NotificationsPost**
> PostNotificationResponse yes4trackV1NotificationsPost(opts)

Create Notification

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.NotificationApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostNotificationRequest(), // PostNotificationRequest | Notification to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "9beb0cf7-1de0-42c6-aeac-77360f8d4325" // String | CSRF Protection
};
apiInstance.yes4trackV1NotificationsPost(opts, (error, data, response) => {
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
 **body** | [**PostNotificationRequest**](PostNotificationRequest.md)| Notification to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 9beb0cf7-1de0-42c6-aeac-77360f8d4325]

### Return type

[**PostNotificationResponse**](PostNotificationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

