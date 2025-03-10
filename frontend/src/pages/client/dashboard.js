import React from "react";
import { useNavigate } from "react-router-dom";
import ClientLayout from "../../layouts/ClientLayout";
import axios from "../../api/axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CalendarCheck, DollarSign, AlertTriangle, Bell, Star } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const revenueData = [
    { month: "Jan", revenue: 3000 },
    { month: "Feb", revenue: 4000 },
    { month: "Mar", revenue: 3500 },
    { month: "Apr", revenue: 5000 },
    { month: "May", revenue: 4200 },
    { month: "Jun", revenue: 6000 },
];

const appointmentsData = [
    { month: "Jan", appointments: 20 },
    { month: "Feb", appointments: 30 },
    { month: "Mar", appointments: 25 },
    { month: "Apr", appointments: 40 },
    { month: "May", appointments: 35 },
    { month: "Jun", appointments: 50 },
];

const Dashboard = () => {
    return (
        <ClientLayout>
            {/* Dashboard Heading */}
            <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg shadow-blue-500/50 transform transition duration-300 hover:scale-105">
                Client Dashboard
            </h1>
            
            {/* Overview Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Total Appointments</h3>
                        <p className="text-2xl font-bold">85</p>
                    </div>
                    <CalendarCheck className="w-10 h-10 text-blue-500" />
                </div>

                <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Total Expense</h3>
                        <p className="text-2xl font-bold">$4,320</p>
                    </div>
                    <DollarSign className="w-10 h-10 text-green-500" />
                </div>

                <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Total Dues</h3>
                        <p className="text-2xl font-bold">$1,200</p>
                    </div>
                    <AlertTriangle className="w-10 h-10 text-red-500" />
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Monthly Revenue (Bar Chart)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenue" fill="#3498db" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Appointments Trend (Line Chart)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={appointmentsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="appointments" stroke="#e74c3c" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
                <ul className="space-y-2">
                    <li className="flex justify-between">
                        <p className="text-sm">John Doe - Hair Cut</p>
                        <p className="text-sm text-gray-500">March 10, 3:00 PM</p>
                    </li>
                    <li className="flex justify-between">
                        <p className="text-sm">Emily Smith - Facial</p>
                        <p className="text-sm text-gray-500">March 11, 2:00 PM</p>
                    </li>
                </ul>
            </div>

            <ToastContainer position="top-right" autoClose={3000} />
        </ClientLayout>
    );
};

export default Dashboard;
