import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Calculator = () => {
  const [result, setResult] = useState(6); // Starting with the result of 3+3

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Simple Calculator</h1>
        <div className="flex items-center mb-4">
          <Input 
            value="3" 
            readOnly 
            className="w-16 text-center mr-2"
          />
          <span className="text-xl mr-2">+</span>
          <Input 
            value="3" 
            readOnly 
            className="w-16 text-center mr-2"
          />
          <span className="text-xl mr-2">=</span>
          <Input 
            value={result} 
            readOnly 
            className="w-16 text-center font-bold"
          />
        </div>
        <Button 
          onClick={() => setResult(3 + 3)}
          className="w-full"
        >
          Calculate
        </Button>
      </div>
    </div>
  );
};

export default Calculator;