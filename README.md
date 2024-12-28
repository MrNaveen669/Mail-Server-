
# Project Overview: Simple Mail Server

This project demonstrates the creation of a simple mail server using Node.js, the SMTP protocol, and AWS EC2. The mail server can send emails to recipients with the ability to configure sender details, email content, and recipients dynamically. It is ideal for learning how to work with email protocols and server setup in a cloud environment.

# Technologies Used:
Node.js: For setting up the server and handling email-sending logic.
SMTP (Simple Mail Transfer Protocol): For sending emails.
AWS EC2: For deploying and hosting the mail server on a cloud platform.
# Features:
Send Emails:

Users can send emails by providing recipient addresses, subject lines, and message content.
Configurable Sender Settings:

The server allows configuration of sender email addresses and SMTP credentials for secure communication.
Error Handling:

Handles common email delivery issues, such as invalid addresses or network errors, with appropriate error messages.
Logging:

Logs email delivery status (success or failure) for easy debugging.
File Descriptions:
server.js:
Contains the Node.js script for creating the mail server, configuring the SMTP client, and defining routes for sending emails.

config.json:
Contains configurable parameters such as SMTP credentials, server port, and default sender email address.

README.md:
A markdown file with documentation on how to set up and use the mail server.

# How to Run the Project:
1. Prerequisites:
Install Node.js on your local machine or AWS EC2 instance.
Have access to an SMTP server (e.g., Gmail, SendGrid, or custom SMTP settings).
Set up an AWS EC2 instance with a public IP address.
2. Steps:
Clone the Project:
Download or clone the project files into your EC2 instance:

bash
Copy code
git clone https://github.com/your-repo/mail-server.git
cd mail-server
Install Dependencies:
Run the following command to install the required Node.js modules:

bash
Copy code
npm install
Configure SMTP Settings:
Update the config.json file with your SMTP server credentials (e.g., username, password, and SMTP server address).

Start the Server:
Launch the server by running:

bash
Copy code
node server.js
The server will listen on a specified port (default: 3000).

Access the Mail Server:
Use a REST client (e.g., Postman) or curl to send POST requests to the server's /send endpoint with the following JSON payload:

json
Copy code
{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "text": "This is a test email from the Node.js mail server."
}
Verify Email Delivery:
Check the recipient's inbox to confirm the email was delivered.

Key Dependencies:
Nodemailer: For sending emails via the SMTP protocol.
Express: For setting up the HTTP server to receive email-sending requests.
