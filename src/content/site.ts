import { assetPath } from "@/lib/assetPath";

export const site = {
  name: "Yancie Troy Saludo",
  email: "yanciesaludo14@gmail.com",
  linkedin: "https://linkedin.com/in/troy-saludo/",
  location: "Rizal, Philippines",
  resumes: [
    { label: "Product Designer résumé", href: assetPath("/resume/Yancie-Troy-Saludo-Product-Designer.pdf") },
    { label: "Design Engineer résumé", href: assetPath("/resume/Yancie-Troy-Saludo-Product-Design-Engineer.pdf") },
  ],
} as const;
