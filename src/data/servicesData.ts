import { Activity, Syringe, HeartPulse, Dna, Brain, Zap, Stethoscope } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceContent {
  heading: string;
  text: string;
}

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  heroImage: string;
  content: ServiceContent[];
  benefits: string[];
  gallery?: string[];
}

export const servicesData: Record<string, Service> = {
  'stem-cell-therapy': {
    id: 'stem-cell-therapy',
    title: 'Stem Cell Therapy',
    icon: Dna,
    shortDescription: 'Harness your body\'s natural healing mechanisms to repair damaged tissues from the inside out.',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'What is Stem Cell Therapy?',
        text: 'Stem Cell Therapy is a groundbreaking regenerative treatment that utilizes the body’s own healing potential. By introducing concentrated, potent stem cells into damaged tissues, we can stimulate repair and regeneration, offering a profound alternative to surgical interventions.'
      },
      {
        heading: 'How Does It Work?',
        text: 'Stem cells are undifferentiated cells capable of transforming into specific cell types, such as cartilage, muscle, or tendon cells. During the procedure, we inject these carefully sourced cells under advanced image guidance directly into the site of injury or degeneration. Once there, they reduce inflammation and signal the body to accelerate its natural repair processes.'
      },
      {
        heading: 'Conditions Treated',
        text: 'This therapy is highly effective for osteoarthritis, chronic joint pain (knees, hips, shoulders), degenerated discs, and severe tendon or ligament tears that have not responded uniformly to traditional conservative methods.'
      }
    ],
    benefits: ['Avoid Invasive Surgery', 'Natural Healing Process', 'Reduced Recovery Time', 'Long-Lasting Relief'],
    gallery: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631815541551-3796cd8ce992?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512677855366-20e5e315727a?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'prp-injection': {
    id: 'prp-injection',
    title: 'PRP (Platelet-Rich Plasma)',
    icon: HeartPulse,
    shortDescription: 'Accelerate the healing of injured tendons, ligaments, muscles and joints using your own platelets.',
    heroImage: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'The Power of Platelet-Rich Plasma',
        text: 'Platelet-Rich Plasma (PRP) therapy utilizes a concentrated portion of your own blood to promote accelerated healing. Platelets are heavily concentrated with growth factors—proteins essential for tissue repair and regeneration.'
      },
      {
        heading: 'The Treatment Process',
        text: 'A small sample of your blood is drawn and spun in a centrifuge to separate the platelet-rich plasma from red blood cells. The highly concentrated PRP is then precisely injected into the injured or arthritic area. The growth factors jumpstart the healing cascade, recruiting stem cells and encouraging new tissue growth.'
      },
      {
        heading: 'Ideal Candidates',
        text: 'PRP is an excellent option for sports injuries, rotator cuff tears, tennis elbow, plantar fasciitis, and early-stage osteoarthritis.'
      }
    ],
    benefits: ['Uses Your Own Body\'s Cells', 'Safe Outpatient Procedure', 'Improves Joint Function', 'Stops Tissue Degeneration'],
    gallery: [
      'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504813184581-01e72f54c165?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'joint-injections': {
    id: 'joint-injections',
    title: 'Joint & Facet Injections',
    icon: Syringe,
    shortDescription: 'Targeted relief for localized pain and inflammation in specific joints to improve mobility.',
    heroImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'Immediate and Targeted Relief',
        text: 'Joint and facet joint injections are minimally invasive procedures designed to reduce inflammation and swelling directly at the source of the pain. These injections typically consist of a local anesthetic combined with a corticosteroid.'
      },
      {
        heading: 'Facet Joint Interventions',
        text: 'Facet joints connect the vertebrae in your spine. When these become arthritic or irritated, they cause significant neck or back pain. Injecting medication specifically into these joints can provide dramatic relief and help us confirm the exact source of your pain.'
      },
      {
        heading: 'Comprehensive Joint Care',
        text: 'Whether it’s the knee, hip, shoulder, or spinal facet joints, our precisely guided injections (using fluoroscopy or ultrasound) ensure the medication reaches the precise location for maximum efficacy.'
      }
    ],
    benefits: ['Rapid Pain Relief', 'Diagnostic and Therapeutic', 'Minimally Invasive', 'Restores Mobility Quickly'],
    gallery: [
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551076805-e18690c5e530?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'a2m-therapy': {
    id: 'a2m-therapy',
    title: 'A2M Therapy',
    icon: Activity,
    shortDescription: 'Alpha-2-Macroglobulin injections to prevent cartilage breakdown and reduce joint pain naturally.',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'Halting Joint Degeneration',
        text: 'Alpha-2-Macroglobulin (A2M) is a powerful, naturally occurring protein found in your blood plasma. Its unique property is its ability to bind to and neutralize the enzymes (proteases) that break down cartilage in osteoarthritic joints.'
      },
      {
        heading: 'How A2M Protects You',
        text: 'In an arthritic joint, destructive chemicals outnumber healing chemicals. By extracting A2M from your blood, concentrating it, and re-injecting it into the affected joint, we can physically trap the destructive enzymes. This halts the progression of osteoarthritis and prevents further joint damage.'
      },
      {
        heading: 'The Future of Arthritis Treatment',
        text: 'Unlike steroids which only mask pain, A2M addresses the actual chemical cause of cartilage breakdown, making it an advanced preventative and therapeutic tool.'
      }
    ],
    benefits: ['Stops Cartilage Destruction', 'Reduces Joint Swelling', 'Natural Protein', 'Prevents Future Damage'],
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'nerve-blocks': {
    id: 'nerve-blocks',
    title: 'Nerve Root Blocks',
    icon: Brain,
    shortDescription: 'Diagnostic and therapeutic injections to alleviate pain originating from inflamed spinal nerves.',
    heroImage: 'https://images.unsplash.com/photo-1551076805-e18690c5e530?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'Targeting Nerve Pain at the Source',
        text: 'A selective nerve root block is an injection that delivers medication directly into the space around a specific spinal nerve root. This is performed when a nerve is pinched or inflamed due to a herniated disc or spinal stenosis.'
      },
      {
        heading: 'Dual Purpose Procedure',
        text: 'Diagnostic: If your pain disappears immediately after the anesthetic is injected, we have successfully identified the highly specific nerve causing your distress. Therapeutic: The corticosteroid provides long-term reduction in inflammation and pain.'
      },
      {
        heading: 'Relief for Sciatica and Radiculopathy',
        text: 'For patients suffering from sharp, shooting pains down their arms or legs, nerve root blocks offer a non-surgical avenue to significant relief and restored function.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631815541551-3796cd8ce992?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551076805-e18690c5e530?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800'
    ],
    benefits: ['Pinpoints Pain Generator', 'Relieves Shooting Nerve Pain', 'Outpatient Procedure', 'Improves Physical Therapy Options']
  },
  'spinal-cord-stimulation': {
    id: 'spinal-cord-stimulation',
    title: 'Spinal Cord Stimulation',
    icon: Zap,
    shortDescription: 'Advanced neurostimulation techniques for managing chronic, intractable pain syndromes.',
    heroImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'Modulating Pain Signals',
        text: 'Spinal Cord Stimulation (SCS) is an advanced technology used to treat severe, chronic pain that hasn’t responded to other treatments. It involves a small implanted device that sends mild electrical pulses to the spinal cord.'
      },
      {
        heading: 'Intercepting Pain',
        text: 'These electrical pulses intercept pain signals before they reach the brain. Instead of feeling pain, patients often feel a gentle, soothing tingling sensation, or with newer high-frequency devices, no sensation at all—just profound pain relief.'
      },
      {
        heading: 'The Trial Period',
        text: 'One of the greatest benefits of SCS is the trial phase. Before committing to a permanent implant, patients undergo a 5-7 day trial with external equipment to ensure the therapy successfully alleviates their specific pain.'
      }
    ],
    benefits: ['Reversible and Testable', 'Reduces Reliance on Medications', 'Targets Severe, Chronic Pain', 'Customizable Relief'],
    gallery: [
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516398841057-3f301140033d?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'electrodiagnosis': {
    id: 'electrodiagnosis',
    title: 'Electrodiagnosis',
    icon: Stethoscope,
    shortDescription: 'Comprehensive nerve conduction studies to accurately diagnose the root source of your nerve pain.',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000',
    content: [
      {
        heading: 'Uncovering the Blueprint of Your Nerves',
        text: 'Electrodiagnostic testing, primarily consisting of Electromyography (EMG) and Nerve Conduction Studies (NCS), evaluates the health and function of your muscles and the nerves that control them.'
      },
      {
        heading: 'Why is it Performed?',
        text: 'When patients experience symptoms like numbness, tingling, weakness, or unexplained muscle cramping, electrodiagnosis helps pinpoint whether the issue lies in the spinal cord, a peripheral nerve, or the muscle itself. It is critical for diagnosing conditions like Carpal Tunnel Syndrome or Radiculopathy.'
      },
      {
        heading: 'Guiding Treatment',
        text: 'By accurately mapping nerve damage and locating compression sites, we can tailor a precise treatment plan—ensuring we treat the exact underlying cause of your symptoms, rather than just guessing.'
      }
    ],
    benefits: ['Accurate Diagnosis', 'Locates Nerve Damage', 'Measures Nerve Healing', 'Drives Targeted Treatment Plans'],
    gallery: [
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512418490278-d42f096d2d3e?auto=format&fit=crop&q=80&w=800'
    ]
  }
};
