import React from 'react';
import { Thermometer, Droplets, Wifi, Globe, CloudLightning, AlertCircle, CheckCircle } from 'lucide-react';

const HumidiTempPoster = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-green-400 p-8 rounded-lg shadow-lg text-white max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">HumidiTemp</h1>
      <h2 className="text-2xl font-semibold mb-6 text-center">The Ultimate Lightweight Home Temperature and Humidity Monitor</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="flex items-center">
          <Thermometer className="w-12 h-12 mr-4" />
          <p>Uses DHT11 sensor for accurate measurements</p>
        </div>
        <div className="flex items-center">
          <CloudLightning className="w-12 h-12 mr-4" />
          <p>Powered by FireBeetle ESP32E lightweight computer</p>
        </div>
        <div className="flex items-center">
          <Globe className="w-12 h-12 mr-4" />
          <p>Monitor from anywhere with internet connection</p>
        </div>
        <div className="flex items-center">
          <Wifi className="w-12 h-12 mr-4" />
          <p>Compatible with Blynk Smart Home</p>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-20 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>State-of-the-art data collection techniques</li>
          <li>Real-time temperature and humidity monitoring</li>
          <li>Easy integration with smart home systems</li>
          <li>Compact and lightweight design</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-red-600 bg-opacity-70 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 mr-2" />
            The Problem
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Mould growth in homes</li>
            <li>Food spoiling before expiry dates</li>
            <li>Inconsistent humidity levels</li>
            <li>Health risks from poor air quality</li>
          </ul>
        </div>
        <div className="bg-green-600 bg-opacity-70 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2" />
            The Solution
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Maintains constant humidity levels</li>
            <li>Prevents mould formation</li>
            <li>Extends food freshness</li>
            <li>Improves overall air quality</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-2xl font-bold">Stay comfortable. Stay healthy. Stay informed.</p>
        <p className="text-lg mt-2">Get your HumidiTemp today and breathe easier!</p>
      </div>
    </div>
  );
};

export default HumidiTempPoster;
