# API Spec — {{Endpoint Name}}

- **Service:** {{Service/Module Name}}
- **Endpoint:** `{{HTTP Method}} {{/path/:param}}`
- **OpenSpec Version:** {{e.g., 1.0.0}}
- **Owner:** {{Team/Person}}
- **Status:** {{Draft | In Review | Approved}}
- **Auth:** {{Firebase Auth | API Key | None}}
- **Rate Limits:** {{e.g., 100 req/min per user}}

## Summary
- **Purpose:** {{What this endpoint does}}
- **Consumers:** {{Web app, mobile, other services}}
- **Idempotency:** {{Strategy, e.g., Idempotency-Key header}}

## Request
- **Path Params:**
  - `{{param}}` (type: {{string/number}}) — {{description}}
- **Query Params:**
  - `{{param}}` (type: {{string}}, optional) — {{description}}
- **Headers:**
  - `Authorization: Bearer <token>` — {{auth details}}
  - `Content-Type: application/json`
  - `Idempotency-Key: {{UUID}}` — {{when required}}
- **Request Body (application/json):**
  ```json
  {
    "example": "{{value}}",
    "optionalField": "{{value}}"
  }
  ```
  - **Schema:** {{Link to shared schema or inline definition}}

## Responses
- **200 OK**
  - **Description:** {{Happy path}}
  - **Body:**
    ```json
    {
      "data": {
        "id": "{{string}}",
        "attributes": {{...}}
      },
      "meta": {
        "requestId": "{{uuid}}",
        "timestamp": "{{ISO8601}}"
      }
    }
    ```
- **4xx Client Errors**
  - 400 Bad Request — {{validation issues}}
  - 401 Unauthorized — {{auth failed}}
  - 403 Forbidden — {{permission}}
  - 404 Not Found — {{resource missing}}
- **5xx Server Errors**
  - 500 Internal Server Error — {{unexpected error}}

## Error Object (standardized)
```json
{
  "error": {
    "code": "{{APP_ERROR_CODE}}",
    "message": "{{Human readable}}",
    "details": {{...}},
    "requestId": "{{uuid}}"
  }
}
```

## Validation Rules
- {{Field-level constraints, length, formats, required/optional}}

## Side Effects
- {{Writes to Firestore collections, events emitted, caches invalidated}}

## Observability
- **Logs:** {{Structured fields}}
- **Metrics:** {{Latency, error rate}}
- **Tracing:** {{Trace attributes, span names}}

## Examples
- **Curl:**
  ```bash
  curl -X {{METHOD}} "{{BASE_URL}}/path" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"example": "value"}'
  ```
- **Success Response:** {{JSON}}
- **Error Response:** {{JSON}}

## Change Log
- {{Date — change summary — author}}
