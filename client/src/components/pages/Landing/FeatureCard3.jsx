
'use client';
import { Card } from 'flowbite-react';
export default function FeatureCard3() {
  return (
    <Card
        className="max-w-sm m-3 border border-black"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://www.theladders.com/wp-content/uploads/to-do-list-190702-800x450.jpg"        
    >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Unlocking Accessibility: The Importance of Text-to-Speech Technology
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Text-to-speech (TTS) technology bridges communication gaps for visually impaired individuals, aids language learners, and enhances accessibility for diverse audiences. Its significance lies in democratizing information access and fostering inclusivity in the digital age.
        </p>
    </Card>
  );
}
