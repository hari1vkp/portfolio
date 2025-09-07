"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "Auto Cloud",
      description: "Developed a cloud services portal integrating AWS, Azure, and GCP. Contributed to backend development using Java and Spring Boot. Implemented multi-cloud API integration and authentication.",
      technologies: ["Java", "Spring Boot", "AWS", "Azure", "GCP"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Web Development Internship Project",
      description: "Built Java applications using Spring Boot. Integrated REST APIs and managed cloud services. Used API to trigger Terraform IAAC. Improved performance and security.",
      technologies: ["Java", "Spring Boot", "REST APIs", "Terraform", "Cloud Services"],
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my Java development work and real-world applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl}>GitHub</a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl}>Live Demo</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}