<h1 align="center">📬 Simple Mail Server using Node.js + SMTP + AWS EC2</h1>

<p align="center">
  <em>Send Emails from Your Own Server Using Node.js, SMTP, and AWS EC2</em><br />
  🔐 Secure · ⚙️ Configurable · ☁️ Cloud Deployed
</p>

---

## ✨ Project Overview

This project demonstrates how to create a simple and configurable **mail server** using **Node.js**, **SMTP**, and **AWS EC2**.  
It allows sending custom emails to specified recipients with configurable sender details — perfect for learning about cloud deployments and email protocols.

---

## 🚀 Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | Core server and email-sending logic |
| **SMTP** | Email transport protocol |
| **AWS EC2** | Hosting the server on the cloud |
| **Nodemailer** | SMTP client to send emails |
| **Express.js** | HTTP server for API endpoints |

---

## 💡 Features

- ✅ **Send Emails** – Easily send emails by providing recipients, subject, and message
- ⚙️ **Configurable SMTP Settings** – Manage credentials, ports, and sender info via `config.json`
- ❌ **Error Handling** – Informs users about invalid inputs, network issues, or SMTP errors
- 📝 **Logging** – Logs every delivery attempt with success/failure info

---

## 📁 File Structure

| File         | Description |
|--------------|-------------|
| `server.js`  | Node.js server setup, routes, and SMTP configuration |
| `config.json`| Contains SMTP credentials and default server settings |
| `README.md`  | Project setup and usage guide |

---

## 🛠️ How to Run the Project

### 1. Prerequisites

- ✅ Node.js installed (on local machine or AWS EC2)
- 📧 Access to SMTP credentials (Gmail, SendGrid, or custom)
- ☁️ AWS EC2 instance with public IP

---

### 2. Steps to Setup

#### 📦 Clone the Repository
```bash
git clone https://github.com/your-repo/mail-server.git
cd mail-server
