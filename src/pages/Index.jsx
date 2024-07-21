import { Button } from "@/components/ui/button";

const HelloWorld = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Hello, World!</h1>
      <Button>Click me</Button>
    </div>
  );
};

export default HelloWorld;