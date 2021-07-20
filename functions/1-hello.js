//domain/.netlify/functins/1-hello
exports.handler = async (event , context,cb) => {
 return {
  statusCode: 200,
  body: 'Hello World'
 }
}