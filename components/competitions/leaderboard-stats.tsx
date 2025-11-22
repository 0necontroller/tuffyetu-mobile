import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styled } from "nativewind";
import { IconClock, IconTrophy, IconUsers } from "@tabler/icons-react-native";

const Card = styled(View);

interface LeaderboardStatsProps {
  endDate: Date;
  prizePool: string;
  totalCompetitors: number;
}

export default function LeaderboardStats({
  endDate,
  prizePool,
  totalCompetitors,
}: LeaderboardStatsProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const endTime = new Date(endDate).getTime();
      const difference = endTime - now;

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <View className="flex flex-col gap-4 md:flex-row mb-8">
      {/* Countdown Timer Card */}
      <Card className="flex-1 flex-col items-center justify-center border p-6 shadow-lg">
        <View className="flex-row items-center gap-2 mb-3">
          <View className="bg-yellow-400/10 rounded-full p-2">
            <IconClock size={24} />
          </View>
          <Text className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
            Time Remaining
          </Text>
        </View>

        {isExpired ? (
          <Text className="text-red-500 text-2xl font-bold">Expired</Text>
        ) : (
          <View className="flex-row items-center gap-2">
            {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
              <View key={unit} className="flex-col items-center">
                <View className="bg-yellow-400 min-w-[60px] rounded-lg border border-black px-3 py-2 items-center justify-center">
                  <Text className="text-2xl font-bold">
                    {formatNumber(timeLeft[unit as keyof typeof timeLeft])}
                  </Text>
                </View>
                <Text className="text-gray-500 mt-1 text-xs font-medium">
                  {unit === "seconds"
                    ? "Secs"
                    : unit.charAt(0).toUpperCase() + unit.slice(1)}
                </Text>
              </View>
            ))}
          </View>
        )}
      </Card>

      {/* Prize Pool Card */}
      <Card className="flex-1 flex-col items-center justify-center border p-6 shadow-lg">
        <View className="flex-row items-center gap-2 mb-3">
          <View className="bg-yellow-400/10 rounded-full p-2">
            <IconTrophy size={24} />
          </View>
          <Text className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
            Prize Pool
          </Text>
        </View>
        <View className="items-center">
          <Text className="text-4xl font-bold">{prizePool}</Text>
          <Text className="text-gray-500 mt-2 text-xs">
            To be distributed among winners
          </Text>
        </View>
      </Card>

      {/* Total Competitors Card */}
      <Card className="flex-1 flex-col items-center justify-center border p-6 shadow-lg">
        <View className="flex-row items-center gap-2 mb-3">
          <View className="bg-yellow-400/10 rounded-full p-2">
            <IconUsers size={24} />
          </View>
          <Text className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
            Competitors
          </Text>
        </View>
        <View className="items-center">
          <Text className="text-4xl font-bold">
            {totalCompetitors.toLocaleString()}
          </Text>
          <Text className="text-gray-500 mt-2 text-xs">
            Active participants
          </Text>
        </View>
      </Card>
    </View>
  );
}
