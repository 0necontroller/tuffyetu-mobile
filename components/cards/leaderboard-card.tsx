import { View, Text, Image } from "react-native";
import {
  IconTrophy,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react-native";
import React from "react";

export interface ILeaderboardEntry {
  rank: number;
  avatar: string;
  name: string;
  isVerified: boolean;
  gain: number | string;
  balance: number | string;
  drawdown: number | string;
}

export default function LeaderboardCard({
  entry,
  rankImage,
}: {
  entry: ILeaderboardEntry;
  rankImage: string;
}) {
  return (
    <View className="bg-white border border-gray-300 min-h-[250px] max-w-[193px] flex-1 rounded-xl p-3 shadow-sm">
      {/* Rank Header */}
      <View className="flex-row items-center w-full gap-x-2">
        <Text className="text-[12px] font-semibold tracking-wide uppercase">
          Rank
        </Text>

        {/* Rank Image + Rank Number */}
        <View className="relative h-4 w-5 mr-3">
          <Image
            source={{ uri: rankImage }}
            resizeMode="contain"
            className="absolute inset-0 h-full w-full"
          />

          <View className="bg-yellow-400 h-2.5 w-2.5 rounded-full border border-black absolute left-1/2 -translate-x-1/2 top-1 flex items-center justify-center">
            <Text className="text-[8px] font-bold text-black">
              {entry.rank}
            </Text>
          </View>
        </View>

        {entry.rank === 1 && <IconTrophy size={16} />}
      </View>

      {/* Avatar */}
      <View className="mt-4 items-center relative">
        <Image
          source={{ uri: entry.avatar }}
          className="h-[100px] w-[100px] rounded-full border-2 border-yellow-300"
          resizeMode="cover"
        />

        {entry.rank <= 3 && (
          <View className="absolute -right-1 -bottom-1 bg-yellow-400 border-2 border-black h-8 w-8 rounded-full flex items-center justify-center">
            <Text className="text-xs font-bold text-black">#{entry.rank}</Text>
          </View>
        )}
      </View>

      {/* Name + Verified */}
      <View className="mt-3 flex-row items-center justify-center gap-x-1">
        <Text className="text-sm font-semibold text-center">{entry.name}</Text>

        {entry.isVerified && <IconRosetteDiscountCheckFilled size={16} />}
      </View>

      {/* Stats */}
      <View className="mt-3 w-full flex-col items-center gap-y-2">
        {/* Points */}
        <View className="flex-row w-full justify-between px-1">
          <Text className="text-xs text-gray-500">Points</Text>
          <Text className="bg-yellow-400/20 rounded-md px-2 py-0.5 text-sm font-bold">
            {entry.gain}
          </Text>
        </View>

        {/* Games Won */}
        <View className="flex-row w-full justify-between px-1">
          <Text className="text-xs text-gray-500">Games Won</Text>
          <Text className="bg-yellow-400/20 rounded-md px-2 py-0.5 text-sm font-bold">
            {entry.balance}
          </Text>
        </View>

        {/* Win Rate */}
        <View className="flex-row w-full justify-between px-1">
          <Text className="text-xs text-gray-500">Win Rate</Text>
          <Text className="bg-yellow-400/20 rounded-md px-2 py-0.5 text-sm font-bold">
            {entry.drawdown}
          </Text>
        </View>
      </View>
    </View>
  );
}
