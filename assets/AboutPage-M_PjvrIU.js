import{o as e,s as t}from"./index-BiybDdmI.js";import{r as n,t as r}from"./SectionCard-D2nCQ6VL.js";import{t as i}from"./DemoDataNotice-CfEkCXIM.js";import{i as a,n as o}from"./feedData-CDvx0cAp.js";var s=`# BuboPin News R4 Beta 试运行 — 2026-10-16

## 执行元数据

| 字段 | 值 |
|---|---|
| 真实运行序号 | 1 / 7 |
| 结论 | \`pass_after_remediation\` |
| 开始时间（Asia/Shanghai） | 2026-10-16 01:33:29 CST |
| 本地门禁结束时间（Asia/Shanghai） | 2026-10-16 07:07:07 CST（会话中断后接续，未重复运行） |
| Baseline SHA | \`64a30377041790a89d25236d21f63ea408958025\` |
| Current / record SHA | \`SELF\`：由 \`git log -1 --format=%H -- docs/beta-trial/runs/2026-10-16.md\` 派生 |
| PR #6 | Draft；baseline CI [Green](https://github.com/luckygood/DiseasePulse/actions/runs/38778313830/job/116571614595)；\`SELF\` CI 在推送后要求 Green |
| Preview SHA（预检） | \`95d7eb9a34f79f028117cbac0eadce8be5e4d46d\` |
| Preview SHA（闭环） | \`SELF\`；以线上 \`preview-source.json.integrationSha\` 实测并与 PR HEAD 比对 |

\`SELF\` 避免在提交内容中硬编码自身 SHA 造成不可解的自引用；本轮闭环条件是
包含本记录的提交、PR HEAD 与最终线上 \`integrationSha\` 三者相同。

## 输入与计数

| 项目 | 结果 |
|---|---|
| Canonical snapshot 数量 | 3：CKD、Obesity、Stroke 各 1 份，均为 2026-10-15 |
| 本轮新增 snapshot | \`null\`（reason: 运行开始时没有新的真实落盘快照；未构造输入） |
| Ingest report | 3 candidates；5 future catalysts；本轮未晋升 Golden |
| Candidate 状态计数 | 78 total：approved 14、already-published 29、rejected 4、pending 31、duplicate 0 |
| Source dry-run 最终计数 | 51 total：reachable 34、restricted 17、unreachable 0 |
| Event / Source / Milestone / Asset | 46 / 51 / 5 / 30 |
| 来源追溯 | Event 46/46；Milestone 5/5 |
| 运营发布时延 | \`null\`（reason: 未记录 \`firstPublishedAt\`；历史回填核验时延不代表 Beta 日常运营） |

## 门禁

| # | 门禁 | 首次结果 | 复验结果 | 证据/备注 |
|---:|---|---|---|---|
| 1 | \`research:ingest\` | pass | pass | 3 snapshots；Candidate Master 78；pending 31 |
| 2 | \`feed:build\` | pass | — | 46 verified events；0 ID warnings；0 pending revisions |
| 3 | \`feed:validate\` | pass | — | 46 events / 51 sources；0 errors / 0 warnings |
| 4 | \`milestones:validate\` | pass | — | 5 verified milestones；0 errors |
| 5 | \`assets:build\` | pass | — | 30 records；双向外键有效 |
| 6 | \`freshness:check\` | pass | — | 最新事件与核验均为 2026-10-15；pending window 为 null |
| 7 | \`quality:report\` | pass | — | 追溯 46/46 与 5/5；运营发布时延 null + reason |
| 8 | \`typecheck\` | pass | — | \`tsc --noEmit\` |
| 9 | \`test\` | pass | — | 15 files / 132 tests passed |
| 10 | \`build\` | pass | — | 84 known static routes；构建完成 |
| 11 | \`test:e2e\` | pass | — | 24 passed / 2 intentional skips；desktop + mobile |
| 12 | \`determinism:check\` | pass | — | 7 generated artifacts，两次重建字节一致 |
| 13 | \`beta:check\` | pass | — | 13/13 checks passed |

## 来源 dry-run 原始失败与修复

1. 首次：35 reachable / 14 restricted / 2 unreachable。唯一来源
   \`src-fda-zepbound-s041-20260826\` 与 \`src-viking-vk3019-20260624\` 暂时不可达，
   因而按规则阻断。
2. 第二次：34 reachable / 14 restricted / 3 unreachable。Viking 已恢复 200；
   FDA PDF 返回 406 或瞬时不可达。
3. 根因修复：将 HTTP 406（服务端拒绝自动访问）明确分类为 \`restricted\`，并新增
   单元测试；未写回 Source Registry、未放宽 404/5xx/网络失败的 \`unreachable\` 门禁。
4. 第三次（本根因最后一次）：34 reachable / 17 restricted / 0 unreachable，pass。

## 预览部署原始失败与修复

1. \`SELF\` 的首个受保护部署尝试在 CI Green 后停止：独立预览 base path 构建会重写
   tracked \`beta-experience-report.json\`，干净工作树门禁按设计拒绝推送。
2. 恢复并连续两次验证默认 base 的报告字节一致；提交实测报告变化。
3. 部署脚本改为在 CI 已全绿后只生成 ignored \`dist\` 与静态入口，不再用预览专属
   base path 覆盖基线报告。分支、Draft PR、HEAD、CI 和干净工作树门禁均保留。
4. 第二次部署推送了匹配的页面产物，但审计发现独立预览仓库中的
   \`quality-report.json\` 与 \`beta-experience-report.json\` 被遗漏；该部署不作为最终闭环。
5. 部署脚本补回两份已审计报告。修复提交的 CI Green 后才允许最终部署和线上冒烟；
   若失败，不把本轮标为通过。

## 线上冒烟

预检针对旧预览 SHA \`95d7eb9\`：River、Horizon、稳定 Event、Asset、Disease、
Search、About 均为 HTTP 200 且完成渲染；未知路径为 404；robots 为
\`noindex, nofollow\`；\`preview-source.json\` 为 200 且计数 46/51/5/30。

推送 \`SELF\` 后必须等待其 CI Green，再通过带分支、PR HEAD、CI 和干净工作树硬门禁的
\`npm run preview:deploy\` 从 \`SELF\` 重部署，并以 \`npm run preview:smoke\` 重验上述项目。
若该后置条件未满足，本记录的结论必须由后续修订改为 \`failed\`。

## 变化、失败与处置

- 实际数据变化：无；未增加 Event、Milestone、Disease，未修改任何 Golden 状态或 ID。
- 工程变化：建立 R4 审计/清单模板、质量时延语义、预览部署与冒烟硬门禁；修正 406 来源分类。
- 原始失败：来源 dry-run 的唯一来源不可达；首个预览部署因 tracked 报告漂移被门禁拒绝，证据如上保留。
- 修复与重试次数：同一根因 1 次代码修复、3 次全量 dry-run（达到上限后已停止重试）。
- 复验：全部 13 项门禁通过；来源最终 0 unreachable。
- Owner 待办：无新增；既有发布、索引、Brand Phase 2 与 Golden 晋升决定保持不变。

## 结论依据

本轮有真实输入盘点、来源网络检查、完整门禁和可追溯原始失败；失败经一次有测试的
分类修复后在第三次来源复验收敛，故结论为 \`pass_after_remediation\`，计入七次真实运行。
它不表示 Beta 已完成，也不表示生产已发布。

## 同日闭环复核（不增加真实运行次数）

| 字段 | 实测结果 |
|---|---|
| 最近同日复核（Asia/Shanghai） | 2026-10-16 09:32:22 +08:00 |
| 复核区间（Asia/Shanghai） | 2026-10-16 09:31:15 至 09:32:22 +08:00 |
| 工作树 / 分支 | 干净；\`codex/bubopin-news-v1-integration\` |
| 实测 PR HEAD / preview integrationSha | \`41166d8f7d0ec98f820e80ecb7e7b80d811625f5\`；两者相同 |
| PR #6 CI | Draft；verify SUCCESS；2026-10-16 07:37:02 +08:00 完成 |
| 线上冒烟 | \`npm run preview:smoke\` exit 0；10 项通过 |
| 真实运行计数 | 仍为 1 / 7；接续本记录，无新增运行 |

[CI 实测证据](https://github.com/luckygood/DiseasePulse/actions/runs/38824448772/job/116728490084)。
首页、Horizon、稳定 Event / Asset / Disease / Search / About 深链均为 HTTP 200 且
\`rendered=true\`；未知路径 HTTP 404；\`noindex, nofollow\` 保留；\`preview-source.json\`
HTTP 200 且 \`integrationSha\` 与上述 PR HEAD 相同。此 SHA 是当时的实测提交，
后续网页更新的部署以届时 PR HEAD 和线上 \`preview-source.json\` 为准。

该次复核未重复执行 13 项门禁、未修改产品或数据、未提交或部署；原始失败和修复记录如上保留。
`,c='# BuboPin News R4 Beta 试运行 — 2026-10-19\n\n## 执行元数据\n\n| 字段 | 值 |\n|---|---|\n| 真实运行序号 | 2 / 7（本次真实触发在预检失败；不表示完成门禁） |\n| 结论 | `failed` |\n| 开始时间（Asia/Shanghai） | 2026-10-19T11:47:11+08:00 |\n| 结束时间（Asia/Shanghai） | 2026-10-19T11:49:07+08:00 |\n| 工作分支 | `codex/bubopin-news-v1-integration` |\n| Baseline SHA | `3b7d043da3063b8429638109f0ac9ec84a4af6ba` |\n| Current SHA | `3b7d043da3063b8429638109f0ac9ec84a4af6ba`（未产生提交） |\n| Current / committed SHA | `null`（reason: 工作树预检阻断，本记录仅保存本地，未提交/推送） |\n| PR #6 HEAD / CI | Draft / OPEN；HEAD `3b7d043da3063b8429638109f0ac9ec84a4af6ba`；既有 HEAD 的 verify SUCCESS，不代表本轮门禁通过 |\n| Preview SHA | `3b7d043da3063b8429638109f0ac9ec84a4af6ba`；预检 HTTP 200 实测，与 PR HEAD 和本地 HEAD 相同；本轮未部署 |\n\n开始时 `docs/beta-trial/runs` 仅有 `2026-10-16.md`，无今日记录，故新增今日唯一记录。\n2026-10-17 和 2026-10-18 未发现记录；未据此伪造运行、来源检查或通过结果。\n按既有计数规则，`failed` 的真实触发计数，`missed` 不计数：当前两次记录中，\n完整门禁通过的仍仅为 2026-10-16 一次。本次不是调度遗漏。\n\n## 预检原始失败\n\n首次执行 `git status --porcelain=v1` 返回：\n\n```text\n?? docs/strategy/\n```\n\n随后只读枚举 `git status --porcelain=v1 --untracked-files=all` 确认：\n\n```text\n?? docs/strategy/BuboPin_News_Decision_Memo_2026-10-18.md\n?? docs/strategy/BuboPin_News_Decision_Memo_2026-10-18_v2.md\n```\n\n两份文件在本轮开始前已存在，不属于本轮；按固定流程第 1 步停止。\n未移动、暂存、删除、覆盖、提交或用其他工作树绕过这些文件。\n开始后与记录写入前的只读 SHA-256 一致：\n\n```text\na8c8cffbbfb92eaf9c9bdde4e21d8b92e6a582e7fd3c9b0b134c7525fef7b3ee  docs/strategy/BuboPin_News_Decision_Memo_2026-10-18.md\n5cf28f366f5b654d74e7a7ac5cc5fa456a4de7498b8a30b2fc401b6c9d747672  docs/strategy/BuboPin_News_Decision_Memo_2026-10-18_v2.md\n```\n\n## 输入与计数\n\n| 项目 | 结果 |\n|---|---|\n| Canonical snapshot 数量 | `null`（reason: 预检阻断，未盘点本轮输入） |\n| 本轮新增 snapshot | `null`（reason: 预检阻断，未检查是否存在新快照；不能断言没有新快照，未构造数据） |\n| Ingest report | `null`（reason: 未进入输入处理阶段，未读取/重建 `data/imports/research/ingest-report.json`） |\n| Candidate 状态计数 | `null`（reason: 未运行 ingest / Candidate Master 重建，未核验本轮状态） |\n| Source 状态计数 | reachable `null` / restricted `null` / unreachable `null`（reason: 未运行 `sources:check`） |\n| Event / Source / Milestone / Asset | 46 / 51 / 5 / 30（仅为线上既有 `preview-source.json` 声明的数量；不是本轮重建结果） |\n| Candidate 确定性与新候选 pending | `null`（reason: 未执行，不主张通过；本轮未改动 Candidate） |\n| 已发布事实唯一来源不可达检查 | `null`（reason: 未执行来源检查；不能据既有 CI 推断来源可达） |\n\n## 门禁\n\n| # | 门禁 | 首次结果 | 复验结果 | 证据/备注 |\n|---:|---|---|---|---|\n| 1 | `research:ingest` | not_run | — | 工作树预检阻断，未调用命令 |\n| 2 | `feed:build` | not_run | — | 工作树预检阻断，未调用命令 |\n| 3 | `feed:validate` | not_run | — | 工作树预检阻断，未调用命令 |\n| 4 | `milestones:validate` | not_run | — | 工作树预检阻断，未调用命令 |\n| 5 | `assets:build` | not_run | — | 工作树预检阻断，未调用命令 |\n| 6 | `freshness:check` | not_run | — | 工作树预检阻断，未调用命令 |\n| 7 | `quality:report` | not_run | — | 工作树预检阻断，未调用命令 |\n| 8 | `typecheck` | not_run | — | 工作树预检阻断，未调用命令 |\n| 9 | `test` | not_run | — | 工作树预检阻断，未调用命令 |\n| 10 | `build` | not_run | — | 工作树预检阻断，未调用命令 |\n| 11 | `test:e2e` | not_run | — | 工作树预检阻断，未调用命令 |\n| 12 | `determinism:check` | not_run | — | 工作树预检阻断，未调用命令 |\n| 13 | `beta:check` | not_run | — | 工作树预检阻断，未调用命令 |\n\n`npm run sources:check` dry-run、输入处理阶段的首次 `npm run research:ingest`、\n`npm run preview:deploy` 和 `npm run preview:smoke` 均未运行。\n13 项门禁无已通过项，全部为未执行；没有将历史结果复制为本轮结果。\n\n## PR CI 与线上预检\n\n只读命令 `gh pr view 6 --repo luckygood/DiseasePulse --json number,url,state,isDraft,headRefName,headRefOid,statusCheckRollup`\n实测 PR [#6](https://github.com/luckygood/DiseasePulse/pull/6) 为 OPEN / Draft，分支正确，\nHEAD `3b7d043da3063b8429638109f0ac9ec84a4af6ba`。CI verify 为 COMPLETED / SUCCESS，完成于\n2026-10-16T02:22:14Z，[既有 CI 证据](https://github.com/luckygood/DiseasePulse/actions/runs/38839951161/job/116777507127)。\n本轮没有新提交或对应的新 CI。\n\n只读 HTTP 请求\n[preview-source.json](https://luckygood.github.io/diseasepulse-pr4-preview/preview-source.json)\n返回 HTTP 200，原始响应为：\n\n```json\n{\n  "integrationSha": "3b7d043da3063b8429638109f0ac9ec84a4af6ba",\n  "eventCount": 46,\n  "sourceCount": 51,\n  "milestoneCount": 5,\n  "assetCount": 30,\n  "buildDate": "2026-10-16",\n  "noindex": true\n}\n```\n\n| 线上冒烟项目 | 本轮结果 |\n|---|---|\n| 首页 / Horizon | not_run：预检阻断；HTTP 状态与渲染证据 `null` |\n| 稳定 Event / Asset / Disease / Search / About 深链 | not_run：预检阻断；HTTP 状态与渲染证据 `null` |\n| 未知路径 404 | not_run：HTTP 状态与渲染证据 `null` |\n| 页面 noindex,nofollow | not_run：未核验页面 robots；JSON 中的 `noindex: true` 不能代替页面证据 |\n| preview-source.json | HTTP 200；integrationSha 与当前 PR HEAD / 本地 HEAD 相同 |\n| 本轮部署 SHA | `null`：未运行部署；既有预览一致性不构成本轮部署或渲染通过 |\n\n## 变化、失败与处置\n\n- 实际数据/产品变化：无。本轮仅新增此本地审计记录并更新仓库外 automation memory。\n- 原始失败：工作树有不属于本轮的未跟踪策略文档，预检未通过；原始输出已保留。\n- 修复与重试次数：0；未自动处置 Owner 文件，未重复运行门禁。\n- 复验：仅以只读枚举和 SHA-256 确认原文件未变；未修复、未宣称恢复通过。\n- 提交 / 推送 / 部署：均未执行；记录未进入 PR 或线上 About 页面。\n- 确定性报告变化：无；未运行 build 或重建任何报告。\n- Owner 待办：处理上述两份 `docs/strategy/` 文件在当前集成工作树中的归属，恢复不含无关修改的工作树后接续本日记录；勿将这些文件混入 Beta 提交。再次执行时本轮新增的审计文件属于本轮，应接续而非误判为新的无关修改。\n- 约束：未合并、未批准 PR、未部署生产、未改正式域名/索引、未发布或晋升 Candidate、未修改 Golden Events/Milestones 或发布状态，未纳入 Brand Phase 2。\n\n## 结论依据\n\n结论 `failed`：本轮实际触发并发现明确预检阻断，之后按规则停止。\n既有 HEAD 的 CI Green 和既有预览 SHA 相同，不能替代本轮输入盘点、来源检查、\n13 项门禁或渲染证据。`Beta Ready` 为 `No`；`Production Released` 为 `No`。\n未达到七次真实运行，不生成 final-report.md 或 beta-release-checklist.md。\n若 2026-10-22 后仍不足七次，继续按真实记录计数顺延；不得用日历日期补足。\n',l=`# BuboPin News R4 Beta 试运行 — 2026-10-20

## 执行元数据

| 字段 | 值 |
|---|---|
| 真实运行序号 | 3 / 7（实际触发并在预检失败；不是第三次完整门禁通过） |
| 结论 | \`failed\` |
| 开始时间（Asia/Shanghai） | 2026-10-20T09:30:01+08:00（本轮首次显式时间取样；工作树只读检查已开始） |
| 结束时间（Asia/Shanghai） | 2026-10-20T09:31:18+08:00 |
| 工作分支 | \`codex/bubopin-news-v1-integration\` |
| Baseline SHA | \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\` |
| Current SHA | \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\`（未产生提交） |
| Current / committed SHA | \`null\`（reason: 工作树预检阻断，本记录仅保存本地，未提交/推送） |
| PR #6 HEAD / CI | Draft / OPEN；HEAD \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\`；既有 verify SUCCESS，不代表本轮门禁通过 |
| Preview SHA | \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\`；预检 HTTP 200 实测，与本地 HEAD / PR HEAD 相同；本轮未部署 |

开始时运行目录只有 \`2026-10-16.md\` 和 \`2026-10-19.md\`；无今日记录，故新增本日唯一记录。
2026-10-17、2026-10-18 未发现记录，不补造任何运行或通过证据。
按仓库计数规则，真实触发的 \`failed\` 计数，\`missed\` 不计数；当前为三次真实触发记录，
仅 2026-10-16 一次完成完整门禁通过。昨日审计仍未提交，本次原样保留；本轮不是调度遗漏。

## 预检原始失败

首次 \`git status --short\`：

\`\`\`text
?? docs/beta-trial/runs/2026-10-19.md
?? docs/strategy/
\`\`\`

随后 \`git status --porcelain=v1 --untracked-files=all\`：

\`\`\`text
?? docs/beta-trial/runs/2026-10-19.md
?? docs/strategy/BuboPin_News_Decision_Memo_2026-10-18.md
?? docs/strategy/BuboPin_News_Decision_Memo_2026-10-18_v2.md
\`\`\`

两份策略文档均在本轮前存在且不属于本轮，触发固定流程第 1 步的停止规则；
昨日审计同样为既有文件，不混入今日提交。未移动、暂存、删除、覆盖、提交这些文件，
未使用新工作树、stash 或其他方式绕过预检。开始后的只读 SHA-256：

\`\`\`text
a8c8cffbbfb92eaf9c9bdde4e21d8b92e6a582e7fd3c9b0b134c7525fef7b3ee  docs/strategy/BuboPin_News_Decision_Memo_2026-10-18.md
5cf28f366f5b654d74e7a7ac5cc5fa456a4de7498b8a30b2fc401b6c9d747672  docs/strategy/BuboPin_News_Decision_Memo_2026-10-18_v2.md
4628c8e5960f16b02839aefeeff5752102bca071d5917a888777f3dcac4129cf  docs/beta-trial/runs/2026-10-19.md
\`\`\`

\`git diff --stat\` 和 \`git diff --cached --stat\` 均为空；阻断来自上述未跟踪文件。

## 输入与计数

| 项目 | 结果 |
|---|---|
| Canonical snapshot 数量 | \`null\`（reason: 预检阻断，未盘点本轮输入） |
| 本轮新增 snapshot | \`null\`（reason: 未进入输入检查，不能断言没有新快照；未构造输入） |
| Ingest report | \`null\`（reason: 未进入输入阶段，未读取/重建 \`data/imports/research/ingest-report.json\`） |
| Candidate 状态计数 | \`null\`（reason: 未运行 ingest / Candidate Master 重建；未核验本轮状态） |
| Candidate 确定性与新候选 pending | \`null\`（reason: 未执行验证；本轮未修改 Candidate） |
| Source 状态计数 | reachable \`null\` / restricted \`null\` / unreachable \`null\`（reason: 未运行 sources dry-run） |
| 已发布事实唯一来源不可达检查 | \`null\`（reason: 未执行来源检查；不能用既有 CI 推断可达性） |
| Event / Source / Milestone / Asset | 46 / 51 / 5 / 30（仅为本轮 HTTP 读取的既有预览声明值，不是本轮重建结果） |

## 门禁

| # | 门禁 | 首次结果 | 复验结果 | 证据/备注 |
|---:|---|---|---|---|
| 1 | \`research:ingest\` | not_run | — | 工作树预检阻断，未调用命令 |
| 2 | \`feed:build\` | not_run | — | 工作树预检阻断，未调用命令 |
| 3 | \`feed:validate\` | not_run | — | 工作树预检阻断，未调用命令 |
| 4 | \`milestones:validate\` | not_run | — | 工作树预检阻断，未调用命令 |
| 5 | \`assets:build\` | not_run | — | 工作树预检阻断，未调用命令 |
| 6 | \`freshness:check\` | not_run | — | 工作树预检阻断，未调用命令 |
| 7 | \`quality:report\` | not_run | — | 工作树预检阻断，未调用命令 |
| 8 | \`typecheck\` | not_run | — | 工作树预检阻断，未调用命令 |
| 9 | \`test\` | not_run | — | 工作树预检阻断，未调用命令 |
| 10 | \`build\` | not_run | — | 工作树预检阻断，未调用命令 |
| 11 | \`test:e2e\` | not_run | — | 工作树预检阻断，未调用命令 |
| 12 | \`determinism:check\` | not_run | — | 工作树预检阻断，未调用命令 |
| 13 | \`beta:check\` | not_run | — | 工作树预检阻断，未调用命令 |

输入阶段的首次 \`npm run research:ingest\`、\`npm run sources:check\`（dry-run）、
\`npm run preview:deploy\`、\`npm run preview:smoke\` 也均未执行；未使用 \`--write\`。
本轮门禁为 0 项通过 / 13 项未执行；没有把历史通过结果记为本轮通过。

## PR CI 与线上预检

只读执行：

\`\`\`text
gh pr view 6 --repo luckygood/DiseasePulse --json number,url,state,isDraft,headRefName,headRefOid,statusCheckRollup
\`\`\`

[PR #6](https://github.com/luckygood/DiseasePulse/pull/6) 为 OPEN / Draft，
headRefName 为 \`codex/bubopin-news-v1-integration\`，HEAD 与本地一致。
既有 CI 的 verify 为 COMPLETED / SUCCESS，开始于 2026-10-16T02:20:52Z，
完成于 2026-10-16T02:22:14Z。
[CI 证据](https://github.com/luckygood/DiseasePulse/actions/runs/38839951161/job/116777507127)。
本轮无新提交，无对应新 CI；历史 CI Green 不能替代本轮门禁。

\`curl --silent --show-error --max-time 30 --include\`
[preview-source.json](https://luckygood.github.io/diseasepulse-pr4-preview/preview-source.json)
exit 0；源站状态 \`HTTP/2 200\`（代理的 \`200 Connection established\` 不是源站状态），
响应 Date 为 \`Tue, 20 Oct 2026 01:30:13 GMT\`，原始响应体：

\`\`\`json
{
  "integrationSha": "3b7d043da3063b8429638109f0ac9ec84a4af6ba",
  "eventCount": 46,
  "sourceCount": 51,
  "milestoneCount": 5,
  "assetCount": 30,
  "buildDate": "2026-10-16",
  "noindex": true
}
\`\`\`

| 线上冒烟项目 | 本轮结果 |
|---|---|
| 首页 / Horizon | not_run：预检阻断；HTTP 状态与渲染证据 \`null\` |
| 稳定 Event / Asset / Disease / Search / About 深链 | not_run：预检阻断；HTTP 状态与渲染证据 \`null\` |
| 未知路径 404 | not_run：HTTP 状态与渲染证据 \`null\` |
| 页面 noindex,nofollow | not_run：页面 robots 未核验，JSON 的 noindex 声明不能替代渲染证据 |
| preview-source.json | HTTP 200；integrationSha 与本地 HEAD / PR HEAD 相同 |
| 本轮部署 SHA | \`null\`（reason: 未部署；既有预览 SHA 一致不表示本轮部署或冒烟通过） |

## 变化、失败与处置

- 实际产品/数据变化：无；只新增今日本地审计记录并更新仓库外 automation memory。
- 原始失败：本轮前已有两份未跟踪策略文档；与昨日同一阻断，按规则停止。
- 修复与重试次数：0；未自动处理 Owner 文件，未重复运行门禁或放宽停止条件。
- 复验：仅只读比对工作树、PR 与预览 SHA；保留原文件哈希，未宣称阻断已修复。
- 提交 / 推送 / 部署：均未执行；今日和昨日记录尚未进入 PR 或线上 About。
- 确定性报告变化：无；未执行 build 或重建任何报告。
- Owner 待办：处理两份策略文档及昨日未提交审计在本集成工作树中的归属，使无关修改得到妥善处理；勿混入今日 Beta 提交。工作树恢复后接续本日记录并保留此次原始失败，不能新造同日运行。
- 边界：未合并或批准 PR、未部署生产、未改正式域名/索引、未发布或晋升 Candidate、未修改 Golden Events/Milestones 或发布状态，未纳入 Brand Phase 2。

## 结论依据

结论为 \`failed\`：本轮真实执行并触发工作树预检阻断，后续流程按要求停止。
本地 HEAD = PR HEAD = 既有 preview integrationSha，既有 CI Green；这些只读事实
不构成本轮输入盘点、来源检查、13 项门禁或线上渲染通过。
\`Beta Ready\` 为 \`No\`；\`Production Released\` 为 \`No\`。
目前真实触发记录为 3 / 7，仅 1 次完整门禁通过，不生成第七次 final-report.md 或 beta-release-checklist.md。
若 2026-10-22 后真实触发记录仍不足七次，仅顺延至累计七次；不以日历日期替代次数。

`,u=`# BuboPin News R4 Beta 试运行 — 2026-10-23

## 执行元数据

| 字段 | 值 |
|---|---|
| 真实运行序号 | 4 / 7（真实触发在预检失败，不代表第四次完整门禁通过） |
| 结论 | \`failed\` |
| 开始时间（Asia/Shanghai） | 2026-10-23T15:05:16+08:00（首次显式时间取样；工作树只读检查已开始） |
| 结束时间（Asia/Shanghai） | 2026-10-23T15:07:47+08:00 |
| 工作分支 | \`codex/bubopin-news-v1-integration\` |
| Baseline SHA | \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\` |
| Current SHA | \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\`（未产生提交） |
| Current / committed SHA | \`null\`（reason: 工作树预检阻断；本记录仅保存本地，未提交/推送） |
| PR #6 HEAD / CI | OPEN / Draft；HEAD \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\`；既有 HEAD 的 CI / verify SUCCESS，本轮未执行门禁 |
| Preview SHA | \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\`；预检 HTTP 200 实测，与本地 / PR HEAD 相同；本轮未部署 |

开始时运行目录只有 2026-10-16、2026-10-19、2026-10-20 三份记录，无今日记录。
按仓库计数规则，真实触发的 \`failed\` 计数，\`missed\` 不计数；本轮后累计 4/7，
仅 2026-10-16 一次完整门禁通过。2026-10-17、18、21、22 未发现运行记录，
未补造历史运行、来源或测试证据。调度元数据中的 Last run 2026-10-22T01:42:28.382Z
不是已完成真实审计的证据，不单独计数。本日为 2026-10-22 后的顺延运行，
尚未达到七次，不生成 final-report.md 或 beta-release-checklist.md。

## 预检原始失败

首次 \`git status --short\` 原始输出：

\`\`\`text
?? docs/beta-trial/runs/2026-10-19.md
?? docs/beta-trial/runs/2026-10-20.md
?? docs/strategy/
\`\`\`

随后 \`git status --porcelain=v1 --untracked-files=all\`：

\`\`\`text
?? docs/beta-trial/runs/2026-10-19.md
?? docs/beta-trial/runs/2026-10-20.md
?? docs/strategy/BuboPin_News_Decision_Memo_2026-10-18.md
?? docs/strategy/BuboPin_News_Decision_Memo_2026-10-18_v2.md
\`\`\`

两份策略文档与既有两份未提交审计均在本轮开始前存在；策略文档不属于本轮，
触发固定流程第 1 步“若工作树有不属于本轮的修改，停止并如实记录，不覆盖”。
未 stash、移动、删除、暂存或提交既有文件，未新建工作树绕过停止条件。
\`git diff --stat\` 与 \`git diff --cached --stat\` 均为空。
开始后与结束前只读 SHA-256 比对一致：

\`\`\`text
4628c8e5960f16b02839aefeeff5752102bca071d5917a888777f3dcac4129cf  docs/beta-trial/runs/2026-10-19.md
724e84520b07826f9408150891b6c2070e61f7711a4a1866bebd74301eca4371  docs/beta-trial/runs/2026-10-20.md
a8c8cffbbfb92eaf9c9bdde4e21d8b92e6a582e7fd3c9b0b134c7525fef7b3ee  docs/strategy/BuboPin_News_Decision_Memo_2026-10-18.md
5cf28f366f5b654d74e7a7ac5cc5fa456a4de7498b8a30b2fc401b6c9d747672  docs/strategy/BuboPin_News_Decision_Memo_2026-10-18_v2.md
\`\`\`

## 输入与计数

| 项目 | 结果 |
|---|---|
| Canonical snapshot 数量 | \`null\`（reason: 工作树预检阻断，未进入输入盘点） |
| 本轮新增 snapshot | \`null\`（reason: 未检查本轮输入，不能断言没有新快照；未构造数据） |
| Ingest report | \`null\`（reason: 未读取/重建 \`data/imports/research/ingest-report.json\`） |
| Candidate 状态计数 | \`null\`（reason: 未进入 ingest / Candidate Master 验证阶段） |
| Candidate 确定性与新候选 pending | \`null\`（reason: 未执行验证；未修改 Candidate 或状态） |
| Source 状态计数 | reachable \`null\` / restricted \`null\` / unreachable \`null\`（reason: 未运行 sources dry-run） |
| 已发布事实唯一来源不可达检查 | \`null\`（reason: 预检阻断，未执行来源检查，不能从既有 CI 推断） |
| Event / Source / Milestone / Asset | 46 / 51 / 5 / 30（仅为本轮 HTTP 读取的既有预览声明值，不是本轮重建计数） |

## 门禁

| # | 门禁 | 首次结果 | 复验结果 | 证据/备注 |
|---:|---|---|---|---|
| 1 | \`research:ingest\` | not_run | — | 工作树预检阻断，未调用命令 |
| 2 | \`feed:build\` | not_run | — | 工作树预检阻断，未调用命令 |
| 3 | \`feed:validate\` | not_run | — | 工作树预检阻断，未调用命令 |
| 4 | \`milestones:validate\` | not_run | — | 工作树预检阻断，未调用命令 |
| 5 | \`assets:build\` | not_run | — | 工作树预检阻断，未调用命令 |
| 6 | \`freshness:check\` | not_run | — | 工作树预检阻断，未调用命令 |
| 7 | \`quality:report\` | not_run | — | 工作树预检阻断，未调用命令 |
| 8 | \`typecheck\` | not_run | — | 工作树预检阻断，未调用命令 |
| 9 | \`test\` | not_run | — | 工作树预检阻断，未调用命令 |
| 10 | \`build\` | not_run | — | 工作树预检阻断，未调用命令 |
| 11 | \`test:e2e\` | not_run | — | 工作树预检阻断，未调用命令 |
| 12 | \`determinism:check\` | not_run | — | 工作树预检阻断，未调用命令 |
| 13 | \`beta:check\` | not_run | — | 工作树预检阻断，未调用命令 |

输入阶段首次 \`npm run research:ingest\`、\`npm run sources:check\` dry-run、
\`npm run preview:deploy\`、\`npm run preview:smoke\` 也均未执行；未使用 \`--write\`。
本轮 0 项通过 / 13 项未执行；不以历史成功替代本轮结果。

## PR CI 与线上预检

使用 GitHub 连接器只读查询 PR #6 元数据、该 HEAD 的 pull_request workflow runs、
combined status 与 run jobs。[PR #6](https://github.com/luckygood/DiseasePulse/pull/6)
仍为 OPEN / Draft，merged=false，head 分支正确，head_sha 与本地一致。
该提交 workflow run \`38839951161\` 的 CI completed / success，
job \`116777507127\` 的 verify completed / success；combined status 返回 statuses=[]，
不是新增 CI 通过证据。
[CI job 证据](https://github.com/luckygood/DiseasePulse/actions/runs/38839951161/job/116777507127)。
这是既有提交的 CI，未创建本轮提交或本轮 CI，也不能替代本轮输入、来源与门禁验证。

只读 HTTP 请求：

\`\`\`text
curl --silent --show-error --max-time 30 --include https://luckygood.github.io/diseasepulse-pr4-preview/preview-source.json
\`\`\`

exit 0；源站实际状态 \`HTTP/2 200\`，响应 Date 为 \`Fri, 23 Oct 2026 07:06:00 GMT\`。
代理的 \`HTTP/1.1 200 Connection established\` 不作为源站状态。原始 JSON：

\`\`\`json
{
  "integrationSha": "3b7d043da3063b8429638109f0ac9ec84a4af6ba",
  "eventCount": 46,
  "sourceCount": 51,
  "milestoneCount": 5,
  "assetCount": 30,
  "buildDate": "2026-10-16",
  "noindex": true
}
\`\`\`

| 线上冒烟项目 | 本轮结果 |
|---|---|
| 首页 / Horizon | not_run：预检阻断；HTTP 状态与渲染证据 \`null\` |
| 稳定 Event / Asset / Disease / Search / About 深链 | not_run：预检阻断；HTTP 状态与渲染证据 \`null\` |
| 未知路径 404 | not_run：HTTP 状态与渲染证据 \`null\` |
| 页面 noindex,nofollow | not_run：未检查页面 robots；JSON 中 noindex=true 不能替代页面证据 |
| preview-source.json | HTTP 200；integrationSha = PR HEAD = 本地 HEAD |
| 本轮部署 SHA | \`null\`（reason: 未部署；既有预览 SHA 一致不表示本轮部署/渲染通过） |

## 变化、原始失败、修复与复验

- 实际产品/数据变化：无；只新增今日本地审计并更新仓库外 automation memory。
- 原始失败：既有两份策略文档及此前未提交审计造成脏工作树；同一阻断仍存在。
- 修复/重试次数：0；未处理或覆盖 Owner 文件，未运行后续命令，未放宽停止条件。
- 复验：仅只读核对既有文件哈希、分支、HEAD、PR CI 和预览 JSON；未宣称阻断已修复。
- 提交/推送/部署：均未执行；今日与此前两份未提交记录尚未进入 PR 或线上 About。
- 确定性报告变化：无；未重建任何报告。
- Owner 待办：妥善处理两份策略文档及 2026-10-19、20 未提交审计在当前集成工作树中的归属，恢复没有无关修改的状态；不要混入 Beta 提交。若今日恢复，接续本记录并保留原始失败，不增加同日计数。
- 后续成功闭环仍需按顺序完成全部门禁；审计会被 About 打包，提交前须重建并验证确定性报告；仅从完全相同且 PR CI 全绿的 HEAD 部署独立预览，再执行 preview:smoke。
- 边界：未合并或批准 PR，未部署生产，未更改正式域名或索引，未发布/晋升 Candidate，未修改 Golden Events / Milestones 或发布状态，未纳入 Brand Phase 2。

## 结论依据

\`failed\`：真实触发在强制工作树预检停止。本轮没有输入验证、来源检查、
13 项门禁或线上渲染通过证据。既有 CI SUCCESS 与预览 SHA 一致不能替代这些结果。
\`Beta Ready\` 为 \`No\`；\`Production Released\` 为 \`No\`。
累计 4/7 次真实触发，仅 1 次完整通过，继续顺延至累计七次，不以日历日期代替次数。
`,d=`# BuboPin News R4 Beta 试运行 — 2026-10-26

## 执行元数据

| 字段 | 值 |
|---|---|
| 真实运行序号 | 5 / 7（真实触发在预检失败，不表示第五次完整门禁通过） |
| 结论 | \`failed\` |
| 开始时间（Asia/Shanghai） | 2026-10-26T09:32:35+08:00（首次显式时间取样；工作树只读检查已开始） |
| 结束时间（Asia/Shanghai） | 2026-10-26T09:35:42+08:00（审计落盘时间；随后仅作保全核对） |
| 工作分支 | \`codex/bubopin-news-v1-integration\` |
| Baseline SHA | \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\` |
| Current SHA | \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\`（未产生提交） |
| Current / committed SHA | \`null\`（reason: 工作树预检阻断；本记录仅保存本地，未提交/推送） |
| PR #6 HEAD / CI | OPEN / Draft；HEAD \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\`；既有 CI / verify completed / success，本轮门禁未执行 |
| Preview SHA | \`3b7d043da3063b8429638109f0ac9ec84a4af6ba\`；本轮只读 HTTP 200 实测；本轮未部署 |

开始时仅有 2026-10-16、19、20、23 四份运行记录，没有今日记录。
按仓库计数规则，真实执行的 \`failed\` 计数，\`missed\` 不计数；本轮后累计 5/7，
完整门禁通过仍只有 2026-10-16 一轮。未发现 2026-10-17、18、21、22、24、25 记录；
调度元数据 Last run 2026-10-25T02:01:16.533Z 不是完成审计的证据，未补造历史或额外计数。
本轮是 2026-10-22 后顺延，尚未达到七次，不生成 final-report.md 或 beta-release-checklist.md。
今日如再触发，只接续本记录，保留原始失败，不增加同日计数。

## 预检原始失败

首次 \`git status --short\`：

\`\`\`text
?? docs/beta-trial/runs/2026-10-19.md
?? docs/beta-trial/runs/2026-10-20.md
?? docs/beta-trial/runs/2026-10-23.md
?? docs/strategy/
\`\`\`

展开后的 \`git status --porcelain=v1 --untracked-files=all\`：

\`\`\`text
?? docs/beta-trial/runs/2026-10-19.md
?? docs/beta-trial/runs/2026-10-20.md
?? docs/beta-trial/runs/2026-10-23.md
?? docs/strategy/BuboPin_News_Decision_Memo_2026-10-18.md
?? docs/strategy/BuboPin_News_Decision_Memo_2026-10-18_v2.md
\`\`\`

以上五份文件在本轮开始前已存在。两份策略文档不属于本轮，触发用户固定流程第 1 步：
“若工作树有不属于本轮的修改，停止并如实记录，不覆盖”。未 stash、移动、删除、
暂存或提交这些文件，未创建其他工作树绕过停止条件。\`git diff --stat\` 与
\`git diff --cached --stat\` 均为空。开始后、只读预检结束及落盘前 SHA-256 核对一致：

\`\`\`text
4628c8e5960f16b02839aefeeff5752102bca071d5917a888777f3dcac4129cf  docs/beta-trial/runs/2026-10-19.md
724e84520b07826f9408150891b6c2070e61f7711a4a1866bebd74301eca4371  docs/beta-trial/runs/2026-10-20.md
a18e813ac9f2106a76d49453cf5fe788775bb680b6a4d36d95ab9a1af3854d1e  docs/beta-trial/runs/2026-10-23.md
a8c8cffbbfb92eaf9c9bdde4e21d8b92e6a582e7fd3c9b0b134c7525fef7b3ee  docs/strategy/BuboPin_News_Decision_Memo_2026-10-18.md
5cf28f366f5b654d74e7a7ac5cc5fa456a4de7498b8a30b2fc401b6c9d747672  docs/strategy/BuboPin_News_Decision_Memo_2026-10-18_v2.md
\`\`\`

## 输入与计数

| 项目 | 结果 |
|---|---|
| Canonical snapshot 数量 | \`null\`（reason: 预检阻断，未进入输入盘点） |
| 本轮新增 snapshot | \`null\`（reason: 未检查本轮输入，不能断言没有新快照；未构造数据） |
| Ingest report | \`null\`（reason: 未读取/重建 \`data/imports/research/ingest-report.json\`） |
| Candidate 状态计数 | \`null\`（reason: 未进入 ingest / Candidate Master 验证阶段） |
| Candidate 确定性与新候选 pending | \`null\`（reason: 未执行验证；未修改候选或状态） |
| Source 状态计数 | reachable \`null\` / restricted \`null\` / unreachable \`null\`（reason: 未运行来源 dry-run） |
| 已发布事实唯一来源不可达检查 | \`null\`（reason: 预检阻断，来源检查未执行） |
| Event / Source / Milestone / Asset | 46 / 51 / 5 / 30（仅为本轮读取的既有预览声明值，不是本轮重建计数） |

## 门禁

| # | 门禁 | 首次结果 | 复验结果 | 证据/备注 |
|---:|---|---|---|---|
| 1 | \`research:ingest\` | not_run | — | 工作树预检阻断，未调用命令 |
| 2 | \`feed:build\` | not_run | — | 工作树预检阻断，未调用命令 |
| 3 | \`feed:validate\` | not_run | — | 工作树预检阻断，未调用命令 |
| 4 | \`milestones:validate\` | not_run | — | 工作树预检阻断，未调用命令 |
| 5 | \`assets:build\` | not_run | — | 工作树预检阻断，未调用命令 |
| 6 | \`freshness:check\` | not_run | — | 工作树预检阻断，未调用命令 |
| 7 | \`quality:report\` | not_run | — | 工作树预检阻断，未调用命令 |
| 8 | \`typecheck\` | not_run | — | 工作树预检阻断，未调用命令 |
| 9 | \`test\` | not_run | — | 工作树预检阻断，未调用命令 |
| 10 | \`build\` | not_run | — | 工作树预检阻断，未调用命令 |
| 11 | \`test:e2e\` | not_run | — | 工作树预检阻断，未调用命令 |
| 12 | \`determinism:check\` | not_run | — | 工作树预检阻断，未调用命令 |
| 13 | \`beta:check\` | not_run | — | 工作树预检阻断，未调用命令 |

输入阶段首次 \`npm run research:ingest\`、\`npm run sources:check\` dry-run、
\`npm run preview:deploy\`、\`npm run preview:smoke\` 也均未执行；未使用 \`--write\`。
本轮 0 项通过 / 13 项未执行，不以既有成功替代本轮验证。

## PR CI 与线上预检

通过 GitHub 连接器只读查询 [PR #6](https://github.com/luckygood/DiseasePulse/pull/6)：
state=open、draft=true、merged=false，head 分支正确，head_sha 与本地相同。
该提交的 pull_request workflow run \`38839951161\`：CI completed / success；
job \`116777507127\`：verify completed / success。combined status 返回 statuses=[]。
[既有 CI job 证据](https://github.com/luckygood/DiseasePulse/actions/runs/38839951161/job/116777507127)。
这是既有 HEAD 的 CI，本轮没有新增提交或 CI，不能证明本轮门禁通过。
PR #6 已附加到当前聊天，未修改 PR 内容、状态或审核结果。

只读 HTTP 命令：

\`\`\`text
curl --silent --show-error --max-time 30 --include https://luckygood.github.io/diseasepulse-pr4-preview/preview-source.json
\`\`\`

exit 0，源站实际状态 \`HTTP/2 200\`；Date \`Mon, 26 Oct 2026 01:33:40 GMT\`，
Last-Modified \`Fri, 16 Oct 2026 23:48:43 GMT\`。
代理的 \`HTTP/1.1 200 Connection established\` 不作为源站响应状态。原始 JSON：

\`\`\`json
{
  "integrationSha": "3b7d043da3063b8429638109f0ac9ec84a4af6ba",
  "eventCount": 46,
  "sourceCount": 51,
  "milestoneCount": 5,
  "assetCount": 30,
  "buildDate": "2026-10-16",
  "noindex": true
}
\`\`\`

| 线上冒烟项目 | 本轮结果 |
|---|---|
| 首页 / Horizon | not_run：预检阻断；HTTP 状态与渲染证据 \`null\` |
| 稳定 Event / Asset / Disease / Search / About 深链 | not_run：预检阻断；HTTP 状态与渲染证据 \`null\` |
| 未知路径 404 | not_run：HTTP 状态与渲染证据 \`null\` |
| 页面 noindex,nofollow | not_run：未检查页面 robots；JSON noindex=true 不能替代页面证据 |
| preview-source.json | HTTP 200；integrationSha = PR HEAD = 本地 HEAD |
| 本轮部署 SHA | \`null\`（reason: 未部署；既有预览 SHA 一致不表示本轮部署或渲染通过） |

## 变化、原始失败、修复与复验

- 实际产品/数据变化：无；只新增今日本地审计并更新仓库外 automation memory。
- 原始失败：预先存在的两份策略文档与三份未提交历史审计造成脏工作树；既有阻断仍未解除。
- 修复/重试次数：0；未处理 Owner 文件，未调用后续门禁，未放宽停止条件。
- 复验：只读核对原五份文件哈希、分支、HEAD、PR CI、预览 JSON；没有阻断修复或门禁复验通过证据。
- 提交/推送/部署：均未执行；今日及此前三份未提交记录尚未进入 PR 或线上 About。
- 确定性报告变化：无；未重建报告。新 Event / Milestone / 疾病或状态修订审核材料：未评估，未构造。
- Owner 待办：处理两份策略文档及 2026-10-19、20、23 三份历史审计在当前集成工作树中的归属，恢复没有无关修改的状态；不要混入 Beta 提交。恢复后接续当天既有记录，保留原失败与复验，不重复计数。
- 后续成功闭环：依序完成输入、来源及全部门禁；About 会打包审计 markdown，提交前需重建并验证确定性报告。只允许在完全相同且 PR CI 全绿的 HEAD 部署独立预览，再运行 preview:smoke 并验证 SHA 与实际渲染。
- 边界：未合并或批准 PR，未部署生产，未改正式域名或索引，未发布/晋升 Candidate，未修改 Golden Events / Milestones 或发布状态，未纳入 Brand Phase 2。

## 结论依据

\`failed\`：真实触发在强制脏工作树预检停止；没有本轮输入、来源、13 项门禁或线上渲染通过证据。
既有 CI 为绿色和预览 SHA 一致不能替代这些结果。\`Beta Ready\` 为 \`No\`，
\`Production Released\` 为 \`No\`。累计 5/7 次真实运行，仅 1 次完整通过；继续顺延至七次，
不以日历日期或调度元数据代替真实次数。
`,f="# BuboPin News R4 Beta 试运行 — 2026-10-31\n\n## 执行元数据\n\n| 字段 | 值 |\n|---|---|\n| 真实运行序号 | 6 / 7（完整门禁通过） |\n| 结论 | `pass` |\n| 开始时间（Asia/Shanghai） | 2026-10-31T00:42:48+08:00（工作树只读预检开始） |\n| 结束时间（Asia/Shanghai） | 2026-10-31T00:46:16+08:00（线上只读核对取样时；提交/部署复验见下文） |\n| 工作分支 | `codex/bubopin-news-v1-integration` |\n| Baseline SHA | `b8340f5612b5c3be7fc50511e2ea6bd351b36368`（含 4 份试运行记录 + 2 份策略备忘录的两个 docs-only 提交） |\n| Current / committed SHA | 提交后由 `git log -1 --format=%H -- docs/beta-trial/runs/2026-10-31.md` 派生，不在文内硬编码 |\n| PR #6 HEAD / CI | OPEN / Draft；HEAD `b8340f5612b5c3be7fc50511e2ea6bd351b36368`；CI run `41091312262` verify completed / success |\n| Preview SHA | `b8340f5612b5c3be7fc50511e2ea6bd351b36368`；本轮部署后 `preview-source.json` 线上实测一致（buildDate 2026-10-31，noindex true） |\n\n预检：工作树干净（`git status --porcelain` 为空）、分支正确、PR HEAD 与本地 HEAD 一致、\n该 HEAD CI 全绿、独立预览 SHA 一致。此前阻断四轮的自指式脏工作树（4 份未提交试运行记录 +\n2 份策略备忘录）已于本轮开始前以两个独立 docs-only 提交（`c76f66d`、`b8340f5`）合规入库，\n未混入 Beta 数据/门禁变更。\n\n## 输入与计数\n\n| 项目 | 结果 |\n|---|---|\n| Canonical snapshot 数量 | 3（`data/imports/research/` 下 ckd / obesity / stroke 既有落盘快照） |\n| 本轮新增 snapshot | `null`（reason: 无新快照文件落盘；仅处理既有快照） |\n| Ingest report | 3 candidates（0 pending，0 already-published controls，3 approved，0 rejected）；5 个 future catalysts 供里程碑撰写 |\n| Candidate 状态计数 | Candidate Master 78 entries（31 pending，29 already-published controls） |\n| Source 状态计数（本轮 dry-run） | 35 reachable / 15 restricted / 1 unreachable（`src-raynovent-ray1225-20260608`）；脚本对 unreachable>0 返回退出码 1；未使用 `--write` |\n| 已发布事实唯一来源不可达检查 | 通过（`beta:check`：“公开事件不依赖不可达来源”） |\n| Event / Source / Milestone / Asset | 46 / 51 / 5 / 30（asOf 2026-10-15） |\n\n## 门禁\n\n| # | 门禁 | 首次结果 | 复验结果 | 证据/备注 |\n|---:|---|---|---|---|\n| 1 | `research:ingest` | pass | — | 3 快照，3 approved，0 拒绝；Candidate Master 78 entries |\n| 2 | `feed:build` | pass | — | golden + 来源校验通过，确定性生成 |\n| 3 | `feed:validate` | pass | — | fail-closed 发布门禁通过 |\n| 4 | `milestones:validate` | pass | — | 5 verified milestones，no errors |\n| 5 | `assets:build` | pass | — | 资产主数据构建 + 校验通过 |\n| 6 | `freshness:check` | pass | — | 时效报告与当前数据一致 |\n| 7 | `quality:report` | pass | — | 质量报告生成 |\n| 8 | `typecheck` | pass | — | `tsc --noEmit` 无错误 |\n| 9 | `test` | pass | — | 17 files / 136 tests 全过 |\n| 10 | `build` | pass | — | feed + assets + milestones + tsc + vite build + 静态入口 + beta 体验报告 |\n| 11 | `test:e2e` | pass | — | Playwright 28 passed / 2 skipped（桌面 + 移动端） |\n| 12 | `determinism:check` | pass | — | 确定性检查通过 |\n| 13 | `beta:check` | pass | — | 13/13（46 events / 51 sources，asOf 2026-10-15） |\n\n顺序偏差如实记录：`sources:check` dry-run（固定流程第 3 步）实际在门禁 13 之后执行。\n该步骤为只读巡逻、不使用 `--write`，不影响任何门禁输入与结果；结果：退出码 1\n（1 个 unreachable），分类计数如上。修复与重试次数：0。\n\n## 线上冒烟\n\n`npm run preview:smoke`（对本轮部署的独立预览）10/10 通过：\n\n| 项目 | 结果 |\n|---|---|\n| River / Horizon / Event / Asset / Disease / Search / About（含 Beta trial record） | 全部 status=200 且 rendered=true |\n| 未知路径 | 404 |\n| `noindex, nofollow` | 保留 |\n| `preview-source.json` | HTTP 200；integrationSha = `b8340f5…` = Baseline SHA = PR #6 HEAD；eventCount 46 / sourceCount 51 / milestoneCount 5 / assetCount 30；buildDate 2026-10-31；noindex true |\n\n## 变化、失败与处置\n\n- 实际数据/产品变化：无新快照、无新候选、无 Golden/发布状态变更。`data/releases/beta-experience-report.json` 因 About 审计 bundle 纳入 4 份新提交的试运行记录而确定性重建（About JS 16,055 → 51,201 bytes），属已提交输入的确定性输出，随本记录一并提交。\n- 原始失败：无（门禁 13/13 一次通过）。\n- 已知信号（非门禁失败）：`src-raynovent-ray1225-20260608` 本轮巡逻不可达；不承载任何已发布事实（beta:check 已验证），未伪报核验成功。\n- 复验：本记录提交后等待该 HEAD CI 全绿，再从完全相同 HEAD 重部署独立预览并复验 `preview-source.json` SHA 与实际渲染（固定流程第 6–7 步）。\n- Owner 待办：① 次日执行第 7 轮（累计 7 次后生成 final-report 与发布清单）；② PR #6 Mark Ready / 合并决策；③ 不可达来源是否需要内容流程处置。\n- 边界：未合并或批准 PR，未部署生产，未改正式域名或索引，未发布/晋升 Candidate，未修改 Golden Events / Milestones。\n\n## 结论依据\n\n工作树预检干净、13 项门禁首次全部通过、线上冒烟 10/10 且预览 SHA 与 PR HEAD 一致。\n累计 6/7 次真实运行，完整门禁通过为 2026-10-16 与本轮共 2 次；`Beta Ready` 在 Owner\n审阅 final-report 前仍为 `No`，`Production Released` 为 `No`。继续执行第 7 轮，不以本轮\n通过替代最终发布授权。\n",p='# BuboPin News R4 Beta 试运行 — 2026-11-01\n\n## 执行元数据\n\n| 字段 | 值 |\n|---|---|\n| 真实运行序号 | 7 / 7（完整门禁通过；R4 七次真实运行闭环） |\n| 结论 | `pass` |\n| 开始时间（Asia/Shanghai） | 2026-11-01T09:57:33+08:00（预检取样） |\n| 结束时间（Asia/Shanghai） | 2026-11-01T09:59 时段（门禁与线上冒烟完成；提交/部署复验见下文） |\n| 工作分支 | `codex/bubopin-news-v1-integration` |\n| Baseline SHA | `6f8661bc7f35807e632b093f9ce9ec2bec633f78`（第 6 轮记录的提交） |\n| Current / committed SHA | 提交后由 `git log -1 --format=%H -- docs/beta-trial/runs/2026-11-01.md` 派生，不在文内硬编码 |\n| PR #6 HEAD / CI | OPEN / Draft；HEAD `6f8661bc7f35807e632b093f9ce9ec2bec633f78`；该 HEAD CI（run `41093064867`）verify completed / success |\n| Preview SHA | `6f8661bc7f35807e632b093f9ce9ec2bec633f78`；本轮冒烟实测 `preview-source.json` 一致（buildDate 2026-10-31，noindex true） |\n\n预检：工作树干净、分支正确、PR HEAD 与本地 HEAD 一致、CI 全绿、独立预览 SHA 一致。\n\n## 输入与计数\n\n| 项目 | 结果 |\n|---|---|\n| Canonical snapshot 数量 | 3（ckd / obesity / stroke 既有落盘快照，无新快照） |\n| 本轮新增 snapshot | `null`（reason: 无新快照文件落盘） |\n| Ingest report | 3 candidates（0 pending，0 already-published controls，3 approved，0 rejected）；5 个 future catalysts |\n| Candidate 状态计数 | Candidate Master 78 entries（31 pending，29 already-published controls） |\n| Source 状态计数（本轮 dry-run） | 32 reachable / 18 restricted / 1 unreachable（`src-raynovent-ray1225-20260608`，与第 6 轮同一来源）；脚本对 unreachable>0 返回退出码 1；未使用 `--write` |\n| 已发布事实唯一来源不可达检查 | 通过（`beta:check`："公开事件不依赖不可达来源"） |\n| Event / Source / Milestone / Asset | 46 / 51 / 5 / 30（asOf 2026-10-15） |\n\n## 门禁\n\n| # | 门禁 | 首次结果 | 复验结果 | 证据/备注 |\n|---:|---|---|---|---|\n| 1 | `research:ingest` | pass | — | 3 快照，3 approved，0 拒绝 |\n| 2 | `feed:build` | pass | — | 确定性生成 |\n| 3 | `feed:validate` | pass | — | fail-closed 发布门禁通过 |\n| 4 | `milestones:validate` | pass | — | 5 verified milestones |\n| 5 | `assets:build` | pass | — | 资产主数据构建 + 校验通过 |\n| 6 | `freshness:check` | pass | — | 时效一致 |\n| 7 | `quality:report` | pass | — | 质量报告生成 |\n| 8 | `typecheck` | pass | — | 无错误 |\n| 9 | `test` | pass | — | 17 files / 136 tests 全过 |\n| 10 | `build` | pass | — | 全量构建 + 静态入口 + beta 体验报告 |\n| 11 | `test:e2e` | pass | — | Playwright 28 passed / 2 skipped（桌面 + 移动端） |\n| 12 | `determinism:check` | pass | — | 确定性通过 |\n| 13 | `beta:check` | pass | — | 13/13（46 events / 51 sources，asOf 2026-10-15） |\n\n本轮按固定顺序执行（ingest → sources dry-run → 13 门禁 → 冒烟），无顺序偏差。\n修复与重试次数：0。\n\n## 线上冒烟\n\n`npm run preview:smoke` 10/10 通过：River / Horizon / Event / Asset / Disease / Search / About（含 Beta trial record）全部 200 且 rendered；未知路径 404；`noindex, nofollow` 保留；`preview-source.json` integrationSha = Baseline SHA = PR #6 HEAD，46/51/5/30，noindex true。\n\n## 变化、失败与处置\n\n- 实际数据/产品变化：无新快照、无新候选、无 Golden/发布状态变更。`data/releases/beta-experience-report.json` 确定性重建（构建日期推进至 2026-11-01），随本记录一并提交。\n- 原始失败：无（13/13 一次通过）。\n- 已知信号（非门禁失败）：`src-raynovent-ray1225-20260608` 连续两轮巡逻不可达，不承载已发布事实；建议 Owner 决定是否在内容流程中处置（更换来源或标注退役）。\n- Owner 待办：① 审阅 `final-report.md` 后决定 PR #6 Mark Ready / 合并；② 不可达来源处置；③ `Beta Ready` / `Production Released` 的发布授权（当前均为 `No`）。\n- 边界：未合并或批准 PR，未部署生产，未改正式域名或索引，未发布/晋升 Candidate，未修改 Golden Events / Milestones。\n\n## 结论依据\n\n预检干净、13 项门禁首次全部通过、冒烟 10/10 且 SHA 一致。R4 七次真实运行闭环：10-16、10-31、11-01 三次完整通过；10-19、10-20、10-23、10-26 四次 failed（同一脏工作树根因，已由 `c76f66d`/`b8340f5` 修复并如实保留原始记录）。七次真实运行完成，按规则生成 `final-report.md` 与 `beta-release-checklist.md`。`Beta Ready` 与 `Production Released` 的最终声明以 Owner 审阅 final-report 后的授权为准。\n',m={pass:`通过`,pass_after_remediation:`修复后通过`,failed:`失败`,missed:`遗漏（不计入真实运行）`};function h(e,...t){for(let n of t){let t=e.split(`
`).map(e=>e.split(`|`).map(e=>e.trim())).reverse().find(e=>e[1]===n);if(t?.[2])return t[2].replace(/[`*]/g,``)}return null}function g(e,t=``){let n=Object.entries(e).flatMap(([e,t])=>{let n=e.match(/\/(\d{4}-\d{2}-\d{2})\.md$/)?.[1],r=h(t,`结论`);if(!n||!r||!Object.prototype.hasOwnProperty.call(m,r))return[];let i=t.split(`
`).filter(e=>/^\|\s*\d+\s*\|/.test(e));return[{date:n,outcome:r,markdown:t,passedGates:i.filter(e=>{let t=e.split(`|`).map(e=>e.trim().replace(/`/g,``));return t[4]===`pass`||t[3]===`pass`&&[`—`,``,`pass`].includes(t[4])}).length,totalGates:i.length}]}).sort((e,t)=>e.date.localeCompare(t.date)),r=n.filter(e=>e.outcome!==`missed`),i=n[n.length-1]??null,a=r.length>=7&&i!==null&&[`pass`,`pass_after_remediation`].includes(i.outcome)&&i.totalGates===13&&i.passedGates===13&&h(t,`Beta Ready`)===`Yes`;return{runs:n,realRunCount:r.length,latest:i,betaReady:a}}var _=t(),v=g(Object.assign({"/docs/beta-trial/runs/2026-10-16.md":s,"/docs/beta-trial/runs/2026-10-19.md":c,"/docs/beta-trial/runs/2026-10-20.md":l,"/docs/beta-trial/runs/2026-10-23.md":u,"/docs/beta-trial/runs/2026-10-26.md":d,"/docs/beta-trial/runs/2026-10-31.md":f,"/docs/beta-trial/runs/2026-11-01.md":p}),Object.values(Object.assign({}))[0]);function y(){let e=v.latest;if(!e)return null;let t=[[`最近同日复核`,h(e.markdown,`最近同日复核（Asia/Shanghai）`)],[`来源检查`,h(e.markdown,`Source dry-run 最终计数`,`Source 状态计数`)],[`候选审核`,h(e.markdown,`Candidate 状态计数`)],[`事件 / 来源 / 里程碑 / 项目`,h(e.markdown,`Event / Source / Milestone / Asset`)],[`新增快照`,h(e.markdown,`本轮新增 snapshot`)]].filter(e=>e[1]!==null);return(0,_.jsx)(`div`,{id:`beta-trial`,children:(0,_.jsxs)(r,{title:`Beta 试运行记录`,description:`按真实执行计数；同日复核不重复计数，调度遗漏不计入七次。`,children:[(0,_.jsxs)(`p`,{className:`text-label font-semibold text-text-primary`,children:[`累计 `,v.realRunCount,` / 7 次真实运行`]}),(0,_.jsxs)(`p`,{className:`mt-md text-label-sm text-text-primary`,children:[`最新记录 `,e.date,` · `,m[e.outcome],e.totalGates>0?` · 本轮门禁 ${e.passedGates} / ${e.totalGates} 通过`:``]}),(0,_.jsx)(`dl`,{className:`mt-lg flex flex-col gap-md text-label-sm`,children:t.map(([e,t])=>(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`dt`,{className:`font-semibold text-text-primary`,children:e}),(0,_.jsx)(`dd`,{className:`mt-xs break-words text-text-secondary`,children:t})]},e))}),(0,_.jsxs)(`p`,{className:`mt-lg text-label-sm text-text-secondary`,children:[`Beta Ready：`,v.betaReady?`Yes`:`No`,`；Production Released：No。 七次真实运行完成后，依据最终报告判断 Beta 是否就绪。`]}),(0,_.jsx)(`p`,{className:`mt-md text-label-sm text-text-secondary`,children:`以上为最近审计记录的结果；候选待审核、没有新快照或新增里程碑本身不构成失败。`}),(0,_.jsx)(`a`,{className:`bubo-news-textlink mt-lg inline-block`,href:`https://github.com/luckygood/DiseasePulse/blob/codex/bubopin-news-v1-integration/docs/beta-trial/runs/${e.date}.md`,target:`_blank`,rel:`noreferrer`,children:`查看完整审计记录（GitHub） ↗`})]})})}var b={"verified-no-new":`已核验 · 覆盖窗口内无新增事件`,"pending-verification":`已接入 · 增量待核验`,"unknown-coverage":`覆盖未知 · 未接入 Tracker 核验`,"not-covered":`未覆盖`};function x(){return(0,_.jsxs)(`div`,{className:`mx-auto max-w-reading`,children:[(0,_.jsx)(n,{title:`关于 BuboPin News`,description:`面向公众、无需注册的极简信息流、研发日历与项目时间轴。`}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-xl`,children:[(0,_.jsx)(i,{}),(0,_.jsx)(y,{}),(0,_.jsxs)(r,{title:`产品定位`,children:[(0,_.jsx)(`p`,{className:`text-label text-text-primary`,children:`BuboPin News 将分散的企业公告、临床试验、监管与学术增量整理为可按疾病浏览、可回溯来源的极简信息流。`}),(0,_.jsx)(`p`,{className:`mt-lg text-label-sm text-text-secondary`,children:`原型优先验证“快速发现 → 理解变化 → 核对证据”，不提供临床决策、投资建议或 AI 问答。`})]}),(0,_.jsxs)(r,{title:`当前覆盖`,children:[(0,_.jsx)(`div`,{className:`flex flex-wrap gap-md`,children:o.map(t=>(0,_.jsx)(e,{label:t.nameZh,variant:`secondary`},t.id))}),(0,_.jsx)(`p`,{className:`mt-lg text-label-sm text-text-secondary`,children:`当前 MVP 覆盖 2026 年 CKD、IgA 肾病、肥胖与交叉心血管风险事件。未收录不等于没有研发活动。`})]}),(0,_.jsx)(r,{title:`数据时效`,children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-lg text-label-sm text-text-primary`,children:[(0,_.jsxs)(`p`,{children:[`最近事件披露 `,a.latestEventDate??`—`,` · 最近事实核验 `,a.latestVerifiedAt??`—`,` · 最近来源巡检 `,a.latestSourceCheckedAt??`—`,` · 发布截止 `,a.asOf]}),(0,_.jsx)(`ul`,{className:`flex list-disc flex-col gap-sm pl-xl text-label-sm text-text-secondary`,children:a.diseases.map(e=>(0,_.jsxs)(`li`,{children:[e.nameZh,`：`,b[e.state],`（`,e.eventCount,` 条，最新披露 `,e.latestEventDate??`—`,`，Tracker 核验至 `,e.trackerCoverageThrough??`—`,`）`,e.pendingWindow?`；待核验窗口 ${e.pendingWindow.from??`覆盖起点未知`} → ${e.pendingWindow.to}`:``]},e.id))}),(0,_.jsx)(`p`,{className:`text-label-sm text-text-secondary`,children:a.pendingVerificationWindow?`${a.pendingVerificationWindow.from??`未知起始日期`} 至 ${a.pendingVerificationWindow.to} 之间的新增披露处于待核验窗口；未通过独立核验前不会发布。`:`最新已发布事件已达到数据截止日，当前没有顶层待核验间隙。`})]})}),(0,_.jsx)(r,{title:`收录方法`,children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-lg text-label-sm text-text-primary`,children:[(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`strong`,{className:`font-semibold`,children:`事件优先：`}),`同一临床事实可对应多篇来源，但保留一个主事件并连接后续更新。`]}),(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`strong`,{className:`font-semibold`,children:`事实与解读分离：`}),`“发生了什么”只写来源支持的事实，“为什么重要”明确标注为研究解读。`]}),(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`strong`,{className:`font-semibold`,children:`负面事件同等可见：`}),`失败、暂停、安全观察和拒批不会因结果不积极而被隐藏。`]}),(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`strong`,{className:`font-semibold`,children:`Fail Closed：`}),`关键字段冲突、数字无法定位或来源失效时，不自动生成新的医学结论。`]})]})}),(0,_.jsx)(r,{title:`重要度与证据等级`,children:(0,_.jsxs)(`div`,{className:`grid gap-xl sm:grid-cols-2`,children:[(0,_.jsxs)(`div`,{className:`rounded-corner-md bg-bg-faint p-lg`,children:[(0,_.jsx)(`p`,{className:`text-label font-semibold text-text-primary`,children:`重要度`}),(0,_.jsx)(`p`,{className:`mt-md text-label-sm text-text-secondary`,children:`A：关键后期结果、重大监管、安全或交易事件。B：有实质增量的中期数据、状态变化与早期人体信号。`})]}),(0,_.jsxs)(`div`,{className:`rounded-corner-md bg-bg-faint p-lg`,children:[(0,_.jsx)(`p`,{className:`text-label font-semibold text-text-primary`,children:`证据等级`}),(0,_.jsx)(`p`,{className:`mt-md text-label-sm text-text-secondary`,children:`E1：正式原始记录；E2：企业公告或会议披露；E3：可信二级来源。等级不等同于事件重要度。`})]})]})}),(0,_.jsx)(r,{title:`纠错原则`,children:(0,_.jsx)(`p`,{className:`text-label-sm text-text-primary`,children:`修订不会伪装成新事件。日期、关系或事实发生重大修改时，详情页保留“修改了什么、为什么修改”的可见记录；来源失效时继续展示最后一次已核验版本并标明状态。`})}),(0,_.jsx)(r,{title:`使用声明`,children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-md text-label-sm text-text-secondary`,children:[(0,_.jsx)(`p`,{children:`免费阅读，无广告、无付费墙，不强迫注册。`}),(0,_.jsx)(`p`,{children:`不收集用户健康信息，不提供个体医疗建议。`}),(0,_.jsx)(`p`,{children:`当前页面为 noindex 预览，使用独立核验的真实事件并连接公开原始来源。`}),(0,_.jsx)(`p`,{children:`事件在来源缺失、事实冲突或日期未来时会被发布门禁阻断。`})]})})]})]})}export{x as default};