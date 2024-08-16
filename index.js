// const SMTPServer = require("smtp-server").SMTPServer;
// const server = new SMTPServer({
//     allowInsecureAuth: true,
//     authOptional: true,
//     // console.log("hey this is server config"),
//     onConnect(session, cb){
//         console.log(`onConnect`, ${session.id})
//         cb() //Accept Connection
//         console.log("server is running on port 25")
//     },
//     onMailFrom(address, session, cb){
//         console.log(`onMailFrom`, address.address, session.id)
//         cb() 
//     },
//     //log recipient event
//     onRcptTo(address, session, cb){
//         console.log(`onRcptTo`, address.address, session.id)

//     },
//     onData(stream,session,cb) {
//         stream.on('data', (data) => console.log(`onData ${data.toString()}`))
//         stream.on('end', cb)
//     },
    
// });
// SMTPServer.listen(25, () => {
//     console.log('SMTP server listening on port 25');
//   });
require('dotenv').config();

const port = process.env.PORT || 25;
const SMTPServer = require("smtp-server").SMTPServer;

// Configure and create SMTP server instance
const server = new SMTPServer({
    // Allow insecure authentication (not recommended for production)
    allowInsecureAuth: true,

    // Allow authentication to be optional
    authOptional: true,

    // Optional: Display server configuration when starting
    // console.log("hey this is server config"),

    // Callback when a client connects
    onConnect(session, cb) {
        console.log(`Client connected: ${session.id}`);
        cb(); // Accept the connection
        console.log("welcome to your dns name")
    },

    // Callback when MAIL FROM command is received
    onMailFrom(address, session, cb) {
        console.log(`MAIL FROM: ${address.address, session.id}`);
        cb(); // Accept sender address
    },

    // Callback when RCPT TO command is received
    onRcptTo(address, session, cb) {
        console.log(`RCPT TO: ${address.address, session.id}`);
        cb(); // Accept recipient address
    },

    // Callback when message data is received
    onData(stream, session, cb) {
        console.log(`Receiving message data`);
        
        // Pipe the message stream to a buffer
        let messageBuffer = Buffer.alloc(0);
        stream.on('data', (chunk) => {
            messageBuffer = Buffer.concat([messageBuffer, chunk]);
        });

        // When stream ends, process the message
        stream.on('end', () => {
            console.log(`Received message:\n${messageBuffer.toString()}`);
            cb(); // Acknowledge end of data stream
        });
    },
});

// Start listening on port 25 (SMTP)
server.listen(port, () => {
    console.log(`SMTP server listening on port ${port}`);
});
