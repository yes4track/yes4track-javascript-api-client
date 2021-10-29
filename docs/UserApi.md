# Caspianyes4TrackserviceApi.UserApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdUser**](UserApi.md#getByIdUser) | **GET** /yes4track/v1/users/{id} | Get User by id
[**yes4trackV1UsersAccesstokenPost**](UserApi.md#yes4trackV1UsersAccesstokenPost) | **POST** /yes4track/v1/users/accesstoken | User SignIn
[**yes4trackV1UsersGet**](UserApi.md#yes4trackV1UsersGet) | **GET** /yes4track/v1/users | Get All User by filter with pagination
[**yes4trackV1UsersIdCompaniesCompanyIdDelete**](UserApi.md#yes4trackV1UsersIdCompaniesCompanyIdDelete) | **DELETE** /yes4track/v1/users/{id}/companies/{companyId} | Delete User Company
[**yes4trackV1UsersIdCompaniesCompanyIdPost**](UserApi.md#yes4trackV1UsersIdCompaniesCompanyIdPost) | **POST** /yes4track/v1/users/{id}/companies/{companyId} | Add User Company
[**yes4trackV1UsersIdDelete**](UserApi.md#yes4trackV1UsersIdDelete) | **DELETE** /yes4track/v1/users/{id} | Delete User by Id
[**yes4trackV1UsersIdLocationPut**](UserApi.md#yes4trackV1UsersIdLocationPut) | **PUT** /yes4track/v1/users/{id}/location | Update User Location
[**yes4trackV1UsersIdPatch**](UserApi.md#yes4trackV1UsersIdPatch) | **PATCH** /yes4track/v1/users/{id} | Update part of User
[**yes4trackV1UsersIdPhotoPut**](UserApi.md#yes4trackV1UsersIdPhotoPut) | **PUT** /yes4track/v1/users/{id}/photo | Update User Photo
[**yes4trackV1UsersIdPushtokenDelete**](UserApi.md#yes4trackV1UsersIdPushtokenDelete) | **DELETE** /yes4track/v1/users/{id}/pushtoken | Delete User Push Token
[**yes4trackV1UsersIdPushtokenGet**](UserApi.md#yes4trackV1UsersIdPushtokenGet) | **GET** /yes4track/v1/users/{id}/pushtoken | Get All User Push Token
[**yes4trackV1UsersIdPushtokenPost**](UserApi.md#yes4trackV1UsersIdPushtokenPost) | **POST** /yes4track/v1/users/{id}/pushtoken | Add User Push Token
[**yes4trackV1UsersIdPut**](UserApi.md#yes4trackV1UsersIdPut) | **PUT** /yes4track/v1/users/{id} | Update User
[**yes4trackV1UsersPost**](UserApi.md#yes4trackV1UsersPost) | **POST** /yes4track/v1/users | Add User
[**yes4trackV1UsersResendcodePost**](UserApi.md#yes4trackV1UsersResendcodePost) | **POST** /yes4track/v1/users/resendcode | Resend Code
[**yes4trackV1UsersSetupangelPost**](UserApi.md#yes4trackV1UsersSetupangelPost) | **POST** /yes4track/v1/users/setupangel | Setup User default Angel
[**yes4trackV1UsersSetupsponsorIdPost**](UserApi.md#yes4trackV1UsersSetupsponsorIdPost) | **POST** /yes4track/v1/users/setupsponsor/{id} | Setup User default Sponsor
[**yes4trackV1UsersSigninPost**](UserApi.md#yes4trackV1UsersSigninPost) | **POST** /yes4track/v1/users/signin | User SignIn
[**yes4trackV1UsersSignupPost**](UserApi.md#yes4trackV1UsersSignupPost) | **POST** /yes4track/v1/users/signup | User SignUp

<a name="getByIdUser"></a>
# **getByIdUser**
> GetAllUserResponse getByIdUser(id, opts)

Get User by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | User id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "365f6fc9-c5a9-4db3-9329-d77476ea0870" // String | CSRF Protection
};
apiInstance.getByIdUser(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| User id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 365f6fc9-c5a9-4db3-9329-d77476ea0870]

### Return type

[**GetAllUserResponse**](GetAllUserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1UsersAccesstokenPost"></a>
# **yes4trackV1UsersAccesstokenPost**
> PostUserAccessTokenResponse yes4trackV1UsersAccesstokenPost(opts)

User SignIn

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostUserAccessTokenRequest(), // PostUserAccessTokenRequest | User to SignIn
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "57811be6-718f-4192-b7f8-b55537d83030" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersAccesstokenPost(opts, (error, data, response) => {
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
 **body** | [**PostUserAccessTokenRequest**](PostUserAccessTokenRequest.md)| User to SignIn | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 57811be6-718f-4192-b7f8-b55537d83030]

### Return type

[**PostUserAccessTokenResponse**](PostUserAccessTokenResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1UsersGet"></a>
# **yes4trackV1UsersGet**
> GetAllPagedUserResponse yes4trackV1UsersGet(opts)

Get All User by filter with pagination

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let opts = { 
  'name': "name_example", // String | 
  'phone': "phone_example", // String | 
  'email': "email_example", // String | 
  'isActive': true, // Boolean | 
  'isAdmin': true, // Boolean | 
  'companyId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "937adadb-73ae-44d1-98c3-8f2614e56d26" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersGet(opts, (error, data, response) => {
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
 **phone** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **isActive** | **Boolean**|  | [optional] 
 **isAdmin** | **Boolean**|  | [optional] 
 **companyId** | [**String**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 937adadb-73ae-44d1-98c3-8f2614e56d26]

### Return type

[**GetAllPagedUserResponse**](GetAllPagedUserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1UsersIdCompaniesCompanyIdDelete"></a>
# **yes4trackV1UsersIdCompaniesCompanyIdDelete**
> yes4trackV1UsersIdCompaniesCompanyIdDelete(id, companyId, opts)

Delete User Company

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Id User
let companyId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Id Company
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f11ec7ff-f33a-4a4b-b1de-1612d2a9d625" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersIdCompaniesCompanyIdDelete(id, companyId, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Id User | 
 **companyId** | [**String**](.md)| Id Company | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f11ec7ff-f33a-4a4b-b1de-1612d2a9d625]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1UsersIdCompaniesCompanyIdPost"></a>
# **yes4trackV1UsersIdCompaniesCompanyIdPost**
> yes4trackV1UsersIdCompaniesCompanyIdPost(id, companyId, opts)

Add User Company

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Id User
let companyId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Id Company
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ca16f345-ab9d-4600-b38e-f8ba2f520f1b" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersIdCompaniesCompanyIdPost(id, companyId, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Id User | 
 **companyId** | [**String**](.md)| Id Company | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ca16f345-ab9d-4600-b38e-f8ba2f520f1b]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1UsersIdDelete"></a>
# **yes4trackV1UsersIdDelete**
> yes4trackV1UsersIdDelete(id, opts)

Delete User by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | User id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a15727cf-21aa-479b-bd5c-c0230fe530e2" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| User id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a15727cf-21aa-479b-bd5c-c0230fe530e2]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1UsersIdLocationPut"></a>
# **yes4trackV1UsersIdLocationPut**
> yes4trackV1UsersIdLocationPut(id, opts)

Update User Location

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | User Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PutUserLocationRequest(), // PutUserLocationRequest | GeoLocation and Date
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "7f96205d-29b6-4518-9c37-37637a962515" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersIdLocationPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| User Id | 
 **body** | [**PutUserLocationRequest**](PutUserLocationRequest.md)| GeoLocation and Date | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 7f96205d-29b6-4518-9c37-37637a962515]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1UsersIdPatch"></a>
# **yes4trackV1UsersIdPatch**
> yes4trackV1UsersIdPatch(body, id, opts)

Update part of User

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let body = [new Caspianyes4TrackserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | User id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "182b861b-7ac8-4ba0-b806-0296803427f5" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| User id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 182b861b-7ac8-4ba0-b806-0296803427f5]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1UsersIdPhotoPut"></a>
# **yes4trackV1UsersIdPhotoPut**
> yes4trackV1UsersIdPhotoPut(id, opts)

Update User Photo

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | User Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.ProfilePhotoRequest(), // ProfilePhotoRequest | User to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "32752ced-1748-4c02-93c8-736c901d7e45" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersIdPhotoPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| User Id | 
 **body** | [**ProfilePhotoRequest**](ProfilePhotoRequest.md)| User to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 32752ced-1748-4c02-93c8-736c901d7e45]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1UsersIdPushtokenDelete"></a>
# **yes4trackV1UsersIdPushtokenDelete**
> yes4trackV1UsersIdPushtokenDelete(id, opts)

Delete User Push Token

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Id User
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "20aa1cac-3056-49ae-b2b4-15938cb17dbf" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersIdPushtokenDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Id User | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 20aa1cac-3056-49ae-b2b4-15938cb17dbf]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1UsersIdPushtokenGet"></a>
# **yes4trackV1UsersIdPushtokenGet**
> GetAllUserPushTokenResponse yes4trackV1UsersIdPushtokenGet(id, opts)

Get All User Push Token

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | User Id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "80870e6c-782c-4aa7-a7b6-34087c7c2ed3" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersIdPushtokenGet(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| User Id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 80870e6c-782c-4aa7-a7b6-34087c7c2ed3]

### Return type

[**GetAllUserPushTokenResponse**](GetAllUserPushTokenResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1UsersIdPushtokenPost"></a>
# **yes4trackV1UsersIdPushtokenPost**
> yes4trackV1UsersIdPushtokenPost(id, opts)

Add User Push Token

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Id User
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostUserPushTokenRequest(), // PostUserPushTokenRequest | FCM Token
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "56d0043a-730a-41ac-85df-a832f911b483" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersIdPushtokenPost(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Id User | 
 **body** | [**PostUserPushTokenRequest**](PostUserPushTokenRequest.md)| FCM Token | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 56d0043a-730a-41ac-85df-a832f911b483]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1UsersIdPut"></a>
# **yes4trackV1UsersIdPut**
> yes4trackV1UsersIdPut(id, opts)

Update User

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | User Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PutUserRequest(), // PutUserRequest | User to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c208bd00-e4c3-4550-a5e3-5c094c9c51a9" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| User Id | 
 **body** | [**PutUserRequest**](PutUserRequest.md)| User to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c208bd00-e4c3-4550-a5e3-5c094c9c51a9]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1UsersPost"></a>
# **yes4trackV1UsersPost**
> PostUserResponse yes4trackV1UsersPost(opts)

Add User

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostUserRequest(), // PostUserRequest | User to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8c0dda83-1ad0-4208-b9fb-0ca7e398bda4" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersPost(opts, (error, data, response) => {
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
 **body** | [**PostUserRequest**](PostUserRequest.md)| User to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8c0dda83-1ad0-4208-b9fb-0ca7e398bda4]

### Return type

[**PostUserResponse**](PostUserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1UsersResendcodePost"></a>
# **yes4trackV1UsersResendcodePost**
> yes4trackV1UsersResendcodePost(opts)

Resend Code

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostPostUserResendCodeRequest(), // PostPostUserResendCodeRequest | Phone and Hash
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "15122b03-2374-47e6-9095-fae2d9f221da" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersResendcodePost(opts, (error, data, response) => {
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
 **body** | [**PostPostUserResendCodeRequest**](PostPostUserResendCodeRequest.md)| Phone and Hash | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 15122b03-2374-47e6-9095-fae2d9f221da]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1UsersSetupangelPost"></a>
# **yes4trackV1UsersSetupangelPost**
> yes4trackV1UsersSetupangelPost(opts)

Setup User default Angel

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostUserSetupAngelRequest(), // PostUserSetupAngelRequest | Angel to Setup
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "e17274bb-16ed-4fd7-ae4b-1bb50eecea70" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersSetupangelPost(opts, (error, data, response) => {
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
 **body** | [**PostUserSetupAngelRequest**](PostUserSetupAngelRequest.md)| Angel to Setup | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to e17274bb-16ed-4fd7-ae4b-1bb50eecea70]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1UsersSetupsponsorIdPost"></a>
# **yes4trackV1UsersSetupsponsorIdPost**
> yes4trackV1UsersSetupsponsorIdPost(id, opts)

Setup User default Sponsor

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Sponsor Id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "5a355b6a-a319-49ae-8cc7-703c827acb6e" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersSetupsponsorIdPost(id, opts, (error, data, response) => {
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
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 5a355b6a-a319-49ae-8cc7-703c827acb6e]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1UsersSigninPost"></a>
# **yes4trackV1UsersSigninPost**
> PostUserSignInResponse yes4trackV1UsersSigninPost(opts)

User SignIn

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostUserSignInRequest(), // PostUserSignInRequest | User to SignIn
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ca6d1e58-eed2-4c97-ad1f-a7273881b3f7" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersSigninPost(opts, (error, data, response) => {
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
 **body** | [**PostUserSignInRequest**](PostUserSignInRequest.md)| User to SignIn | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ca6d1e58-eed2-4c97-ad1f-a7273881b3f7]

### Return type

[**PostUserSignInResponse**](PostUserSignInResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1UsersSignupPost"></a>
# **yes4trackV1UsersSignupPost**
> PostUserResponse yes4trackV1UsersSignupPost(opts)

User SignUp

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.UserApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostUserRequest(), // PostUserRequest | User to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ace13dc2-aec2-480f-9141-f30152453032" // String | CSRF Protection
};
apiInstance.yes4trackV1UsersSignupPost(opts, (error, data, response) => {
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
 **body** | [**PostUserRequest**](PostUserRequest.md)| User to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ace13dc2-aec2-480f-9141-f30152453032]

### Return type

[**PostUserResponse**](PostUserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

