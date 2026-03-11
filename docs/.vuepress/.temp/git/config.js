import { GitContributors } from "C:/Users/zzbsn/source/repos/VsCode/alibabacloud/l4d2bibl/vuepress-starter/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/zzbsn/source/repos/VsCode/alibabacloud/l4d2bibl/vuepress-starter/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
