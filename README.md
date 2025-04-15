# My_ai-town
我的ai-town项目的配置经验

#AI TOWN PROJECT

[原项目](https://github.com/a16z-infra/ai-town)

<img width="1454" alt="Screen Shot 2023-08-14 at 10 01 00 AM" src="https://github.com/a16z-infra/ai-town/assets/3489963/a4c91f17-23ed-47ec-8c4e-9f9a8505057d">

逐步对Windows系统下的WSL2部署该项目

##准备工作

1.1安装Ubantu
打开Terminal（不会的键如win+r，回车）
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


##开始部署
通过Terminal打开Ubantu子系统
输入下列命令行
```sh
git clone https://github.com/a16z-infra/ai-town.git
cd ai-town
npm install
```

#下载Convex
请确保你有账号，如果没有可以使用github账号关联登录
[Convex官网]https://www.convex.dev/
```bash
wget https://github.com/get-convex/convex-backend/releases/download/v0.x.x/convex-local-backend-x86_64-unknown-linux-gnu.zip
unzip convex-local-backend-x86_64-unknown-linux-gnu.zip
chmod +x convex-local-backend
./convex-local-backend
```

#尝试启动
```bash
npm run dev
```
现在你可以访问http://localhost:5173 .来查看未接入大模型的前端页面

接入大模型
```bash

```



```bash
cd ai-town
npx convex env set OLLAMA_HOST {你的URL}
```

#更改模型
```bash
```
