// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1315786796_2-20160408t210455z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:23:40.5472861Z\",\"lastBootTime\":\"2016-04-09T00:23:40.4312801Z\",\"allocationTime\":\"2016-04-08T21:04:55.9177225Z\",\"ipAddress\":\"100.73.198.28\",\"affinityId\":\"TVM:tvm-1315786796_2-20160408t210455z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:23:41.6849003Z\",\"endTime\":\"2016-04-09T00:23:41.8279031Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-1315786796_3-20160408t210455z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_3-20160408t210455z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:26:18.2121087Z\",\"lastBootTime\":\"2016-04-09T00:26:18.1165061Z\",\"allocationTime\":\"2016-04-08T21:04:55.9177225Z\",\"ipAddress\":\"100.73.212.50\",\"affinityId\":\"TVM:tvm-1315786796_3-20160408t210455z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:26:19.2171147Z\",\"endTime\":\"2016-04-09T00:26:19.4331162Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-1315786796_4-20160409t002314z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_4-20160409t002314z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:26:43.0210412Z\",\"lastBootTime\":\"2016-04-09T00:26:42.9224024Z\",\"allocationTime\":\"2016-04-09T00:23:14.0659841Z\",\"ipAddress\":\"100.73.174.26\",\"affinityId\":\"TVM:tvm-1315786796_4-20160409t002314z\",\"vmSize\":\"small\",\"totalTasksRun\":3,\"totalTasksSucceeded\":3,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplattask\",\"jobId\":\"xplatJobForFileTests\",\"taskId\":\"xplattask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-04-11T18:52:27.0034559Z\",\"endTime\":\"2016-04-11T18:52:27.1144402Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:26:44.162407Z\",\"endTime\":\"2016-04-09T00:26:44.370403Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '79f3a5bf-8790-4ddb-b6a4-51c287b0338f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '700c7abb-5b41-46ed-9705-27e78d451a3e',
  dataserviceversion: '3.0',
  date: 'Mon, 11 Apr 2016 18:52:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1315786796_2-20160408t210455z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:23:40.5472861Z\",\"lastBootTime\":\"2016-04-09T00:23:40.4312801Z\",\"allocationTime\":\"2016-04-08T21:04:55.9177225Z\",\"ipAddress\":\"100.73.198.28\",\"affinityId\":\"TVM:tvm-1315786796_2-20160408t210455z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:23:41.6849003Z\",\"endTime\":\"2016-04-09T00:23:41.8279031Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-1315786796_3-20160408t210455z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_3-20160408t210455z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:26:18.2121087Z\",\"lastBootTime\":\"2016-04-09T00:26:18.1165061Z\",\"allocationTime\":\"2016-04-08T21:04:55.9177225Z\",\"ipAddress\":\"100.73.212.50\",\"affinityId\":\"TVM:tvm-1315786796_3-20160408t210455z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:26:19.2171147Z\",\"endTime\":\"2016-04-09T00:26:19.4331162Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-1315786796_4-20160409t002314z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_4-20160409t002314z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:26:43.0210412Z\",\"lastBootTime\":\"2016-04-09T00:26:42.9224024Z\",\"allocationTime\":\"2016-04-09T00:23:14.0659841Z\",\"ipAddress\":\"100.73.174.26\",\"affinityId\":\"TVM:tvm-1315786796_4-20160409t002314z\",\"vmSize\":\"small\",\"totalTasksRun\":3,\"totalTasksSucceeded\":3,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplattask\",\"jobId\":\"xplatJobForFileTests\",\"taskId\":\"xplattask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-04-11T18:52:27.0034559Z\",\"endTime\":\"2016-04-11T18:52:27.1144402Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:26:44.162407Z\",\"endTime\":\"2016-04-09T00:26:44.370403Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '79f3a5bf-8790-4ddb-b6a4-51c287b0338f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '700c7abb-5b41-46ed-9705-27e78d451a3e',
  dataserviceversion: '3.0',
  date: 'Mon, 11 Apr 2016 18:52:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .head('/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files/startup%2Fstdout.txt?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "", { 'content-length': '6',
  'content-type': 'application/octet-stream',
  'last-modified': 'Sat, 09 Apr 2016 00:23:41 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0f666e7a-2ae4-48fa-b7b2-3329da205eb7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'd3004e49-6e81-4ad6-95f6-96981f3c75cf',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Sat, 09 Apr 2016 00:23:41 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fjstesteastus2.eastus2.batch.azure.com%2Fpools%2FxplatTestPool%2Fnodes%2Ftvm-1315786796_2-20160408t210455z%2Ffiles%2Fstartup%2Fstdout.txt',
  date: 'Mon, 11 Apr 2016 18:52:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .head('/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files/startup%2Fstdout.txt?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "", { 'content-length': '6',
  'content-type': 'application/octet-stream',
  'last-modified': 'Sat, 09 Apr 2016 00:23:41 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0f666e7a-2ae4-48fa-b7b2-3329da205eb7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'd3004e49-6e81-4ad6-95f6-96981f3c75cf',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Sat, 09 Apr 2016 00:23:41 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fjstesteastus2.eastus2.batch.azure.com%2Fpools%2FxplatTestPool%2Fnodes%2Ftvm-1315786796_2-20160408t210455z%2Ffiles%2Fstartup%2Fstdout.txt',
  date: 'Mon, 11 Apr 2016 18:52:30 GMT',
  connection: 'close' });
 return result; }]];