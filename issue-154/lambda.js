let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.update({
		TableName: 'testHiru',
		Key: { 'ID': '001' },
		ExpressionAttributeNames: { '#sample': 'ID' },
		ExpressionAttributeValues: { ':test': '001' },
		UpdateExpression: 'set #sample = :test',
		ConditionExpression: '#sample = :test',
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});


	callback(null, 'Successfully executed');
}