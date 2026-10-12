import { Reservation } from "../models/Reservation.js";

const reservationController = {

    insert: async (req, res) => {
        try {
            const reservation = await Reservation.create(req.body);

            res.status(201).json({
                success: true,
                message: "Reservation inserted successfully",
                data: reservation
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    selectAll: async (req, res) => {
        try {
            const reservations = await Reservation.findAll();

            res.json({
                success: true,
                data: reservations
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    selectById: async (req, res) => {
        try {
            const reservation = await Reservation.findByPk(req.params.id);

            if (!reservation) {
                return res.status(404).json({
                    success: false,
                    message: "Reservation not found"
                });
            }

            res.json({
                success: true,
                data: reservation
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    update: async (req, res) => {
        try {
            const reservation = await Reservation.findByPk(req.params.id);

            if (!reservation) {
                return res.status(404).json({
                    success: false,
                    message: "Reservation not found"
                });
            }

            await reservation.update(req.body);

            res.json({
                success: true,
                message: "Reservation updated successfully",
                data: reservation
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    delete: async (req, res) => {
        try {
            const reservation = await Reservation.findByPk(req.params.id);

            if (!reservation) {
                return res.status(404).json({
                    success: false,
                    message: "Reservation not found"
                });
            }

            await reservation.destroy();

            res.json({
                success: true,
                message: "Reservation deleted successfully"
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

};

export { reservationController };