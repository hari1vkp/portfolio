"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Spring Boot", "Bootstrap"]
    },
    {
      category: "Databases",
      skills: ["MySQL"]
    },
    {
      category: "Cloud Technologies",
      skills: ["AWS (EC2, S3, Lambda, RDS)"]
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Tools & Version Control",
      skills: ["Git", "GitHub"]
    },
    {
      category: "Software Development Concepts",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Software Licensing & Open Source"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build robust, scalable Java applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}