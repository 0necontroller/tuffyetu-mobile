import { View, Text, Image, Pressable } from "react-native";
import { IconStarFilled, IconMapPin } from "@tabler/icons-react-native";
import React from "react";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

interface VenueCardProps {
  image: string;
  category: string;
  title: string;
  rating: number;
  reviews: number;
  location: string;
  price: number;
  priceUnit?: string;
}

export default function VenueCard({
  image,
  category,
  title,
  rating,
  reviews,
  location,
  price,
  priceUnit = "/hour",
}: VenueCardProps) {
  return (
    <StyledPressable className="rounded-xl bg-white shadow-lg overflow-hidden mb-4">
      {/* Image Section */}
      <View className="w-full aspect-[4/3] relative">
        <Image
          source={{ uri: image }}
          className="w-full h-full"
          resizeMode="cover"
        />

        {/* Category Badge */}
        <View className="absolute top-3 left-3 bg-yellow-400 rounded-full px-3 py-1">
          <Text className="text-black text-xs font-medium">{category}</Text>
        </View>
      </View>

      {/* Content Section */}
      <View className="space-y-2 p-4">
        {/* Title */}
        <Text className="text-lg font-semibold">{title}</Text>

        {/* Rating and Location */}
        <View className="flex-row items-center gap-3 text-sm">
          {/* Rating */}
          <View className="flex-row items-center gap-1">
            <IconStarFilled size={16} />
            <Text className="text-black font-medium">{rating}</Text>
            <Text>({reviews} reviews)</Text>
          </View>

          {/* Location */}
          <View className="flex-row items-center gap-1">
            <IconMapPin size={16} />
            <Text>{location}</Text>
          </View>
        </View>

        {/* Price */}
        <View className="pt-1">
          <Text className="text-black text-2xl font-bold">
            Ksh {price}{" "}
            <Text className="text-gray-500 text-sm font-normal">
              {priceUnit}
            </Text>
          </Text>
        </View>
      </View>
    </StyledPressable>
  );
}
