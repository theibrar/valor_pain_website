import { Activity, Syringe, HeartPulse, Brain, Zap, Sparkles, Microscope } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceContent {
  heading: string;
  text: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  shortDescription: string;
  heroImage: string;
  content: ServiceContent[];
  benefits: string[];
  whyChooseUs: string[];
  gallery?: string[];
}

export const servicesData: Record<string, Service> = {
  'musculoskeletal-relief': {
    id: 'musculoskeletal-relief',
    title: 'Musculoskeletal Relief',
    subtitle: 'Advanced Protocol',
    icon: Activity,
    shortDescription: 'Comprehensive regenerative solutions for chronic neck, back, and joint pain.',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'Precision Pain Management',
        text: 'Musculoskeletal pain often stems from underlying structural issues that traditional medicine masks with temporary fixes. At Valor Pain & Wellness, our Musculoskeletal Relief program uses advanced regenerative protocols to target the cellular source of your discomfort. We focus on identifying the exact ligaments, tendons, and joints that have lost their integrity, providing a roadmap for true recovery.'
      },
      {
        heading: 'Advanced Diagnostic Mapping',
        text: 'Every treatment begins with high-resolution diagnostic imaging and a comprehensive biomechanical assessment. We don\'t just treat the symptom; we analyze your movement patterns to understand why the pain occurred in the first place. This holistic view allows us to apply regenerative therapies where they will have the most significant impact on your mobility.'
      },
      {
        heading: 'The Bio-Signaling Difference',
        text: 'Our musculoskeletal protocols utilize bio-active signaling molecules that encourage your body to repair micro-tears and reduce localized inflammation. This results in a stronger, more resilient musculoskeletal system capable of supporting an active, pain-free lifestyle without the need for steroid dependency.'
      }
    ],
    benefits: ['Targeted Pain Reduction', 'Structural Tissue Strengthening', 'Restored Range of Motion', 'Reduced Dependency on Pain Meds'],
    whyChooseUs: [
      'Evidence-based regenerative protocols',
      'Minimally invasive, outpatient procedures',
      'Personalized biomechanical rehabilitation plans',
      'Advanced image-guided injection precision'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'injury-recovery': {
    id: 'injury-recovery',
    title: 'Injury Recovery',
    subtitle: 'Advanced Protocol',
    icon: Zap,
    shortDescription: 'Accelerated healing protocols designed to return athletes and active individuals to peak performance.',
    heroImage: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'Rapid Healing for Acute Injuries',
        text: 'Whether it\'s a ligament sprain, a muscle tear, or a stress fracture, the traditional "rest and ice" approach is often insufficient for high-performance recovery. Our Injury Recovery program integrates advanced cellular therapies to jumpstart the body\'s natural repair cascade, significantly shortening the downtime between injury and action.'
      },
      {
        heading: 'Bio-Acceleration Technology',
        text: 'We utilize concentrated growth factors and cellular signaling to create an optimal healing environment at the site of injury. By flooding the damaged tissue with the nutrients and cells it needs most, we prevent the formation of excessive scar tissue, ensuring that the healed tissue is as strong and flexible as the original.'
      },
      {
        heading: 'Performance-First Approach',
        text: 'Recovery isn\'t just about healing; it\'s about coming back stronger. Our team works closely with physical therapists to ensure that your regenerative treatment is perfectly timed with your rehabilitation, maximizing the strength of the new tissue and correcting any compensatory patterns.'
      }
    ],
    benefits: ['50% Faster Recovery Times', 'Superior Tissue Quality', 'Prevention of Chronic Weakness', 'Safe for All Competitive Levels'],
    whyChooseUs: [
      'Trusted by amateur and professional athletes',
      'Cutting-edge cellular signaling technology',
      'Integrated recovery and rehab monitoring',
      'Non-surgical alternative to career-ending procedures'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'advanced-chronic-care': {
    id: 'advanced-chronic-care',
    title: 'Advanced Chronic Care',
    subtitle: 'Advanced Protocol',
    icon: HeartPulse,
    shortDescription: 'Holistic management of complex chronic conditions and long-term inflammatory issues.',
    heroImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'Treating the Whole System',
        text: 'Chronic illness and pain are often symptoms of systemic inflammation and immune dysregulation. Our Advanced Chronic Care program looks beyond localized symptoms to address the root causes of your health challenges, utilizing advanced integrative protocols to restore balance to your body.'
      },
      {
        heading: 'Immune System Modulation',
        text: 'Many chronic conditions are driven by an overactive or misdirected immune response. We use regenerative biologics to help "reset" the immune signaling pathways, reducing systemic inflammation and allowing your organs and tissues to function at their highest capacity once again.'
      },
      {
        heading: 'Long-term Health Maintenance',
        text: 'Chronic care isn\'t a one-time procedure; it\'s a journey. Our program includes ongoing monitoring and support, combining advanced regenerative treatments with lifestyle and nutritional guidance to ensure that your results are sustainable for years to come.'
      }
    ],
    benefits: ['Reduced Systemic Inflammation', 'Enhanced Energy and Vitality', 'Better Management of Autoimmune Symptoms', 'Improved Long-term Prognosis'],
    whyChooseUs: [
      'Comprehensive whole-body health assessment',
      'Specialized protocols for immune modulation',
      'Dedicated long-term wellness partnership',
      'Focus on root-cause resolution, not just symptoms'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'cartilage-joint-restoration': {
    id: 'cartilage-joint-restoration',
    title: 'Cartilage & Joint Restoration',
    subtitle: 'Advanced Protocol',
    icon: Syringe,
    shortDescription: 'Advanced joint resurfacing and cartilage repair without the need for invasive surgery.',
    heroImage: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'The Science of Joint Regeneration',
        text: 'Osteoarthritis and degenerative joint disease were once thought to be irreversible. Our Cartilage & Joint Restoration changes that narrative. By introducing concentrated cellular building blocks directly into the joint space, we can stimulate the production of new hyaline-like cartilage and improve the quality of synovial fluid.'
      },
      {
        heading: 'Precision Resurfacing',
        text: 'Our treatments act like a biological "resurfacing" for your joints. The regenerative cells settle into the damaged areas of the cartilage, filling in micro-defects and smoothing out the joint surface. This leads to a dramatic reduction in friction and pain, allowing for much smoother, fluid movement.'
      },
      {
        heading: 'Avoiding Total Joint Replacement',
        text: 'For many patients, this program offers a viable alternative to total knee or hip replacement. By intervening with regenerative therapies, we can preserve your natural joint anatomy and delay or entirely avoid the need for major orthopedic surgery and its associated risks.'
      }
    ],
    benefits: ['Delayed Need for Surgery', 'Natural Joint Lubrication', 'Smoother, Pain-Free Movement', 'Permanent Tissue Improvement'],
    whyChooseUs: [
      'Specialized in late-stage joint degeneration',
      'Natural alternative to metallic implants',
      'Minimal recovery time compared to surgery',
      'Advanced fluoroscopic guidance for every injection'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'bone-tissue-regeneration': {
    id: 'bone-tissue-regeneration',
    title: 'Bone & Tissue Regeneration',
    subtitle: 'Advanced Protocol',
    icon: Microscope,
    shortDescription: 'Deep cellular healing for bone fractures, non-unions, and chronic soft tissue degeneration.',
    heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'Cellular Bone Healing',
        text: 'Complex fractures and bone density issues require more than just stabilization. Our Bone & Tissue Regeneration program uses advanced cellular protocols to deliver high concentrations of bio-active signaling molecules, encouraging rapid bone remodeling and increased mineral density at the site of concern.'
      },
      {
        heading: 'Deep Tissue Structural Repair',
        text: 'For chronic issues like deep muscle scarring or degenerative tendonosis, we apply advanced regenerative techniques to break down dysfunctional tissue and replace it with healthy, organized fibers. This restores the structural integrity of the tissue, preventing future ruptures.'
      },
      {
        heading: 'Bio-Scaffolding Technology',
        text: 'In cases of significant tissue loss, we utilize natural bio-scaffolds that provide a structure for your own cells to grow into. This innovative approach allows for the regeneration of complex tissue structures that were previously considered permanently damaged.'
      }
    ],
    benefits: ['Faster Fracture Union', 'Increased Bone Mineral Density', 'Deep Structural Repair', 'Long-term Tissue Integrity'],
    whyChooseUs: [
      'Pioneers in bio-scaffolding technology',
      'Expertise in non-healing bone fractures',
      'High-potency cellular growth factor protocols',
      'Comprehensive structural assessment'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'neurological-autoimmune-support': {
    id: 'neurological-autoimmune-support',
    title: 'Neurological & Autoimmune Support',
    subtitle: 'Advanced Protocol',
    icon: Brain,
    shortDescription: 'Supportive regenerative therapies for nerve health and immune system balance through regenerative approaches.',
    heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'Neuro-Regenerative Protocols',
        text: 'Nerve damage was long considered permanent, but new advances in regenerative medicine are showing promise in supporting nerve health and repair. Our Neurological Support program focuses on reducing neuro-inflammation and providing the neurotrophic factors necessary for nerve sheath repair and signaling improvement.'
      },
      {
        heading: 'Autoimmune Modulation',
        text: 'Autoimmune conditions arise when the immune system attacks healthy tissue. We use advanced protocols to help "re-educate" the immune system, utilizing regenerative signaling to promote an anti-inflammatory environment that protects your nerves and vital tissues from further damage.'
      },
      {
        heading: 'Cognitive and Peripheral Wellness',
        text: 'Whether you are dealing with peripheral neuropathy or seeking to support overall brain health, our comprehensive approach addresses both the central and peripheral nervous systems. We aim to improve signaling efficiency and reduce the "brain fog" often associated with chronic inflammatory states.'
      }
    ],
    benefits: ['Support for Nerve Repair', 'Reduced Neuro-inflammation', 'Balanced Immune Response', 'Improved Neural Signaling'],
    whyChooseUs: [
      'Advanced neuro-regenerative expertise',
      'Innovative immune-modulating biologics',
      'Focus on protecting and repairing neural pathways',
      'Holistic approach to neurological wellness'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'prp-therapy': {
    id: 'prp-therapy',
    title: 'PRP Therapy',
    subtitle: 'Advanced Protocol',
    icon: HeartPulse,
    shortDescription: 'Concentrated Platelet-Rich Plasma treatments to accelerate natural tissue healing.',
    heroImage: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'The Power of Your Own Platelets',
        text: 'Platelet-Rich Plasma (PRP) therapy is a cornerstone of regenerative medicine. By concentrating the healing factors found in your own blood, we can deliver a potent biological "boost" directly to injured or degenerated tissues, triggering an accelerated repair process.'
      },
      {
        heading: 'Growth Factor Optimization',
        text: 'Our PRP protocols focus on maximizing the concentration of growth factors while minimizing inflammatory white blood cells. This results in a cleaner, more effective therapeutic sample that stimulates cellular migration and collagen production without excessive localized irritation.'
      },
      {
        heading: 'Clinical Applications',
        text: 'PRP is highly effective for treating chronic tendonitis (like tennis elbow or Achilles issues), ligament strains, and early-stage joint wear. It offers a safe, natural alternative to corticosteroid injections, which can often weaken tissue over time.'
      }
    ],
    benefits: ['100% Autologous (Uses Your Own Blood)', 'Accelerated Soft Tissue Healing', 'Reduces Chronic Inflammation', 'Safe and Repeatable Procedure'],
    whyChooseUs: [
      'High-concentration, leukocyte-poor PRP protocols',
      'Advanced centrifuge technology for pure samples',
      'Precise ultrasound-guided injections',
      'Natural alternative to steroid injections'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'regenerative-cellular-therapy': {
    id: 'regenerative-cellular-therapy',
    title: 'Regenerative Cellular Therapy',
    subtitle: 'Advanced Protocol',
    icon: Sparkles,
    shortDescription: 'Advanced cellular signaling and regenerative medicine for complex tissue repair.',
    heroImage: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'Next-Generation Bio-Medicine',
        text: 'Our Regenerative Cellular Therapy represents the pinnacle of modern non-surgical medicine. We utilize bio-active cellular signaling to communicate with your body\'s dormant repair systems, telling them exactly where and how to begin the regeneration process in damaged or diseased tissues.'
      },
      {
        heading: 'Precision Cellular Signaling',
        text: 'This therapy doesn\'t just mask pain; it addresses the underlying biological deficit. By providing the environment and the instructions needed for cellular repair, we help your body rebuild lost structure and restore function that was previously considered gone.'
      },
      {
        heading: 'A Personalized Biological Approach',
        text: 'Every Regenerative Cellular treatment is tailored to the patient\'s specific condition and severity. We combine these advanced biologics with precise image guidance to ensure that the maximum therapeutic dose reaches the target tissue for optimal results.'
      }
    ],
    benefits: ['True Tissue Regeneration', 'Avoidance of Invasive Surgery', 'Long-lasting Structural Improvement', 'Enhanced Quality of Life'],
    whyChooseUs: [
      'Leaders in cellular signaling science',
      'State-of-the-art regenerative protocols',
      'Minimally invasive outpatient care',
      'Compassionate, expert medical team'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800'
    ]
  }
};
