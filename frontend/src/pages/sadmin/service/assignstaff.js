import { useState } from "react";
import SAAdminLayout from "../../../layouts/Salonadmin";
import { FaCheckCircle, FaCut, FaSpa, FaSmile, FaLeaf, FaEye, FaHandSparkles, FaHandHoldingWater } from "react-icons/fa";

const services = [
    { name: "Hair Cut", icon: <FaCut className="text-red-500" /> },
    { name: "Facial", icon: <FaSmile className="text-yellow-500" /> },
    { name: "Spa", icon: <FaSpa className="text-blue-500" /> },
    { name: "Cleanup", icon: <FaLeaf className="text-green-500" /> },
    { name: "Eyebrow", icon: <FaEye className="text-purple-500" /> },
    { name: "Wax", icon: <FaHandSparkles className="text-pink-500" /> },
    { name: "Nail Care", icon: <FaHandHoldingWater className="text-indigo-500" /> }
];

function AssignStaff() {
    const [employees, setEmployees] = useState([
        { id: 1, name: "Ravi Kumar", assignedServices: [] },
        { id: 2, name: "Pooja Sharma", assignedServices: [] },
        { id: 3, name: "Amit Verma", assignedServices: [] }
    ]);

    const handleAssign = (id, serviceName) => {
        setEmployees(prevEmployees =>
            prevEmployees.map(emp =>
                emp.id === id
                    ? {
                        ...emp,
                        assignedServices: emp.assignedServices.includes(serviceName)
                            ? emp.assignedServices.filter(s => s !== serviceName)
                            : [...emp.assignedServices, serviceName]
                    }
                    : emp
            )
        );
    };

    return (
        <SAAdminLayout>
            <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen">
                <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
                    <FaCheckCircle className="text-green-600 mr-2" /> Assign Employee to Services
                </h2>
                <div className="grid gap-6">
                    {employees.map(emp => (
                        <div key={emp.id} className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300">
                            <p className="font-semibold text-lg text-gray-700">{emp.name}</p>
                            <div className="mt-2 grid grid-cols-2 gap-3">
                                {services.map(({ name, icon }) => (
                                    <label key={name} className="flex items-center cursor-pointer border p-3 rounded-lg hover:bg-gray-200 transition duration-200 shadow-md">
                                        <input
                                            type="checkbox"
                                            className="mr-2 hidden"
                                            checked={emp.assignedServices.includes(name)}
                                            onChange={() => handleAssign(emp.id, name)}
                                        />
                                        <span className={`text-xl mr-2 ${emp.assignedServices.includes(name) ? "text-green-600" : "text-gray-500"}`}>{icon}</span>
                                        <span className="text-gray-700 font-medium">{name}</span>
                                    </label>
                                ))}
                            </div>
                            {emp.assignedServices.length > 0 && (
                                <p className="mt-3 text-green-700 font-medium">Assigned: {emp.assignedServices.join(", ")}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </SAAdminLayout>
    );
}

export default AssignStaff;
