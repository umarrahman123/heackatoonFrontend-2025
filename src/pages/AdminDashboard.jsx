import { useState } from "react"
import { motion } from "framer-motion"

const AdminDashboard = () => {
    const [filter, setFilter] = useState({ city: "", country: "" })

    // This would typically come from an API call
    const applications = [
        {
            id: 1,
            name: "Umar Rahman",
            category: "Wedding Loans",
            amount: 300000,
            city: "Karachi",
            country: "Pakistan",
            status: "Pending"
        },
        {
            id: 2,
            name: "Saad ali",
            category: "Education Loans",
            amount: 500000,
            city: "Lahore",
            country: "Pakistan",
            status: "Approved"
        },
        {
            id: 3,
            name: "Zahid khan",
            category: "Business Loans",
            amount: 750000,
            city: "Islamabad",
            country: "Pakistan",
            status: "Under Review"
        },
    ]

    const filteredApplications = applications.filter(
        (app) =>
            (filter.city === "" || app.city.toLowerCase().includes(filter.city.toLowerCase())) &&
            (filter.country === "" || app.country.toLowerCase().includes(filter.country.toLowerCase()))
    )

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'approved':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'under review':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
                    <p className="text-lg text-gray-600">Manage Loan Applications</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">Loan Applications</h2>
                        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                placeholder="Filter by City"
                                className="px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                value={filter.city}
                                onChange={(e) => setFilter({ ...filter, city: e.target.value })}
                            />
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                placeholder="Filter by Country"
                                className="px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                value={filter.country}
                                onChange={(e) => setFilter({ ...filter, country: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredApplications.map((app) => (
                                    <motion.tr
                                        key={app.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        whileHover={{ backgroundColor: "#f9fafb" }}
                                        className="transition-colors duration-200"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.category}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            PKR {app.amount.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.city}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.country}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                            >
                                                View
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="text-green-600 hover:text-green-900"
                                            >
                                                Approve
                                            </motion.button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredApplications.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                            No applications found matching your filters.
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default AdminDashboard

