import Hero from "@/components/Hero";
import TeamList from "@/components/TeamList";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Meet Our Trainers - Elite Fitness Studio - Elite Fitness Studio",
  description: "Get to know our expert trainers who are dedicated to helping you achieve your fitness goals."
};

export default function TrainersPage() {
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
  const heroProps = {
    'headline': 'Unleash Your Potential',
    'subheadline': 'Discover amazing features and services',
    'primaryCta': 'Get Started',
    'secondaryCta': 'Learn More',
    'title': 'Trainers',
    'tagline': ''
};
  const teamlistProps = {
    'trainers': [
        {
            'name': 'John Doe',
            'specialty': 'Strength Training',
            'experience': '5 years',
            'icon': 'Users'
        },
        {
            'name': 'Jane Smith',
            'specialty': 'Yoga & Flexibility',
            'experience': '8 years',
            'icon': 'Star'
        },
        {
            'name': 'Emily Johnson',
            'specialty': 'Nutrition Coaching',
            'experience': '6 years',
            'icon': 'Trophy'
        },
        {
            'name': 'Michael Brown',
            'specialty': 'Cardio & Endurance',
            'experience': '4 years',
            'icon': 'Users'
        },
        {
            'name': 'Sarah Wilson',
            'specialty': 'Group Fitness',
            'experience': '7 years',
            'icon': 'Star'
        }
    ]
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
      <Hero {...heroProps} />
      <TeamList {...teamlistProps} />
      <Footer {...footerProps} />
    </main>
  );
}