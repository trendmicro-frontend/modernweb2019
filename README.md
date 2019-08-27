# [Modern Web 2019] 趨勢科技 - 誰是效能王

Demo: https://trendmicro-frontend.github.io/modernweb2019

[![image](https://user-images.githubusercontent.com/447801/63767651-cf808480-c900-11e9-8266-457dd8a4ac03.png)](https://trendmicro-frontend.github.io/modernweb2019)

# 活動說明
* 針對題目範例做表單效能優化，減少重繪次數，現場工作人員驗證後會將結果即時更新在英雄榜。
* 活動期間：2019/8/28 9:00 到 2019/8/29 14:00
* 請在活動時間內完成解題，並到趨勢科技櫃台將答案連結交由工作人員驗證，前20名答題者將贈送趨勢科技專屬精美贈品。

# 活動流程

1. 參賽者根據海報上的資訊取得此[專案網址](https://github.com/trendmicro-frontend/modernweb2019)，並 **Fork** 回參賽者的 GitHub 帳號下作答。

2. 參賽者將修改過後的結果 push 回 Fork 的專案中，並且用 GitHub Page 建立 demo site。

3. 參賽者將 Fork 的專案網址連同 demo site 提供給趨勢科技攤位的工作人員，並留下參賽者的姓名及聯絡方式。

4. 驗證方式：
    * 用現場工作人員準備的電腦打開參賽者的 GitHub 專案和 demo site
    * 按下 Reset 重製表單
    * 在前 10 筆文字欄位輸入任意資料
    * 確認按下 Submit 可以看到輸入完成的表單資料
    * 確認 form render count 不大於 2

## Setup

1. Fork the repository.

2. Run `npm run start` to run a local development server.

3. Run `npm run build` to build production code and push the changes to your forked repository.

```sh
$ npm run build

> moderbweb2019@1.0.0 build /home/modernweb2019
> cross-env PUBLIC_URL="." react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  69.64 KB  build/static/js/2.0557ffbf.chunk.js
  3.35 KB   build/static/css/2.7b50253e.chunk.css
  1.95 KB   build/static/js/main.933389c1.chunk.js
  763 B     build/static/js/runtime~main.d653cc00.js

The project was built assuming it is hosted at ./.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.

Find out more about deployment here:

  https://bit.ly/CRA-deploy


> moderbweb2019@1.0.0 postbuild /home/modernweb2019
> rm -rf docs && mv build docs || move build docs
```

4. Go to **Settings > GitHub Pages** and use the `/docs` folder for GitHub Pages.
    ![image](https://user-images.githubusercontent.com/447801/63767255-b6c39f00-c8ff-11e9-8caf-f5cde1a59829.png)

5. Copy the URL of your published site and update the link in README.md or in the repository's website.
    ![image](https://user-images.githubusercontent.com/447801/63767258-b9be8f80-c8ff-11e9-8a0a-1967c9496ee3.png)

## License

MIT
