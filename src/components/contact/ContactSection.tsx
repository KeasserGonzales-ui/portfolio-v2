import {
    Mail,
    Globe,
    MessageCircle,
    Phone,
    User,
    MapPin,
} from "lucide-react";

import ContactCard from "./ContactCard";
import ResumeCTA from "./ResumeCTA";

const ContactSection = () => {
    return (
        <section id="contact" className="bg-[#111111] py-24 text-white">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mb-16 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                        Contact
                    </p>

                    <h2 className="mt-4 text-5xl font-bold">
                        Let's Build Something Together
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                        I'm currently open to junior full stack developer opportunities,
                        freelance projects, and collaborations. Feel free to reach out
                        through any of the channels below.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <ContactCard
                        icon={Mail}
                        title="Email"
                        value="onzaleskeasser@gmail.com"
                        description="Best for job opportunities and professional inquiries."
                        href="mailto:onzaleskeasser@gmail.com"
                    />

                    <ContactCard
                        icon={Globe}
                        title="GitHub"
                        value="github.com/KeasserGonzales-ui"
                        description="Explore my repositories and full stack development projects."
                        href="https://github.com/KeasserGonzales-ui"
                    />

                    <ContactCard
                        icon={User}
                        title="Facebook"
                        value="Keasser Dune Gonzales"
                        description="Connect with me professionally and stay updated."
                        href="https://www.facebook.com/KDAbelletaGonzales"
                    />

                    <ContactCard
                        icon={MessageCircle}
                        title="Telegram"
                        value="@Keasser123"
                        description="Available for quick conversations and project collaboration."
                        href="https://t.me/Keasser123"
                    />

                    <ContactCard
                        icon={Phone}
                        title="WhatsApp"
                        value="09128740782"
                        description="Best for direct communication and freelance discussions."
                        href="https://wa.me/639128740782"
                    />
                    
                    <ContactCard
                        icon={MapPin}
                        title="Location"
                        value="Lucena City, Philippines"
                        description="Available for remote work, freelance projects, and full-time opportunities."
                        href="https://maps.google.com/?q=Lucena+City+Philippines"
                    />
                </div>

                <ResumeCTA />

            </div>
        </section>
    );
};

export default ContactSection;