let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {


	ddb.put({
		TableName: 'Hiru_DB',
		Item: { 'ID': '001' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});
	sqs.sendMessage({
		MessageBody: 'your message body should be assigned here test',
		QueueUrl: 'https://sqs.ap-southeast-1.amazonaws.com/263248768798/test',
		DelaySeconds: '0',
		MessageAttributes: {
			"undefined": {
				"DataType": "undefined",
				"BinaryValue": "undefined"
			}
		}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
	});




	callback(null, 'Successfully executed');
}