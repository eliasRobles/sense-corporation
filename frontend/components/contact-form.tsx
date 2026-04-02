"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const services = [
  "Custom Software Development",
  "Cloud & Infrastructure",
  "Digital Transformation",
  "Process Automation",
  "Identity & Access Management",
  "IT Operations & Support",
  "Other",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form");
      }

      setSubmitStatus("success");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card enableHoverEffect={false} className="shadow-sm hover:shadow-lg hover:scale-100 transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Send us a message</CardTitle>
        <CardDescription>
          &nbsp;
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              {...register("email")}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Company */}
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Company <span className="text-destructive">*</span>
            </label>
            <Input
              id="company"
              placeholder="Acme Corporation"
              {...register("company")}
              disabled={isSubmitting}
            />
            {errors.company && (
              <p className="text-sm text-destructive">{errors.company.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              {...register("phone")}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {/* Service */}
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium">
              Service Interest <span className="text-destructive">*</span>
            </label>
            <select
              id="service"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register("service")}
              disabled={isSubmitting}
            >
              <option value="">Select a service...</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-sm text-destructive">{errors.service.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message <span className="text-destructive">*</span>
            </label>
            <Textarea
              id="message"
              placeholder="Tell us about your project or inquiry..."
              rows={6}
              {...register("message")}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Status Messages */}
          {submitStatus === "success" && (
            <div className="flex items-center gap-2 p-4 rounded-md bg-green-500 dark:bg-green-950/20 text-white dark:text-green-400 border border-green-600 dark:border-green-800" style={{ backgroundColor: 'rgb(34 197 94)', color: 'white' }}>
              <CheckCircle2 className="w-5 h-5" />
              <p className="text-sm font-medium">
                Message sent successfully! We'll be in touch soon.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 p-4 rounded-md bg-red-500 dark:bg-red-950/20 text-white dark:text-red-400 border border-red-600 dark:border-red-800" style={{ backgroundColor: 'rgb(239 68 68)', color: 'white' }}>
              <AlertCircle className="w-5 h-5" />
              <p className="text-sm font-medium">{errorMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
