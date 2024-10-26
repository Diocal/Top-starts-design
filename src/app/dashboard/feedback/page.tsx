"use client";

import React, { useState } from "react";

import * as Sentry from "@sentry/nextjs";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

interface SendFeedbackParams {
  name: string;
  email: string;
  comments: string;
}

const SentryFeedbackButton: React.FC = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState<boolean>(false);
  const [feedbackData, setFeedbackData] = useState<SendFeedbackParams>({
    name: "",
    email: "",
    comments: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowFeedbackForm(false);
    setFeedbackData({ name: "", email: "", comments: "" });

    // You can also send the feedback to your API here
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error submitting feedback:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Give us some Feedback</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedbackData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedbackData.email}
          onChange={handleInputChange}
          required
        />
        <Textarea
          name="comments"
          placeholder="Your Feedback"
          value={feedbackData.comments}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Submit Feedback</Button>
      </form>
    </div>
  );
};

export default SentryFeedbackButton;
