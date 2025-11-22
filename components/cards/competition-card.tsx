import { View, Text, Image, Pressable } from "react-native";
import {
  IconCalendar,
  IconUsers,
  IconTrophy,
  IconMapPin,
} from "@tabler/icons-react-native";
import React from "react";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

interface CompetitionCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  startDate: string;
  endDate: string;
  location: string;
  teams: number;
  maxTeams: number;
  prizePool: string;
  status: "ongoing" | "upcoming" | "full" | "completed";
}

export default function CompetitionCard({
  id,
  image,
  title,
  category,
  startDate,
  endDate,
  location,
  teams,
  maxTeams,
  prizePool,
  status,
}: CompetitionCardProps) {
  const getStatusBadge = () => {
    const styles = {
      ongoing: "bg-green-500 text-white",
      upcoming: "bg-blue-500 text-white",
      full: "bg-red-500 text-white",
      completed: "bg-gray-500 text-white",
    };

    const labels = {
      ongoing: "On-Going",
      upcoming: "Upcoming",
      full: "Full",
      completed: "Completed",
    };

    return (
      <View className={`px-2 py-1 rounded-full ${styles[status]}`}>
        <Text className="text-xs font-semibold">{labels[status]}</Text>
      </View>
    );
  };

  const isFull = teams >= maxTeams || status === "full";

  return (
    <StyledPressable
      className="rounded-2xl bg-white shadow-lg overflow-hidden mb-4"
      onPress={() => console.log("Navigate to competition:", id)}
    >
      {/* IMAGE */}
      <View className="w-full aspect-video relative">
        <Image
          source={{ uri: image }}
          className="w-full h-full"
          resizeMode="cover"
        />

        {/* Category */}
        <View className="absolute top-3 left-3 bg-yellow-400 px-3 py-1 rounded-full border border-black">
          <Text className="text-xs font-semibold">{category}</Text>
        </View>

        {/* Status Badge */}
        <View className="absolute top-3 right-3">{getStatusBadge()}</View>
      </View>

      {/* CONTENT */}
      <View className="p-4 space-y-3">
        <Text className="text-xl font-bold">{title}</Text>

        {/* Dates */}
        <View className="flex-row items-center gap-2">
          <IconCalendar size={20} />
          <Text className="text-gray-600">
            {startDate} - {endDate}
          </Text>
        </View>

        {/* Location */}
        <View className="flex-row items-center gap-2">
          <IconMapPin size={20} />
          <Text className="text-gray-600">{location}</Text>
        </View>

        {/* Teams */}
        <View className="flex-row items-center gap-2">
          <IconUsers size={20} />
          <Text className="text-black font-medium">
            {teams}/{maxTeams}
          </Text>
          <Text className="text-gray-600">teams registered</Text>
        </View>

        {/* Prize */}
        <View className="flex-row items-center gap-2 mt-1">
          <IconTrophy size={22} />
          <Text className="text-xl font-bold">{prizePool}</Text>
        </View>

        {/* Button */}
        <Pressable
          disabled={isFull || status === "completed"}
          className={`
            mt-4 w-full py-3 border border-black rounded-lg 
            ${isFull || status === "completed" ? "bg-gray-300" : "bg-black"}
          `}
        >
          <Text
            className={`text-center uppercase ${
              isFull || status === "completed" ? "text-black" : "text-white"
            }`}
          >
            {status === "completed"
              ? "View Results"
              : isFull
              ? "Competition Full"
              : "View Details"}
          </Text>
        </Pressable>
      </View>
    </StyledPressable>
  );
}
