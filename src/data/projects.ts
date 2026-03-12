import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  image: any;
  year?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "RoboRover Arm Control System",
    category: "Robotics & Embedded Systems",
    image: image1,
    year: "2024"
  },
  {
    id: "2",
    title: "FoodScout - Smart Food Discovery",
    category: "Web Application Development",
    image: image3,
    year: "2025"
  },
  {
    id: "3",
    title: "StackFlow MERN Application",
    category: "Full-Stack Web Development",
    image: image4,
    year: "2026"
  },
  {
    id: "4",
    title: "CloudDeploy DevOps Pipeline",
    category: "DevOps & Cloud Automation",
    image: image2,
    year: "2025"
  },
  {
    id: "5",
    title: "TalkSync Real-Time Chat",
    category: "Real-Time Web Application",
    image: image5,
    year: "2024"
  }
];