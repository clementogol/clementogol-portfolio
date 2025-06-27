"use client"

import type React from "react"
import { useState } from "react"
import {
  Code2,
  Database,
  Server,
  Globe,
  Layers,
  FileText,
  Settings,
  Zap,
  Brain,
  Bot,
  Workflow,
  MessageSquare,
  Search,
  Shield,
  HardDrive,
  Network,
  Route,
  GitBranch,
  Webhook,
  Cpu,
  Wrench,
  LayoutGrid,
  Expand,
  X,
  CheckCircle,
} from "lucide-react"
import skills from "@/data/skills"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Article from "./Article"
import clsx from "clsx"

interface IconsType {
  [key: string]: React.ComponentType<{ className?: string }>
}

const icons: IconsType = {
  // Frontend/Backend/AI/Data Science
  React: Code2,
  "Next.js": Layers,
  Redux: Database,
  "Tailwind CSS": Settings,
  TypeScript: FileText,
  "Node.js": Server,
  Express: Zap,
  MongoDB: Database,
  Mongoose: Database,
  Ruby: Code2,
  "Ruby on Rails": Server,
  Hotwire: Zap,
  PostgreSQL: Database,
  Supabase: Database,
  Neon: Database,
  Prisma: Database,
  Agents: Bot,
  Workflows: Workflow,
  LLMs: Brain,
  "MCP Servers": Server,
  RAG: Search,
  "Vercel AI SDK": Brain,
  "Google Gen AI SDK": Brain,
  "Mastra AI": Bot,
  CopilotKit: Bot,
  "Assistant-UI": MessageSquare,
  LlamaIndex: Search,
  Convex: Database,
  Pinecone: Search,
  Qdrant: Search,
  Upstash: Database,
  Redis: Database,
  IAM: Shield,
  S3: HardDrive,
  EC2: Server,
  VPC: Network,
  RDS: Database,
  Route53: Route,
  CloudFront: Globe,
  "CI/CD": GitBranch,
  "API Gateway": Webhook,
  Lambda: Cpu,
  Tools: Wrench,
  "Generative UI": LayoutGrid,
  // Data Science & Machine Learning
  "Python": Code2,
  "pandas": Database,
  "scikit-learn": Brain,
  "Jupyter": FileText,
  "Tableau": LayoutGrid,
  "Regression Modeling": Workflow,
  "XGBoost": Zap,

  // Digital Marketing & Content Creation
  "SEO": Search,
  "Meta Ads": Globe,
  "Facebook Ads Manager": Globe,
  "Instagram for Business": Globe,
  "Content Writing": FileText,
  "Copywriting": FileText,
  "Canva": LayoutGrid,
  "WordPress": Globe,
  // Business Analytics & Research
  "Data Analysis": Workflow,
  "Data Visualization": LayoutGrid,
  "Power BI": LayoutGrid,
  "Business Acumen": Brain,
  "Research Skills": Search,

  // IT Infrastructure & Networking
  "Network Engineering": Network,
  "Telecommunications Management": Route,
  Cybersecurity: Shield,
  "IT Infrastructure": HardDrive,
  "Oracle Database": Database,

  // Professional & Interpersonal
  Communication: MessageSquare,
  "Attention to Detail": Search,
  "Customer Engagement": MessageSquare,
  Editing: Wrench,
  Proofreading: Wrench,
  "Quality Assurance": Shield,

  // Web Fundamentals
  HTML: FileText,
  CSS: Settings,
  JavaScript: Code2,
  "Data Entry": FileText,
  Transcription: FileText,

  // Other tools
  "SQL": Database,
  "Database Management System (DBMS)": Database,
  "Front-End Development": LayoutGrid,
  "Software Development": Code2,
  "Programming Proficiency": Code2,
  "Information Technology Infrastructure": HardDrive,
  "Data Fundamentals": Brain,
  "Machine Learning": Brain,
  "Tech Career Skills": Brain,
  "Learning Data Analytics: 1 Foundations": Brain,
  "Learning Data Analytics Part 2: Extending and Applying Core Knowledge": Brain,
  "Introduction to Career Skills in Data Analytics": Brain,

  // AI & Data Annotation (add these!)
  "SuperAnnotate": CheckCircle,        
  "Label Studio": LayoutGrid,          
  "Scene Analysis": Search,            
  "Storytelling": MessageSquare,       
  "Data Quality Assurance": Shield,
  "CloudCompare": Database,   
  "Haisty AI": Bot,           
  "CVAT": CheckCircle,        
  "Labelbox": LayoutGrid, 
};

const Skills = () => {
  const [open, setOpen] = useState(false)

  const SkillsContent = ({ isDrawer = false }: { isDrawer?: boolean }) => (
    <ScrollArea className={`w-full ${isDrawer ? "h-[60vh]" : "h-[150px]"} space-y-6`}>
      {skills.map((skillGroup, groupIndex) => (
        <div key={groupIndex} className="space-y-3">
          <div className="space-y-1">
            <h3 className={clsx("text-base text-black/80 dark:text-white/90", isDrawer && "font-semibold")}>{skillGroup.category}</h3>
            <p className="text-sm text-black/75 dark:text-white/60 font-mono">{skillGroup.description}</p>
          </div>

          <ScrollArea className="w-full">
            <div className="flex flex-wrap gap-2 pb-2">
              {skillGroup.technologies.map((tech, techIndex) => {
                const Icon = tech in icons ? icons[tech as keyof typeof icons] : null

                if (!Icon) return null

                return (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="flex items-center gap-2 px-3 py-1.5 text-sm font-normal bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 dark:bg-teal-900/20 dark:text-teal-300 dark:border-teal-800 dark:hover:bg-teal-900/30 transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                    {tech}
                  </Badge>
                )
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      ))}
    </ScrollArea>
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <SkillsContent />
        </div>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer ml-4 flex items-center gap-2 px-2 py-2 text-sm shadow-sm border-zinc-400 dark:border-zinc-700 hover:bg-green-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
            >
              <Expand className="w-4 h-4" />
              Expand
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-green-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 break-words leading-6 transition-colors duration-500">
            {/* close button */}
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer absolute -top-[48px] right-4 px-2 py-2 text-sm shadow-sm border-zinc-400 dark:border-zinc-700 hover:bg-orange-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
              onClick={() => setOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
            <Article className="px-5 mx-auto max-w-3xl">
              <DrawerHeader>
                <DrawerTitle className="text-2xl text-left md:text-center ">Technical Skills Overview</DrawerTitle>
                <DrawerDescription className="text-center hidden md:block">
                  A comprehensive view of my technical expertise across different domains
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <SkillsContent isDrawer={true} />
              </div>
            </Article>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

export default Skills
