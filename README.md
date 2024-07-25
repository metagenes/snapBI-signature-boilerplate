## SNAP BI signature auth and signature service api

``npm install``

``create .env with provided credentials``

``npm run dev``

### ENDPOINTS

``/signature-auth``

curl --location 'localhost:3001/signature-auth'

``/signature-service``

curl --location 'localhost:3001/signature-service' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'Timestamp={{timestamp}}' \
--data-urlencode 'AccessToken={{token from source access token}}' \
--data-urlencode 'HttpMethod={{method service}}' \
--data-urlencode 'EndpointUrl={{endpoint service}}' \
--data-urlencode 'Body={{body service}}'