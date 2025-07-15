```markdown
# Campus Demo

<div align="center">

[English](#english) | [中文](#chinese)

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![React](https://img.shields.io/badge/React-18-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)
![Vite](https://img.shields.io/badge/Vite-Latest-orange.svg)

一个展示校园相关信息的交互式 Web 应用程序 🎓

<img src="./public/assets/demo-2025-3d_Earth.png" alt="Campus Demo Preview" width="600" />

</div>

---

<a id="english"></a>
## 🌍 English

### 📸 Demo
<div align="center">
  <p>
    <b>Demo Video:</b> <a href="./public/assets/demo-2025-3d_Earth.mp4" download>Download MP4</a>
  </p>
</div>

### ✨ Features
- **Campus Selection**: Support selecting different campuses to view detailed information of the corresponding campus. 🏫
- **Campus Map**: Display information about social club activity locations and landmark buildings on campus, and support map mode switching, zooming and other operations. 🗺️
- **Photo Sharing**: Users can upload photos and share their campus stories. 📸
- **Information Display**: Show the purpose, vision, and content introduction of the project. 📋

### 🛠️ Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Leaflet (Map library)
- **Backend**: Express, Axios, Cors
- **Build Tool**: Vite

### 🚀 Getting Started
#### Prerequisites
- Node.js (v14 or higher) 📦
- npm or yarn 📥

#### Installation
1. Clone the repository
```bash
git clone https://github.com/Tully-L/0703-demo-campus.git
cd 0703-demo-campus
```
2. Install dependencies
```bash
npm install
# or
yarn install
```
3. Start development server
```bash
npm run dev
# or
yarn dev
```
After starting, you can access the application in your browser at `http://localhost:5173`.

4. Build for production
```bash
npm run build
# or
yarn build
```
After the build is complete, the generated static files will be stored in the `dist` directory.

5. Start the backend server
```bash
npm run start
# or
yarn start
```
The backend server will start at `http://localhost:3000`.

### 📁 Project Structure
```
0703-demo-campus/
├── public/                 # Public resource directory
│   └── gallery/            # Photo and video files
├── src/                    # Source code directory
│   ├── components/         # Component directory
│   │   ├── campus-selector.tsx # Campus selection component
│   │   └── earth-globe.tsx     # Earth visualization component
│   ├── data/               # Data directory
│   │   └── locations.ts    # Campus location data
│   ├── pages/              # Page directory
│   │   ├── about.tsx       # About page
│   │   ├── gallery.tsx     # Photo sharing page
│   │   ├── home.tsx        # Home page
│   │   └── map.tsx         # Map page
│   ├── utils/              # Utility function directory
│   │   └── driveUtils.ts   # Data acquisition utility function
│   ├── App.tsx             # Application entry component
│   ├── index.css           # Global style file
│   └── main.tsx            # Main entry file
├── .gitignore              # Git ignore file
├── index.html              # Main HTML file
├── package.json            # Project dependency and script configuration
├── tsconfig.json           # TypeScript configuration file
├── vite.config.ts          # Vite configuration file
└── README.md               # Project description document
```

### 📖 Usage Instructions
#### Home Page
On the home page, you can see an Earth visualization component with a campus selection dropdown in the middle. After selecting a campus, you can jump to the corresponding map page to view campus information. 🌏

#### Map Page
The map page displays information about social club activity locations and landmark buildings on campus. You can switch map modes (satellite map, topographic map, roadmap), zoom in and out of the map, and view detailed information about specific locations. 🗺️

#### About Page
The about page introduces the purpose, vision, and content of the project, and also provides a form for users to upload photos and share their campus stories. 📋

#### Photo Sharing Page
The photo sharing page displays photos and videos uploaded by users, and you can browse and enjoy this content. 📸

### 🤝 Contribution Guidelines
If you want to contribute to this project, please follow these steps:
1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make code modifications and additions.
4. Commit your changes: `git commit -m "Add your commit message"`.
5. Push to your branch: `git push origin feature/your-feature-name`.
6. Open a Pull Request.

### 📄 License
This project is licensed under the ISC license. Please refer to the [LICENSE](LICENSE) file for details.

### 📧 Contact Information
If you have any questions or suggestions, please contact `ecofairuwc@gmail.com`.

---

