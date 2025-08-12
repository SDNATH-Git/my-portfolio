import p1_1 from "../assets/project1-1.png";
import p1_2 from "../assets/project1-2.png";
import p1_3 from "../assets/project1-3.png";
import p1_4 from "../assets/project1-4.png";
import p1_5 from "../assets/project1-5.png";

import p2_1 from "../assets/project2-1.png";
import p2_2 from "../assets/project2-2.png";
import p2_3 from "../assets/project2-3.png";
import p2_4 from "../assets/project2-4.png";
import p2_5 from "../assets/project2-5.png";

import p3_1 from "../assets/project3-1.png";
import p3_2 from "../assets/project3-2.png";
import p3_3 from "../assets/project3-3.png";
import p3_4 from "../assets/project3-4.png";
import p3_5 from "../assets/project3-5.png";

export const projectsData = [
  {
    id: "easyhome",
    title: "🩸 BloodCare - Blood Donation Platform",
    description:
      "BloodCare is a comprehensive blood donation platform designed to streamline the process of connecting blood donors with recipients in need. The system ensures secure, role-based access control for admins, donors, and volunteers. It features location-based search filters, real-time request tracking, and notification systems to facilitate timely blood donations and improve healthcare outcomes. The platform prioritizes data privacy and ease of use across desktop and mobile devices.",
    features: [
      "Role-based access: Admin, Donor, Volunteer with specific privileges",
      "Location-based donor search with filters by blood group and district",
      "Secure donation request creation, approval, and tracking",
      "Real-time status updates for donation requests",
      "User profile management with avatar upload",
      "Notification system for requests and approvals",
    ],
    responsibilities: [
      "Designed and developed frontend with React and TailwindCSS",
      "Implemented backend APIs using Node.js, Express, and MongoDB",
      "Integrated Firebase Authentication for secure login",
      "Managed state and routing with React Router and Context API",
      "Deployed full stack app on Firebase and Vercel",
    ],
    techStack: [
      "React 18",
      "TailwindCSS 3",
      "Node.js 18",
      "Express 4",
      "MongoDB Atlas",
      "Firebase Authentication",
      "React Router 6",
    ],
    images: [p1_1, p1_2, p1_3, p1_4, p1_5],
    liveLink: "https://blood-donation-e5b2a.web.app/",
    githubClient: "https://github.com/SDNATH-Git/blood-donation-clientset",
    githubServer: "https://github.com/SDNATH-Git/blood-donation-serverset",
    challenges: [
      "Designing and implementing a robust role-based access control system to protect sensitive data and user actions.",
      "Efficient querying and pagination of large datasets to maintain app responsiveness.",
      "Ensuring secure and concurrent updates of donation request statuses without race conditions.",
      "Maintaining user privacy while providing location-based services.",
      "Integrating third-party services like Firebase Authentication seamlessly with backend APIs.",
    ],
    improvements: [
      "Introduce multi-language support to reach a wider audience.",
      "Enhance the UI with more fluid animations and accessibility improvements.",
      "Add push notifications and SMS alerts for urgent blood donation requests.",
      "Implement data analytics dashboard for admins to monitor donation trends.",
    ],
    demoVideo: "https://youtu.be/your-demo-video-url",
    launchDate: "2023-07-15",
  },
  {
    id: "foodiehub",
    title: "🍽️ Food Sharing Website",
    description:
      "Food Sharing is a full-stack web application focused on minimizing food waste by connecting donors with recipients who need food assistance. Donors can easily list surplus food items with relevant details like type, quantity, and expiry date. Recipients can search and filter listings by food type, location, and availability. The platform offers role-specific dashboards, real-time notifications, and a user-friendly interface optimized for mobile and desktop. It empowers communities to reduce waste and fight hunger sustainably.",
    features: [
      "User registration with roles: Donor and Recipient",
      "Dashboard to manage food items and requests",
      "Search and filter by food type, location, and expiry date",
      "Real-time notifications for requests and approvals",
      "Request approval workflow with status tracking",
      "Responsive design for mobile and desktop",
    ],
    responsibilities: [
      "Built frontend UI with React and TailwindCSS",
      "Created RESTful APIs with Express and MongoDB",
      "Implemented authentication using Firebase Auth",
      "Set up client-server communication with Axios",
      "Configured deployment pipelines on Firebase Hosting",
    ],
    techStack: [
      "React 18",
      "TailwindCSS 3",
      "Node.js 18",
      "Express 4",
      "MongoDB Atlas",
      "Firebase Authentication",
      "React Router 6",
    ],
    images: [p2_1, p2_2, p2_3, p2_4, p2_5],
    liveLink: "https://food-sharing-1821c.web.app/",
    githubClient: "https://github.com/SDNATH-Git/food-sharing-clientset",
    githubServer: "https://github.com/SDNATH-Git/food-sharing-clientset",
    challenges: [
      "Implementing real-time synchronization of donor and recipient data across multiple clients.",
      "Designing an intuitive and accessible UI that caters to diverse user groups.",
      "Managing complex request approval workflows with status tracking.",
      "Ensuring data integrity and preventing duplicate or stale listings.",
      "Scaling the backend to handle increasing users and food listings efficiently.",
    ],
    improvements: [
      "Add automated alerts for food nearing expiration to encourage timely donations.",
      "Integrate social login options for faster user onboarding.",
      "Enhance search functionality with predictive text and location auto-complete.",
      "Develop a mobile app version for offline accessibility.",
    ],
    demoVideo: "https://youtu.be/your-demo-video-url",
    launchDate: "2023-08-10",
  },
  {
    id: "edulearn",
    title: "🩺 MedicalAppointment Application",
    description:
      "MedicalAppointment is an intuitive doctor appointment booking system designed for both patients and healthcare providers. Patients can search for doctors by specialty and location, book, update, or cancel appointments easily. The app integrates secure payment processing via Stripe and provides appointment reminders and notifications. The system supports role-based access control, with admins managing doctors and appointments through a dedicated dashboard. It is optimized for performance and accessibility on all devices.",
    features: [
      "User registration and role-based access control",
      "Search doctors by specialty and location",
      "Book, update, and cancel appointments",
      "Stripe payment integration for appointments",
      "Appointment reminders and notifications",
      "Admin dashboard for managing doctors and appointments",
    ],
    responsibilities: [
      "Developed frontend components using React and TailwindCSS",
      "Implemented backend with Node.js, Express, and MongoDB",
      "Integrated Stripe for secure payments",
      "Handled authentication and authorization using JWT",
      "Optimized performance and SEO",
    ],
    techStack: [
      "React 18",
      "TailwindCSS 3",
      "Node.js 18",
      "Express 4",
      "MongoDB Atlas",
      "Stripe API",
      "JWT Authentication",
      "React Router 6",
    ],
    images: [p3_1, p3_2, p3_3, p3_4, p3_5],
    liveLink: "https://cool-lollipop-ad7e95.netlify.app/",
    githubClient:
      "https://github.com/SDNATH-Git/medical-appointment-application?tab=readme-ov-file",
    githubServer:
      "https://github.com/SDNATH-Git/medical-appointment-application?tab=readme-ov-file",
    challenges: [
      "Implementing secure and reliable Stripe payment integration for appointment fees.",
      "Handling concurrent appointment bookings to avoid double-booking conflicts.",
      "Developing a scalable notification system for appointment reminders.",
      "Ensuring compliance with privacy standards for sensitive health data.",
      "Optimizing the app for SEO and fast loading on mobile networks.",
    ],
    improvements: [
      "Add doctor ratings and patient reviews to build trust and transparency.",
      "Integrate calendar sync features with Google and iCal.",
      "Implement AI-based appointment slot recommendations to reduce waiting times.",
      "Expand language support to cater to non-English speaking users.",
    ],
    demoVideo: "https://youtu.be/your-demo-video-url",
    launchDate: "2023-09-05",
  },
];


