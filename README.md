# Booking_flight-API
A Locally hosted flight booking API

The Flight booking API is a REST API capable of performing all CRUD actions(Create Flight, Read Flight, Update Flight, Delete Flight).

## Create Flght 
To create flight send POST request body in json format to 
```localhost:3000/api/v1/flight```
Id is automatically generated
expected response

```
{
    "status": "success✈️",
    "message": "successfully created flight",
    "data": {
        "newflight": {
            request body
        }
    }
}  
```


#Read Flight
To read all flight data, send GET request to ```localhost:3000/api/v1/flight```
To read a particular flight send GET request to ``` localhost:3000/api/v1/flight/$id ```

#Update Flight 
To update Flight send PATCH request to ```localhost:3000/api/v1/flight/$id```

#Delete Flight 
To delete flight, send DELETE request to ```localhost:3000/api/v1/flight/$id```
