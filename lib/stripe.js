export const plans = [
  {
    _id: 1,
    name: "Free",
    price: 0,
    credits: 20,
    inclusions: [
      { label: "20 Free Credits", isIncluded: true },
      { label: "Basic Access to Services", isIncluded: true },
      { label: "Priority Customer Support", isIncluded: false },
      { label: "Priority Updates", isIncluded: false },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    price: 40,
    credits: 120,
    inclusions: [
      { label: "120 Credits", isIncluded: true },
      { label: "Full Access to Services", isIncluded: true },
      { label: "Priority Customer Support", isIncluded: true },
      { label: "Priority Updates", isIncluded: false },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    price: 199,
    credits: 2000,
    inclusions: [
      { label: "2000 Credits", isIncluded: true },
      { label: "Full Access to Services", isIncluded: true },
      { label: "Priority Customer Support", isIncluded: true },
      { label: "Priority Updates", isIncluded: true },
    ],
  },
];
