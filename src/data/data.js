// file: src/data/data.js
export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'YouTube', href: '#youtube' },
  { name: 'Projects', href: '#projects' },
  { name: 'Gaming', href: '#gaming' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const youtubeVideos = [
  {
    id: 'video1',
    title: 'Building a Game in 24 Hours! 🔥',
    videoId: 'dQw4w9WgXcQ',
    views: '125K',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: 'video2',
    title: 'Top 10 Pro Gamer Strategies',
    videoId: 'dQw4w9WgXcQ',
    views: '89K',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: 'video3',
    title: 'From Code to Content Creator',
    videoId: 'dQw4w9WgXcQ',
    views: '203K',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: 'video4',
    title: 'Valorant Ranked Clutch Moments',
    videoId: 'dQw4w9WgXcQ',
    views: '67K',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: 'video5',
    title: 'React vs Vue - Which is Better?',
    videoId: 'dQw4w9WgXcQ',
    views: '156K',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: 'video6',
    title: 'I Tried Streaming for 30 Days',
    videoId: 'dQw4w9WgXcQ',
    views: '312K',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
];

export const projects = [
  {
    id: 1,
    title: 'GameStream Dashboard',
    description: 'Real-time analytics dashboard for Twitch/YouTube streamers with chat integration and viewer insights.',
    tech: ['React', 'Node.js', 'Socket.io', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600',
  },
  {
    id: 2,
    title: 'E-Sports Match Predictor',
    description: 'ML-powered application predicting match outcomes for competitive gaming tournaments.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Next.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600',
  },
  {
    id: 3,
    title: 'Code & Clips',
    description: 'Community platform where gamers share code snippets and gaming highlights.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600',
  },
  {
    id: 4,
    title: 'Discord Gaming Bot',
    description: 'Multi-functional Discord bot for server management, mini-games, and streaming alerts.',
    tech: ['Discord.js', 'TypeScript', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=600',
  },
];

export const favoriteGames = [
  { name: 'Valorant', role: 'Radiant Peak', hours: '1200+', icon: '🎮' },
  { name: 'League of Legends', role: 'Master Tier', hours: '2000+', icon: '⚔️' },
  { name: 'Apex Legends', role: 'Predator', hours: '800+', icon: '🔫' },
  { name: 'Minecraft', role: 'Redstone Engineer', hours: '3000+', icon: '⛏️' },
  { name: 'CS:GO', role: 'Global Elite', hours: '1500+', icon: '🎯' },
];

export const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'],
  tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Figma'],
  gaming: ['OBS Studio', 'Streamlabs', 'DaVinci Resolve', 'Photoshop'],
};

export const services = [
  {
    title: 'Web Development',
    description: 'Custom websites, web apps, and interactive experiences built with modern frameworks.',
    icon: '💻',
    price: 'Starting at $999',
  },
  {
    title: 'Video Editing',
    description: 'Professional gaming montages, highlight reels, and YouTube content editing.',
    icon: '🎬',
    price: 'Starting at $199/video',
  },
  {
    title: 'Content Consulting',
    description: 'Strategy sessions for growing your gaming channel and building your brand.',
    icon: '📈',
    price: '$150/session',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Gaming YouTuber',
    content: 'Emmy helped me completely revamp my channel strategy. My views increased by 300% in just 2 months!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Twitch Streamer',
    content: 'The website Emmy built for me is incredible. Professional, fast, and exactly what I needed for my brand.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Marcus Rivera',
    role: 'Software Engineer',
    content: 'One of the most talented devs I\'ve worked with. Emmy\'s code is clean, efficient, and well-documented.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

export const socialLinks = {
  youtube: 'https://www.youtube.com/@CYPHER-10e',
  github: 'https://github.com/emmyvibesrwanda',
  twitter: 'https://x.com/Emmy_vib',
  discord: 'https://discord.gg/emmyvibes',
  linkedin: 'https://www.linkedin.com/in/emmanuel-bimeyimana-74564b400/',
};