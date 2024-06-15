"use client";

import { Button, VarianSizeType, VarianType } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

const array_btn_variants: VarianType[] = [
  "default",
  "destructive",
  "ghost",
  "link",
  "outline",
  "secondary",
  null,
];

const array_btn_sizes: VarianSizeType[] = [
  "default",
  "lg",
  "sm",
  "icon",
  null,
  undefined,
];

function firstUppercase(str: string): string {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export default function Home() {
  const [message, setMessage] = useState("");

  const onClick = (variant: VarianType, size: VarianSizeType) => () =>
    setMessage(`variant: ${variant}, size: ${size}`);

  useEffect(() => {
    const timeOutMessage = setTimeout(() => setMessage(""), 1000);
    // return a clean function
    return () => clearTimeout(timeOutMessage);
  }, [message]); // Empty dependency array indicates the effect should only run once

  const cardContentButtons = (
    <div className="flex flex-col space-y-5 flex-wrap">
      <div className="flex flex-col gap-4">
        {array_btn_variants.map((variant) => (
          <div className="flex gap-3">
            {array_btn_sizes.map((size) => (
              <Button
                key={size}
                variant={variant}
                size={size}
                onClick={onClick(variant, size)}
              >
                {size === "icon" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.26 12.535L4.795 5.153a.5.5 0 0 1 .633-.633l7.382 2.463a.5.5 0 0 1-.009.951l-3.245 1.02a.5.5 0 0 0-.328.326L8.21 12.526a.5.5 0 0 1-.952.009Zm2.103-3.46l3.468 3.467M.852 3.625l1.673.449M1.562 7.65l1.225-1.224M3.788.69l.448 1.672M7.813 1.4L6.588 2.624"
                    />
                  </svg>
                ) : (
                  firstUppercase(String(variant)) + " | " + String(size)
                )}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold my-6">Component Library</h1>

      {/* buttons */}
      <div className="border p-3 rounded">
        <h2 className="text-xl my-2">Buttons</h2>
        <div className="">
          <div>variant</div>
          <div className="flex flex-row gap-2">
            <Button
              variant="default"
              onClick={(elem) => {
                console.log(elem.target);
              }}
            >
              Click default
            </Button>
            <Button variant="destructive">Click destructive</Button>
            <Button variant="ghost">Click ghost</Button>
            <Button variant="link">Click link</Button>
            <Button variant="outline">Click outline</Button>
            <Button variant="secondary">Click secondary</Button>
          </div>
        </div>

        <div>
          <div>size</div>
          <div className="flex flex-row gap-2">
            <Button variant="default" size="default">
              Click default
            </Button>
            <Button variant="default" size="icon">
              icon
            </Button>
            <Button variant="default" size="lg">
              Click lg
            </Button>
            <Button variant="default" size="sm">
              Click sm
            </Button>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="border p-3 rounded my-4">
        <h2 className="text-xl my-2">Cards</h2>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent>{cardContentButtons}</CardContent>
            <CardFooter>
              <p className="text-xs text-gray-400 rounded-full p-2 ">
                {message}
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
