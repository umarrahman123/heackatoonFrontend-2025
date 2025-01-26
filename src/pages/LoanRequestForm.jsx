import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const LoanRequestForm = () => {
    const [guarantor1, setGuarantor1] = useState({ name: "", email: "", location: "", cnic: "" })
    const [guarantor2, setGuarantor2] = useState({ name: "", email: "", location: "", cnic: "" })
    const [loanDetails, setLoanDetails] = useState({
        amount: "",
        purpose: "",
        duration: "",
        monthlyIncome: ""
    })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Loan request data:", { guarantor1, guarantor2, loanDetails })
        navigate("/user-dashboard")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Loan Request Form</h1>
                    <p className="text-lg text-gray-600">Please fill in all the required details</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-lg p-8"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Loan Details Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Loan Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Loan Amount (PKR)
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={loanDetails.amount}
                                        onChange={(e) => setLoanDetails({ ...loanDetails, amount: e.target.value })}
                                        placeholder="Enter loan amount"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Loan Purpose
                                    </label>
                                    <select
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={loanDetails.purpose}
                                        onChange={(e) => setLoanDetails({ ...loanDetails, purpose: e.target.value })}
                                        required
                                    >
                                        <option value="">Select purpose</option>
                                        <option value="business">Business</option>
                                        <option value="education">Education</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="home">Home Construction</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Loan Duration (Months)
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={loanDetails.duration}
                                        onChange={(e) => setLoanDetails({ ...loanDetails, duration: e.target.value })}
                                        placeholder="Enter duration in months"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Monthly Income (PKR)
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={loanDetails.monthlyIncome}
                                        onChange={(e) => setLoanDetails({ ...loanDetails, monthlyIncome: e.target.value })}
                                        placeholder="Enter monthly income"
                                        required
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Guarantor 1 Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="border-t pt-8"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Guarantor 1</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={guarantor1.name}
                                        onChange={(e) => setGuarantor1({ ...guarantor1, name: e.target.value })}
                                        placeholder="Enter guarantor's name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={guarantor1.email}
                                        onChange={(e) => setGuarantor1({ ...guarantor1, email: e.target.value })}
                                        placeholder="Enter guarantor's email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">CNIC</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={guarantor1.cnic}
                                        onChange={(e) => setGuarantor1({ ...guarantor1, cnic: e.target.value })}
                                        placeholder="Enter guarantor's CNIC"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={guarantor1.location}
                                        onChange={(e) => setGuarantor1({ ...guarantor1, location: e.target.value })}
                                        placeholder="Enter guarantor's location"
                                        required
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Guarantor 2 Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="border-t pt-8"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Guarantor 2</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Similar fields as Guarantor 1 */}
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={guarantor2.name}
                                        onChange={(e) => setGuarantor2({ ...guarantor2, name: e.target.value })}
                                        placeholder="Enter guarantor's name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={guarantor2.email}
                                        onChange={(e) => setGuarantor2({ ...guarantor2, email: e.target.value })}
                                        placeholder="Enter guarantor's email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">CNIC</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={guarantor2.cnic}
                                        onChange={(e) => setGuarantor2({ ...guarantor2, cnic: e.target.value })}
                                        placeholder="Enter guarantor's CNIC"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                        value={guarantor2.location}
                                        onChange={(e) => setGuarantor2({ ...guarantor2, location: e.target.value })}
                                        placeholder="Enter guarantor's location"
                                        required
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex justify-center pt-8"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl"
                            >
                                Submit Loan Request
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>

                {/* Additional Information */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center text-gray-600"
                >
                    <p className="text-sm">
                        Please ensure all information provided is accurate and verifiable.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default LoanRequestForm

