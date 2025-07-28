> ⚠️ **Warning**  
> This repository contains two shell scripts: `generate_keys.sh` and `int_db.sh`.  
> Please review their contents before executing, as they can modify your system environment or database.


## Project setup

### Set configuration variables
First you need copy all from example.env to .env
```bash
$ cp example.env .env
```

Start docker
```bash
$ docker compose up
```

````markdown
# 📘 API Endpoints

## 🔐 User

### Register  
**POST** `/user/register`  
Creates a new user.  
**Body:**  
```json
{
  "email": "user@example.com",
  "password": "securePassword"
}
````

### Login

**POST** `/user/login`
Authenticates a user.
**Body:**

```json
{
  "email": "user@example.com",
  "password": "securePassword"
}
```

## 🌍 Country

### Get all countries

**GET** `/country`
Returns a list of all countries.

### Get country info

**GET** `/country/:countryCode`
Retrieves information about a country and its holidays.

## 📅 Holidays

### Add holidays to user calendar

**POST** `/users/:userId/calendar/holidays`
Adds holiday dates to the user's calendar.
**Params:**

* `userId` — User ID
  **Body (DTO):**

```json
{
  "countryCode": "UA",
  "year": 2025,
  "holidays": ["2025-01-01", "2025-03-08"]
}
```

```
```
