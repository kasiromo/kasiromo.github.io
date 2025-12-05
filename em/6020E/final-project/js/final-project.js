const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      clinic: {
        name: "Ellenwood Animal Hospital",
        intro: "Ellenwood Animal Hospital provides friendly, modern, and compassionate veterinary care for dogs, cats and exotic animals in Ellenwood, GA. Our team focuses on practical advice and accessible medicine.",
        mission: "Compassion. Integrity. Community. We strive to partner with pet owners to deliver clear, compassionate care.",
        address: "355 Fairview Rd, Ellenwood, GA 30294",
        phone: "(770) 474-6611",
        phoneEscaped: "7704746611",
        hours: "Mon-Wed 9:00 AM-6:00 PM; Thu 9:00 AM-12:00 PM; Fri 9:00 AM-6:00 PM; Sat 9:00 AM-12:00 PM; Closed Sundays",
        history: "Established in 2005 by Dr. Darga, Ellenwood Animal Hospital has served the Ellenwood and surrounding community for two decades. We pride ourselves on practical preventive care and honest communication.",
        newClientForms: [
          { id: 1, title: "New Client Form (PDF)", url: "#" }
        ],
        paymentInfo: "We accept major credit cards, cash, and debit. For larger procedures we partner with third-party veterinary financing providers — call for details.",
        insuranceCarriers: ["Nationwide", "Trupanion", "Embrace"]
      },

      services: [
        {
          id: "s1",
          name: "Wellness & Preventive Care",
          short: "Vaccines, wellness exams, parasite prevention",
          description: "Comprehensive wellness exams, vaccine schedules tailored to your pet, parasite prevention, and behavior guidance.",
          features: ["Annual exam", "Core & non-core vaccines", "Flea/tick prevention", "Senior wellness plans"]
        },
        {
          id: "s2",
          name: "Surgery & Dentistry",
          short: "Soft tissue surgery, dental cleanings",
          description: "Routine soft-tissue surgeries, dental cleanings with pain control, and pre-op diagnostics when needed.",
          features: ["Spay/neuter", "Dental cleaning & extraction", "Pre-op bloodwork"]
        },
        {
          id: "s3",
          name: "Diagnostics & Imaging",
          short: "In-house lab & digital x-ray",
          description: "On-site diagnostic testing and digital X-ray to quickly assess your pet's health.",
          features: ["In-house bloodwork", "Urinalysis", "Digital radiography"]
        }
      ],

      team: [
        { id: "t1", name: "Dr. Darga", role: "Lead Veterinarian", photo: "img/no-image.png", bio: "Clinic veterinarian with over 20 years of industry experience." },
        { id: "t2", name: "Dr. Grey", role: "Lead Veterinarian", photo: "img/no-image.png", bio: "Clinic veterinarian with over 20 years of industry experience." },
        { id: "t3", name: "Gargamel", role: "Clinic Cat Manager", photo: "img/gargamel.jpg", bio: "Greets clinic visitors and supervises laps." },
        { id: "t4", name: "Ezra", role: "Clinic Cat", photo: "img/ezra.jpg", bio: "Supervises the clinic's exterior and steals client pets." },
        { id: "t5", name: "Tootsie", role: "Clinic Cat", photo: "img/tootsie.jpg", bio: "Zoomie extraodinaire. Printer supervisor. Chatty queen." }
      ],

      testimonials: [],

      showBooking: false,
      activeService: null,

      intake: { ownerName: "", petName: "", petType: "Dog", hasVaccinations: false },
      intakeSubmitted: false,

      contact: { name: "", email: "", reason: "Appointment", message: "" },
      contactSent: false,

      appt: { owner: "", pet: "", day: "" },
      apptRequested: false
    };
  },

  computed: {
  },

  mounted() {
    setTimeout(() => {
      this.testimonials = [
        { id: 1, quote: "This is the most knowledgeable and effective healing facility for animals. My experiences with Dr Gray are always memorable and affordable. You won't ever be disappointed!", author: "Tara W.", source: "Yelp" },
        { id: 2, quote: "I have been bringing my cats here for a few years now. What a wonderful establishment, with Doctors who give there all to you and your animals! Both Dr. Grey and Dr. Darga go well beyond the call of duty.", author: "Heather G.", source: "Yelp" }
      ];
    }, 400);
  },

  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },

    viewService(svc) {
      this.activeService = svc;
    },

    submitIntake() {
      if (this.intake.ownerName && this.intake.petName) {
        this.intakeSubmitted = true;
        setTimeout(() => { this.intakeSubmitted = false; this.intake = { ownerName: "", petName: "", petType: "Dog", hasVaccinations: false }; }, 1800);
      }
    },

    sendContact() {
      if (!this.contact.name || !this.contact.email || !this.contact.message) {
        alert("Please complete name, email, and message.");
        return;
      }
      this.contactSent = true;
      setTimeout(() => { this.contactSent = false; this.contact = { name: "", email: "", reason: "Appointment", message: "" }; }, 1800);
    },

    requestAppt() {
      if (!this.appt.owner || !this.appt.pet) {
        alert("Please enter owner and pet name.");
        return;
      }
      this.apptRequested = true;
      setTimeout(() => { this.apptRequested = false; this.showBooking = false; this.appt = { owner: "", pet: "", day: "" }; }, 1600);
    }
  }
}).mount('#app');
