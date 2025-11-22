import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { styled } from "nativewind";
import LeaderboardCard, { ILeaderboardEntry } from "../cards/leaderboard-card";
import LeaderboardLeft from "../icons/leaderboard-left";
import LeaderboardRight from "../icons/leaderboard-right";

const StyledView = styled(View);

const leaderboardData: ILeaderboardEntry[] = [
  {
    rank: 1,
    name: "Bosnia Patriots",
    avatar:
      "https://tradeflow-electron-images.s3-ap-southeast-2.amazonaws.com/avatars/11/9745062e-71a2-4830-a4ae-c1628d366c29.jpg",
    gain: "50",
    balance: "44",
    drawdown: "85.7%",
    isVerified: true,
  },
  {
    rank: 2,
    name: "Kilimani Eagles",
    avatar:
      "https://tradeflow-electron-images.s3-ap-southeast-2.amazonaws.com/avatars/52/0554281a-f4d1-4eb6-b11b-f3fa6c3f14ed.jpg",
    gain: "43",
    balance: "31",
    drawdown: "78.9%",
    isVerified: true,
  },
  {
    rank: 3,
    name: "Simba SC",
    avatar:
      "https://tradeflow-electron-images.s3-ap-southeast-2.amazonaws.com/avatars/115/83f278d0-0889-4b46-86e8-3486c70a4197.jpg",
    gain: "32",
    balance: "24",
    drawdown: "73.7%",
    isVerified: false,
  },
];

const Top3Leaderboard: FC = () => {
  return (
    <StyledView className="bg-gray-100 dark:bg-gray-800 my-4 flex min-h-[330px] flex-col items-center justify-between rounded-xl border border-gray-300">
      {/* Top 3 Title */}
      <StyledView className="flex-row items-center gap-1 pt-5">
        <Image
          source={require("../../assets/leaderboard/top3.webp")}
          style={{ width: 14, height: 10, resizeMode: "contain" }}
        />
        <Text className="text-base font-medium">Top 3 Leaderboard</Text>
      </StyledView>

      {/* Background SVGs */}
      <StyledView className="relative flex w-full flex-1 items-center justify-between px-4 py-8">
        <LeaderboardLeft />
        <LeaderboardRight />

        {/* Mobile Layout (1st place only) */}
        <StyledView className="lg:hidden flex-row items-center justify-center min-h-[274px] w-full gap-x-2">
          <LeaderboardCard
            entry={leaderboardData[0]}
            rankImage={require("../../assets/leaderboard/1.png")}
          />
        </StyledView>

        {/* Desktop Layout (Top 3) */}
        <StyledView className="hidden lg:flex-row items-center justify-center min-h-[274px] w-[595px] gap-x-2">
          {leaderboardData.map((entry) => (
            <LeaderboardCard
              key={entry.name}
              entry={entry}
              rankImage={require(`../../assets/leaderboard/${entry.rank}.png`)}
            />
          ))}
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Top3Leaderboard;
