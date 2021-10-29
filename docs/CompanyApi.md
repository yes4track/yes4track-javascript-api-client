# Caspianyes4TrackserviceApi.CompanyApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdCompany**](CompanyApi.md#getByIdCompany) | **GET** /yes4track/v1/companies/{id} | Get Company by id
[**yes4trackV1CompaniesGet**](CompanyApi.md#yes4trackV1CompaniesGet) | **GET** /yes4track/v1/companies | Get All Company by filter with pagination
[**yes4trackV1CompaniesIdDelete**](CompanyApi.md#yes4trackV1CompaniesIdDelete) | **DELETE** /yes4track/v1/companies/{id} | Delete Company by Id
[**yes4trackV1CompaniesIdPatch**](CompanyApi.md#yes4trackV1CompaniesIdPatch) | **PATCH** /yes4track/v1/companies/{id} | Update part of Company
[**yes4trackV1CompaniesIdPut**](CompanyApi.md#yes4trackV1CompaniesIdPut) | **PUT** /yes4track/v1/companies/{id} | Update Company
[**yes4trackV1CompaniesPost**](CompanyApi.md#yes4trackV1CompaniesPost) | **POST** /yes4track/v1/companies | Create Company

<a name="getByIdCompany"></a>
# **getByIdCompany**
> GetAllCompanyResponse getByIdCompany(id, opts)

Get Company by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.CompanyApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Company id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "e93bf3f4-d7b7-4a9b-8a2c-0226aa1e0b70" // String | CSRF Protection
};
apiInstance.getByIdCompany(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Company id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to e93bf3f4-d7b7-4a9b-8a2c-0226aa1e0b70]

### Return type

[**GetAllCompanyResponse**](GetAllCompanyResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1CompaniesGet"></a>
# **yes4trackV1CompaniesGet**
> GetAllPagedCompanyResponse yes4trackV1CompaniesGet(opts)

Get All Company by filter with pagination

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.CompanyApi();
let opts = { 
  'legalName': "legalName_example", // String | 
  'fantasyName': "fantasyName_example", // String | 
  'registrationNumber': "registrationNumber_example", // String | 
  'contactEmail': "contactEmail_example", // String | 
  'contactPhone': "contactPhone_example", // String | 
  'companies': "companies_example", // String | 
  'type': new Caspianyes4TrackserviceApi.CompanyType(), // CompanyType | 
  'registrationType': new Caspianyes4TrackserviceApi.RegistrationType(), // RegistrationType | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "bc5068f0-7c80-4fb9-8eff-d365aa80de45" // String | CSRF Protection
};
apiInstance.yes4trackV1CompaniesGet(opts, (error, data, response) => {
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
 **legalName** | **String**|  | [optional] 
 **fantasyName** | **String**|  | [optional] 
 **registrationNumber** | **String**|  | [optional] 
 **contactEmail** | **String**|  | [optional] 
 **contactPhone** | **String**|  | [optional] 
 **companies** | **String**|  | [optional] 
 **type** | [**CompanyType**](.md)|  | [optional] 
 **registrationType** | [**RegistrationType**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to bc5068f0-7c80-4fb9-8eff-d365aa80de45]

### Return type

[**GetAllPagedCompanyResponse**](GetAllPagedCompanyResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1CompaniesIdDelete"></a>
# **yes4trackV1CompaniesIdDelete**
> yes4trackV1CompaniesIdDelete(id, opts)

Delete Company by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.CompanyApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Company id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c3d01bef-1005-4d20-8e8e-87471ac81393" // String | CSRF Protection
};
apiInstance.yes4trackV1CompaniesIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Company id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c3d01bef-1005-4d20-8e8e-87471ac81393]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1CompaniesIdPatch"></a>
# **yes4trackV1CompaniesIdPatch**
> yes4trackV1CompaniesIdPatch(body, id, opts)

Update part of Company

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.CompanyApi();
let body = [new Caspianyes4TrackserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Company id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "dd5281c9-ff22-4f84-b806-07c366a9c337" // String | CSRF Protection
};
apiInstance.yes4trackV1CompaniesIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Company id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to dd5281c9-ff22-4f84-b806-07c366a9c337]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1CompaniesIdPut"></a>
# **yes4trackV1CompaniesIdPut**
> yes4trackV1CompaniesIdPut(id, opts)

Update Company

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.CompanyApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Company Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PutCompanyRequest(), // PutCompanyRequest | Company to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "5b37b309-1b34-48ff-8b64-d39a17591910" // String | CSRF Protection
};
apiInstance.yes4trackV1CompaniesIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Company Id | 
 **body** | [**PutCompanyRequest**](PutCompanyRequest.md)| Company to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 5b37b309-1b34-48ff-8b64-d39a17591910]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1CompaniesPost"></a>
# **yes4trackV1CompaniesPost**
> PostCompanyResponse yes4trackV1CompaniesPost(opts)

Create Company

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.CompanyApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostCompanyRequest(), // PostCompanyRequest | Company to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "6cfd369e-530d-4701-a1c0-09e067e7b7a4" // String | CSRF Protection
};
apiInstance.yes4trackV1CompaniesPost(opts, (error, data, response) => {
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
 **body** | [**PostCompanyRequest**](PostCompanyRequest.md)| Company to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 6cfd369e-530d-4701-a1c0-09e067e7b7a4]

### Return type

[**PostCompanyResponse**](PostCompanyResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

