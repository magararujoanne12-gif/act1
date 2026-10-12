import { Sale } from "../models/Sales.js";

const saleController = {

    insert: async (req, res) => {
        try {
            const sale = await Sale.create(req.body);

            res.status(201).json({
                success: true,
                message: "Sale inserted successfully",
                data: sale
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
            const sales = await Sale.findAll();

            res.json({
                success: true,
                data: sales
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
            const sale = await Sale.findByPk(req.params.id);

            if (!sale) {
                return res.status(404).json({
                    success: false,
                    message: "Sale not found"
                });
            }

            res.json({
                success: true,
                data: sale
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
            const sale = await Sale.findByPk(req.params.id);

            if (!sale) {
                return res.status(404).json({
                    success: false,
                    message: "Sale not found"
                });
            }

            await sale.update(req.body);

            res.json({
                success: true,
                message: "Sale updated successfully",
                data: sale
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
            const sale = await Sale.findByPk(req.params.id);

            if (!sale) {
                return res.status(404).json({
                    success: false,
                    message: "Sale not found"
                });
            }

            await sale.destroy();

            res.json({
                success: true,
                message: "Sale deleted successfully"
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

};

export { saleController };