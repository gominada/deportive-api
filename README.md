# Deportive Events API docs

This are the instructions for using the API

## Endpoints

**Endpoint** `/events`

- **Method** `GET`
- **Parameters**:
    - `type` optional - String, the type of event.

#### Response

A list containing event objects

----

**Endpoint:** `/events/date`

- **Method** `GET`
- **Parameters**:
  - `from` <span style="color: lightcoral">required</span> - Date, the starting date in the 'YYYY-MM-DD' format.
  - `to` <span style="color: lightcoral">required</span> - Date, the end date in the 'YYYY-MM-DD' format.

#### Response

A list containing event objects in the specified range

---

**Endpoint:** `/events/upcoming`

- **Method** `GET`

#### Response

A list containing event objects sorted by date

---

**Endpoint:** `/events/<id>`

- **Method** `GET`

#### Response

The event with the corresponding id, if it exists.

---

**Endpoint:** `/events/`

- **Method** `POST`
- **Headers** 
  - Content-type: application/json
  - Authorization: `auth-token`
- **Body**
   - `name` <span style="color: lightcoral">required</span> - String, the name of the event.
   - `description` <span style="color: lightcoral">required</span> - Sttring, a description of the event.
   - `date` <span style="color: lightcoral">required</span> - Date, in the format 'YYYY-MM-DDD'.
   - `location` <span style="color: lightcoral">required</span> - String, the location of the event.
   - `sportType` <span style="color: lightcoral">required</span> - String, the type of the event.
   - `organizer` <span style="color: lightcoral">required</span> - String, the name of the organizer.

#### Response

The added event object.

---

**Endpoint:** `/events/<id>`

- **Method** `PUT`
- **Headers** 
  - Content-type: application/json
  - Authorization: `auth-token`
- **Body**
   - `name` optinal - String, the name of the event.
   - `description` optinal - Sttring, a description of the event.
   - `date` optinal - Date, in the format 'YYYY-MM-DDD'.
   - `location` optinal - String, the location of the event.
   - `sportType` optinal - String, the type of the event.
   - `organizer` optinal - String, the name of the organizer.


The modified event object.

---

**Endpoint:** `/events/<id>`

- **Method** `GET`
- **Headers**
   - Authorization: `auth-token`

#### Response

The deleted event, if it exists.

---

**Endpoint:** `/users/register`

- **Method** `POST`
- **Headers**
    - Content-type: application/json
- **Body**
   - `username` <span style="color: lightcoral">required</span> - String, the username 
   - `password` <span style="color: lightcoral">required</span> - String, the password

#### Response

The user object that has been registered.

----

**Endpoint:** `/users/login`

- **Method** `POST`
- **Headers**
    - Content-type: application/json
- **Body**
   - `username` <span style="color: lightcoral">required</span> - String, the username 
   - `password` <span style="color: lightcoral">required</span> - String, the password

#### Response

An object with the message correct login and the authorization token.

----

**Endpoint:** `/users/profile`

- **Method** `GET`
- **Headers**
    - Authorization: `auth-token`

#### Response

An user object which identity corresponds to the authorization token.
