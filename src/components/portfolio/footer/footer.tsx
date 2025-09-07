"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/hari1vkp", icon: Github },
    { name: "Email", url: "mailto:hariharasudhan.info02@gmail.com", icon: Mail },
    { name: "Phone", url: "tel:+918667637540", icon: Phone },
  ];

  return (
    <footer className="py-8 border-t">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Hariharasudhan R. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button key={index} variant="ghost" size="icon" asChild>
                  <a href={social.url} aria-label={social.name}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built with Next.js and shadcn/ui
          </div>
        </div>
      </div>
    </footer>
  );
}