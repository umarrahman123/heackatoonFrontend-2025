// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { motion } from "framer-motion"

// const Calculator = () => {
//     const [category, setCategory] = useState("")
//     const [subcategory, setSubcategory] = useState("")
//     const [initialDeposit, setInitialDeposit] = useState("")
//     const [loanPeriod, setLoanPeriod] = useState("")
//     const [loanBreakdown, setLoanBreakdown] = useState(null)

//     const handleCalculate = () => {
//         if (!initialDeposit || !loanPeriod) {
//             alert("Please fill in all required fields");
//             return;
//         }

//         const deposit = Number(initialDeposit);
//         const period = Number(loanPeriod);

//         // Example calculation (you can adjust the formula as needed)
//         const totalLoan = deposit * 2; // Double the initial deposit
//         const monthlyPayment = totalLoan / (period * 12);
//         const interestRate = 5; // 5% example interest rate
//         const totalInterest = (totalLoan * interestRate * period) / 100;
//         const totalPayable = totalLoan + totalInterest;

//         setLoanBreakdown({
//             totalLoan,
//             monthlyPayment,
//             totalInterest,
//             totalPayable,
//             period
//         });
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="container mx-auto px-4 max-w-4xl"
//             >
//                 <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
//                     Loan Calculator
//                 </h1>

//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.2 }}
//                     className="bg-white backdrop-blur-lg bg-opacity-90 rounded-2xl shadow-xl p-8 md:p-10"
//                 >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                                 Loan Category
//                             </label>
//                             <select
//                                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
//                                 value={category}
//                                 onChange={(e) => setCategory(e.target.value)}
//                                 required
//                             >
//                                 <option value="">Select a category</option>
//                                 <option value="wedding">Wedding Loans</option>
//                                 <option value="home">Home Construction Loans</option>
//                                 <option value="business">Business Startup Loans</option>
//                                 <option value="education">Education Loans</option>
//                             </select>
//                         </div>

//                         <div className="space-y-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                                 Initial Deposit (PKR)
//                             </label>
//                             <input
//                                 type="number"
//                                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
//                                 value={initialDeposit}
//                                 onChange={(e) => setInitialDeposit(e.target.value)}
//                                 required
//                                 placeholder="Enter amount in PKR"
//                             />
//                         </div>

//                         <div className="space-y-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                                 Loan Period (Years)
//                             </label>
//                             <input
//                                 type="number"
//                                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
//                                 value={loanPeriod}
//                                 onChange={(e) => setLoanPeriod(e.target.value)}
//                                 required
//                                 placeholder="Enter period in years"
//                             />
//                         </div>

//                         <motion.button
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                             className="col-span-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
//                             onClick={handleCalculate}
//                         >
//                             Calculate
//                         </motion.button>

//                         {loanBreakdown && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 className="col-span-full mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
//                             >
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     <div className="p-4 bg-white rounded-lg shadow">
//                                         <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Loan Amount</h3>
//                                         <p className="text-2xl font-bold text-blue-600">
//                                             {loanBreakdown.totalLoan.toLocaleString()} PKR
//                                         </p>
//                                     </div>
//                                     <div className="p-4 bg-white rounded-lg shadow">
//                                         <h3 className="text-lg font-semibold text-gray-700 mb-2">Monthly Payment</h3>
//                                         <p className="text-2xl font-bold text-green-600">
//                                             {loanBreakdown.monthlyPayment.toLocaleString(undefined, {
//                                                 maximumFractionDigits: 2
//                                             })} PKR
//                                         </p>
//                                     </div>
//                                     <div className="p-4 bg-white rounded-lg shadow">
//                                         <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Interest</h3>
//                                         <p className="text-2xl font-bold text-indigo-600">
//                                             {loanBreakdown.totalInterest.toLocaleString()} PKR
//                                         </p>
//                                     </div>
//                                     <div className="p-4 bg-white rounded-lg shadow">
//                                         <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Payable</h3>
//                                         <p className="text-2xl font-bold text-purple-600">
//                                             {loanBreakdown.totalPayable.toLocaleString()} PKR
//                                         </p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         )}

//                         <Link
//                             to="/register"
//                             className="col-span-full block text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
//                         >
//                             Proceed with Application
//                         </Link>
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </div>
//     )
// }

