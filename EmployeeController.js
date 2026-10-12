import { Employee } from "../models/Employee.js";

const employeeController = {

    insert: async (req, res) => {
        try {
            const employee = await Employee.create(req.body);

            res.status(201).json({
                success: true,
                message: "Employee inserted successfully",
                data: employee
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
            const employees = await Employee.findAll();

            res.json({
                success: true,
                data: employees
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
            const employee = await Employee.findByPk(req.params.id);

            if (!employee) {
                return res.status(404).json({
                    success: false,
                    message: "Employee not found"
                });
            }

            res.json({
                success: true,
                data: employee
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
            const employee = await Employee.findByPk(req.params.id);

            if (!employee) {
                return res.status(404).json({
                    success: false,
                    message: "Employee not found"
                });
            }

            await employee.update(req.body);

            res.json({
                success: true,
                message: "Employee updated successfully",
                data: employee
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
            const employee = await Employee.findByPk(req.params.id);

            if (!employee) {
                return res.status(404).json({
                    success: false,
                    message: "Employee not found"
                });
            }

            await employee.destroy();

            res.json({
                success: true,
                message: "Employee deleted successfully"
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

};

export { employeeController };