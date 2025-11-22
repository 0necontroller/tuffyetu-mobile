import { useMemo, useState } from "react";
import { Link, router } from "expo-router";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ui/text";
import { icons, images } from "@/constants";
import InputField from "@/components/ui/input";
import CustomButton from "@/components/ui/button";
import { Text } from "react-native";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";

const SPORTS = [
  { id: "badminton", name: "Badminton", image: images.onboarding1 },
  { id: "football", name: "Football", image: images.onboarding2 },
  { id: "box-cricket", name: "Box Cricket", image: images.onboarding3 },
  { id: "pickleball", name: "Pickleball", image: images.getStarted },
  { id: "tennis", name: "Tennis", image: images.onboarding1 },
  { id: "table-tennis", name: "Table Tennis", image: images.onboarding2 },
  { id: "basketball", name: "Basketball", image: images.onboarding3 },
  { id: "rugby", name: "Rugby", image: images.getStarted },
];

export default function FavouriteSport() {
  const colorScheme = useColorScheme();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SPORTS;
    return SPORTS.filter((s) => s.name.toLowerCase().includes(q));
  }, [query]);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }: { item: (typeof SPORTS)[0] }) => {
    const isSelected = selected.includes(item.id);
    return (
      <TouchableOpacity
        onPress={() => toggleSelect(item.id)}
        className="w-1/2 p-2"
      >
        <View className="rounded-2xl overflow-hidden bg-gray-200 shadow-md">
          <Image
            source={item.image}
            className="w-full h-40"
            resizeMode="cover"
          />
          <View
            className={`absolute left-0 right-0 bottom-0 px-2 py-1 ${
              isSelected ? "bg-black/40" : "bg-black/30"
            }`}
          >
            <Text className="text-white font-JakartaSemiBold">{item.name}</Text>
          </View>
          {isSelected && (
            <View className="absolute flex items-center justify-center bg-primary">
              <Entypo name="check" size={56} color="black" />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <View className="pt-4 px-2 flex-row items-center justify-between">
        <TouchableOpacity className="p-0.5">
          <Link dismissTo href="/(auth)/sign-up">
            <Entypo name="chevron-thin-left" size={20} color="black" />
          </Link>
        </TouchableOpacity>
        <Text className="font-JakartaSemiBold">
          {String(selected.length).padStart(1, "0")} SELECTED
        </Text>
      </View>

      <View className="mt-4">
        <ThemedText type="subtitle" className="px-4">
          Pick your favourites
        </ThemedText>
        <View className="mt-1 rounded-2xl p-3">
          <InputField
            placeholder="Type 'Cycling'"
            icon={icons.search}
            value={query}
            onChangeText={setQuery}
            colorScheme={colorScheme ?? "light"}
          />
        </View>
      </View>

      <View className="px-1 flex-1 bg-gray-100">
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 12, paddingTop: 12 }}
        />
      </View>

      <View className="p-4">
        <CustomButton
          title="LET'S GO"
          onPress={() => router.replace("/(root)/(tabs)")}
          className="p-4 shadow-lg"
        />
      </View>
    </SafeAreaView>
  );
}
