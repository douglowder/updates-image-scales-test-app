import { Image, Text, View } from "react-native";
import React, { useState } from "react";
import { TaskScreenProps } from "@navigation";
import Checkbox from "react-native-ui-lib/checkbox";

const snoozeIcon = require("@assets/icons/snooze.png");
const returnIcon = require("@assets/icons/return.png");

export default function Tasks({ route, navigation }: TaskScreenProps) {
  const [taskView, setTaskView] = useState<"Active" | "Snoozed" | "Completed">("Active");

  const [showRefreshControlIndicator, setShowRefreshControlIndicator] = useState(false);
  const [checked, setChecked] = useState(false);

  let isFetching = false;
  let isRefetching = false;
  let selectedTasks = [
    {
      TaskID: "1",
      TaskName: "Task 1",
      TaskDescription: "Task 1 Description",
      TaskDueDate: "12/12/2021",
      TaskType: "Task 1 Type",
      TaskStatus: "Active",
      TaskPriority: "High",
      DisplayName: "Task 1 Display Name",
      PlayerID: "1",
    },
  ];

  React.useEffect(() => {
    if (!isRefetching) {
      setShowRefreshControlIndicator(false);
    }
  }, [isFetching, showRefreshControlIndicator]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "flex-start", height: 600, width: 500 }}>
        <View>
          <Text>This icon has multiple sizes available</Text>
          <Image source={snoozeIcon} style={{ width: 24, height: 24 }} />
          <Text>This icon has only one size available</Text>

          <Image source={returnIcon} style={{ width: 24, height: 24 }} />
          <Text>This checkbox has multple sizes available in the node modules</Text>

          <Checkbox
            value={checked}
            // selectedIcon={require("@assets/icons/check-simple.png")}
            style={[{ borderWidth: 1, borderRadius: 4 }]}
            // containerStyle={{ borderRadius: 0 }}
            borderRadius={4}
            onValueChange={setChecked}
          />
        </View>
      </View>
    </View>
  );
}
