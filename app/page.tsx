import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
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
    'title': 'Unleash Your Potential',
    'tagline': 'At Elite Fitness Studio, we offer personalized fitness solutions tailored to your unique goals. Join us to transform your health and fitness journey.'
};
  const featuresProps = {
    'title': 'Why Choose Elite Fitness Studio',
    'subtitle': 'Discover the benefits of our premium services designed for health-conscious professionals.',
    'features': [
        {
            'icon': 'UserCheck',
            'title': 'Personalized Training',
            'description': 'Work one-on-one with expert trainers to achieve your fitness goals.'
        },
        {
            'icon': 'Users',
            'title': 'Diverse Group Classes',
            'description': 'Join our dynamic classes that cater to all fitness levels and preferences.'
        },
        {
            'icon': 'Heart',
            'title': 'Comprehensive Wellness Programs',
            'description': 'Enhance your overall well-being with our holistic approach to fitness.'
        }
    ]
};
  const statsProps = {
    'title': 'Our Impact',
    'stats': [
        {
            'number': '1000+',
            'label': 'Clients Transformed',
            'icon': 'Users'
        },
        {
            'number': '98%',
            'label': 'Customer Satisfaction',
            'icon': 'Star'
        },
        {
            'number': '5+',
            'label': 'Years of Excellence',
            'icon': 'Trophy'
        }
    ]
};
  const testimonialsProps = {
    'title': 'What Our Clients Say',
    'testimonials': [
        {
            'name': 'Sarah J.',
            'role': 'Marketing Executive',
            'feedback': 'Elite Fitness Studio has changed my life! The trainers are incredibly supportive.',
            'rating': 5
        },
        {
            'name': 'Michael T.',
            'role': 'Financial Analyst',
            'feedback': 'I love the group classes! They keep me motivated and engaged.',
            'rating': 4.5
        }
    ]
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
    'description': 'Experience the best fitness journey tailored for you. Our expert trainers are here to help you achieve your goals, whether you're a beginner or an experienced athlete.',
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
      <Features {...featuresProps} />
      <Stats {...statsProps} />
      <Testimonials {...testimonialsProps} />
      <Services {...servicesProps} />
      <CTA {...ctaProps} />
      <Footer {...footerProps} />
    </main>
  );
}