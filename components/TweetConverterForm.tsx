"use client";

import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Slider } from "~/components/ui/slider";
import { Textarea } from "~/components/ui/textarea";

interface TweetConverterFormProps {
  convertTweet: (formData: FormData) => Promise<string>;
}

export const TweetConverterForm: React.FC<TweetConverterFormProps> = ({
  convertTweet,
}) => {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const convertedTweet = await convertTweet(formData);
    setResult(convertedTweet);
  };

  return (
    <>
      <form action={handleSubmit}>
        <Textarea
          name="inputText"
          placeholder="Enter your text here"
          className="mb-4"
        />

        <div className="mb-4">
          <label className="block mb-2">Tone Adjustment</label>
          <Slider name="tone" min={0} max={100} step={1} defaultValue={[50]} />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Length (characters)</label>
          <Input
            name="length"
            type="number"
            defaultValue={140}
            min={1}
            max={280}
          />
        </div>

        <Button type="submit" className="mb-4">
          Convert to Tweet
        </Button>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold mb-2">Converted Tweet:</h2>
          <p>{result}</p>
        </div>
      )}
    </>
  );
};
