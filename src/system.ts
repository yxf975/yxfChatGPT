export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
- 网站正在维护，如有需要请联系Xuefeng。
- 由[@Xuefeng](https://github.com/yxf975) 基于[@ourongxing](https://github.com/ourongxing)和[chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 开发，查看 [源码](https://github.com/yxf975/yxfChatGPT)，欢迎自部署。
- 该网站仅作为演示，仅限亲朋好友使用，不提供长期服务，且不接受任何付费功能请求，网站暂时无密码，请勿滥用。
- 该网站域名由本人注册，请勿传播。API Key 由我自己免费提供，注意不要滥用。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
