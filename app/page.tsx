import {Authentication} from "@/components/Authentication/Authentication";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Authentication />
      </main>
  );
}