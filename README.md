# ScreenRotate

ScreenRotate 是一个基于 Raycast 的 macOS 屏幕旋转工具。

## 项目背景

macOS 默认不提供快捷的屏幕旋转功能，这对于需要频繁调整屏幕方向的用户来说可能会造成不便。ScreenRotate 旨在解决这个问题，为 Mac 用户提供一个简单、快速的屏幕旋转解决方案，并与 Raycast 集成以提供更便捷的操作体验。

## 功能特点

- 快速旋转屏幕方向（0°、90°、180°、270°）
- 与 Raycast 集成，提供快速访问和操作
- 支持多显示器
- 轻量级扩展，占用系统资源少

## 准备工作

在使用 ScreenRotate 之前，请确保您的系统满足以下要求：

1. macOS 10.12 或更高版本
2. 已安装 [Raycast](https://www.raycast.com/)
3. 已安装 displayplacer

### 安装 Raycast

如果您还没有安装 Raycast，请访问 [Raycast 官网](https://www.raycast.com/) 下载并安装。

### 安装 displayplacer

ScreenRotate 依赖于 displayplacer 来实现屏幕旋转功能。请按照以下步骤安装 displayplacer：

1. 打开终端（Terminal）
2. 运行以下命令：
   ```
   brew tap jakehilborn/jakehilborn && brew install displayplacer
   ```

## 安装

要安装 ScreenRotate，请按照以下步骤操作：

1. 打开 Raycast
2. 搜索 "Store" 并打开 Raycast Store
3. 在 Store 中搜索 "ScreenRotate"
4. 点击 "Install" 安装 ScreenRotate 扩展

## 使用方法

1. 打开 Raycast（默认快捷键为 `Option + 空格`）
2. 输入 "rotate" 或 "screen rotate" 以查找 ScreenRotate 命令
3. 选择所需的旋转选项：
   - Rotate 0° (Normal)
   - Rotate 90° (Clockwise)
   - Rotate 180° (Upside Down)
   - Rotate 270° (Counter-clockwise)

4. 按回车键执行选中的旋转命令

### 快捷访问

为了更快地访问 ScreenRotate 功能，您可以：

1. 在 Raycast 中为 ScreenRotate 命令设置别名
2. 为常用的旋转角度设置快捷键

设置方法：
1. 在 Raycast 中搜索 "ScreenRotate"
2. 对于要设置别名或快捷键的命令，点击右侧的设置图标
3. 在弹出的窗口中，您可以设置别名和快捷键

### 多显示器支持

如果您使用多个显示器，ScreenRotate 会提示您选择要旋转的显示器。选择显示器后，执行旋转命令即可。

## 贡献

欢迎贡献代码或提出建议！请查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解更多信息。

## 许可证

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。
