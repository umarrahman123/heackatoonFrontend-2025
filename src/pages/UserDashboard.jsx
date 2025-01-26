// import { motion } from "framer-motion"
// import jsPDF from 'jspdf'

// const UserDashboard = () => {
//     const generatePDF = () => {
//         const doc = new jsPDF()

//         // Add content to PDF
//         doc.setFontSize(20)
//         doc.text("Loan Appointment Slip", 105, 20, { align: "center" })

//         doc.setFontSize(12)
//         doc.text("Saylani Microfinance", 105, 40, { align: "center" })

//         // Add loan details
//         doc.setFontSize(14)
//         doc.text("Loan Details:", 20, 60)
//         doc.setFontSize(12)
//         doc.text("Applicant Name: John Doe", 20, 70)
//         doc.text("Loan Amount: PKR 500,000", 20, 80)
//         doc.text("Loan Type: Business Loan", 20, 90)
//         doc.text("Application Date: " + new Date().toLocaleDateString(), 20, 100)
//         doc.text("Appointment Date: " + new Date(Date.now() + 86400000).toLocaleDateString(), 20, 110)

//         // Add footer
//         doc.setFontSize(10)
//         doc.text("Please bring this slip and your original CNIC for verification.", 105, 140, { align: "center" })
//         doc.text("For any queries, please contact: support@saylani.com", 105, 150, { align: "center" })

//         // Save the PDF
//         doc.save("appointment-slip.pdf")
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
//             <div className="container mx-auto px-4 max-w-4xl">
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center mb-8"
//                 >
//                     <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">User Dashboard</h1>
//                     <p className="text-lg text-gray-600">Welcome back, Umar Rahman!</p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         className="bg-white rounded-xl shadow-lg p-6"
//                     >
//                         <h2 className="text-xl font-semibold text-gray-800 mb-4">Loan Status</h2>
//                         <div className="space-y-3">
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Application Status:</span>
//                                 <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
//                                     Approved
//                                 </span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Loan Amount:</span>
//                                 <span className="font-semibold">PKR 500,000</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Monthly Payment:</span>
//                                 <span className="font-semibold">PKR 15,000</span>
//                             </div>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         className="bg-white rounded-xl shadow-lg p-6"
//                     >
//                         <h2 className="text-xl font-semibold text-gray-800 mb-4">Next Appointment</h2>
//                         <div className="space-y-3">
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Date:</span>
//                                 <span className="font-semibold">{new Date(Date.now() + 86400000).toLocaleDateString()}</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Time:</span>
//                                 <span className="font-semibold">10:00 AM</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Location:</span>
//                                 <span className="font-semibold">Main Branch</span>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-white rounded-xl shadow-lg p-6 text-center"
//                 >
//                     <h2 className="text-xl font-semibold text-gray-800 mb-4">Appointment Slip</h2>
//                     <p className="text-gray-600 mb-6">
//                         Please download your appointment slip and bring it with you to your scheduled appointment.
//                     </p>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={generatePDF}
//                         className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
//                     >
//                         <svg
//                             className="w-5 h-5"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//                             />
//                         </svg>
//                         <span>Download Appointment Slip</span>
//                     </motion.button>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100"
//                 >
//                     <h2 className="text-xl font-semibold text-gray-800 mb-4">Important Notice</h2>
//                     <ul className="list-disc list-inside space-y-2 text-gray-600">
//                         <li>Please bring your original CNIC for verification</li>
//                         <li>Arrive 15 minutes before your scheduled appointment</li>
//                         <li>Keep your appointment slip handy</li>
//                         <li>For any queries, contact our support team</li>
//                     </ul>
//                 </motion.div>
//             </div>
//         </div>
//     )
// }

// export default UserDashboard




// gpt ka code

import { motion } from "framer-motion";
import jsPDF from 'jspdf';
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const UserDashboard = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const generatePDF = () => {
        const doc = new jsPDF();

        // Add content to PDF
        doc.setFontSize(20);
        doc.text("Loan Appointment Slip", 105, 20, { align: "center" });

        doc.setFontSize(12);
        doc.text("Saylani Microfinance", 105, 40, { align: "center" });

        // Add loan details
        doc.setFontSize(14);
        doc.text("Loan Details:", 20, 60);
        doc.setFontSize(12);
        doc.text("Applicant Name: John Doe", 20, 70);
        doc.text("Loan Amount: PKR 500,000", 20, 80);
        doc.text("Loan Type: Business Loan", 20, 90);
        doc.text("Application Date: " + new Date().toLocaleDateString(), 20, 100);
        doc.text("Appointment Date: " + new Date(Date.now() + 86400000).toLocaleDateString(), 20, 110);

        // Add footer
        doc.setFontSize(10);
        doc.text("Please bring this slip and your original CNIC for verification.", 105, 140, { align: "center" });
        doc.text("For any queries, please contact: support@saylani.com", 105, 150, { align: "center" });

        // Save the PDF
        doc.save("appointment-slip.pdf");
    };

    const handleLogout = () => {
        // Perform any necessary logout actions (e.g., clearing auth tokens)
        navigate("/"); // Redirect to home page after logout
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">User Dashboard</h1>
                    <p className="text-lg text-gray-600">Welcome back, Umar Rahman!</p>
                </motion.div>

                {/* Add the logout button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLogout} // Trigger logout on click
                        className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12H9m3-3l-3 3 3 3m4 6a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Logout</span>
                    </motion.button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-xl shadow-lg p-6"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Loan Status</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Application Status:</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                    Approved
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Loan Amount:</span>
                                <span className="font-semibold">PKR 500,000</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Monthly Payment:</span>
                                <span className="font-semibold">PKR 15,000</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-xl shadow-lg p-6"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Next Appointment</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Date:</span>
                                <span className="font-semibold">{new Date(Date.now() + 86400000).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Time:</span>
                                <span className="font-semibold">10:00 AM</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Location:</span>
                                <span className="font-semibold">Main Branch</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Appointment Slip</h2>
                    <p className="text-gray-600 mb-6">
                        Please download your appointment slip and bring it with you to your scheduled appointment.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={generatePDF}
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        <span>Download Appointment Slip</span>
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Important Notice</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Please bring your original CNIC for verification</li>
                        <li>Arrive 15 minutes before your scheduled appointment</li>
                        <li>Keep your appointment slip handy</li>
                        <li>For any queries, contact our support team</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}

export default UserDashboard;


