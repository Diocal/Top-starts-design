"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
interface CardProps {
  sp: number;
  title: string;
  description: string;
  members: string;
  rating: string;
  language: string;
  tags: string[];
}

function CardComponent({ sp, title, description, members, rating, language }: CardProps) {
  return (
    <div className="inline-flex space-x-4">
                    {section.data.map((card, cardIdx) => (
                      <Card
                        key={cardIdx}
                        className="relative w-[342px] flex-shrink-0 p-4"
                        style={{
                          backgroundColor: "hsl(var(--tab-bg-inactive))",
                          border: "none",
                        }}
                      >
                        <div
                          className="absolute right-2 top-2 flex items-center"
                          style={{
                            fontFamily: "Work Sans, sans-serif",
                            fontSize: "12px",
                            fontWeight: "300",
                            lineHeight: "16px",
                            letterSpacing: "2.5px",
                            color: "hsl(var(--tab-bg-active))",
                          }}
                        >
                          <img
                            src="/star.png"
                            alt="Star Icon"
                            className="mr-1 h-4 w-4"
                          />
                          <span>{card.sp} SP</span>
                        </div>
                        <div className="mb-3 flex items-start">
                          <img
                            src="/avatar1.png"
                            alt="Avatar Icon"
                            className="mr-4 h-16 w-16 rounded-full"
                          />
                          <div>
                            <h3
                              className="text-white"
                              style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "14px",
                                fontWeight: "600",
                                lineHeight: "20px",
                                letterSpacing: "0.12px",
                              }}
                            >
                              {card.title}
                            </h3>
                            <p
                              className="mb-2 mt-1 whitespace-pre-line"
                              style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "12px",
                                fontWeight: "500",
                                lineHeight: "16px",
                                letterSpacing: "0.6px",
                                color: "hsl(var(--subtle-light))",
                              }}
                            >
                              {card.description}
                            </p>
                            <div className="flex items-center space-x-3 text-sm text-gray-400">
                              <div className="flex items-center space-x-1 text-[hsl(var(--icon-color))]">
                                <img
                                  src="/users1.png"
                                  alt="Users Icon"
                                  className="h-4 w-4 object-contain"
                                />
                                <span
                                  style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    lineHeight: "16px",
                                    letterSpacing: "0.6px",
                                    color: "hsl(var(--subtle-light))",
                                  }}
                                >
                                  {card.members}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <img
                                  src="/star.png"
                                  alt="Rating Icon"
                                  className="h-4 w-4"
                                />
                                <span
                                  style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    lineHeight: "16px",
                                    letterSpacing: "0.6px",
                                    color: "hsl(var(--subtle-light))",
                                  }}
                                >
                                  {card.rating}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <img
                                  src="/translate.png"
                                  alt="Language Icon"
                                  className="h-4 w-4"
                                />
                                <span
                                  style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    lineHeight: "16px",
                                    letterSpacing: "0.6px",
                                    color: "hsl(var(--subtle-light))",
                                  }}
                                >
                                  {card.language}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ml-[45px] mt-[-5px] flex justify-center space-x-2">
                          <Button
                            variant="default"
                            className="px-3 py-1 text-[12px] font-medium leading-[16px] tracking-[0.6px]"
                            style={{
                              fontFamily: "Work Sans, sans-serif",
                              color: "white",
                              backgroundColor: "black",
                            }}
                          >
                            Information
                          </Button>
                          <Button
                            variant="default"
                            className="px-3 py-1 text-[12px] font-medium leading-[16px] tracking-[0.6px]"
                            style={{
                              fontFamily: "Work Sans, sans-serif",
                              color: "white",
                              backgroundColor: "black",
                            }}
                          >
                            Entertainment
                          </Button>
                        </div>
                      </Card>
  );
}

export default CardComponent;
