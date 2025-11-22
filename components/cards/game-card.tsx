import { View, Text, Image, Pressable } from "react-native";
import {
  IconCalendar,
  IconMapPin,
  IconUsers,
} from "@tabler/icons-react-native";
import React from "react";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

interface GameCardProps {
  image: string;
  sport: string;
  title: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  status?: "open" | "full" | "upcoming";
}

export default function GameCard({
  image,
  sport,
  title,
  date,
  time,
  location,
  participants,
  maxParticipants,
  status = "open",
}: GameCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "open":
        return "bg-yellow-400 text-black";
      case "full":
        return "bg-red-500 text-white";
      case "upcoming":
        return "bg-gray-300 text-black";
      default:
        return "bg-yellow-400 text-black";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "open":
        return "Open";
      case "full":
        return "Full";
      case "upcoming":
        return "Upcoming";
      default:
        return "Open";
    }
  };

  const isFull = status === "full";

  return (
    <StyledPressable className="rounded-xl bg-white shadow-lg overflow-hidden mb-4">
      {/* IMAGE */}
      <View className="w-full aspect-[4/3] relative">
        <Image
          source={{ uri: image }}
          className="w-full h-full"
          resizeMode="cover"
        />

        {/* Sport Badge */}
        <View
          className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-medium ${getStatusColor()}`}
        >
          <Text className="font-medium">{sport}</Text>
        </View>

        {/* Game Status */}
        <View
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium ${getStatusColor()}`}
        >
          <Text className="font-medium">{getStatusText()}</Text>
        </View>
      </View>

      {/* CONTENT */}
      <View className="p-4 space-y-3">
        {/* Title */}
        <Text className="text-lg font-semibold">{title}</Text>

        {/* Date + Time */}
        <View className="flex-row items-center gap-2">
          <IconCalendar size={18} />
          <Text className="text-gray-600">{date}</Text>
          <Text className="text-gray-400">•</Text>
          <Text className="text-gray-600">{time}</Text>
        </View>

        {/* Location */}
        <View className="flex-row items-center gap-2">
          <IconMapPin size={18} />
          <Text className="text-gray-600">{location}</Text>
        </View>

        {/* Participants */}
        <View className="flex-row items-center gap-2">
          <IconUsers size={18} />
          <Text className="text-black font-medium">
            {participants}/{maxParticipants}
          </Text>
          <Text className="text-gray-600">participants</Text>
        </View>

        {/* Action Button */}
        <Pressable
          disabled={isFull}
          className={`
            mt-2 w-full py-3 rounded-lg border border-black 
            ${isFull ? "bg-gray-300" : "bg-black"}
          `}
        >
          <Text
            className={`
              text-center font-medium uppercase 
              ${isFull ? "text-black" : "text-white"}
            `}
          >
            {isFull ? "Game Full" : "Join Game"}
          </Text>
        </Pressable>
      </View>
    </StyledPressable>
  );
}
