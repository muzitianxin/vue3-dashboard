export interface Insurance {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  icon: string;

  group: number;
  pinned?: boolean;
}

export const insuranceList: Array<Insurance> = [
  {
    id: "A1",
    title: "Auto Insurance",
    subtitle: "Cars",
    color: "#67EDB6",
    group: 0,
    pinned: true,
    icon: "fas fa-bus",
  },
  {
    id: "A2",
    title: "Health Insurance",
    subtitle: "People",
    color: "#F15123",
    group: 0,
    pinned: false,
    icon: "fas fa-virus",
  },

  {
    id: "B1",
    title: "Home Insurance",
    subtitle: "Houses",
    color: "#F16063",
    group: 1,
    pinned: true,
    icon: "fas fa-house-crack",
  },
  {
    id: "B2",
    title: "Life Insurance",
    subtitle: "People",
    color: "#4C6FFF",
    group: 1,
    pinned: false,
    icon: "fas fa-mug-hot",
  },

  {
    id: "C1",
    title: "Car Insurance",
    subtitle: "Cars",
    color: "#FBD46F",
    group: 2,
    pinned: true,
    icon: "fas fa-car",
  },
  {
    id: "C2",
    title: "Travel Insurance",
    subtitle: "City",
    color: "#035AF7",
    group: 2,
    pinned: false,
    icon: "fas fa-plane",
  }
];
