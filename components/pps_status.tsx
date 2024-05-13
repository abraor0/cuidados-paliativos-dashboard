import { Card, CardContent } from "./ui/card";

interface PPSStatusProps {
  PRECOCE: number;
  AVANCADO: number;
  INICIAL: number;
}

export default function PPSStatus({
  PRECOCE,
  AVANCADO,
  INICIAL,
}: PPSStatusProps) {
  return (
    <Card>
      <CardContent>
        <div></div>
      </CardContent>
    </Card>
  );
}
