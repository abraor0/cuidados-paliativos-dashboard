import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type StatusProps = React.ComponentProps<typeof Card> & {
  title: string;
  value: string;
  description: string;
};

export default function Status({
  title,
  value,
  description,
  ...props
}: StatusProps) {
  return (
    <Card {...props}>
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-4xl text-primary">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">{description}</div>
      </CardContent>
    </Card>
  );
}
