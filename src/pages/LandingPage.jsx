import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const loanCategories = [
    {
        name: "Wedding Loans",
        subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
        maxLoan: "5 Lakh",
        period: "3 years",
    },
    {
        name: "Home Construction Loans",
        subcategories: ["Structure", "Finishing", "Loan"],
        maxLoan: "10 Lakh",
        period: "5 years",
    },
    {
        name: "Business Startup Loans",
        subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
        maxLoan: "10 Lakh",
        period: "5 years",
    },
    {
        name: "Education Loans",
        subcategories: ["University Fees", "Child Fees Loan"],
        maxLoan: "Based on requirement",
        period: "4 years",
    },
]

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-12 sm:py-16">
                <div className="absolute top-4 right-4 space-x-4">
                    <Link
                        to="/login"
                        className="inline-block px-6 py-2 text-sm font-semibold text-primary-600 bg-white rounded-lg hover:bg-primary-50 transition-all duration-200"
                    >
                        Login
                    </Link>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                >
                    Saylani Microfinance App
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {loanCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white backdrop-blur-lg bg-opacity-80 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300"
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{category.name}</h2>
                            <ul className="space-y-2 mb-4">
                                {category.subcategories.map((sub, subIndex) => (
                                    <li key={subIndex} className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                        {sub}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4 border-t border-gray-100">
                                <p className="text-indigo-600 font-medium">Maximum loan: {category.maxLoan}</p>
                                <p className="text-indigo-600 font-medium">Loan period: {category.period}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <Link
                        to="/calculator"
                        className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Try Loan Calculator
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default LandingPage

