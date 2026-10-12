import { Payroll } from "../models/Payroll.js";

const payrollController = {

    insert: async (req, res) => {
        try {
            const payroll = await Payroll.create(req.body);

            res.status(201).json({
                success: true,
                message: "Payroll inserted successfully",
                data: payroll
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
            const payrolls = await Payroll.findAll();

            res.json({
                success: true,
                data: payrolls
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
            const payroll = await Payroll.findByPk(req.params.id);

            if (!payroll) {
                return res.status(404).json({
                    success: false,
                    message: "Payroll not found"
                });
            }

            res.json({
                success: true,
                data: payroll
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
            const payroll = await Payroll.findByPk(req.params.id);

            if (!payroll) {
                return res.status(404).json({
                    success: false,
                    message: "Payroll not found"
                });
            }

            await payroll.update(req.body);

            res.json({
                success: true,
                message: "Payroll updated successfully",
                data: payroll
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
            const payroll = await Payroll.findByPk(req.params.id);

            if (!payroll) {
                return res.status(404).json({
                    success: false,
                    message: "Payroll not found"
                });
            }

            await payroll.destroy();

            res.json({
                success: true,
                message: "Payroll deleted successfully"
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

};

export { payrollController };