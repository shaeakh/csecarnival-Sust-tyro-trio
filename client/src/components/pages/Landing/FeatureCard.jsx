
'use client';
import { Card } from 'flowbite-react';
export default function FeatureCard() {
  return (
    <Card
        className="w max-w-sm m-3 border border-black"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://thestarglobalschool.com/wp-content/uploads/2021/07/4.png"
    >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Simplifying Life's Demands with Consistent Habits
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        In our fast-paced world, adhering to a structured routine streamlines tasks, reduces decision fatigue, and enhances productivity. A well-designed routine fosters efficiency, consistency, and mental clarity, ultimately lightening the burden of daily responsibilities.
        </p>
    </Card>
  );
}
