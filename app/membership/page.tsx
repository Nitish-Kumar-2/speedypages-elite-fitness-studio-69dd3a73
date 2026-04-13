import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Membership Plans - Elite Fitness Studio - Elite Fitness Studio",
  description: "Explore our flexible membership options designed to fit your lifestyle and fitness goals."
};

export default function MembershipPage() {
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
    'title': 'Membership',
    'tagline': ''
};
  const servicesProps = {
    'title': 'Our Premium Services',
    'subtitle': 'Explore our tailored fitness programs',
    'services': [
        {
            'icon': 'Dumbbell',
            'title': 'Personal Training',
            'description': 'Get one-on-one coaching with our certified trainers to achieve your fitness goals.',
            'price': '$75/session'
        },
        {
            'icon': 'Users',
            'title': 'Group Classes',
            'description': 'Join our dynamic group classes that include yoga, HIIT, and strength training for all levels.',
            'price': '$25/class'
        },
        {
            'icon': 'Heart',
            'title': 'Nutrition Coaching',
            'description': 'Receive personalized meal plans and dietary advice from our expert nutritionists.',
            'price': '$150/month'
        },
        {
            'icon': 'Dumbbell',
            'title': 'Online Coaching',
            'description': 'Access tailored workout plans and guidance from anywhere with our online coaching services.',
            'price': '$50/month'
        },
        {
            'icon': 'Users',
            'title': 'Corporate Wellness Programs',
            'description': 'Enhance employee health and productivity with our customized corporate fitness solutions.',
            'price': 'Contact for pricing'
        }
    ]
};
  const ctaProps = {
    'title': 'Join Us Today!',
    'description': 'Experience the best fitness journey tailored for you. Our expert trainers are here to help you achieve your goals, whether you\'re a beginner or an experienced athlete.',
    'primaryButton': 'Get Started',
    'secondaryButton': 'Learn More'
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
      <Services {...servicesProps} />
      <CTA {...ctaProps} />
      <Footer {...footerProps} />
    </main>
  );
}
