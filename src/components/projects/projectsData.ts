import barangayHome from "../../assets/images/barangay-home.png";
import barangayDashboard from "../../assets/images/barangay-dashboard.png";
import barangayApplicationForm from "../../assets/images/barangay-application-form.png";
import barangayTracking from "../../assets/images/barangay-tracking.png";
import barangayResidents from "../../assets/images/barangay-residents.png";
import barangayUserManagement from "../../assets/images/barangay-user-management.png";
import barangayActivityLogs from "../../assets/images/barangay-activity-logs.png";
import barangayAdminDashboard from "../../assets/images/barangay-admin-dashboard Appplication.png";

import login from "../../assets/images/login.png";
import miniDriveDashboard from "../../assets/images/mini-drive-dashboard.png";
import miniDriveAdmin from "../../assets/images/mini-drive-admin.png";
import miniDriveFiles from "../../assets/images/mini-drive-files.png";

export interface Project {
    id: string;
    title: string;
    status: string;
    description: string;
    techStack: string[];
    featuredImage: string;
    gallery: string[];
    liveDemo: string;
    sourceCode: string;
}

export const projects: Project[] = [
    {
        id: "barangay",
        title: "Barangay e-Services Portal",
        status: "Production In Progress",
        description:
            "A production-ready Barangay Management and e-Services Portal developed using React, TypeScript, Node.js, Express, and MySQL. The system includes resident management, certificate requests, tracking, user management, role-based access control, and activity logging.",

        techStack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MySQL",
        ],

        featuredImage: barangayHome,

        gallery: [
            barangayHome,
            barangayDashboard,
            barangayApplicationForm,
            barangayTracking,
            barangayResidents,
            barangayUserManagement,
            barangayActivityLogs,
            barangayAdminDashboard,
        ],

        liveDemo: "https://barangay-e-services-portal.vercel.app/",
        sourceCode: "https://github.com/KeasserGonzales-ui/barangay-e-services-portal",
    },

    {
        id: "mini-drive",

        title: "Mini Drive Pro",

        status: "Deploying Soon",

        description:
            "A secure cloud file management application featuring authentication, role-based access control, file uploads, sharing, administration, and dashboard analytics built with a modern full stack architecture.",

        techStack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MySQL",
            "JWT",
            "Tailwind CSS",
        ],

        featuredImage: miniDriveDashboard,

        gallery: [
            login,
            miniDriveDashboard,
            miniDriveAdmin,
            miniDriveFiles,
        ],

        liveDemo: "",
        sourceCode: "",
    },
];