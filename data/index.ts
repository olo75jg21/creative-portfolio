import { NavigationData, Project } from '@/types'

const headerTopRowData = [
  'Jakub<br>Olcha',
  'Fronted Developer<br>at Pleo',
  'Based in Cracow<br>Poland'
]

const navigationData: NavigationData[] = [
  {
    value: 'About',
    link: 'about'
  },
  {
    value: 'Work',
    link: 'work'
  },
  {
    value: 'Skills',
    link: 'skills'
  },
  {
    value: 'Experience',
    link: 'experience'
  },
  {
    value: 'Contact',
    link: 'contact'
  },
]

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website to showcase my projects, skills, and experience.',
    technologies: ['React', 'TypeScript', 'CSS Modules', 'HTML'],
    // thumbnail: 'https://via.placeholder.com/300x150.png?text=Portfolio+Website'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'An e-commerce platform with user authentication, product management, and payment integration.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    // thumbnail: 'https://via.placeholder.com/300x150.png?text=E-commerce+Platform'
  },
  {
    id: 3,
    title: 'Chat Application',
    description: 'A real-time chat application with WebSocket for live messaging and notifications.',
    technologies: ['React', 'TypeScript', 'Socket.IO', 'Node.js', 'Express'],
    // thumbnail: 'https://via.placeholder.com/300x150.png?text=Chat+Application'
  }
]


export { headerTopRowData, navigationData, projectsData }