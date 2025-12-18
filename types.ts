export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  trim: string;
  price?: string;
  mileage: string;
  fuel: string;
  transmission: string;
  year: string;
  image: string;
  description: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Partners',
    path: '/partners',
    children: [
      { label: 'Motor Insurers & Brokers', path: '/motor-insurers-brokers' },
      { label: 'Accident Management Companies', path: '/accident-management-companies' },
      { label: 'Dealerships & Bodyshops', path: '/dealerships-bodyshops' },
    ]
  },
  {
    label: 'Drivers',
    path: '/drivers-2',
    children: [
      { label: 'How it works', path: '/how-it-works' },
      { label: 'Post accident tips', path: '/post-accident-tips' },
      { label: 'How we can help', path: '/how-we-can-help' },
      { label: 'Make a claim', path: '/make-a-claim' },
    ]
  },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact', path: '/contact' },
  { label: 'Used Vehicles', path: '/used-vehicles' },
];