// export default Calculator



// gpt wala code




import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Calculator = () => {
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [initialDeposit, setInitialDeposit] = useState("");
    const [loanPeriod, setLoanPeriod] = useState("");
    const [loanBreakdown, setLoanBreakdown] = useState(null);

    // Subcategories based on the selected category
    const subcategories = {
        wedding: ["Wedding Venue", "Photography", "Catering"],
        home: ["Construction", "Renovation", "Furnishing"],
        business: ["Equipment", "Inventory", "Working Capital"],
        education: ["Tuition", "Books", "Living Expenses"]
    };

    // Update subcategory when category changes
    useEffect(() => {
        if (category) {
            setSubcategory(subcategories[category][0]); // Automatically select the first subcategory
        } else {
            setSubcategory(""); // Reset subcategory if no category is selected
        }
    }, [category]);

    const handleCalculate = () => {
        if (!initialDeposit || !loanPeriod) {
            alert("Please fill in all required fields");
            return;
        }

        const deposit = Number(initialDeposit);
        const period = Number(loanPeriod);

        // Example calculation (you can adjust the formula as needed)
        const totalLoan = deposit * 2; // Double the initial deposit
        const monthlyPayment = totalLoan / (period * 12);
        const interestRate = 5; // 5% example interest rate
        const totalInterest = (totalLoan * interestRate * period) / 100;
        const totalPayable = totalLoan + totalInterest;

        setLoanBreakdown({
            totalLoan,
            monthlyPayment,
            totalInterest,
            totalPayable,
            period
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="container mx-auto px-4 max-w-4xl"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
                    Loan Calculator
                </h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white backdrop-blur-lg bg-opacity-90 rounded-2xl shadow-xl p-8 md:p-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Category Selection */}
                        <div className="space-y-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Loan Category
                            </label>
                            <select
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="wedding">Wedding Loans</option>
                                <option value="home">Home Construction Loans</option>
                                <option value="business">Business Startup Loans</option>
                                <option value="education">Education Loans</option>
                            </select>
                        </div>

                        {/* Subcategory Selection */}
                        <div className="space-y-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Loan Subcategory
                            </label>
                            <select
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                value={subcategory}
                                onChange={(e) => setSubcategory(e.target.value)}
                                disabled={!category} // Disable if no category is selected
                                required
                            >
                                <option value="">Select a subcategory</option>
                                {category && subcategories[category]?.map((sub, index) => (
                                    <option key={index} value={sub}>
                                        {sub}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Initial Deposit */}
                        <div className="space-y-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Initial Deposit (PKR)
                            </label>
                            <input
                                type="number"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                value={initialDeposit}
                                onChange={(e) => setInitialDeposit(e.target.value)}
                                required
                                placeholder="Enter amount in PKR"
                            />
                        </div>

                        {/* Loan Period */}
                        <div className="space-y-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Loan Period (Years)
                            </label>
                            <input
                                type="number"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                value={loanPeriod}
                                onChange={(e) => setLoanPeriod(e.target.value)}
                                required
                                placeholder="Enter period in years"
                            />
                        </div>

                        {/* Calculate Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="col-span-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                            onClick={handleCalculate}
                        >
                            Calculate
                        </motion.button>

                        {/* Loan Breakdown */}
                        {loanBreakdown && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="col-span-full mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-white rounded-lg shadow">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Loan Amount</h3>
                                        <p className="text-2xl font-bold text-blue-600">
                                            {loanBreakdown.totalLoan.toLocaleString()} PKR
                                        </p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Monthly Payment</h3>
                                        <p className="text-2xl font-bold text-green-600">
                                            {loanBreakdown.monthlyPayment.toLocaleString(undefined, {
                                                maximumFractionDigits: 2
                                            })} PKR
                                        </p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Interest</h3>
                                        <p className="text-2xl font-bold text-indigo-600">
                                            {loanBreakdown.totalInterest.toLocaleString()} PKR
                                        </p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Payable</h3>
                                        <p className="text-2xl font-bold text-purple-600">
                                            {loanBreakdown.totalPayable.toLocaleString()} PKR
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Proceed with Application Button */}
                        <Link
                            to="/register"
                            className="col-span-full block text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                            Proceed with Application
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Calculator;
