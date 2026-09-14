export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resume?: string;
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  outcome?: string;
  technologies: string[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  isPlaceholder?: boolean;
}

export type ProjectVisualType = "diagram" | "code" | "dashboard" | "agent";

export interface SelectedProject {
  id: string;
  title: string;
  category: string;
  oneLiner: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  visualType: ProjectVisualType;
  visualMeta?: {
    codeSnippet?: string;
    codeLanguage?: string;
    diagramSteps?: string[];
    metrics?: ProjectMetric[];
    workflowNodes?: { title: string; desc: string }[];
  };
  isPlaceholder?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  isPlaceholder?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
  isPlaceholder?: boolean;
}

export interface ExploringTopic {
  id: string;
  title: string;
  area: string;
  summary: string;
  tags: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    positioning: string;
    supportingBio: string;
    location: string;
    status: {
      text: string;
      available: boolean;
    };
    socials: SocialLinks;
  };
  principles: EngineeringPrinciple[];
  featuredProject: FeaturedProject;
  projects: SelectedProject[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
  currentlyExploring: ExploringTopic[];
  certifications: Certification[];
}
