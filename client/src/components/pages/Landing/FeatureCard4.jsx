
'use client';
import { Card } from 'flowbite-react';
export default function FeatureCard4() {
  return (
    <Card
        className="max-w-sm m-3 border border-black"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://media.licdn.com/dms/image/D5612AQH9Hkz1riV5lA/article-cover_image-shrink_720_1280/0/1654634918204?e=1713398400&v=beta&t=Jp0_1Cy56n9Ji1ZcFqh5ClPRgKpa9RhN-BBHot3YZnE"        
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
