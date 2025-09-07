"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, Phone } from "lucide-react";

export function Hero() {
  const skills = ["Java", "Spring Boot", "AWS", "MySQL", "JavaScript"];
  
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Hi, I&apos;m <span className="text-primary">Hariharasudhan R</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-muted-foreground mb-6">
            Java Full Stack Developer
          </h2>
          <p className="mt-4 text-lg max-w-2xl mb-8">
            Passionate and skilled Java Developer with hands-on experience in building robust applications 
            using Java, Spring Boot, and AWS. Strong understanding of Data Structures and Algorithms, 
            and proficient in SQL with JDBC. Experienced in full-stack development with JavaScript and Java.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex gap-4 mb-12">
            <a href="https://github.com/hari1vkp" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:hariharasudhan.info02@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <a href="tel:+918667637540">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-muted-foreground">SRM Arts and Science College, Trichy | [2020-2023]</p>
              <h3 className="font-semibold mt-4">Master of Computer Application (MCA)</h3>
              <p className="text-muted-foreground">Srinivasan College of Arts and Science | [2024-2026]</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold">Web Dev Intern</h3>
              <p className="text-muted-foreground">Cloud Garage | Oct 2024 - March 2025</p>
              <ul className="mt-2 list-disc list-inside text-muted-foreground">
                <li>Built Java applications using Spring Boot</li>
                <li>Integrated REST APIs and managed cloud services</li>
                <li>Used API to trigger Terraform IAAC</li>
                <li>Improved performance and security</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}