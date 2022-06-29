import { randomInt } from "../../../utils/random-int";
import moment from "moment";

export interface AmountItem {
  id: string;
  amount: number;
  time: Date;
  icon: string;
  status: "PENDING" | "PAID" | "CANCELED";
  caption: string;
  color: string;
}

export const amountList: Array<AmountItem> = [
  {
    id: "1",
    amount: randomInt(3000, 2000),
    time: moment().subtract(1, "days").toDate(),
    icon: "fas fa-vr-cardboard",
    status: "PENDING",
    caption: "In 15 bills",
    color: "#6A6CFF",
  },

  {
    id: "2",
    amount: randomInt(17000, 14000),
    time: moment().subtract(2, "days").toDate(),
    icon: "fas fa-fire-flame-curved",
    status: "PAID",
    caption: "In 5 Yearly bills",
    color: "#EC7F00",
  },

  {
    id: "3",
    amount: randomInt(21000, 24000),
    time: moment().subtract(3, "days").toDate(),
    icon: "fas fa-graduation-cap",
    status: "PENDING",
    caption: "In 6 Yearly bills",
    color: "#3E5573",
  },

  {
    id: "4",
    amount: randomInt(6000, 4000),
    time: moment().subtract(4, "days").toDate(),
    icon: "fas fa-virus",
    status: "CANCELED",
    caption: "Totally Cash",
    color: "#F16063",
  },
];
