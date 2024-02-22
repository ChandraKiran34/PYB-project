import express from 'express';
import { registerHotel, loginHotel } from '../controllers/hotelController.js';

const router = express.Router();

// Route to register a new hotel
router.post('/register', registerHotel);

// Route to login a hotel
router.post('/login', loginHotel);

router.use(verifyToken);


// Get hotel details by ID (dashboard)
router.get('/:hotelId/dashboard', getHotelDetails);

// Update hotel details by ID
router.put('/:hotelId/update', updateHotelDetailsById);

// Get booking details by hotel ID
router.get('/:hotelId/bookings', getBookingDetailsByHotelId);

export  default router ;