<a id="chinese"></a>
## 🌍 中文

### 📸 演示
<div align="center">
  <img src="./public/assets/demo-2025-3d_Earth.png" alt="Campus Demo 截图" width="600" />
  
  <br/><br/>
  
  <p>
    <b>演示视频:</b> <a href="./public/assets/demo-2025-3d_Earth.mp4" download>下载 MP4</a>
  </p>
</div>

### ✨ 功能特性
- **校区选择**：支持选择不同的校区，查看对应校区的详细信息。 🏫
- **校园地图**：展示校园内的社交俱乐部活动地点、地标建筑等信息，支持地图模式切换、缩放等操作。 🗺️
- **照片分享**：用户可以上传照片并分享自己的校园故事。 📸
- **信息展示**：展示项目的目的、愿景、内容介绍等信息。 📋

### 🛠️ 技术栈
- **前端**：React、TypeScript、Tailwind CSS、Leaflet（地图库）
- **后端**：Express、Axios、Cors
- **构建工具**：Vite

### 🚀 快速开始
#### 前提条件
- Node.js（v14 或更高版本） 📦
- npm 或 yarn 📥

#### 安装步骤
1. 克隆仓库
```bash
git clone https://github.com/Tully-L/0703-demo-campus.git
cd 0703-demo-campus
```
2. 安装依赖
```bash
npm install
# 或
yarn install
```
3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```
启动后，你可以在浏览器中访问 `http://localhost:5173` 查看应用程序。

4. 构建生产版本
```bash
npm run build
# 或
yarn build
```
构建完成后，生成的静态文件将存放在 `dist` 目录下。

5. 启动后端服务器
```bash
npm run start
# 或
yarn start
```
后端服务器将在 `http://localhost:3000` 启动。

### 📁 项目结构
```
0703-demo-campus/
├── public/                 # 公共资源目录
│   └── gallery/            # 照片和视频文件
├── src/                    # 源代码目录
│   ├── components/         # 组件目录
│   │   ├── campus-selector.tsx # 校区选择组件
│   │   └── earth-globe.tsx     # 地球可视化组件
│   ├── data/               # 数据目录
│   │   └── locations.ts    # 校区位置数据
│   ├── pages/              # 页面目录
│   │   ├── about.tsx       # 关于页面
│   │   ├── gallery.tsx     # 照片分享页面
│   │   ├── home.tsx        # 首页
│   │   └── map.tsx         # 地图页面
│   ├── utils/              # 工具函数目录
│   │   └── driveUtils.ts   # 数据获取工具函数
│   ├── App.tsx             # 应用程序入口组件
│   ├── index.css           # 全局样式文件
│   └── main.tsx            # 主入口文件
├── .gitignore              # Git 忽略文件
├── index.html              # 主 HTML 文件
├── package.json            # 项目依赖和脚本配置
├── tsconfig.json           # TypeScript 配置文件
├── vite.config.ts          # Vite 配置文件
└── README.md               # 项目说明文档
```

### 📖 使用说明
#### 首页
在首页，你可以看到一个地球可视化组件，中间包含一个校区选择下拉框。选择一个校区后，你可以跳转到对应的地图页面查看校区信息。 🌏

#### 地图页面
地图页面展示了校区内的社交俱乐部活动地点、地标建筑等信息。你可以切换地图模式（卫星图、地形图、路线图），缩放地图，查看具体地点的详细信息。 🗺️

#### 关于页面
关于页面介绍了项目的目的、愿景、内容介绍等信息，还提供了一个表单供用户上传照片和分享校园故事。 📋

#### 照片分享页面
照片分享页面展示了用户上传的照片和视频，你可以浏览和欣赏这些内容。 📸

### 🤝 贡献指南
如果你想为这个项目做出贡献，请遵循以下步骤：
1. Fork 这个仓库。
2. 创建一个新的分支：`git checkout -b feature/your-feature-name`。
3. 进行代码修改和添加。
4. 提交你的更改：`git commit -m "Add your commit message"`。
5. 推送至你的分支：`git push origin feature/your-feature-name`。
6. 打开一个 Pull Request。

### 📄 许可证
本项目采用 ISC 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

### 📧 联系信息
如果你有任何问题或建议，请联系 `2332486893@qq.com`。
```
