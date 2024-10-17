import { ActionPanel, List, Action, Icon, showHUD, popToRoot } from "@raycast/api";
import { exec } from "child_process";
import { useState, useEffect } from "react";

interface RotationOption {
  title: string;
  degree: number;
  icon: Icon;
}

const rotationOptions: RotationOption[] = [
  { title: "正常", degree: 0, icon: Icon.Circle },
  { title: "顺时针 90°", degree: 90, icon: Icon.ChevronRight },
  { title: "180°", degree: 180, icon: Icon.ChevronDown },
  { title: "逆时针 90°", degree: 270, icon: Icon.ChevronLeft },
];

export default function Command() {
  const [currentRotation, setCurrentRotation] = useState<number>(0);

  useEffect(() => {
    getCurrentRotation();
  }, []);

  const getCurrentRotation = () => {
    exec("/usr/sbin/system_profiler SPDisplaysDataType | grep Rotation", (error, stdout) => {
      if (error) {
        console.error(`执行错误: ${error}`);
        return;
      }
      const match = stdout.match(/Rotation: (\d+)/);
      if (match) {
        setCurrentRotation(parseInt(match[1]));
      }
    });
  };

  const rotateScreen = (degree: number) => {
    const command = `/opt/homebrew/bin/displayplacer degree:${degree}`;

    exec(command, async (error) => {
      if (error) {
        console.error(`执行错误: ${error}`);
        await showHUD("旋转失败");
      } else {
        setCurrentRotation(degree);
        await showHUD("旋转成功");
      }

      // 返回到主界面
      await popToRoot();
    });
  };

  return (
    <List>
      {rotationOptions.map((option) => (
        <List.Item
          key={option.degree}
          icon={option.icon}
          title={option.title}
          accessories={[{ icon: currentRotation === option.degree ? Icon.CheckCircle : Icon.Circle }]}
          actions={
            <ActionPanel>
              <Action title={`旋转到 ${option.title}`} onAction={() => rotateScreen(option.degree)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
