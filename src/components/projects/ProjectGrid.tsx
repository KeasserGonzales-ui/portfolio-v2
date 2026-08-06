import { useState } from "react";
import barangayDashboard from "../../assets/images/barangay-dashboard.png";
import barangayResidents from "../../assets/images/barangay-residents.png";
import barangayTracking from "../../assets/images/barangay-tracking.png";
import barangayApplicationForm from "../../assets/images/barangay-application-form.png";
import barangayUserManagement from "../../assets/images/barangay-user-management.png";
import barangayActivityLogs from "../../assets/images/barangay-activity-logs.png";
import barangayAdminDashboard from "../../assets/images/barangay-admin-dashboard Appplication.png";
import ProjectCard from "./ProjectCard";
import ImageGalleryModal from "./ImageGalleryModal";


const projects = [
    {
        title: "Dashboard",
        image: barangayDashboard,
        description: "Overview of application statistics, pending requests, and quick actions.",
        tech: ["React", "Charts", "Dashboard"],
    },
    {
        title: "Residents",
        image: barangayResidents,
        description: "Resident records with search, filtering, and CRUD operations.",
        tech: ["CRUD", "Search", "MySQL"],
    },
    {
        title: "Tracking",
        image: barangayTracking,
        description: "Track certificate requests using a unique reference number.",
        tech: ["Tracking", "Reference ID"],
    },
    {
        title: "Application Form",
        image: barangayApplicationForm,
        description: "Online request form with validation and submission workflow.",
        tech: ["Forms", "Validation"],
    },
    {
        title: "User Management",
        image: barangayUserManagement,
        description: "Manage users, roles, permissions, and authentication.",
        tech: ["RBAC", "JWT", "Users"],
    },
    {
        title: "Activity Logs",
        image: barangayActivityLogs,
        description: "Audit trail showing user actions and system events.",
        tech: ["Logs", "Audit"],
    },
    {
        title: "Admin Dashboard",
        image: barangayAdminDashboard,
        description: "Administrative dashboard for monitoring and approvals.",
        tech: ["Admin", "Reports"],
    },
];

export default function ProjectGrid() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const images = projects.map(project => project.image);

    return (
        <div className="mt-24">

            <div className="mb-12">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                    Project Modules
                </p>

                <h3 className="mt-3 text-5xl font-bold text-white">
                    Complete System Preview
                </h3>

                <p className="mt-5 max-w-2xl text-gray-400 leading-8">
                    Every module shown below is fully connected as part of the
                    Barangay e-Services Portal. These screenshots demonstrate the
                    workflow from resident services to administration.
                </p>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tech={project.tech}
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}

            </div>
            <ImageGalleryModal
                isOpen={selectedIndex !== null}
                onClose={() => setSelectedIndex(null)}
                images={images}
                initialIndex={selectedIndex ?? 0}
            />

        </div>
    );
}