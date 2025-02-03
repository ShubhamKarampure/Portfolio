import React, { useState } from 'react';
import { PlaceholdersAndVanishInput } from "../sub/vanish-placeholder";
import { TextGenerateEffect } from '../sub/text-generate-effect';
import { SyncLoader } from 'react-spinners';
const API_URL = 'https://resume-api-one.vercel.app/about-me';

export function AIPlaceholder(): JSX.Element {
  const [message, setMessage] = useState<string>("Ask anything about me!");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const placeholders: string[] = [
    "What are your skills?",
    "What projects have you built?",
    "What are your hobbies?",
    "How many hackathons have you won?",
    "Your favourite tech stack?",
  ];

  const handleSubmit = async (userMessage: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.response);

      setTimeout(() => {
        setMessage("Ask anything about me!");
      }, 10000);
    } catch (err) {
      setError((err as Error).message);
      setMessage("Sorry, there was an error processing your request.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto h-[450px] border-2 border-white rounded-xl flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <SyncLoader speedMultiplier={0.7} size={30} color='white'/>
           
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex items-center justify-center p-7 text-red-500">
            {error}
          </div>
        ) : (
          <div className="absolute inset-0 flex text-white items-center justify-center p-7">
            <TextGenerateEffect words={message} />
          </div>
        )}
      </div>
      <div className="p-4 border-t border-white">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AIPlaceholder;
