// // src/pages/Festivals/FAQ.jsx
// import React, { useEffect, useState } from "react";
// import "./FAQ.css";
// import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
// import bgVideo from "../../all-bg-videos/iau-bg.mp4";

// const FAQ_ITEMS = [
//   {
//     id: 1,
//     question: "What undergraduate programs does NewUU offer?",
//     expanded: true,
//     content: (
//       <table className="faq-table">
//         <thead>
//           <tr>
//             <th>School</th>
//             <th>Program Name</th>
//             <th>Duration</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td rowSpan="3">School of Engineering</td>
//             <td>Chemical and Materials engineering</td>
//             <td>4 years</td>
//           </tr>
//           <tr>
//             <td>Mechanical engineering</td>
//             <td>4 years</td>
//           </tr>
//           <tr>
//             <td>Software engineering</td>
//             <td>4 years</td>
//           </tr>
//           <tr>
//             <td rowSpan="3">School of Computing</td>
//             <td>Cyber security</td>
//             <td>4 years</td>
//           </tr>
//           <tr>
//             <td>AI and Robotics</td>
//             <td>4 years</td>
//           </tr>
//           <tr>
//             <td>Applied mathematics</td>
//             <td>4 years</td>
//           </tr>
//           <tr>
//             <td rowSpan="2">School of Humanities, Natural & Social Sciences</td>
//             <td>Economics and Data Science</td>
//             <td>4 years</td>
//           </tr>
//           <tr>
//             <td>Pedagogy (STEM specialization)</td>
//             <td>4 years</td>
//           </tr>
//           <tr>
//             <td>School of Management</td>
//             <td>Industrial management</td>
//             <td>4 years</td>
//           </tr>
//         </tbody>
//       </table>
//     ),
//   },
//   {
//     id: 2,
//     question: "What are the admission requirements for undergraduate programs?",
//     expanded: false,
//     content: (
//       <div className="faq-text">
//         <p>Admission requirements for undergraduate programs at NewUU typically include:</p>
//         <ul>
//           <li>Completed secondary education (high school diploma or equivalent)</li>
//           <li>Minimum GPA (e.g., 3.0 or equivalent)</li>
//           <li>Proof of English proficiency (IELTS 6.0 or TOEFL 79 or equivalent)</li>
//           <li>Transcripts from previous education</li>
//           <li>Personal statement or motivation letter</li>
//           <li>Passport copy</li>
//           <li>Some programs may require entrance exams or additional subject tests</li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     question: "How can I apply for an undergraduate program at NewUU?",
//     expanded: false,
//     content: (
//       <div className="faq-text">
//         <p>To apply for an undergraduate program at NewUU:</p>
//         <ul>
//           <li>Visit the official NewUU admissions portal</li>
//           <li>Create an account and complete the online application form</li>
//           <li>Upload required documents (transcripts, English test results, passport, personal statement)</li>
//           <li>Pay the application fee (if applicable)</li>
//           <li>Submit your application before the deadline</li>
//           <li>Track your application status through your account</li>
//           <li>You may be invited for an interview or entrance exam depending on the program</li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     id: 4,
//     question: "What is the application deadline for undergraduate programs?",
//     expanded: false,
//     content: (
//       <div className="faq-text">
//         <p>Application deadlines vary by intake:</p>
//         <ul>
//           <li><strong>Fall intake:</strong> Typically May–July</li>
//           <li><strong>Spring intake:</strong> Typically November–January (if offered)</li>
//         </ul>
//         <p>Please check the NewUU website or contact the admissions office for the exact deadlines for the current academic year.</p>
//       </div>
//     ),
//   },
//   {
//     id: 5,
//     question: "Does NewUU offer scholarships to undergraduate students?",
//     expanded: false,
//     content: (
//       <div className="faq-text">
//         <p>Yes. NewUU offers various scholarship opportunities for undergraduate students, including:</p>
//         <ul>
//           <li>Merit-based scholarships for high academic achievement</li>
//           <li>Need-based financial aid</li>
//           <li>Government-funded scholarships for citizens of Uzbekistan</li>
//           <li>International student scholarships</li>
//           <li>Partial tuition fee waivers</li>
//         </ul>
//         <p>For specific eligibility criteria and application procedures, please visit the Scholarships & Fees section on the NewUU website.</p>
//       </div>
//     ),
//   },
//   {
//     id: 6,
//     question: "What graduate programs are available at NewUU?",
//     expanded: false,
//     content: (
//       <table className="faq-table">
//         <thead>
//           <tr>
//             <th>School</th>
//             <th>Program Name</th>
//             <th>Duration</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td rowSpan="2">School of Engineering</td>
//             <td>Advanced Chemical Engineering</td>
//             <td>2 years</td>
//           </tr>
//           <tr>
//             <td>Mechanical Systems & Automation</td>
//             <td>2 years</td>
//           </tr>
//           <tr>
//             <td rowSpan="2">School of Computing</td>
//             <td>Data Science & AI</td>
//             <td>2 years</td>
//           </tr>
//           <tr>
//             <td>Cybersecurity & Digital Forensics</td>
//             <td>2 years</td>
//           </tr>
//           <tr>
//             <td>School of Management</td>
//             <td>Business Administration (MBA)</td>
//             <td>2 years</td>
//           </tr>
//           <tr>
//             <td>School of Humanities & Social Sciences</td>
//             <td>Economics & Public Policy</td>
//             <td>2 years</td>
//           </tr>
//         </tbody>
//       </table>
//     ),
//   },
// ];

// export default function FAQ() {
//   const [faqItems, setFaqItems] = useState(FAQ_ITEMS);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const toggleFaq = (id) => {
//     setFaqItems((prev) =>
//       prev.map((item) => ({
//         ...item,
//         expanded: item.id === id ? !item.expanded : false,
//       }))
//     );
//   };

//   return (
//     <div className="faq-page">
//       {/* FAQ Header - video background with "FAQ" title */}
//       <div className="faq-header">
//         <video
//           className="faq-header-video"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src={bgVideo} type="video/mp4" />
//         </video>
//         <div className="faq-header-overlay" />
//         <h1 className="faq-header-title">FAQ</h1>
//       </div>

//       {/* Main content area */}
//       <div className="faq-container">
//         {/* Main banner + content row */}
//         <div className="faq-layout">
//           {/* Left: Banner + FAQ accordion */}
//           <div className="faq-main">
//             {/* FAQ accordion */}
//             <div className="faq-accordion-section">
//               {faqItems.map((item) => (
//                 <div key={item.id} className={`faq-item ${item.expanded ? "expanded" : ""}`}>
//                   <button
//                     type="button"
//                     className="faq-question"
//                     onClick={() => toggleFaq(item.id)}
//                   >
//                     <span>{item.question}</span>
//                     {item.expanded ? (
//                       <IoChevronUpOutline className="faq-chevron" />
//                     ) : (
//                       <IoChevronDownOutline className="faq-chevron" />
//                     )}
//                   </button>
//                   {item.expanded && item.content && (
//                     <div className="faq-answer">{item.content}</div>
//                   )}
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
