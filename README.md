# AI TOWN PROJECT

[原项目](https://github.com/a16z-infra/ai-town)

<img width="1454" alt="Screen Shot 2023-08-14 at 10 01 00 AM" src="https://github.com/a16z-infra/ai-town/assets/3489963/a4c91f17-23ed-47ec-8c4e-9f9a8505057d">

逐步对Windows系统下的WSL2部署该项目
如果有疑问或出入，一律以官方文档为准

## 准备工作

1.1安装Ubantu
打开Terminal（不会的键如win+r，回车）
记得先开启wsl2和虚拟机服务
```termianl
wsl --install -d Ubuntu
```

1.2安装Ollama(请确保你的显存足够)
[OLLAMA官网]https://ollama.com/
安装完成后查询状态
```terminal
ollama 
```
上述操作无误后,下载llama3大模型和语言模型
```terminal
ollama run llama3
ollama run mxbai-embed-large:latest
```
输入下面操作检验
```terminal
ollama list
```


## 开始部署
通过Terminal打开Ubantu子系统
输入下列命令行
```sh
git clone https://github.com/a16z-infra/ai-town.git
cd ai-town
npm install
```

## 下载Convex
请确保你有账号，如果没有可以使用github账号关联登录
[Convex官网]https://www.convex.dev/
```bash
wget https://github.com/get-convex/convex-backend/releases/download/v0.x.x/convex-local-backend-x86_64-unknown-linux-gnu.zip
unzip convex-local-backend-x86_64-unknown-linux-gnu.zip
chmod +x convex-local-backend
./convex-local-backend
```

## 尝试启动
```bash
npm run dev
```

现在你可以访问http://localhost:5173 .来查看未接入大模型的前端页面

接入大模型,Ollama默认接入模型是llama3和mxbai-embed-large:latest
具体可以查看/convex/util/llm.ts
使用 Ollama 进行本地推理，你需要配置 Docker 以连接到它

```bash
npx convex env set OLLAMA_HOST http://host.docker.internal:11434
```
测试
```bash
docker compose exec backend /bin/bash curl http://host.docker.internal:11434
```
如果显示“Ollama 正在运行”，那就好了！否则，请查看故障排除部分。


上面操作无法实现的，则可以内网穿透，将ollama的api暴露到外网，使用api链接
同样这也适用于你的ollama部署在另外一台电脑上的情况

碍于笔者只有一台电脑外加囊中羞涩，下面演示的是Tunnelmole免费版的操作
如果没安装Node.js请先安装，若已安装则跳过即可
[安装Node.js](https://tunnelmole.com/downloads/tmole.exe)，安装记得加入全局变量
```terminal
npm install -g tunnelmole
```
安装完成后键入
```termianl
tmole 11434
```
应该会返回一个URL
随后回到Ubantu
```bash
cd ai-town
npx convex env set OLLAMA_HOST {返回的URL}
```
尝试启动
```bash
npm run dev
```
这时候应该接入大模型了,对话无法展开的，查看Ubantu后台，如果有红字代表错误
可以复制给大模型询问错误处

## 更改模型
```bash
 npx convex env set OLLAMA_MODEL {接入大语言模型名}
 npx convex env set OLLAMA_EMBEDDING_MODEL {接入嵌入模型名}
```
其他操作如上<above>(#尝试启动)
