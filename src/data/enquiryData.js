export const enquiryData = {
  videoSrc: "/videos/enquirysection.mp4",
  badge: "Start the conversation today",
  heading: {
    line1: "Start your",
    scriptWord: "Project",
    line2: "today",
  },
  form: {
    title: "Let’s work together",
    fields: [
      {
        id: "fullName",
        label: "Full name*",
        type: "text",
        placeholder: "Riley Brooks",
        required: true,
      },
      {
        id: "email",
        label: "Email address*",
        type: "email",
        placeholder: "example@gmail.com",
        required: true,
      },
      {
        id: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Tell us the purpose",
        required: false,
      },
    ],
    submitText: "Submit",
    preferEmailText: "Do you prefer email?",
    email: "hello@example.com",
  },
  info: {
    title: "How do we connect?",
    bullets: [
      "We reply within 24 hours",
      "Direct access to our team — no bots.",
      "We ask smart questions fast.",
    ],
    teamLeader: {
      name: "Amanda Ferguson",
      role: "Team leader",
      avatar: "/brand/enquiry-avatar.jpg",
    },
    cta: {
      text: "Book a discovery call",
      link: "#contact",
    },
  },
};
