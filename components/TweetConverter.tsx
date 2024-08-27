import { TweetConverterForm } from "./TweetConverterForm";

async function convertTweet(formData: FormData) {
  "use server";
  const inputText = formData.get("inputText") as string;
  const tone = parseInt(formData.get("tone") as string);
  const length = parseInt(formData.get("length") as string);

  return `Converted tweet (Tone: ${tone}, Length: ${length}): ${inputText.substring(
    0,
    length
  )}`;
}

const TweetConverter = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tweet Converter</h1>
      <TweetConverterForm convertTweet={convertTweet} />
    </div>
  );
};

export default TweetConverter;
