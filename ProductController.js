import { Product } from "../models/Product.js";

const productController = {

    insert: async (req, res) => {
        try {
            const product = await Product.create(req.body);

            res.status(201).json({
                success: true,
                message: "Product inserted successfully",
                data: product
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
            const products = await Product.findAll();

            res.json({
                success: true,
                data: products
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
            const product = await Product.findByPk(req.params.id);

            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
            }

            res.json({
                success: true,
                data: product
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
            const product = await Product.findByPk(req.params.id);

            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
            }

            await product.update(req.body);

            res.json({
                success: true,
                message: "Product updated successfully",
                data: product
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
            const product = await Product.findByPk(req.params.id);

            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
            }

            await product.destroy();

            res.json({
                success: true,
                message: "Product deleted successfully"
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

};

export { productController };