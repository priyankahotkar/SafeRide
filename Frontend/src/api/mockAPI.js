const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const mockDrivers = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 4.8,
    totalRides: 1247,
    vehicleType: 'auto',
    vehicleNumber: 'DL-1234',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    location: { lat: 28.6139, lng: 77.2090 },
    isAvailable: true
  },
  {
    id: 2,
    name: 'Anjali Reddy',
    rating: 4.9,
    totalRides: 2103,
    vehicleType: 'cab',
    vehicleNumber: 'KA-5678',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    location: { lat: 28.6219, lng: 77.2190 },
    isAvailable: true
  },
  {
    id: 3,
    name: 'Meera Patel',
    rating: 4.7,
    totalRides: 892,
    vehicleType: 'scooty',
    vehicleNumber: 'GJ-9012',
    photo: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    location: { lat: 28.6339, lng: 77.1890 },
    isAvailable: true
  }
];

const mockRides = [];

export const mockAPI = {
  async getNearbyDrivers(location, vehicleType) {
    await delay(800);

    return {
      success: true,
      data: mockDrivers.filter(
        driver => driver.isAvailable &&
        (!vehicleType || driver.vehicleType === vehicleType)
      )
    };
  },

  async bookRide(bookingData) {
    await delay(1200);

    const driver = mockDrivers.find(d => d.vehicleType === bookingData.vehicleType && d.isAvailable);

    if (!driver) {
      return {
        success: false,
        error: 'No drivers available at the moment'
      };
    }

    const distance = Math.floor(Math.random() * 15) + 5;
    const baseFares = { scooty: 8, auto: 12, cab: 15 };
    const fare = distance * baseFares[bookingData.vehicleType];
    const discount = bookingData.rideType === 'shared' ? 0.6 : 1;

    const ride = {
      id: `RIDE${Date.now()}`,
      driver,
      pickup: bookingData.pickup,
      dropoff: bookingData.dropoff,
      vehicleType: bookingData.vehicleType,
      rideType: bookingData.rideType,
      distance,
      fare: Math.round(fare * discount),
      status: 'confirmed',
      eta: Math.floor(Math.random() * 10) + 5,
      createdAt: new Date().toISOString()
    };

    mockRides.push(ride);

    return {
      success: true,
      data: ride
    };
  },

  async getRideStatus(rideId) {
    await delay(500);

    const ride = mockRides.find(r => r.id === rideId);

    if (!ride) {
      return {
        success: false,
        error: 'Ride not found'
      };
    }

    return {
      success: true,
      data: ride
    };
  },

  async calculateFare(pickup, dropoff, vehicleType, rideType) {
    await delay(600);

    const distance = Math.floor(Math.random() * 15) + 5;
    const baseFares = { scooty: 8, auto: 12, cab: 15 };
    const baseFare = distance * baseFares[vehicleType];
    const discount = rideType === 'shared' ? 0.6 : 1;

    return {
      success: true,
      data: {
        distance,
        baseFare,
        finalFare: Math.round(baseFare * discount),
        savings: rideType === 'shared' ? Math.round(baseFare * 0.4) : 0,
        breakdown: {
          distanceCharge: baseFare,
          platformFee: 10,
          taxes: Math.round(baseFare * 0.05),
          discount: rideType === 'shared' ? Math.round(baseFare * 0.4) : 0
        }
      }
    };
  },

  async emergencySOS(rideId, location) {
    await delay(300);

    return {
      success: true,
      data: {
        alertId: `ALERT${Date.now()}`,
        status: 'Emergency alert sent',
        notified: [
          'Emergency Contacts',
          'Nearest Police Station',
          '24/7 Safety Team'
        ],
        location,
        timestamp: new Date().toISOString()
      }
    };
  },

  async rateDriver(rideId, rating, feedback) {
    await delay(700);

    return {
      success: true,
      data: {
        message: 'Thank you for your feedback!',
        rating
      }
    };
  },

  async getPartnerStores(location, radius = 5) {
    await delay(600);

    return {
      success: true,
      data: [
        {
          id: 1,
          name: 'RetailHub Downtown',
          type: 'Retail Chain',
          address: '123 Main Street, Mumbai',
          distance: 1.2,
          offers: ['10% off on all rides', 'Free charging station']
        },
        {
          id: 2,
          name: 'TechMart Electronics',
          type: 'Electronics',
          address: '456 Tech Park, Bangalore',
          distance: 2.5,
          offers: ['Safety kit giveaway', 'Premium waiting area']
        },
        {
          id: 3,
          name: 'Fashion Plaza',
          type: 'Shopping',
          address: '789 Fashion Street, Delhi',
          distance: 3.1,
          offers: ['Exclusive discounts', 'Dedicated parking']
        }
      ]
    };
  },

  async applyForDriver(applicationData) {
    await delay(1500);

    return {
      success: true,
      data: {
        applicationId: `APP${Date.now()}`,
        status: 'Under Review',
        message: 'Thank you for applying! We will review your application and contact you within 48 hours.',
        nextSteps: [
          'Document verification',
          'Background check',
          'Safety training',
          'Vehicle inspection'
        ]
      }
    };
  },

  async getWalletBalance(userId) {
    await delay(400);

    return {
      success: true,
      data: {
        balance: 1250.50,
        currency: 'INR',
        pendingRefunds: [
          {
            amount: 45,
            reason: 'Shared ride refund',
            expectedDate: '2024-02-10'
          }
        ],
        recentTransactions: [
          { type: 'ride', amount: -125, date: '2024-02-08' },
          { type: 'refund', amount: 50, date: '2024-02-07' },
          { type: 'top-up', amount: 500, date: '2024-02-05' }
        ]
      }
    };
  }
};

export default mockAPI;
