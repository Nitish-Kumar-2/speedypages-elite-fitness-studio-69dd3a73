import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us - Elite Fitness Studio - Elite Fitness Studio",
  description: "Reach out to us for any inquiries or to schedule a visit. We're here to help!"
};

export default function ContactPage() {
  const headerProps = {
    'logo': 'Elite Fitness Studio',
    'navigation': [
        {
            'label': 'Home',
            'path': '/'
        },
        {
            'label': 'Trainers',
            'path': '/trainers'
        },
        {
            'label': 'Membership',
            'path': '/membership'
        },
        {
            'label': 'Contact',
            'path': '/contact'
        }
    ]
};
  const contactformProps = {
    'title': 'Get in Touch',
    'subtitle': 'We are here to help you on your fitness journey.'
};
  const footerProps = {
    'companyName': 'Elite Fitness Studio',
    'copyright': '© 2026 Elite Fitness Studio. All rights reserved',
    'links': [
        {
            'label': 'Privacy',
            'path': '/privacy'
        },
        {
            'label': 'Terms',
            'path': '/terms'
        }
    ]
};

  return (
    <main className="min-h-screen">
      <ContactForm {...contactformProps} />
      <Footer {...footerProps} />
    </main>
  );
}