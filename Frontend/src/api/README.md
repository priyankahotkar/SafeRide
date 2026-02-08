# Mock API Documentation

This folder contains mock API functions for the SafeRide platform. These are placeholder functions that simulate backend API calls with realistic delays and responses.

## Available API Functions

### Driver Operations

#### `getNearbyDrivers(location, vehicleType)`
Fetches available drivers near a given location.

**Parameters:**
- `location` (object): { lat, lng }
- `vehicleType` (string): 'scooty' | 'auto' | 'cab'

**Returns:**
```javascript
{
  success: true,
  data: [Driver objects]
}
```

### Booking Operations

#### `bookRide(bookingData)`
Creates a new ride booking.

**Parameters:**
```javascript
{
  pickup: string,
  dropoff: string,
  vehicleType: string,
  rideType: 'solo' | 'shared'
}
```

**Returns:**
```javascript
{
  success: true,
  data: {
    id: string,
    driver: Driver object,
    fare: number,
    eta: number,
    ...
  }
}
```

#### `getRideStatus(rideId)`
Gets current status of a ride.

#### `calculateFare(pickup, dropoff, vehicleType, rideType)`
Calculates estimated fare for a route.

**Returns:**
```javascript
{
  success: true,
  data: {
    distance: number,
    baseFare: number,
    finalFare: number,
    savings: number,
    breakdown: object
  }
}
```

### Safety Operations

#### `emergencySOS(rideId, location)`
Triggers emergency alert system.

**Returns:**
```javascript
{
  success: true,
  data: {
    alertId: string,
    status: string,
    notified: array,
    timestamp: string
  }
}
```

### Rating & Feedback

#### `rateDriver(rideId, rating, feedback)`
Submit driver rating and feedback.

### Partner Operations

#### `getPartnerStores(location, radius)`
Get nearby partner retail stores.

**Returns:**
```javascript
{
  success: true,
  data: [Store objects with offers]
}
```

### Driver Application

#### `applyForDriver(applicationData)`
Submit application to become a driver.

**Returns:**
```javascript
{
  success: true,
  data: {
    applicationId: string,
    status: string,
    nextSteps: array
  }
}
```

### Wallet Operations

#### `getWalletBalance(userId)`
Get user's wallet balance and transaction history.

**Returns:**
```javascript
{
  success: true,
  data: {
    balance: number,
    pendingRefunds: array,
    recentTransactions: array
  }
}
```

## Usage Example

```javascript
import mockAPI from './api/mockAPI';

async function bookMyRide() {
  const bookingData = {
    pickup: 'Connaught Place, Delhi',
    dropoff: 'India Gate, Delhi',
    vehicleType: 'auto',
    rideType: 'solo'
  };

  const response = await mockAPI.bookRide(bookingData);

  if (response.success) {
    console.log('Ride booked!', response.data);
  }
}
```

## Note

Replace these mock APIs with actual backend endpoints when integrating with your server.
